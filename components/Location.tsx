"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { WA_LINKS, MAPS_URL } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } },
});

function WhatsAppIcon({ size = 14, color = "#25D366" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Location() {
  return (
    <section
      id="localizacao"
      className="section blueprint-section"
      style={{ background: "#080808" }}
    >
      <div className="w-full max-w-[1160px] mx-auto" style={{ margin: "0 auto" }}>

        {/* ── Section Header ── */}
        <div
          className="loc-header-inner grid gap-16 items-end mb-20"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal(0)}
          >
            <div className="section-number">01</div>
            <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Onde ficamos</div>
            <h2 className="section-heading">
              Localização
              <br />
              <em style={{ color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>estratégica.</em>
            </h2>
            <div className="line-divider" />
          </motion.div>

          <motion.p
            className="section-sub"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal(0.12)}
          >
            No ponto certo da cidade — perto de quem você precisa, de tudo
            que precisa.
          </motion.p>
        </div>

        {/* ── Asymmetric Grid ── */}
        <motion.div
          className="loc-grid-inner grid"
          style={{
            gridTemplateColumns: "1.65fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* ── FEATURED: Hospital (spans 2 rows) ── */}
          <div
            className="loc-featured"
            style={{ padding: "3.5rem", gridRow: "1 / 3", position: "relative", overflow: "hidden" }}
          >
            {/* Red glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(204,0,0,0.06) 0%, transparent 65%)" }}
              aria-hidden="true"
            />
            {/* Large decorative number */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "50%", right: "2rem",
                transform: "translateY(-50%)",
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(7rem, 16vw, 14rem)",
                color: "rgba(204,0,0,0.035)",
                lineHeight: 1,
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              2
            </div>

            <div className="relative z-10">
              <div className="eyebrow" style={{ marginBottom: "1.5rem" }}>Acesso prioritário</div>

              <div style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 0.9,
                marginBottom: "0.5rem",
              }}>
                2<span style={{ fontSize: "0.45em", color: "#444444", fontWeight: 600 }}>min</span>
              </div>

              <div style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#CC0000",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}>
                Do Hospital Regional
              </div>

              <p style={{ fontSize: "0.875rem", color: "#555555", lineHeight: 1.9, maxWidth: 360 }}>
                Ideal para acompanhantes de pacientes e profissionais de saúde
                em deslocamento. Estacione e descanse com total tranquilidade —
                a dois minutos a pé.
              </p>

              {/* Divider with red dot */}
              <div style={{ marginTop: "2.5rem", display: "inline-flex", alignItems: "center", gap: 10, paddingBottom: "10px", borderBottom: "1px solid rgba(204,0,0,0.2)" }}>
                <div style={{ width: 5, height: 5, background: "#CC0000", borderRadius: "50%", boxShadow: "0 0 6px rgba(204,0,0,0.5)" }} />
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                  Recurso Exclusivo da Região
                </span>
              </div>

              {/* Companion WhatsApp CTA */}
              <a
                id="location-companion-cta"
                href={WA_LINKS.companion}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-companion-btn inline-flex items-center gap-2 mt-6"
                style={{
                  background: "rgba(37,211,102,0.08)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  color: "#25D366",
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "13px 22px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backdropFilter: "blur(6px)",
                }}
              >
                <WhatsAppIcon size={14} />
                Sou acompanhante — Reservar agora
              </a>
            </div>
          </div>

          {/* ── Centro ── */}
          <div className="loc-small" style={{ padding: "2.5rem", background: "#0E0E0E" }}>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Posição</div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "0.4rem" }}>
              Centro
            </div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "#CC0000", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
              De Oliveira dos Brejinhos
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.8 }}>
              Farmácias, comércio e restaurantes a poucos passos.
            </p>
          </div>

          {/* ── BA-052 ── */}
          <div className="loc-small" style={{ padding: "2.5rem", background: "rgba(255,255,255,0.012)" }}>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Acesso rodoviário</div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "0.4rem" }}>
              BA-052
            </div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "#CC0000", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
              Entrada da Cidade
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.8 }}>
              Para quem está de passagem pelo Oeste Baiano.
            </p>
          </div>
        </motion.div>

        {/* ── Maps CTA ── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            id="maps-cta"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group transition-colors duration-300"
            style={{
              color: "rgba(255,255,255,0.22)",
              textDecoration: "none",
              fontFamily: "'Montserrat',sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <MapPin size={12} aria-hidden="true" />
            Ver no Google Maps
            <ChevronRight size={10} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
