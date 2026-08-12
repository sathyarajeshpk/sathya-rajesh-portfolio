# Sathya Rajesh PK — consulting site

Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · Supabase · Resend

A single-page consulting site with a working enquiry pipeline. Deployed on Vercel as a
server app — it is **not** a static export, because `/api/contact` needs a server.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you need — see "Environment" below
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run lint    # ESLint (next/core-web-vitals)
npx tsc --noEmit
```

---

## Environment

Every variable is listed with notes in [`.env.example`](.env.example). Set the same names in
**Vercel → Project → Settings → Environment Variables** for production.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | For DB storage | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | For DB storage | Server-only. Never expose to the browser. |
| `RESEND_API_KEY` | For email | Sends the enquiry notification |
| `CONTACT_TO_EMAIL` | No | Defaults to `sathyarajeshpk@gmail.com` |
| `CONTACT_FROM_EMAIL` | No | Must be a Resend-verified domain in production |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for sitemap, robots, OpenGraph |
| `NEXT_PUBLIC_GA_ID` | No | GA4 script is injected only when set |
| `NEXT_PUBLIC_CLARITY_ID` | No | Clarity script is injected only when set |

**The contact form needs at least one of Supabase or Resend configured.** With neither,
`POST /api/contact` returns **502** and the visitor is told to email directly. It does not
report success for an enquiry that went nowhere — that behaviour was the point of the
rewrite, so please don't "simplify" it back.

### Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. SQL Editor → New Query → paste [`supabase/schema.sql`](supabase/schema.sql) → Run.
   The script is idempotent, so re-running it is safe.
3. Project Settings → API → copy the **Project URL** and the **`service_role` key**.
4. Add both as environment variables.

Submissions land in the `contacts` table (Table Editor → `contacts`, exportable as CSV).
RLS is enabled with no permissive policy: the API route writes with the service-role key,
which bypasses RLS, and nothing in the browser can touch the table.

### Resend setup

1. Create an account at [resend.com](https://resend.com), generate an API key.
2. For real use, verify your sending domain and set `CONTACT_FROM_EMAIL` to an address on it.
   The default `onboarding@resend.dev` is Resend's sandbox sender and only delivers to
   the email address on your own Resend account.

---

## Architecture

```
app/
  api/contact/route.ts   Enquiry endpoint: validate → Supabase + Resend → 200/400/502
  layout.tsx             Fonts, metadata, no-flash theme script, gated analytics
  page.tsx               Section composition
  icon.svg               Favicon
  opengraph-image.tsx    Generated 1200×630 social card
  globals.css            Design tokens (CSS variables) + base + utilities
  robots.ts, sitemap.ts

components/
  sections/              One file per page section
  site/
    Reveal.tsx           The single scroll-reveal used site-wide
    SectionHeader.tsx    The asymmetric section masthead
  ui/field.tsx           Form controls (Input, Textarea, Select, Field)
  theme-provider.tsx     Light/dark state
  theme-toggle.tsx

lib/
  prefill.ts             Event that makes a "discuss this" button fill the contact form
  utils.ts               cn() class merger

supabase/schema.sql
```

### Design system

Colour lives in **CSS custom properties** in `app/globals.css` (`--bg`, `--fg`, `--rule`,
`--accent`, …), redefined once under `.dark`. Components reference the variables rather
than carrying a parallel set of `dark:` classes — that is why the form controls theme
correctly without duplicated styling.

- **Type**: Manrope, and nothing else. One variable family across display headings, body
  copy, the small uppercase labels and the project figures. Hierarchy comes from weight
  (400 body, 600 labels, 700–800 headings) and scale, not from mixing families. Please
  keep it that way — mixing a display serif with a body sans and a mono is what made an
  earlier version look unresolved. `font-serif` and `font-mono` are aliased to the same
  family in `tailwind.config.ts` so a stray class cannot reintroduce a second face.
- **Accent**: one petrol tone for rules, numerals, links and focus rings. Not a gradient.
- **Motion**: one `Reveal` component. It degrades to a plain fade under
  `prefers-reduced-motion`.

Manrope has no true italic, so emphasis is carried by the accent colour rather than a
synthesised oblique.

`color-scheme` is declared on `:root` and `.dark`, and `select option` gets an explicit
background and colour. Both are load-bearing: without them the OS draws the native
dropdown popup light while the option text inherits our light-on-dark colour, which made
the service list unreadable in dark mode.

---

## Making changes

**Text and content** live in arrays at the top of each section file — `services` in
`Services.tsx`, `projects` in `Projects.tsx`, `experiences` in `Experience.tsx`, and so on.
Add or edit an object and the layout follows.

**The services section is written for the buyer, not the implementer.** Each entry leads
with the problem in the customer's own words and what they end up with; `tools` is the
secondary line for whoever evaluates the technical side. Keep new entries in that order —
leading with product names is what made the earlier version unreadable to non-technical
visitors.

**Adding a service**: every string in a `services[].engagements` array must also exist in
the `services` array in `Contact.tsx`. If it does not, the "Talk about this" button sets a
value the dropdown has no option for and the prefill silently does nothing.

**Colours**: edit the CSS variables in `app/globals.css`. The Tailwind config only holds
the font stack and the display type scale.

**Photo**: replace `public/images/hero-photo.png` (keep the filename).
**Résumé**: replace `public/resume/SathyaRajesh_Resume.pdf`.

---

## Deploying

Push to GitHub, import the repo at [vercel.com](https://vercel.com), add the environment
variables, deploy. Every subsequent push auto-deploys.

Do **not** add `output: 'export'` to `next.config.js`. It would turn off the server and
break the contact form.

---

## Known gaps

- **Testimonials** in `Testimonials.tsx` are attributed by role and organisation type only.
  Replace with named, attributable quotes when you have permission to use them.
- **Blog posts** in `Blog.tsx` are summaries with a modal preview, not full articles. If you
  publish the real pieces, link out instead of opening the modal.
- **Attachments**: the contact form asks people to email large files rather than uploading
  them. If you want real uploads, wire a Supabase Storage bucket and populate the
  `attachment_url` column, which already exists in the schema.
