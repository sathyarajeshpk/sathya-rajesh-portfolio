import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// One typeface for the whole site. Manrope is a variable font, so display
// headings, body copy and the small uppercase labels are all the same family
// at different weights — hierarchy comes from weight and scale, not from
// mixing families.
const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sathyarajeshpk.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sathya Rajesh PK — Lead Data Engineer & Data Platform Architect",
    template: "%s — Sathya Rajesh PK",
  },
  description:
    "Lead Data Engineer & Data Platform Architect. Six years architecting Azure data platforms, Microsoft Fabric implementations, and analytics systems for enterprises. 12+ years in IT engineering. Based in Chennai, working globally.",
  keywords: [
    "Data Platform Architect",
    "Lead Data Engineer",
    "Azure Data Engineer",
    "Microsoft Fabric",
    "Data Engineering",
    "Databricks",
    "Power BI",
    "Data Platforms",
    "Chennai",
    "India",
  ],
  authors: [{ name: "Sathya Rajesh PK", url: SITE_URL }],
  creator: "Sathya Rajesh PK",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sathya Rajesh PK",
    title: "Sathya Rajesh PK — Lead Data Engineer & Data Platform Architect",
    description:
      "Six years architecting data platforms at scale. Azure, Microsoft Fabric, Databricks, and analytics systems. 12+ years in IT.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sathya Rajesh PK — Lead Data Engineer & Data Platform Architect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Rajesh PK — Lead Data Engineer & Data Platform Architect",
    description: "Data platforms, Microsoft Fabric, Databricks, and enterprise analytics.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f12" },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

// Runs before first paint so the stored theme is applied without a flash.
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var d = s ? s === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', d);
    document.documentElement.style.colorScheme = d ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[var(--fg)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--bg)]"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>

        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}

        {CLARITY_ID ? (
          <Script id="clarity-init" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
