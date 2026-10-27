"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#gin", label: "O Gin" },
  { href: "#botanicos", label: "Botânicos" },
  { href: "#processo", label: "Processo" },
  { href: "#serve", label: "Serve" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 border-b border-[color:var(--color-navy-500)]/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between py-4 md:py-5">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Jardim Botânico — início"
        >
          <svg
            viewBox="0 0 40 40"
            className="w-9 h-9 text-[color:var(--color-navy-500)]"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.3">
              <circle cx="20" cy="20" r="17" />
              <circle cx="20" cy="20" r="13" opacity="0.5" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                const rad = (angle * Math.PI) / 180;
                const x1 = (20 + Math.cos(rad) * 17).toFixed(3);
                const y1 = (20 + Math.sin(rad) * 17).toFixed(3);
                const x2 = (20 + Math.cos(rad) * 20).toFixed(3);
                const y2 = (20 + Math.sin(rad) * 20).toFixed(3);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
              <text
                x="20"
                y="24"
                textAnchor="middle"
                fontSize="9"
                fill="currentColor"
                stroke="none"
                fontFamily="serif"
              >
                JB
              </text>
            </g>
          </svg>
          <div className="font-deco text-base md:text-lg leading-none tracking-widest text-[color:var(--color-navy-500)]">
            JARDIM<span className="opacity-50"> · </span>BOTÂNICO
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hairline text-[color:var(--color-navy-600)]/70 hover:text-[color:var(--color-navy-500)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="hairline inline-flex items-center gap-2 px-5 py-2.5 bg-[color:var(--color-navy-500)] text-white hover:bg-[color:var(--color-navy-600)] transition-all"
          >
            Encomendar
            <span className="inline-block w-4 h-px bg-current" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-[color:var(--color-navy-500)]"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-white/95"
          >
            <nav className="flex flex-col px-6 pb-6 pt-2 gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hairline text-[color:var(--color-navy-600)] py-2 border-b border-[color:var(--color-navy-500)]/15"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
