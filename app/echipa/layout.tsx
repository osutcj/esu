import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echipa",
  description:
    "Cunoaște echipa ESU 2025 — voluntarii și coordonatorii care fac Engineering Summer University posibil.",
  alternates: { canonical: "https://esu.osut.org/echipa" },
  openGraph: {
    title: "Echipa | ESU",
    description:
      "Cunoaște echipa ESU 2025 — voluntarii și coordonatorii care fac Engineering Summer University posibil.",
    url: "https://esu.osut.org/echipa",
  },
};

export default function EchipaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
