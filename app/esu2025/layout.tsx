import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESU 2025",
  description:
    "ESU 2025 se desfășoară în perioada 19 iulie – 2 august la Campus Observator, Cluj-Napoca. Costul participării este 650 lei. Descoperă cum te poți înscrie.",
  alternates: { canonical: "https://esu.osut.org/esu2025" },
  openGraph: {
    title: "ESU 2025 | Engineering Summer University",
    description:
      "ESU 2025 se desfășoară în perioada 19 iulie – 2 august la Campus Observator, Cluj-Napoca. Costul participării este 650 lei.",
    url: "https://esu.osut.org/esu2025",
  },
};

export default function Esu2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
