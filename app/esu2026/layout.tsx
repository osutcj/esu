import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESU 2026",
  description:
    "ESU 2026 se desfășoară în perioada 18 iulie – 1 august la Campus Observator, Cluj-Napoca. Costul participării este 750 lei. Descoperă cum te poți înscrie.",
  alternates: { canonical: "https://esu.osut.org/esu2026" },
  openGraph: {
    title: "ESU 2026 | Engineering Summer University",
    description:
      "ESU 2026 se desfășoară în perioada 18 iulie – 1 august la Campus Observator, Cluj-Napoca. Costul participării este 750 lei.",
    url: "https://esu.osut.org/esu2026",
  },
};

export default function Esu2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
