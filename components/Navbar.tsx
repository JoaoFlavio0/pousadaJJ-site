"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_LINKS, WA_LINKS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function WhatsAppIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }} aria-hidden="true">
      <defs>
        <linearGradient id="navGRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CC0000" /><stop offset="100%" stopColor="#880000" />
        </linearGradient>
        <linearGradient id="navGSilver" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#777" /><stop offset="100%" stopColor="#C8C8C8" />
        </linearGradient>
      </defs>
      <path d="M40 6 L14 18 L14 50 Q14 66 40 76 Z" fill="url(#navGRed)" />
      <path d="M40 6 L66 18 L66 50 Q66 66 40 76 Z" fill="url(#navGSilver)" />
      <text x="24" y="58" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="22" fill="#FFF" textAnchor="middle">J</text>
      <text x="56" y="58" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="22" fill="#111" textAnchor="middle">J</text>
      <line x1="40" y1="16" x2="40" y2="72" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Fixed navbar ── */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500"
        style={{
          height: 70,
          padding: "0 2.5rem",
          background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 no-underline" aria-label="Pousada JJ — página inicial">
          <LogoMark size={40} />
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "0.88rem", color: "#fff", lineHeight: 1, letterSpacing: "0.08em" }}>
              POUSADA JJ
            </div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.56rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3 }}>
              Oliveira dos Brejinhos
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div id="desk-nav" className="hidden items-center gap-10">
          {NAV_LINKS.filter((l) => l.href !== "#contato").map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>
          ))}
          <a
            id="nav-cta"
            className="btn-primary"
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.62rem", padding: "12px 22px", minHeight: "unset" }}
          >
            <WhatsAppIcon size={13} />
            Reservar
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="ham-btn"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center justify-center bg-transparent border-0 p-2"
          style={{ color: "rgba(255,255,255,0.7)", minHeight: "unset", minWidth: "unset" }}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <motion.svg
            key={menuOpen ? "x" : "menu"}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.22 }}
            width="22" height="22" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="16" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
            )}
          </motion.svg>
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            id="mobile-overlay"
            className="fixed inset-0 z-[999] flex flex-col justify-center items-center"
            style={{ background: "#000" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {/* Close */}
            <div className="absolute top-5 right-6">
              <button onClick={close} className="bg-transparent border-0 p-2" style={{ color: "rgba(255,255,255,0.4)", minHeight: "unset", minWidth: "unset" }} aria-label="Fechar menu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links — Cormorant stagger */}
            <nav className="flex flex-col gap-1 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  className="mob-link"
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: EASE }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* WA CTA */}
            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                className="btn-primary"
                href={WA_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                style={{ fontSize: "0.7rem", padding: "18px 44px" }}
              >
                Reservar via WhatsApp
              </a>
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, rgba(204,0,0,0.3))" }} aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
