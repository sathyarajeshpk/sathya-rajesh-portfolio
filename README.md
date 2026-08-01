# Sathya Rajesh PK — Premium Consulting Website
## Complete Deployment Playbook

---

## Table of Contents
1. [What You Just Downloaded](#what-you-just-downloaded)
2. [Quick Start (5 Minutes)](#quick-start-5-minutes)
3. [Step-by-Step Deployment Guide](#step-by-step-deployment-guide)
4. [Understanding the Architecture](#understanding-the-architecture)
5. [How to Make Changes](#how-to-make-changes)
6. [Adding New Content](#adding-new-content)
7. [Connecting the Contact Form](#connecting-the-contact-form)
8. [Adding Analytics](#adding-analytics)
9. [Connecting a Custom Domain](#connecting-a-custom-domain)
10. [Troubleshooting](#troubleshooting)
11. [Future Enhancements Guide](#future-enhancements-guide)

---

## What You Just Downloaded

This is a **production-ready, enterprise-grade consulting website** built with:

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework (handles routing, SEO, performance) |
| **TypeScript** | Type-safe JavaScript (catches errors before they happen) |
| **Tailwind CSS** | Utility-first styling (no custom CSS files needed) |
| **Framer Motion** | Smooth animations and scroll effects |
| **Lucide React** | Clean, modern icons |
| **shadcn/ui inspired** | Professional UI components |

**Your website includes:**
- Dark hero section with your professional photo
- About section with business value propositions
- 19 service cards with icons and benefits
- 5 project showcase cards (with placeholder for future projects)
- Experience timeline with awards
- 8 skill category cards with animated progress bars
- 3 testimonials (mocked — replace with real ones later)
- 3 blog post cards (mocked — replace with real articles later)
- 6 FAQ accordion items
- Full contact form with 10 fields
- Footer with social links and contact info
- SEO: robots.txt, sitemap.xml, meta tags, OpenGraph
- Mobile responsive design
- Smooth scroll animations

---

## Quick Start (5 Minutes)

### Prerequisites
You need these installed on your computer:
1. **Node.js** (version 18 or higher) — [Download here](https://nodejs.org/)
2. **Git** — [Download here](https://git-scm.com/)
3. **VS Code** (recommended editor) — [Download here](https://code.visualstudio.com/)

### Step 1: Open Terminal
- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Mac:** Press `Cmd + Space`, type `terminal`, press Enter

### Step 2: Navigate to the Project Folder
```bash
cd path/to/sathya-rajesh-portfolio
```
*Tip: On Windows, you can drag the folder into the terminal window to get the path.*

### Step 3: Install Dependencies
```bash
npm install
```
This downloads all the required packages. It takes 1-2 minutes.

### Step 4: Run Locally
```bash
npm run dev
```
Open your browser and go to: `http://localhost:3000`

You should see your website running locally!

### Step 5: Stop the Server
Press `Ctrl + C` in the terminal to stop.

---

## Step-by-Step Deployment Guide

### Why Vercel? (Not GitHub Pages)

| Feature | GitHub Pages | Vercel (Free) |
|---|---|---|
| Cost | Free | **Free** |
| Custom domain | Yes | Yes |
| Contact form API | ❌ **No** | ✅ **Yes** |
| Image optimization | No | Yes |
| Preview deployments | No | Yes |
| Speed | Good | **Excellent** |

**Bottom line:** Vercel is free, faster, and your contact form will actually work.

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it: `sathya-rajesh-portfolio`
4. Keep it **Public**
5. Click **Create repository**

### Step 2: Push Your Code to GitHub

In your terminal (inside the project folder):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sathya-rajesh-portfolio.git
git push -u origin main
```

*Replace `YOUR_USERNAME` with your actual GitHub username.*

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your **GitHub account**
3. Click **Add New Project**
4. Find `sathya-rajesh-portfolio` and click **Import**
5. Leave all settings as default
6. Click **Deploy**

**Done!** Vercel will give you a live URL like `sathya-rajesh-portfolio.vercel.app`

### Step 4: Auto-Deploy on Every Change

From now on, every time you push changes to GitHub, Vercel automatically redeploys your site. No manual steps needed.

---

## Understanding the Architecture

### Folder Structure (Simple)

```
sathya-rajesh-portfolio/
├── app/                    ← Pages and API routes
│   ├── api/contact/        ← Contact form backend
│   ├── globals.css         ← Global styles
│   ├── layout.tsx          ← Root layout (SEO, analytics)
│   ├── page.tsx            ← Homepage (combines all sections)
│   ├── robots.ts           ← SEO: tells search engines what to crawl
│   └── sitemap.ts          ← SEO: list of pages for search engines
│
├── components/
│   ├── sections/           ← Page sections (Hero, About, etc.)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── FAQs.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                 ← Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── select.tsx
│       └── badge.tsx
│
├── lib/
│   └── utils.ts            ← Helper functions
│
├── public/                 ← Static files (images, PDFs)
│   ├── images/
│   │   └── hero-photo.png  ← Your professional photo
│   └── resume/
│       └── SathyaRajesh_Resume.pdf
│
├── supabase/
│   └── schema.sql          ← Database setup for contact form
│
├── next.config.js          ← Next.js configuration
├── tailwind.config.ts      ← Design system (colors, fonts)
├── package.json            ← Dependencies list
└── tsconfig.json           ← TypeScript configuration
```

**You only need to edit files in `components/sections/` and `public/` for most changes.**

---

## How to Make Changes

### Change Text Content

Open any file in `components/sections/` and edit the text directly. For example, to change your headline:

**File:** `components/sections/Hero.tsx`
```tsx
// Find this line:
<h1>Helping Businesses Build Powerful Digital Solutions</h1>

// Change to:
<h1>Your New Headline Here</h1>
```

Save the file → Vercel auto-deploys → Changes appear live in ~30 seconds.

### Change Colors

**File:** `tailwind.config.ts`
```ts
colors: {
  fabric: {
    700: "#0078D4",  // ← Change this hex code to any color
  }
}
```

### Change Your Photo

1. Replace `public/images/hero-photo.png` with your new photo (keep the same filename)
2. Push to GitHub: `git add . && git commit -m "Update photo" && git push`

### Update Resume

1. Replace `public/resume/SathyaRajesh_Resume.pdf` with your new resume
2. Push to GitHub

---

## Adding New Content

### Add a New Service

**File:** `components/sections/Services.tsx`

Find the `servicesList` array and add a new object:

```tsx
{
  icon: YourIcon,  // Import from lucide-react
  title: "New Service Name",
  description: "Description of the service.",
  benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
}
```

### Add a New Project

**File:** `components/sections/Projects.tsx`

Find the `projects` array and add:

```tsx
{
  icon: YourIcon,
  title: "Project Name",
  category: "Category",
  description: "Project description.",
  tags: ["Tag 1", "Tag 2", "Tag 3"],
  gradient: "from-color1 to-color2",  // Tailwind gradient classes
}
```

### Add a New Blog Post

**File:** `components/sections/Blog.tsx`

Find the `posts` array and add:

```tsx
{
  title: "Article Title",
  excerpt: "Short description of the article.",
  date: "Jan 1, 2025",
  readTime: "5 min read",
  category: "Data Engineering",
  gradient: "from-fabric-600 to-fabric-400",
}
```

### Add a Real Testimonial

**File:** `components/sections/Testimonials.tsx`

Replace the mocked testimonials with real ones:

```tsx
{
  quote: "Actual testimonial text from your client.",
  author: "Client Name",
  role: "Client Title, Company Name",
  initials: "CN",
  color: "bg-fabric-600",
}
```

### Add a New FAQ

**File:** `components/sections/FAQs.tsx`

Find the `faqs` array and add:

```tsx
{
  question: "Your question?",
  answer: "Your detailed answer.",
}
```

---

## Connecting the Contact Form

Your contact form currently logs submissions to the console. To make it functional, you have three options:

### Option 1: Supabase (Recommended — Free)

**Why Supabase?**
- Free tier: 500MB database, unlimited API requests
- PostgreSQL database (industry standard)
- Built-in authentication (if you need it later)
- Easy CSV export of all submissions
- Row Level Security (data protection)

**Setup Steps:**

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project**
3. Name it `sathya-portfolio`
4. Choose a region close to you (Singapore or Mumbai)
5. Wait for the project to be created (~2 minutes)
6. Go to **SQL Editor** (left sidebar)
7. Click **New Query**
8. Copy and paste the contents of `supabase/schema.sql`
9. Click **Run**
10. Go to **Project Settings** → **API**
11. Copy:
    - `Project URL` (looks like `https://abcdefgh12345678.supabase.co`)
    - `service_role key` (NOT the anon key — keep this secret!)
12. Go to [vercel.com](https://vercel.com) → Your project → **Settings** → **Environment Variables**
13. Add:
    - Name: `NEXT_PUBLIC_SUPABASE_URL` → Value: your Project URL
    - Name: `SUPABASE_SERVICE_ROLE_KEY` → Value: your service_role key
14. In `app/api/contact/route.ts`, uncomment the Supabase code block
15. Push changes to GitHub

**Done!** Now every form submission is saved to your Supabase database.

**To view submissions:**
- Go to Supabase → Table Editor → `contacts` table
- Or export as CSV anytime

### Option 2: Formspree (Easiest — Free 50 submissions/month)

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form endpoint URL (looks like `https://formspree.io/f/YOUR_FORM_ID`)
4. In `components/sections/Contact.tsx`, replace the fetch call:

```tsx
// Replace this:
const response = await fetch("/api/contact/", { ... })

// With this:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Accept": "application/json" },
  body: JSON.stringify(data),
})
```

5. Push to GitHub

**Done!** Formspree handles everything — emails you, stores submissions, provides analytics.

### Option 3: Google Sheets (No-Code)

1. Create a Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Use a Google Sheets form submission script (many tutorials online)
4. Update the fetch URL in Contact.tsx

**Trade-off:** Less professional, but requires zero backend knowledge.

---

## Adding Analytics

### Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create an account and property
3. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. Open `app/layout.tsx`
5. Replace `G-XXXXXXXXXX` with your actual ID (two places in the file)
6. Push to GitHub

### Microsoft Clarity

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Create a project
3. Get your **Project ID**
4. Open `app/layout.tsx`
5. Replace `YOUR_CLARITY_ID` with your actual ID
6. Push to GitHub

---

## Connecting a Custom Domain

### Buy a Domain
- Recommended: [Namecheap](https://namecheap.com) or [Cloudflare Registrar](https://dash.cloudflare.com)
- Suggested domain: `sathyarajeshpk.com` or `sathya.tech`
- Cost: ~$10-15/year

### Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → Your project → **Settings** → **Domains**
2. Enter your domain: `sathyarajeshpk.com`
3. Follow Vercel's DNS instructions (usually just add 2 DNS records in your domain registrar)
4. Wait 5-30 minutes for DNS to propagate
5. Your site is live on your custom domain!

**SSL certificate is automatic** — Vercel provides free HTTPS.

---

## Troubleshooting

### Problem: `npm install` fails
**Solution:** Make sure you have Node.js 18+. Check with `node --version`

### Problem: Site looks broken after deployment
**Solution:** 
1. Check Vercel build logs (Project → Deployments → Latest → Build Logs)
2. Common fix: Make sure `next.config.js` has `output: 'export'` if deploying to static host

### Problem: Contact form not working
**Solution:** 
1. Check browser console (F12 → Console) for errors
2. Verify environment variables are set in Vercel
3. Check Supabase table exists (Table Editor → contacts)

### Problem: Images not loading
**Solution:** Images must be in the `public/` folder. Use `/images/filename.png` (not `../public/images/`)

### Problem: Changes not showing after push
**Solution:** 
1. Check Vercel dashboard — did the build succeed?
2. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Check if you committed AND pushed: `git status`

---

## Future Enhancements Guide

| What You Want | Effort | How |
|---|---|---|
| **New blog post** | 2 min | Add object to `posts` array in Blog.tsx |
| **New project** | 2 min | Add object to `projects` array in Projects.tsx |
| **New service** | 2 min | Add object to `servicesList` array in Services.tsx |
| **New skill** | 2 min | Add object to `skillCategories` array in Skills.tsx |
| **New testimonial** | 2 min | Add object to `testimonials` array in Testimonials.tsx |
| **New FAQ** | 2 min | Add object to `faqs` array in FAQs.tsx |
| **Dark mode toggle** | 1 hour | Add theme provider + toggle button |
| **Real blog with CMS** | 1 day | Integrate Sanity, Strapi, or Notion |
| **Admin dashboard** | 1 day | Build protected page to view contact submissions |
| **Email notifications** | 30 min | Add Resend or SendGrid to API route |
| **Multi-language** | 2 days | Add next-intl for i18n |
| **E-commerce** | 2-3 days | Add Stripe + cart logic |
| **Authentication** | 1-2 days | Add NextAuth for client portal |
| **Real-time chat** | 1 day | Add Intercom or Crisp widget |

---

## Important Notes

1. **You own everything.** This code is yours. No subscriptions, no lock-in.
2. **Vercel is free for personal sites.** You only pay if you get massive traffic.
3. **Supabase is free for 500MB.** That's thousands of contact form submissions.
4. **Your code lives on GitHub.** Vercel just reads from GitHub and deploys.
5. **Every push auto-deploys.** No manual steps after initial setup.

---

## Support

If you get stuck:
1. Check the **Troubleshooting** section above
2. Google the error message — Next.js has excellent documentation
3. Ask me for help — I can guide you through any step

---

**Built with care for Sathya Rajesh PK**
**Last updated: August 2026**
