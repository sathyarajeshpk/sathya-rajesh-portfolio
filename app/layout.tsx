import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  // Next has no bundled metrics for Newsreader, so its automatic fallback
  // adjustment is skipped; Georgia is close enough in width to keep shift low.
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sathyarajeshpk.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sathya Rajesh PK — Azure Data Engineering & Analytics Consultant",
    template: "%s — Sathya Rajesh PK",
  },
  description:
    "Twelve years building Azure data platforms, Microsoft Fabric implementations, and Power BI reporting for enterprises and startups. Based in Chennai, working globally.",
  keywords: [
    "Azure Data Engineer",
    "Power BI Consultant",
    "Microsoft Fabric",
    "Data Engineering",
    "Business Intelligence",
    "Databricks",
    "Technology Consultant",
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
    title: "Sathya Rajesh PK — Azure Data Engineering & Analytics Consultant",
    description:
      "Twelve years building Azure data platforms, Microsoft Fabric implementations, and Power BI reporting for enterprises and startups.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sathya Rajesh PK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Rajesh PK — Azure Data Engineering & Analytics Consultant",
    description: "Enterprise data platforms, Microsoft Fabric, and business intelligence.",
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
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" },
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
      className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}
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
