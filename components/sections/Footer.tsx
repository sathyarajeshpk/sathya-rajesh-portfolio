const social = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sathyarajeshpk/" },
  { name: "GitHub", href: "https://github.com/sathyarajeshpk" },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/sathyarajesh638/build-azure-data-engineering-solutions-using-adf-databricks-and-pyspark",
  },
  { name: "WhatsApp", href: "https://wa.me/919597996996" },
];

const sitemap = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Writing", href: "#blog" },
  { name: "Questions", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sunken pb-10 pt-20">
      <div className="shell">
        <div className="grid gap-x-10 gap-y-12 border-t border-rule pt-10 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-2xl font-bold leading-tight">
              Sathya Rajesh PK
              <span className="mt-2 block text-lg text-subtle">
                Lead data engineer &amp; technology consultant
              </span>
            </p>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">
              Azure data platforms, Microsoft Fabric, and business intelligence for enterprises and
              startups. Chennai, Tamil Nadu — working across US, UK, and APAC hours.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 lg:col-span-3 lg:col-start-7">
            <p className="label mb-4 text-subtle">Index</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-1">
              {sitemap.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="link-underline text-[0.9375rem] text-muted">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 lg:col-span-3">
            <p className="label mb-4 text-subtle">Elsewhere</p>
            <ul className="space-y-2">
              {social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.9375rem] text-muted"
                  >
                    {link.name}
                    <span aria-hidden="true" className="text-xs">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="label mb-2 mt-8 text-subtle">Direct</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:sathyarajeshpk@gmail.com"
                  className="link-underline text-[0.9375rem] text-muted"
                >
                  sathyarajeshpk@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919597996996" className="link-underline nums text-[0.9375rem] text-muted">
                  +91 95979 96996
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="label mt-16 flex flex-col gap-3 border-t border-rule pt-6 text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span className="nums">© {new Date().getFullYear()} Sathya Rajesh PK</span>
          <span>Designed &amp; built in Chennai</span>
        </div>
      </div>
    </footer>
  );
}
