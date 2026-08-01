"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Database } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-900/5"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-fabric flex items-center justify-center text-white shadow-lg shadow-fabric-700/30 group-hover:shadow-fabric-700/50 transition-shadow">
                <Database size={22} strokeWidth={2} />
              </div>
              <span
                className={cn(
                  "font-semibold text-lg transition-colors",
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}
              >
                Sathya Rajesh PK
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isScrolled
                      ? "text-slate-600 dark:text-slate-300 hover:text-fabric-700 dark:hover:text-fabric-400 hover:bg-fabric-50 dark:hover:bg-slate-800"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  isScrolled
                    ? "bg-fabric-700 text-white hover:bg-fabric-800 shadow-lg shadow-fabric-700/25"
                    : "glass text-white hover:bg-white/20"
                )}
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  : "text-white hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white dark:bg-slate-900 shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 font-medium hover:bg-fabric-50 dark:hover:bg-slate-800 hover:text-fabric-700 dark:hover:text-fabric-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Theme</span>
                  <ThemeToggle />
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-5 py-3 rounded-xl bg-fabric-700 text-white font-semibold hover:bg-fabric-800 transition-colors"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
