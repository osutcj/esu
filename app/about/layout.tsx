import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Află mai multe despre Engineering Summer University — tabăra de vară organizată de OSUT Cluj pentru elevii pasionați de inginerie și STEM.",
  alternates: { canonical: "https://esu.osut.org/about" },
  openGraph: {
    title: "Despre Noi | ESU",
    description:
      "Află mai multe despre Engineering Summer University — tabăra de vară organizată de OSUT Cluj pentru elevii pasionați de inginerie și STEM.",
    url: "https://esu.osut.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
