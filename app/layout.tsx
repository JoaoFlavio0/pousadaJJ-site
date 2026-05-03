import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Montserrat,
  Inter,
} from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// ── Font configuration ────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pousada JJ | Oliveira dos Brejinhos – BA",
  description:
    "Pousada JJ em Oliveira dos Brejinhos – BA. Nota 4.9★ no Google. Hospedagem premium próxima ao Hospital Regional, no centro da cidade. Reserve pelo WhatsApp.",
  keywords: [
    "pousada oliveira dos brejinhos",
    "hospedagem oliveira dos brejinhos",
    "hotel perto do hospital oliveira dos brejinhos",
    "pousada ba-052",
    "pousada oeste bahia",
  ],
  openGraph: {
    title: "Pousada JJ | Oliveira dos Brejinhos – BA",
    description:
      "O seu porto seguro no coração de Oliveira dos Brejinhos. Nota 4.9 no Google. Reserve agora.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── Root Layout ───────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body>
        {children}
        {/* Client-only components rendered globally */}
        <CustomCursor />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
