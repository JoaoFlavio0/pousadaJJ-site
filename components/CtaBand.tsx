"use client";

import { motion } from "framer-motion";
import { WA_LINKS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function CtaBand() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#B80000", padding: "6rem 2.5rem" }}
    >
      {/* Grid noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
        aria-hidden="true"
      />

      {/* Diagonal gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 50%, rgba(204,0,0,0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Vertical line on the right side */}
      <div
        className="absolute right-24 top-0 bottom-0 w-px hidden lg:block pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 w-full max-w-[1160px] mx-auto flex items-center justify-between flex-wrap gap-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ margin: "0 auto" }}
      >
        {/* Left copy */}
        <div>
          <div style={{
            fontFamily: "'Montserrat',sans-serif",
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "1rem",
          }}>
            Reserve agora
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontWeight: 300,
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            Disponibilidade imediata
            <br />
            <em style={{ opacity: 0.75 }}>via WhatsApp.</em>
          </h2>
        </div>

        {/* CTA button — black on red */}
        <a
          id="ctaband-whatsapp"
          href={WA_LINKS.availability}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3"
          style={{
            background: "#000",
            color: "#fff",
            fontSize: "0.68rem",
            padding: "20px 42px",
            letterSpacing: "0.18em",
          }}
        >
          <WhatsAppIcon size={17} />
          Verificar Disponibilidade
        </a>
      </motion.div>
    </section>
  );
}
