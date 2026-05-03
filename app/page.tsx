import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import Location from "@/components/Location";
import Rooms from "@/components/Rooms";
import Restaurant from "@/components/Restaurant";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

/**
 * Landing page — Pousada JJ
 * Composed of modular sections, each with its own animation logic.
 */
export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatStrip />
      <Location />
      <Rooms />
      <Restaurant />
      <Testimonials />
      <CtaBand />
      <Footer />

      {/* Hidden SEO keywords */}
      <div className="hidden" aria-hidden="true">
        Pousada em Oliveira dos Brejinhos, Hospedagem perto do hospital em
        Oliveira dos Brejinhos BA, Hotel Oliveira dos Brejinhos, Quarto para
        acompanhante hospital, Pousada BA-052 Oeste Bahia
      </div>
    </main>
  );
}
