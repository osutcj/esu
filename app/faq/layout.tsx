import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Întrebări frecvente despre Engineering Summer University — prețuri, înscrieri, acte necesare, cazare și multe altele.",
  alternates: { canonical: "https://esu.osut.org/faq" },
  openGraph: {
    title: "FAQ | ESU",
    description:
      "Întrebări frecvente despre Engineering Summer University — prețuri, înscrieri, acte necesare, cazare și multe altele.",
    url: "https://esu.osut.org/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
