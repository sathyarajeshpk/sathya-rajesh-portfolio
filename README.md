# Sathya Rajesh PK — consulting site

Next.js 14 (App Router) · TypeScript · Tailwind · Supabase · Resend

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
  ui/field.tsx           Form controls (Input, Textarea, Select, Field)
  theme-provider.tsx     Light/dark state
  theme-toggle.tsx

lib/
  prefill.ts             Event that makes a "discuss this" button fill the contact form
  utils.ts               cn() class merger

supabase/schema.sql
```

### Styling

Deliberately plain: one column, ordinary headings, no scroll animations, no icon set.
There is no component library and no design-system layer to learn — sections are just
markup.

Colour lives in **CSS custom properties** in `app/globals.css` (`--bg`, `--fg`, `--border`,
`--link`, `--shade`), redefined once under `.dark`. Components reference the variables
rather than carrying a parallel set of `dark:` classes — that is why the form controls
theme correctly without duplicated styling.

**Type is Comic Sans throughout.** Comic Sans MS ships on Windows and macOS; Comic Neue is
loaded via `next/font/google` so Linux and Android visitors see the same thing instead of
an arbitrary fallback. There is no second typeface.

One caveat worth knowing before you edit the project diagrams: SVGs referenced through
`<img>` (which is what `next/image` produces) are isolated documents and **cannot use the
page's webfont**. The figures therefore fall back to a system sans wherever Comic Sans MS
is not installed locally. Inlining them as JSX would fix that, and would also let them
follow dark mode, which they currently do not — they stay light plates in both themes.

`framer-motion` and `lucide-react` were removed once nothing used them, which took
first-load JS on `/` from 147 kB to 104 kB. Please don't reintroduce an animation library
for a page this size.

---

## Making changes

**Text and content** live in arrays at the top of each section file — `groups` in
`Services.tsx` and `Skills.tsx`, `projects` in `Projects.tsx`, `jobs` in `Experience.tsx`,
`faqs` in `FAQs.tsx`. Add or edit an object and the layout follows.

**Adding a service**: add the string to the relevant `groups[].items` array in
`Services.tsx` *and* to the `services` array in `Contact.tsx`, so the prefill matches an
option in the form's dropdown.

**Colours**: edit the CSS variables in `app/globals.css`. The Tailwind config only
declares the font stack.

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
  Named, attributable quotes are far more persuasive if you can get permission for them.
- **Numbers inside the project diagrams** are illustrative, chosen so the figures read.
  Swap them for real ones or make them generic.
- **Blog posts** in `Blog.tsx` are summaries, not published articles. If you write the full
  versions, link out to them.
- **Attachments**: the contact form asks people to email large files rather than uploading
  them. If you want real uploads, wire a Supabase Storage bucket and populate the
  `attachment_url` column, which already exists in the schema.
