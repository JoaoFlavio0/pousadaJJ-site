"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Wifi } from "lucide-react";
import { STATS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ── Animated number with count-up feel ──
function AnimatedStat({ value, unit, delay }: { value: string; unit?: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE }}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "2.2rem",
        fontWeight: 900,
        color: "#fff",
        lineHeight: 1,
        display: "inline-block",
      }}
    >
      {value}
      {unit && (
        <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "#555555", marginLeft: 2 }}>
          {unit}
        </span>
      )}
    </motion.span>
  );
}

export default function StatStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <div className="stat-strip" role="region" aria-label="Diferenciais da Pousada JJ">
      <div
        ref={containerRef}
        className="stat-strip-inner w-full max-w-[1160px] mx-auto flex items-center lg:justify-center overflow-x-auto"
        style={{ gap: 0, scrollbarWidth: "none", margin: "0 auto" }}
      >
        {/* ── 4.9 Google ── */}
        <motion.div
          className="flex items-center gap-4 flex-shrink-0"
          style={{ paddingRight: "3rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0, ease: EASE }}
        >
          <div>
            <AnimatedStat value="4.9" delay={0.1} />
            <div style={{ color: "#CC0000", fontSize: "0.7rem", letterSpacing: "4px", marginTop: 3, marginBottom: 2 }}>
              ★★★★★
            </div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.56rem" }}>
              Google Reviews
            </div>
          </div>
        </motion.div>

        {/* ── 2min Hospital ── */}
        <motion.div
          className="flex items-center gap-4 flex-shrink-0"
          style={{ padding: "0 3rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <div>
            <AnimatedStat value="2" unit="min" delay={0.2} />
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.56rem", marginTop: 6, lineHeight: 1.7 }}>
              Do Hospital<br />Regional
            </div>
          </div>
        </motion.div>

        {/* ── 24h Recepção ── */}
        <motion.div
          className="flex items-center gap-4 flex-shrink-0"
          style={{ padding: "0 3rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <div>
            <AnimatedStat value="24" unit="h" delay={0.3} />
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.56rem", marginTop: 6, lineHeight: 1.7 }}>
              Recepção<br />Sempre Aberta
            </div>
          </div>
        </motion.div>

        {/* ── Higienizado + WiFi ── */}
        <motion.div
          className="flex items-center gap-4 flex-shrink-0"
          style={{ paddingLeft: "3rem" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                border: "1px solid rgba(204,0,0,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(204,0,0,0.06)",
              }}>
                <Shield size={12} color="#CC0000" strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.56rem" }}>
                100% Higienizado
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                border: "1px solid rgba(204,0,0,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(204,0,0,0.06)",
              }}>
                <Wifi size={12} color="#CC0000" strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.56rem" }}>
                Wi-Fi Grátis
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
