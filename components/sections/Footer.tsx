import { Linkedin, Github, MessageCircle, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sathyarajeshpk/", icon: Linkedin, color: "hover:bg-[#0077B5]/10 hover:text-[#0077B5]" },
  { name: "GitHub", href: "https://github.com/sathyarajeshpk", icon: Github, color: "hover:bg-slate-900/10 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white" },
  { name: "Fiverr", href: "https://www.fiverr.com/sathyarajesh638/build-azure-data-engineering-solutions-using-adf-databricks-and-pyspark", icon: ExternalLink, color: "hover:bg-green-500/10 hover:text-green-600" },
  { name: "WhatsApp", href: "https://wa.me/919597996996", icon: MessageCircle, color: "hover:bg-green-500/10 hover:text-green-600" },
  { name: "Email", href: "mailto:sathyarajeshpk@gmail.com", icon: Mail, color: "hover:bg-fabric-500/10 dark:hover:bg-cyber-cyan/10 hover:text-fabric-700 dark:hover:text-cyber-cyan" },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-cyber-midnight border-t border-white/5 dark:border-cyber-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-fabric flex items-center justify-center text-white font-bold text-lg">
                SR
              </div>
              <span className="font-semibold text-lg text-white">Sathya Rajesh PK</span>
            </div>
            <p className="text-slate-400 dark:text-slate-400 leading-relaxed mb-6 max-w-md">
              Lead Data Engineer and Technology Consultant specializing in Azure Data Platforms,
              Business Intelligence, and AI-powered solutions for enterprises and startups.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="block text-slate-500 mb-1">Email</span>
                <a href="mailto:sathyarajeshpk@gmail.com" className="hover:text-white transition-colors">
                  sathyarajeshpk@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">Phone</span>
                <a href="tel:+919597996996" className="hover:text-white transition-colors">
                  +91-9597996996
                </a>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">Location</span>
                Chennai, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 dark:border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sathya Rajesh PK. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-500 text-sm">
            Built with Next.js, Tailwind CSS & Azure
          </p>
        </div>
      </div>
    </footer>
  );
}
