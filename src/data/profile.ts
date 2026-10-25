export type TimelineEntry = {
  title: string;
  place: string;
  period?: string;
  current?: boolean;
};

// Dates reprises du CV PDF
export const experience: TimelineEntry[] = [
  { title: "Développeur (alternance)", place: "Blue Soft", period: "2025 – 2027", current: true },
  { title: "Analyste développeur (alternance)", place: "Alphatex", period: "2022 – 2025" },
];

export const education: TimelineEntry[] = [
  {
    title: "Mastère Manager en architecture et applications logicielles des SI (MAALSI)",
    place: "CESI Rouen",
    period: "2025 – 2027",
    current: true,
  },
  { title: "Concepteur développeur d'applications", place: "CESI Rouen", period: "2024 – 2025" },
  { title: "Développeur informatique", place: "CESI Rouen", period: "2022 – 2024" },
  {
    title: "BTS Systèmes Numériques, option Informatique et Réseaux",
    place: "Lycée Jules Verne, Mondeville",
    period: "2020 – 2022",
  },
];

export const interests = ["Moto", "Wakeboard", "VTT", "Pêche"];
