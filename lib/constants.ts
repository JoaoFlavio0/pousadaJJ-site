// ═══════════════════════════════════════════════════════
//  POUSADA JJ — Centralized Business Data
//  Squad VIBE DEV™ v4.0
// ═══════════════════════════════════════════════════════

export const WA_NUMBER = "557798555513";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// WhatsApp pre-filled messages
export const WA_LINKS = {
  general: `${WA_BASE}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20reserva.`,
  availability: `${WA_BASE}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20verificar%20disponibilidade.`,
  companion: `${WA_BASE}?text=Olá!%20Sou%20acompanhante%20de%20paciente%20no%20Hospital%20Regional%20de%20Oliveira%20dos%20Brejinhos.%20Gostaria%20de%20reservar%20um%20quarto%20na%20Pousada%20JJ.%20Tem%20disponibilidade%3F`,
  standardRoom: `${WA_BASE}?text=Olá!%20Vim%20pelo%20site%20da%20Pousada%20JJ%20e%20tenho%20interesse%20no%20*Quarto%20Standard*.%20Poderia%20me%20informar%20a%20disponibilidade%20e%20o%20valor%20da%20diária%3F%20Obrigado!`,
  doubleRoom: `${WA_BASE}?text=Olá!%20Vim%20pelo%20site%20da%20Pousada%20JJ%20e%20tenho%20interesse%20no%20*Quarto%20Duplo*%20(duas%20camas).%20Poderia%20me%20informar%20a%20disponibilidade%20e%20o%20valor%20da%20diária%3F%20Obrigado!`,
  suiteRoom: `${WA_BASE}?text=Olá!%20Vim%20pelo%20site%20da%20Pousada%20JJ%20e%20tenho%20interesse%20na%20*Suíte%20Casal*%20(quarto%20premium).%20Poderia%20me%20informar%20a%20disponibilidade%20e%20o%20valor%20da%20diária%3F%20Obrigado!`,
  footer: `${WA_BASE}?text=Olá!%20Vim%20pelo%20site%20da%20Pousada%20JJ%20e%20gostaria%20de%20fazer%20uma%20reserva.%20Poderia%20me%20ajudar%3F`,
} as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/Pousada+JJ+Oliveira+dos+Brejinhos";

export const INSTAGRAM_URL = "https://www.instagram.com/pousadajjbrejinhos/";

export const DEVELOPER_INSTAGRAM = "https://www.instagram.com/kogumo____/";

// ── Navigation Links ──────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Localização", href: "#localizacao" },
  { label: "Quartos", href: "#quartos" },
  { label: "Restaurante", href: "#restaurante" },
  { label: "Avaliações", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// ── Rooms ─────────────────────────────────────────────
export interface RoomTag {
  label: string;
  variant?: "default" | "premium";
}

export interface Room {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: RoomTag[];
  waLink: string;
  badge?: string;
  isPremium?: boolean;
}

export const ROOMS: Room[] = [
  {
    id: "standard",
    eyebrow: "Standard",
    name: "Quarto Standard",
    description:
      "Prático, limpo e confortável. Ar-condicionado, TV e Wi-Fi. Tudo que você precisa para descansar de verdade.",
    imageUrl: "/quarto-standard.jpg",
    imageAlt: "Quarto Standard Pousada JJ",
    tags: [
      { label: "Ar-condicionado" },
      { label: "Wi-Fi" },
      { label: "TV" },
    ],
    waLink: WA_LINKS.standardRoom,
    badge: "Favorito",
  },
  {
    id: "duplo",
    eyebrow: "Duplo",
    name: "Quarto Duplo",
    description:
      "Para casais ou viajantes que precisam de mais espaço. Duas camas, banheiro privativo e toda estrutura da casa.",
    imageUrl: "/quarto-duplo.jpg",
    imageAlt: "Quarto Duplo Pousada JJ",
    tags: [
      { label: "Duas Camas" },
      { label: "Banheiro Privativo" },
    ],
    waLink: WA_LINKS.doubleRoom,
  },
  {
    id: "suite",
    eyebrow: "Melhor escolha",
    name: "Suíte Casal",
    description:
      "Nosso quarto premium. Cama de casal, banheiro espaçoso com chuveiro quente e o melhor custo-benefício da região.",
    imageUrl: "/quarto-suite.jpg",
    imageAlt: "Suíte Pousada JJ",
    tags: [
      { label: "Cama Casal" },
      { label: "Chuveiro Quente" },
      { label: "Premium", variant: "premium" },
    ],
    waLink: WA_LINKS.suiteRoom,
    isPremium: true,
  },
];

// ── Testimonials ──────────────────────────────────────
export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  city: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "mc",
    initials: "MC",
    name: "Maria Cristina",
    city: "Salvador – BA",
    text: "Fiquei como acompanhante da minha mãe no hospital por uma semana. A pousada foi uma bênção — 2 minutos a pé, quarto impecável, pessoal atencioso. Dormi tranquila toda noite.",
  },
  {
    id: "ra",
    initials: "RA",
    name: "Ricardo Almeida",
    city: "Feira de Santana – BA",
    text: "Localização perfeita na entrada da cidade. Quarto climatizado, cama excelente e Wi-Fi funcionando. Preço justo para o que entrega. Já indiquei para cinco amigos.",
  },
  {
    id: "fn",
    initials: "FN",
    name: "Fernanda Nunes",
    city: "Ibotirama – BA",
    text: "A comida caseira do restaurante é de comer rezando! Feijão temperado, arroz soltinho e carne na medida. Fiquei com saudade depois de partir. A pousada é muito bem cuidada.",
  },
  {
    id: "jw",
    initials: "JW",
    name: "José Wanderley",
    city: "Xique-Xique – BA",
    text: "Já me hospedei três vezes e sempre volto. A dona é muito atenciosa e o lugar está sempre impecável. Para quem passa pelo Oeste da Bahia, é a melhor pedida de todo o trecho.",
  },
];

// ── Stats strip ───────────────────────────────────────
export interface Stat {
  value: string;
  unit?: string;
  label: string;
  sublabel?: string;
}

export const STATS: Stat[] = [
  { value: "4.9", label: "★★★★★", sublabel: "Google Reviews" },
  { value: "2", unit: "min", label: "Do Hospital", sublabel: "Regional" },
  { value: "24", unit: "h", label: "Recepção", sublabel: "Sempre Aberta" },
];
