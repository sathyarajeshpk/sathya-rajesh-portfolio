"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Writing", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy. Every section is observed, not just the linked ones — otherwise
  // sections without a nav entry (capabilities, testimonials) leave the previous
  // link stranded as active. Whichever section holds the upper band of the
  // viewport resolves back to the nearest nav target at or above it.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) return;

    const order = sections.map((el) => el.id);
    const navTargets = new Set(navLinks.map((l) => l.href.slice(1)));

    const resolve = (id: string) => {
      for (let i = order.indexOf(id); i >= 0; i--) {
        if (navTargets.has(order[i])) return `#${order[i]}`;
      }
      return "";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (current) setActive(resolve(current.target.id));
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile panel, and close it on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{
          // Opaque once scrolled. A translucent bar let headings read straight
          // through it, which is what made the page look like it was overlapping.
          backgroundColor: isScrolled || isOpen ? "var(--bg)" : "transparent",
          borderBottom: `1px solid ${isScrolled && !isOpen ? "var(--rule)" : "transparent"}`,
        }}
      >
        <nav className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <a
            href="#hero"
            className="text-lg font-extrabold leading-none tracking-tight transition-colors hover:text-accent"
          >
            Sathya Rajesh
            <span className="text-subtle"> PK</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className="label relative px-3 py-2 transition-colors duration-200"
                  style={{ color: isActive ? "var(--fg)" : "var(--fg-subtle)" }}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px"
                      style={{ background: "var(--accent)" }}
                      transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <a
              href="#contact"
              className="label hidden h-9 items-center rounded-full px-4 transition-opacity duration-200 hover:opacity-85 sm:inline-flex"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              Start a project
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="label flex h-9 items-center gap-2 rounded-full border border-rule px-3 lg:hidden"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-nav"
            ref={panelRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "var(--bg)" }}
          >
            <div className="shell flex h-full flex-col pb-10 pt-[var(--nav-h)]">
              <ul className="mt-8 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduced ? 0 : 0.04 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-rule"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span className="text-2xl font-bold">{link.name}</span>
                      <span className="label nums text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-4">
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="label inline-flex h-11 flex-1 items-center justify-center rounded-full"
                  style={{ background: "var(--fg)", color: "var(--bg)" }}
                >
                  Start a project
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
