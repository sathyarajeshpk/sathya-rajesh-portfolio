# Repository Review — Findings & Resolution

Original review at `e07f908`. This file tracks what was found and what has since been fixed.

**Verification:** `npx tsc --noEmit` clean · `npm run lint` clean · `next build` succeeds
(147 kB first-load JS on `/`, down from 156 kB) · automated layout audit passes across
5 viewports × 2 themes.

---

## Fixed

### 1. The contact form silently discarded enquiries — **fixed**
`app/api/contact/route.ts` returned `{ success: true }` on three paths where nothing was
persisted: no Supabase env vars, no `RESEND_API_KEY`, and a Resend call that threw or
returned a non-2xx (the response status was never checked). The visitor saw
"Message Sent!" regardless.

Now: the route tracks whether each sink was *configured* and whether it *succeeded*, and
returns **502** unless at least one actually took the enquiry. `response.ok` is checked and
the failure is logged with status and body. Verified by driving every path with curl —
including a deliberately invalid Resend key, which now returns 502 instead of a false success.

### 2. The attachment field did nothing — **fixed**
The form promised "Upload RFP, architecture diagrams (Max 10MB)" but the file was never
read and `attachment_url` was hardcoded to `null`. The input is gone; the description field
now carries a hint asking people to email large files. The `attachment_url` column remains
in the schema for whenever Supabase Storage gets wired up.

### 3. Unescaped input in the notification email — **fixed**
All eight fields interpolated raw into the Resend HTML body. Every value now passes through
`escapeHtml()`, and `reply_to` is set to the sender so replies go to the right place.

### 4. No validation, size limits, or type checking — **fixed**
Per-field length caps, type coercion that rejects non-strings (a non-string `description`
used to throw and surface as a 500), email-format validation, and generic messages on
database errors instead of Supabase's `error.message` verbatim.

**Still open:** no rate limiting, honeypot, or captcha on the endpoint. Worth adding before
the domain gets any traffic.

### 5. Analytics placeholders shipped live — **fixed**
`G-XXXXXXXXXX` and `YOUR_CLARITY_ID` fired real requests on every page load. Both are now
read from `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` and the scripts are only rendered
when set, via `next/script` with `strategy="afterInteractive"`.

### 6. Form controls had no dark-mode styling — **fixed**
`input/textarea/select` hardcoded `bg-white … text-slate-900` inside a `dark:bg-slate-900`
card, so the whole form rendered as white boxes in dark mode. Controls now read CSS custom
properties (`--fg`, `--rule-strong`, `--accent`), so both themes follow from one definition.

### 7. Accessibility gaps — **fixed**
Ten unassociated `<label>` elements now have `htmlFor`/`id` pairs via a `Field` wrapper.
FAQ buttons carry `aria-expanded`/`aria-controls`; the blog modal has `role="dialog"`,
`aria-modal`, Escape handling, focus management, and body-scroll lock; the mobile nav has
`aria-expanded`/`aria-controls`, Escape, and scroll lock. A skip link was added, plus a
global `prefers-reduced-motion` block and visible focus rings.

### 8. Theme flash on first paint — **fixed**
The theme was applied in `useEffect` after hydration. A blocking inline script in `<head>`
now resolves it before first paint; the provider reads the already-applied class.

### 9. `h-18` was not a real Tailwind class — **fixed**
Confirmed absent from the compiled CSS, so the navbar height came from `py-4` alone. Header
height is now a `--nav-h` custom property used by both the header and `scroll-margin-top`.

### 10. SEO/metadata gaps — **fixed**
Added `app/icon.svg`, a generated `app/opengraph-image.tsx` (1200×630), `metadataBase`, a
canonical alternate, and `viewport.themeColor`. Fonts moved from a render-blocking
`@import` to self-hosted `next/font/google`.

### 11. `tsconfig.tsbuildinfo` committed — **fixed**
Removed from the index; `*.tsbuildinfo` added to `.gitignore`.

### 12. `npm run lint` was unusable — **fixed**
No ESLint config meant `next lint` dropped into an interactive prompt and hung. Added
`.eslintrc.json` (`next/core-web-vitals`) and the `eslint` / `eslint-config-next`
devDependencies. Runs clean.

### 14. `supabase/schema.sql` was not re-runnable — **fixed**
`CREATE INDEX IF NOT EXISTS` and a `DROP POLICY IF EXISTS` guard. The unused public-insert
policy is dropped: the API writes with the service-role key, which bypasses RLS, so no
browser-reachable policy is needed.

### 15. `next.config.js` disabled image optimization — **fixed**
`images.unoptimized` and `trailingSlash` removed. This deploys as a server app (the contact
form is an API route), so the Vercel optimizer is available.

### 16. Documentation drift — **fixed**
`README.md` rewritten against the current code. Added `.env.example` documenting every
variable, which of them the contact form requires, and the 502 behaviour.

---

## Also fixed: the reported text overlap

Section headings were rendering **through** the navbar. Two causes:

1. The header was `bg-white/80` with `backdrop-blur-xl` — 80% opacity let dark heading text
   read straight through it. Reproduced at three separate scroll positions.
2. Clicking a nav link scrolled the target section under the fixed header, because no
   `scroll-margin-top` accounted for its height.

The header is now fully opaque once scrolled (transparent only over the hero, where nothing
sits behind it), and every `section[id]` gets `scroll-margin-top: var(--nav-h)`.

An automated audit (`prefers-reduced-motion`-independent, 5 viewports × light/dark) now
asserts: no horizontal overflow, no section heading landing under the header after an
anchor jump, an opaque scrolled header, and no pairwise text-element overlap. It passes.

---

## Open items — your call

### 13. No CI, no tests
Still no `.github/` directory. A workflow running `tsc --noEmit`, `next lint`, and
`next build` on push would have caught items 9 and 12 and protects the Vercel deploy.

### 17. Testimonial and blog content
- `Testimonials.tsx` quotes are attributed by role and organisation type only, with no
  names. If these are placeholders, replace them; if real, consider getting permission for
  attributed versions, which are far more persuasive.
- `Blog.tsx` items are summaries with a modal preview, not published articles. The button
  now says "Read the summary" rather than "Read Article", which is accurate, but linking to
  real posts would be better.

### 18. Illustrative numbers in the project figures
The five project SVGs were dark-navy/neon placeholder art left over from the old theme and
clashed with the new palette, so they were redrawn as technical figures (star schema, log
clustering, small multiples). The numbers inside them — 78% confidence, 2,410 applicants,
8.2% attrition — are **illustrative**, chosen to make the diagrams read. Swap them for real
figures or keep them generic, but know they are there.

### Rate limiting
See item 4. The contact endpoint is publicly reachable with no abuse protection.
