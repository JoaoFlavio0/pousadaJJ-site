"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  TouchEvent as ReactTouchEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const AUTOPLAY_MS = 5500;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SLIDE_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Crossfade + subtle horizontal drift (more cinematic than a hard slide)
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: SLIDE_EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.45, ease: SLIDE_EASE },
  }),
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } },
});

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const paused = useRef(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const next = useCallback(() => goTo(current + 1, 1),  [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const onTouchStart = (e: ReactTouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: ReactTouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { stopAutoplay(); diff > 0 ? next() : prev(); startAutoplay(); }
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="depoimentos" className="section" style={{ background: "#030303" }}>
      <div className="w-full max-w-[960px] mx-auto" style={{ margin: "0 auto" }}>

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp(0)}
        >
          <div className="section-number" style={{ justifyContent: "center" }}>04</div>
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>O que dizem sobre nós</div>
          <h2 className="section-heading" style={{ maxWidth: 560, margin: "0 auto" }}>
            Palavras de quem
            <br />
            <em style={{ color: "rgba(255,255,255,0.3)" }}>ficou conosco.</em>
          </h2>
          <motion.div
            style={{ width: 40, height: 1, background: "#CC0000", margin: "2rem auto 0", originX: 0.5 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
        </motion.div>

        {/* ── Rating + featured quote ── */}
        <motion.div
          className="flex items-center justify-center gap-12 mb-16 flex-wrap"
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.08)}
        >
          {/* Large rating number */}
          <div className="text-center">
            <div style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "5rem",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}>
              4.9
            </div>
            <div style={{ color: "#CC0000", letterSpacing: "6px", fontSize: "0.85rem", margin: "8px 0 6px" }}>
              ★★★★★
            </div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.54rem" }}>
              No Google Reviews
            </div>
          </div>

          {/* Vertical separator */}
          <div className="hidden md:block" style={{ width: 1, height: 80, background: "rgba(255,255,255,0.06)" }} aria-hidden="true" />

          {/* Pull quote */}
          <div style={{ maxWidth: 360 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontStyle: "italic",
              fontSize: "1.35rem",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              lineHeight: 1.6,
            }}>
              &ldquo;A melhor hospedagem do trecho — e eu já percorri o Oeste Baiano diversas vezes.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.16)}
        >
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => { paused.current = true; stopAutoplay(); }}
            onMouseLeave={() => { paused.current = false; startAutoplay(); }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="region"
            aria-label="Depoimentos de hóspedes"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div style={{
                  padding: "3rem",
                  background: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: "2px solid #CC0000",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Decorative giant quote */}
                  <div
                    className="absolute pointer-events-none select-none"
                    style={{
                      top: -40, right: 20,
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "10rem",
                      color: "rgba(204,0,0,0.04)",
                      lineHeight: 1,
                      fontWeight: 400,
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 mb-7">
                    {/* Avatar with gradient ring */}
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div style={{
                        width: 52, height: 52,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #CC0000, #660000)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Montserrat',sans-serif",
                        fontWeight: 800, fontSize: "0.88rem", color: "#fff",
                        boxShadow: "0 0 0 1px rgba(204,0,0,0.3), 0 0 20px rgba(204,0,0,0.2)",
                      }} aria-hidden="true">
                        {testimonial.initials}
                      </div>
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#fff" }}>
                        {testimonial.name}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: 3, letterSpacing: "0.06em" }}>
                        {testimonial.city}
                      </div>
                    </div>

                    <div style={{ color: "#CC0000", letterSpacing: "4px", fontSize: "0.8rem" }}>
                      ★★★★★
                    </div>
                  </div>

                  {/* Quote text */}
                  <p style={{
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: "1.25rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.9,
                    letterSpacing: "0.005em",
                  }}>
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-between mt-6">
            {/* Progress line */}
            <div className="flex-1 h-px mr-6 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                key={current}
                className="h-full bg-red-700"
                style={{ background: "#CC0000" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            </div>

            {/* Arrows + Dots */}
            <div className="flex items-center gap-4">
              <button
                id="carousel-prev"
                onClick={() => { stopAutoplay(); prev(); startAutoplay(); }}
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  width: 44, height: 44,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer", color: "rgba(255,255,255,0.4)",
                }}
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={15} aria-hidden="true" />
              </button>

              <div className="flex gap-1.5 items-center" role="tablist" aria-label="Selecionar depoimento">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    id={`dot-${t.id}`}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Depoimento de ${t.name}`}
                    className={`dot ${i === current ? "active" : ""}`}
                    onClick={() => { stopAutoplay(); goTo(i, i > current ? 1 : -1); startAutoplay(); }}
                  />
                ))}
              </div>

              <button
                id="carousel-next"
                onClick={() => { stopAutoplay(); next(); startAutoplay(); }}
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  width: 44, height: 44,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer", color: "rgba(255,255,255,0.4)",
                }}
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
