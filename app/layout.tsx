import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathya Rajesh PK | Lead Azure Data Engineer & Technology Consultant",
  description:
    "12+ years experience building enterprise-grade data solutions, AI applications, Microsoft Fabric platforms, and Business Intelligence dashboards. Book a free consultation.",
  keywords: [
    "Azure Data Engineer", "Power BI Consultant", "Microsoft Fabric", "Data Engineering",
    "Business Intelligence", "AI Solutions", "Technology Consultant", "Chennai", "India",
  ],
  authors: [{ name: "Sathya Rajesh PK" }],
  creator: "Sathya Rajesh PK",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sathyarajeshpk.com",
    title: "Sathya Rajesh PK | Lead Azure Data Engineer & Technology Consultant",
    description:
      "Helping startups and enterprises build Websites, AI Applications, Microsoft Fabric Solutions, Azure Data Platforms and Business Intelligence solutions.",
    siteName: "Sathya Rajesh PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Rajesh PK | Lead Azure Data Engineer",
    description: "Enterprise-grade data solutions and AI-powered digital transformation.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}

        {/* Google Analytics 4 - Replace G-XXXXXXXXXX with your ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Microsoft Clarity - Replace YOUR_CLARITY_ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
      </body>
    </html>
  );
}
