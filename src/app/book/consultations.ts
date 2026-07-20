// Consultation catalog — mirrors the options on the old site's /book-online page.

export type Mode = "remote" | "office" | "onsite";

export type Consultation = {
  id: string;
  title: string;
  mode: Mode;
  minutes: number;
  price: number; // USD; 0 = free
  tagline: string;
  action: "Book Now" | "Request to Book";
};

export const MODE_LABELS: Record<Mode, string> = {
  remote: "Remote",
  office: "Office",
  onsite: "On-Site",
};

export const MODE_BLURB: Record<Mode, string> = {
  remote: "Meet by video or phone. We send a Microsoft Teams link.",
  office: "Meet with us at our office in Fayetteville, NC.",
  onsite: "We come to you. Requests are confirmed before travel is arranged.",
};

const TAGLINE = {
  15: "Not sure where to start? Start here.",
  30: "Time to dig a little deeper.",
  60: "Let's turn the chaos into a plan.",
} as const;

export const consultations: Consultation[] = [
  { id: "remote-15", title: "15-Minute Remote Consultation", mode: "remote", minutes: 15, price: 0, tagline: TAGLINE[15], action: "Book Now" },
  { id: "remote-30", title: "30-Minute Remote Consultation", mode: "remote", minutes: 30, price: 50, tagline: TAGLINE[30], action: "Book Now" },
  { id: "remote-60", title: "1-Hour Remote Consultation", mode: "remote", minutes: 60, price: 100, tagline: TAGLINE[60], action: "Book Now" },
  { id: "office-15", title: "15-Minute Office Consultation", mode: "office", minutes: 15, price: 0, tagline: TAGLINE[15], action: "Book Now" },
  { id: "office-30", title: "30-Minute Office Consultation", mode: "office", minutes: 30, price: 50, tagline: TAGLINE[30], action: "Book Now" },
  { id: "office-60", title: "1-Hour Office Consultation", mode: "office", minutes: 60, price: 100, tagline: TAGLINE[60], action: "Book Now" },
  { id: "onsite-30", title: "30-Minute On-Site Consultation", mode: "onsite", minutes: 30, price: 50, tagline: TAGLINE[30], action: "Request to Book" },
  { id: "onsite-60", title: "1-Hour On-Site Consultation", mode: "onsite", minutes: 60, price: 100, tagline: TAGLINE[60], action: "Request to Book" },
];

export function getConsultation(id: string): Consultation | undefined {
  return consultations.find((c) => c.id === id);
}

export function priceLabel(price: number): string {
  return price === 0 ? "Free" : `$${price}`;
}
