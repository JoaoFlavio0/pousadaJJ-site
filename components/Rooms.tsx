"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Clock, Shield, Tv, Coffee, Car } from "lucide-react";
import { ROOMS } from "@/lib/constants";
import type { Room } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay, ease: EASE } },
});

interface Amenity { icon: React.ReactNode; label: string; }

const AMENITIES: Amenity[] = [
  { icon: <Wifi  size={13} aria-hidden="true" />, label: "Wi-Fi Grátis"         },
  { icon: <Clock size={13} aria-hidden="true" />, label: "Check-in 24h"         },
  { icon: <Coffee size={13} aria-hidden="true" />, label: "Café da Manhã"       },
  { icon: <Tv    size={13} aria-hidden="true" />, label: "TV em Todos Quartos"  },
  { icon: <Shield size={13} aria-hidden="true" />, label: "Higienizado"         },
  { icon: <Car   size={13} aria-hidden="true" />, label: "Estacionamento"       },
];

// ── Single room card ──────────────────────────────────
function RoomCard({ room, delay }: { room: Room; delay: number }) {
  return (
    <motion.div
      className="room-card glass-card flex flex-col"
      style={{ position: "relative", overflow: "hidden", background: "#0E0E0E" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={reveal(delay)}
    >
      {/* Premium top accent line (Suíte only) */}
      {room.isPremium && (
        <div
          className="absolute top-0 left-0 right-0 z-10"
          style={{ height: "1px", background: "linear-gradient(90deg, #CC0000, rgba(204,0,0,0.2))" }}
          aria-hidden="true"
        />
      )}

      {/* ── Image ── */}
      <div className="room-wrap relative">
        <Image
          src={room.imageUrl}
          alt={room.imageAlt}
          width={600}
          height={450}
          className="room-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />

        {/* Gradient scrim bottom of image */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "40%", background: "linear-gradient(to top, rgba(14,14,14,0.85), transparent)", pointerEvents: "none" }}
          aria-hidden="true"
        />

        {/* Badge */}
        {room.badge && (
          <div
            className="absolute top-3.5 left-3.5 z-10"
            style={{
              background: "rgba(204,0,0,0.92)",
              backdropFilter: "blur(6px)",
              padding: "4px 12px",
            }}
          >
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff" }}>
              {room.badge}
            </span>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1" style={{ padding: "2rem 2rem 2.25rem" }}>
        <div
          className="eyebrow"
          style={{
            marginBottom: "0.5rem",
            color: room.isPremium ? "rgba(255,255,255,0.35)" : undefined,
          }}
        >
          {room.eyebrow}
        </div>

        <h3 style={{
          fontFamily: "'Montserrat',sans-serif",
          fontWeight: 800,
          fontSize: "1.05rem",
          color: "#fff",
          marginBottom: "0.85rem",
          letterSpacing: "0.02em",
        }}>
          {room.name}
        </h3>

        <p style={{
          fontSize: "0.83rem",
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.85,
          marginBottom: "1.75rem",
          flex: 1,
        }}>
          {room.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "2rem" }}>
          {room.tags.map((tag) => (
            <span
              key={tag.label}
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: tag.variant === "premium" ? "rgba(204,0,0,0.7)" : "rgba(255,255,255,0.28)",
                border: `1px solid ${tag.variant === "premium" ? "rgba(204,0,0,0.22)" : "rgba(255,255,255,0.07)"}`,
                padding: "5px 12px",
                background: tag.variant === "premium" ? "rgba(204,0,0,0.05)" : "transparent",
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          id={`room-cta-${room.id}`}
          className="btn-primary"
          href={room.waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%", justifyContent: "center", fontSize: "0.65rem", padding: "15px" }}
        >
          Verificar Disponibilidade
        </a>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  return (
    <section
      id="quartos"
      className="section blueprint-section"
      style={{ background: "#000000" }}
    >
      <div className="w-full max-w-[1160px] mx-auto" style={{ margin: "0 auto" }}>

        {/* ── Header ── */}
        <div className="flex items-end justify-between flex-wrap gap-8 mb-20">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal(0)}
          >
            <div className="section-number">02</div>
            <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Acomodações</div>
            <h2 className="section-heading">
              Quartos que entregam
              <br />
              <em style={{ color: "rgba(255,255,255,0.3)" }}>o que prometem.</em>
            </h2>
            <div className="line-divider" />
          </motion.div>

          <motion.p
            className="section-sub"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal(0.12)}
          >
            Limpeza rigorosa, conforto real,<br />custo-benefício honesto.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} delay={i * 0.1} />
          ))}
        </div>

        {/* ── Amenities strip ── */}
        <motion.div
          className="flex flex-wrap items-center justify-center"
          style={{
            gap: "0",
            marginTop: "1px",
            background: "rgba(255,255,255,0.05)",
            padding: "1.75rem 2rem",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          {AMENITIES.map((amenity, i) => (
            <div key={amenity.label} className="flex items-center">
              <div className="flex items-center gap-2 px-5 py-2">
                <span style={{ color: "#CC0000" }}>{amenity.icon}</span>
                <span
                  className="eyebrow"
                  style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.56rem", whiteSpace: "nowrap" }}
                >
                  {amenity.label}
                </span>
              </div>
              {i < AMENITIES.length - 1 && (
                <div
                  className="hidden sm:block h-4 flex-shrink-0"
                  style={{ width: "1px", background: "rgba(255,255,255,0.06)" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
