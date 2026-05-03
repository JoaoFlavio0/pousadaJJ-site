"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Coffee } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay, ease: EASE } },
});

const revealLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.15, ease: EASE } },
};

interface MealSlot { icon: React.ReactNode; title: string; hours: string; }

const MEAL_SLOTS: MealSlot[] = [
  {
    icon: <Coffee size={15} color="#CC0000" strokeWidth={2} aria-hidden="true" />,
    title: "Café da Manhã",
    hours: "06h às 10h — incluso na diária",
  },
  {
    icon: <Clock size={15} color="#CC0000" strokeWidth={2} aria-hidden="true" />,
    title: "Almoço e Jantar",
    hours: "11h às 21h — à parte, preço justo",
  },
];

export default function Restaurant() {
  return (
    <section
      id="restaurante"
      className="section"
      style={{ background: "#070707" }}
    >
      <div className="w-full max-w-[1160px] mx-auto" style={{ margin: "0 auto" }}>
        <div
          className="rest-grid-inner grid items-center"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "6rem" }}
        >
          {/* ── Left: text ── */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal(0)}
          >
            <div className="section-number">03</div>
            <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Gastronomia</div>
            <h2 className="section-heading">
              Comida caseira
              <br />
              <em style={{ color: "rgba(255,255,255,0.3)" }}>de verdade.</em>
            </h2>
            <div className="line-divider" />
            <p className="section-sub" style={{ marginBottom: "3rem" }}>
              Feijão temperado, arroz soltinho e pratos regionais que fazem você
              sentir saudade depois de partir. Aberto das 06h às 21h.
            </p>

            {/* Meal slots */}
            <div className="flex flex-col gap-4">
              {MEAL_SLOTS.map((slot, i) => (
                <motion.div
                  key={slot.title}
                  className="flex items-start gap-5"
                  style={{
                    padding: "1.5rem 1.75rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.018)",
                  }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
                >
                  <div style={{
                    width: 36, height: 36,
                    border: "1px solid rgba(204,0,0,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    background: "rgba(204,0,0,0.05)",
                  }}>
                    {slot.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "0.08em",
                      marginBottom: 5,
                    }}>
                      {slot.title}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.02em" }}>
                      {slot.hours}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: image ── */}
          <motion.div
            className="relative overflow-hidden"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={revealLeft}
          >
            {/* Vertical accent line left of image */}
            <div
              className="absolute left-0 top-8 bottom-8 w-px z-10"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(204,0,0,0.3), transparent)" }}
              aria-hidden="true"
            />

            <Image
              src="/restaurante.jpg"
              alt="Restaurante Pousada JJ — comida caseira do Oeste Baiano"
              width={700}
              height={875}
              className="w-full object-cover block"
              style={{ aspectRatio: "4/5", filter: "brightness(0.88)" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gradient overlay bottom */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: "30%", background: "linear-gradient(to top, rgba(7,7,7,0.7), transparent)", pointerEvents: "none" }}
              aria-hidden="true"
            />

            {/* Floating hours panel */}
            <div
              className="absolute bottom-6 left-6"
              style={{
                background: "rgba(0,0,0,0.82)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "1.1rem 1.5rem",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "0.55rem",
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: 5,
              }}>
                Horário
              </div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "1rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>
                06h — 21h
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
