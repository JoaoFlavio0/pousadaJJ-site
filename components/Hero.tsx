"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WA_LINKS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ── Cinematic entrance stagger ──────────────────────────
const STAGGER = {
  badge:    { hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } },
  title:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.12, ease: EASE } } },
  divider:  { hidden: { scaleX: 0 },           visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.35, ease: EASE, originX: 0 } } },
  sub:      { hidden: { opacity: 0, y: 20 },  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.45, ease: EASE } } },
  cta:      { hidden: { opacity: 0, y: 20 },  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.58, ease: EASE } } },
  lineL:    { hidden: { scaleY: 0 },           visible: { scaleY: 1, transition: { duration: 1.4, delay: 0.2, ease: EASE, originY: 0 } } },
  scroll:   { hidden: { opacity: 0 },          visible: { opacity: 1, transition: { duration: 1, delay: 1.1 } } },
  meta:     { hidden: { opacity: 0, x: 20 },  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.7, ease: EASE } } },
};

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers — different speeds for depth
  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center md:items-end overflow-hidden pt-28 pb-16 md:pt-0 md:pb-32 px-5 md:px-10"
    >
      {/* ── Parallax background ── */}
      <motion.div
        className="absolute will-change-transform"
        style={{
          y: bgY,
          top: "-20%",
          left: 0, right: 0, bottom: 0,
          backgroundImage: `
            linear-gradient(to bottom,
              rgba(0,0,0,0.25) 0%,
              rgba(0,0,0,0.4)  30%,
              rgba(0,0,0,0.78) 65%,
              rgba(0,0,0,0.98) 100%
            ),
            url('/hero-real.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* ── Grid overlay (subtle) ── */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* ── Architectural left vertical line ── */}
      <motion.div
        className="absolute left-10 top-0 bottom-0 w-px hidden lg:block"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(204,0,0,0.2) 40%, rgba(255,255,255,0.06) 70%, transparent 100%)",
          originY: 0,
        }}
        initial="hidden"
        animate="visible"
        variants={STAGGER.lineL}
        aria-hidden="true"
      />

      {/* ── Top red gradient bar ── */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: 2, background: "linear-gradient(90deg, #CC0000 0%, rgba(204,0,0,0.4) 40%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* ── Main content — fades out on scroll ── */}
      <motion.div
        className="relative z-10 w-full max-w-[1160px] mx-auto flex flex-col items-center md:items-start text-center md:text-left"
        style={{ opacity: fadeOut }}
      >
        <motion.div style={{ y: textY }} className="w-full flex flex-col items-center md:items-start">

          {/* ── Reputation Badge ── */}
          <motion.div
            className="mb-8 md:mb-10 flex justify-center md:justify-start"
            initial="hidden" animate="visible"
            variants={STAGGER.badge}
          >
            <div className="reputation-badge">
              <span className="rep-dot" />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ flexShrink: 0 }} aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                Selo de Excelência&nbsp;&nbsp;·&nbsp;&nbsp;4.9★ Google
              </span>
            </div>
          </motion.div>

          {/* ── Display Title ── */}
          <motion.h1
            className="display-hero text-center md:text-left"
            style={{ maxWidth: 860 }}
            initial="hidden" animate="visible"
            variants={STAGGER.title}
          >
            O seu porto seguro
            <br />
            <em>no coração de</em>
            <br />
            Oliveira dos Brejinhos.
          </motion.h1>

          {/* ── Red hairline divider ── */}
          <motion.div
            className="my-6 md:my-8"
            style={{ width: 40, height: 1, background: "#CC0000", display: "block" }}
            initial="hidden" animate="visible"
            variants={STAGGER.divider}
          />

          {/* ── Subheading ── */}
          <motion.p
            className="section-sub text-center md:text-left"
            style={{
              marginBottom: "2.5rem",
              maxWidth: 440,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
            initial="hidden" animate="visible"
            variants={STAGGER.sub}
          >
            Quartos limpos, restaurante caseiro e recepção 24h. A dois minutos
            do Hospital Regional. Sem frescura — só qualidade real.
          </motion.p>

          {/* ── CTA Row ── */}
          <motion.div
            className="hero-cta-row flex gap-4 flex-wrap items-center justify-center md:justify-start w-full md:w-auto"
            initial="hidden" animate="visible"
            variants={STAGGER.cta}
          >
            <a
              id="hero-cta-primary"
              className="btn-primary"
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              Reservar Agora
            </a>
            <a id="hero-cta-secondary" className="btn-outline" href="#quartos">
              Ver Acomodações
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Floating meta panel (bottom-right) ── */}
      <motion.div
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-end gap-5"
        initial="hidden" animate="visible"
        variants={STAGGER.meta}
        aria-hidden="true"
      >
        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span style={{
            fontFamily: "'Montserrat',sans-serif",
            fontSize: "0.5rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            writingMode: "vertical-lr",
            color: "#fff",
          }}>
            scroll
          </span>
          <div
            className="scroll-cue-line w-px h-14"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)" }}
          />
        </div>

        {/* Coordinate watermark */}
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.52rem", letterSpacing: "0.16em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", textAlign: "right", lineHeight: 1.8 }}>
          <div>12°19&apos;S · 42°53&apos;W</div>
          <div>Oliveira dos Brejinhos — BA</div>
        </div>
      </motion.div>

      {/* ── Mobile scroll cue ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden opacity-35"
        initial="hidden" animate="visible"
        variants={STAGGER.scroll}
        aria-hidden="true"
      >
        <div className="scroll-cue-line w-px h-10" style={{ background: "linear-gradient(to bottom, #fff, transparent)" }} />
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.5rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#fff" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
