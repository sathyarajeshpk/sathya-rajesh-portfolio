# Repository Review — Findings

Reviewed at commit `e07f908` on `claude/repo-findings-dy8vn0`.
Verified by reading every source file, running `npx tsc --noEmit`, `npm run build`, and `npm run lint`.

**Baseline health:** `next build` succeeds cleanly (7 routes, 156 kB first-load JS on `/`), and TypeScript passes with `strict: true`. The issues below are correctness, delivery, and polish gaps — not build breakage.

---

## 1. Critical — the contact form can silently discard enquiries

`app/api/contact/route.ts` returns `{ success: true }` on three paths where nothing was actually persisted or sent:

- Neither `NEXT_PUBLIC_SUPABASE_URL` nor `SUPABASE_SERVICE_ROLE_KEY` set → logs a `console.warn` and returns 200.
- `RESEND_API_KEY` unset → email block skipped entirely, returns 200.
- Resend request throws or returns a non-2xx status → caught, logged as "non-critical", returns 200. The `fetch` response status is never checked, so a rejected/quota-exceeded Resend call looks identical to a delivered email.

The user sees "Message Sent! … I'll get back to you within 24 hours" in `components/sections/Contact.tsx` regardless. For a lead-generation site this is the highest-impact defect: a missing or rotated env var loses business enquiries with no visible signal anywhere.

**Fix:** fail with a 5xx (or a distinct client message) when no sink is configured, and check `response.ok` on the Resend call. At minimum, treat "zero successful sinks" as an error.

## 2. High — the attachment field is decorative

`components/sections/Contact.tsx` renders a file input (`name="attachment"`) with the copy *"Upload RFP, architecture diagrams, or reference materials (Max 10MB)"*, but `handleSubmit` builds a plain JSON object from named text fields only — the file is never read, never uploaded, and the API hardcodes `attachment_url: null`. There is no 10MB check either. Prospects will attach an RFP and believe it was sent.

**Fix:** either wire it to Supabase Storage (upload first, pass the URL) or remove the field and its copy.

## 3. High — unescaped user input in the notification email

The Resend HTML body interpolates `body.name`, `body.email`, `body.company`, `body.phone`, `body.service`, `body.budget`, `body.timeline`, and `body.description` directly into markup, and `body.service` / `body.name` into the subject line. A submitter can inject arbitrary HTML — links, tracking pixels, spoofed content — into an email delivered to the site owner's inbox.

**Fix:** HTML-escape every interpolated value before building the template.

## 4. High — no input validation, rate limiting, or size limits on a public endpoint

The route checks presence only (`!body.name || !body.email || …`). There is:

- No type check — a non-string `description` makes `body.description.replace(...)` throw, which the catch block converts into a 500 with the raw error message.
- No email-format validation (`"x"` passes).
- No length cap — arbitrarily large strings go straight into Postgres.
- No rate limit, honeypot, or captcha on a publicly reachable POST endpoint.

Also, Supabase's `error.message` is returned verbatim to the client, leaking schema/constraint details.

**Fix:** validate with a schema (zod or hand-rolled), cap field lengths, return a generic message on DB errors, and add basic abuse protection.

## 5. Medium — analytics placeholders are live in production

`app/layout.tsx` ships real script tags with unreplaced placeholders: `G-XXXXXXXXXX` for GA4 and `YOUR_CLARITY_ID` for Clarity. Every page load fires a request to `googletagmanager.com` with an invalid measurement ID and injects the Clarity loader pointing at a literal placeholder — cost with no data. They are also raw `<script>` tags rather than `next/script`, so they aren't strategy-managed.

**Fix:** move the IDs to env vars and render the blocks only when set, via `next/script` with `strategy="afterInteractive"`.

## 6. Medium — form controls have no dark-mode styling

`components/ui/input.tsx`, `textarea.tsx`, and `select.tsx` hardcode `bg-white border-slate-200 text-slate-900 ring-offset-white` with no `dark:` variants, while the enclosing form card is `dark:bg-slate-900`. In dark mode the entire contact form renders as white boxes on a near-black card — the one place on the site where the theme visibly breaks.

## 7. Medium — accessibility gaps in the contact form and accordions

- Zero `htmlFor`/`id` pairs in `Contact.tsx` — all ten `<label>` elements are unassociated, so screen readers announce unlabeled fields and label clicks don't focus inputs.
- The FAQ accordion buttons (`FAQs.tsx`) lack `aria-expanded` and `aria-controls`.
- The Blog modal (`Blog.tsx`) has no Escape handler, no focus trap, no `role="dialog"`/`aria-modal`, and doesn't lock body scroll.
- The mobile nav drawer (`Navbar.tsx`) also doesn't lock body scroll or trap focus, and the hamburger has no `aria-label`/`aria-expanded`.

## 8. Medium — theme flash on first paint

`components/theme-provider.tsx` reads `localStorage` and applies the `dark` class inside `useEffect`, i.e. after hydration. Dark-mode users get a flash of the light theme on every load. The standard fix is a small blocking inline script in `<head>` that sets the class before first paint.

## 9. Low — `h-18` is not a real Tailwind utility

`components/sections/Navbar.tsx:44` uses `h-18` on the header row. Tailwind's default spacing scale jumps 16 → 20, and `tailwind.config.ts` doesn't extend it — confirmed absent from the compiled CSS. The class is a no-op, so the navbar height comes from `py-4` alone. Given the recent "Changed header" / "Fixed overlap" commits, this looks like the intended fix that never took effect. Use `h-20` or add `18: '4.5rem'` to `theme.extend.spacing`.

## 10. Low — SEO/metadata gaps

- No favicon or app icon anywhere (`app/icon.*`, `app/favicon.ico`, `public/favicon.ico` all absent) → browsers 404 and show a blank tab icon.
- `twitter.card` is `summary_large_image` but no image is supplied, and `openGraph` has no `images` entry — social shares render bare.
- No `metadataBase` in the `metadata` export, so any relative OG/Twitter image URL added later won't resolve.
- Fonts load via `@import url("https://fonts.googleapis.com/…")` in `globals.css` — the slowest option (render-blocking, discovered only after CSS parse). `next/font/google` would self-host and eliminate the extra round trip plus the layout shift.

## 11. Low — build artifact committed to git

`tsconfig.tsbuildinfo` (91 KB) is tracked and is not in `.gitignore`. Running `npm run build` dirties the working tree immediately — confirmed during this review. Remove it from the index and add it to `.gitignore`.

## 12. Low — `npm run lint` is unusable

There is no ESLint config in the repo, so `next lint` drops into an interactive setup prompt ("How would you like to configure ESLint?") and hangs. It cannot run in CI or non-interactively. Add `.eslintrc.json` with `{ "extends": "next/core-web-vitals" }`.

## 13. Low — no CI, no tests

No `.github/` directory, no workflows, no test setup. A single workflow running `tsc --noEmit` and `next build` on push would have caught items 9 and 12 and protects the Vercel deploy.

## 14. Low — `supabase/schema.sql` is not re-runnable

The table uses `CREATE TABLE IF NOT EXISTS`, but `CREATE POLICY` and the two `CREATE INDEX` statements do not guard against existing objects, so re-running the script errors out. Use `CREATE INDEX IF NOT EXISTS` and `DROP POLICY IF EXISTS` first.

Separately, the `"Allow public insert"` RLS policy is dead code as written: the API authenticates with the service-role key, which bypasses RLS entirely. Harmless, but it implies a client-side insert path that doesn't exist.

## 15. Low — `next.config.js` disables image optimization unnecessarily

`images: { unoptimized: true }` is the setting you need for a static export, but this project has a server-rendered API route (`ƒ /api/contact` in the build output) and the README explicitly recommends Vercel over static hosting. On Vercel this just forfeits automatic resizing/WebP for `hero-photo.png` and the project/blog images. The README's troubleshooting section still suggests adding `output: 'export'`, which would break the contact form outright — worth removing that advice.

## 16. Documentation drift in `README.md`

Several sections describe code that no longer exists:

- *"Your contact form currently logs submissions to the console"* and *"In `app/api/contact/route.ts`, uncomment the Supabase code block"* — the Supabase path is live and env-gated, nothing is commented out.
- The "Add a New Project" / "Add a New Blog Post" recipes list `icon` and `gradient` fields; the actual arrays now use `image`, `service`, `insight`, and `bullets`.
- "Dark mode toggle | 1 hour | Add theme provider + toggle button" is in the *Future Enhancements* table, but dark mode already shipped.
- Troubleshooting recommends `output: 'export'` (see item 15).

## 17. Content risk — mocked testimonials and blog posts are presented as real

`Testimonials.tsx` carries three anonymized quotes ("Head of Data Platforms, Regional Financial Services Group") each with a hardcoded 5-star rating, under the heading "What Clients Say". `Blog.tsx` carries three dated posts whose "Read Article" buttons open a modal preview rather than an article — there is no underlying post. The README correctly labels both as mocked, but the live site does not. For a consulting site trading on credibility, these are worth replacing with attributed testimonials and real articles (or removing) before promoting the domain.

---

## Suggested order of work

1. Items 1–4 (contact pipeline: silent failure, attachment, escaping, validation) — these affect revenue and inbox safety.
2. Item 5 (analytics placeholders) and item 6 (dark-mode form) — small diffs, immediately visible.
3. Items 7–8 (accessibility, theme flash).
4. Items 9–15 (hygiene: `h-18`, favicon/OG, `.gitignore`, ESLint, CI, SQL, image config).
5. Items 16–17 (docs and content).
