import { MapPin, Phone } from "lucide-react";
import { WA_LINKS, MAPS_URL, INSTAGRAM_URL, DEVELOPER_INSTAGRAM } from "@/lib/constants";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="fGRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CC0000" /><stop offset="100%" stopColor="#880000" />
        </linearGradient>
        <linearGradient id="fGSilver" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#666" /><stop offset="100%" stopColor="#BEBEBE" />
        </linearGradient>
      </defs>
      <path d="M40 6 L14 18 L14 50 Q14 66 40 76 Z" fill="url(#fGRed)" />
      <path d="M40 6 L66 18 L66 50 Q66 66 40 76 Z" fill="url(#fGSilver)" />
      <text x="24" y="58" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="22" fill="#FFF" textAnchor="middle">J</text>
      <text x="56" y="58" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="22" fill="#111" textAnchor="middle">J</text>
      <line x1="40" y1="16" x2="40" y2="72" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

const COL_LABEL = {
  fontFamily: "'Montserrat',sans-serif",
  fontWeight: 700,
  fontSize: "0.62rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.35)",
  marginBottom: "1.75rem",
  paddingBottom: "1rem",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};

const HOURS = [
  { label: "Check-in",    value: "14h – 22h" },
  { label: "Check-out",   value: "até 12h"   },
  { label: "Restaurante", value: "06h – 21h" },
  { label: "Recepção",    value: "24 horas", highlight: true },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      style={{ background: "#030303", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "6rem 2.5rem 3rem" }}
    >
      <div className="w-full max-w-[1160px] mx-auto" style={{ margin: "0 auto" }}>
        {/* 4-column grid */}
        <div className="footer-grid grid mb-20" style={{ gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "4rem" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <LogoMark />
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, color: "#fff", fontSize: "0.9rem", letterSpacing: "0.08em" }}>POUSADA JJ</div>
                <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3 }}>Oliveira dos Brejinhos</div>
              </div>
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.9, maxWidth: 210, marginBottom: "2rem" }}>
              Hospitalidade autêntica no coração do Oeste Baiano.
            </p>
            <a
              id="footer-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 no-underline transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#6f3aad,#e01b1b,#f0a030)", color: "#fff", padding: "11px 18px", borderRadius: 2, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", boxShadow: "0 4px 24px rgba(224,27,27,0.25)" }}
              aria-label="Siga a Pousada JJ no Instagram"
            >
              <InstagramIcon size={16} />
              Siga no Instagram
            </a>
          </div>

          {/* Contato */}
          <div>
            <div style={COL_LABEL}>Contato</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={12} color="#CC0000" strokeWidth={2} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.7 }}>Centro, Oliveira dos Brejinhos – BA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={12} color="#CC0000" strokeWidth={2} aria-hidden="true" />
                <a href="tel:+557798555513" className="footer-link">(77) 99855-5113</a>
              </div>
              <div className="flex items-center gap-3">
                <WhatsAppIcon size={12} />
                <a href={WA_LINKS.footer} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontSize: "0.82rem" }}>WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <div style={COL_LABEL}>Horários</div>
            <div className="flex flex-col gap-3">
              {HOURS.map((row, i) => (
                <div key={row.label}>
                  {i === HOURS.length - 1 && <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0.5rem 0 0.75rem" }} />}
                  <div className="flex justify-between items-center gap-4">
                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.22)" }}>{row.label}</span>
                    <span style={{ fontSize: "0.8rem", color: row.highlight ? "#CC0000" : "rgba(255,255,255,0.45)", fontWeight: row.highlight ? 700 : 500, fontFamily: "'Montserrat',sans-serif" }}>{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Como Chegar */}
          <div>
            <div style={COL_LABEL}>Como Chegar</div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Centro de Oliveira dos Brejinhos, próximo ao Hospital Regional.
            </p>
            <a id="footer-maps" href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2" style={{ fontSize: "0.62rem", padding: "13px 20px", justifyContent: "center", width: "100%" }}>
              <MapPin size={12} aria-hidden="true" />
              Ver no Google Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.75rem" }}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.14)", letterSpacing: "0.06em" }}>
              © 2025 Pousada JJ · Oliveira dos Brejinhos – BA · Todos os direitos reservados
            </div>
            <div className="dev-sig">
              Site feito por{" "}
              <a href={DEVELOPER_INSTAGRAM} target="_blank" rel="noopener noreferrer">Enzo Gabriel</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
