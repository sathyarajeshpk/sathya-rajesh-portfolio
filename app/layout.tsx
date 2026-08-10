import type { Metadata, Viewport } from "next";
import { Comic_Neue } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Comic Sans MS ships on Windows and macOS but not on most Linux or Android
// devices. Comic Neue is loaded so those visitors get the same look instead of
// an arbitrary fallback; the system face still wins where it is present.
const sans = Comic_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sathyarajeshpk.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sathya Rajesh PK - Azure data engineer and consultant",
  description:
    "I build Azure data platforms, Microsoft Fabric implementations and Power BI reporting. Twelve years experience. Based in Chennai, India.",
  keywords: [
    "Azure Data Engineer",
    "Power BI Consultant",
    "Microsoft Fabric",
    "Data Engineering",
    "Databricks",
    "Chennai",
  ],
  authors: [{ name: "Sathya Rajesh PK", url: SITE_URL }],
  creator: "Sathya Rajesh PK",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sathya Rajesh PK",
    title: "Sathya Rajesh PK - Azure data engineer and consultant",
    description:
      "I build Azure data platforms, Microsoft Fabric implementations and Power BI reporting. Based in Chennai, India.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sathya Rajesh PK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Rajesh PK - Azure data engineer and consultant",
    description: "Azure data platforms, Microsoft Fabric and Power BI.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfc" },
    { media: "(prefers-color-scheme: dark)", color: "#14161a" },
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
    <html lang="en" className={`${sans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-[var(--fg)] focus:px-3 focus:py-1.5 focus:text-[var(--bg)]"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>

        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
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
