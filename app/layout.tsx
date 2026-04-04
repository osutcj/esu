import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const BASE_URL = "https://esu.osut.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ESU - Engineering Summer University",
    template: "%s | ESU",
  },
  description:
    "Engineering Summer University este o tabără de vară de două săptămâni destinată elevilor de clasa a XI-a pasionați de STEM, organizată de OSUT Cluj la Universitatea Tehnică din Cluj-Napoca.",
  keywords: [
    "ESU",
    "Engineering Summer University",
    "OSUT",
    "tabără vară",
    "STEM",
    "inginerie",
    "elevi clasa 11",
    "Cluj-Napoca",
    "UTCN",
    "tabără inginerie",
  ],
  authors: [{ name: "OSUT Cluj", url: "https://osut.org" }],
  creator: "OSUT Cluj",
  publisher: "OSUT Cluj",
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "-SJFpNEa0zGvDRYhIYJRuyD1vblGI3yiuXdCmpqinmk",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "ESU - Engineering Summer University",
    title: "ESU - Engineering Summer University",
    description:
      "Tabără de vară STEM de două săptămâni pentru elevi de clasa a XI-a, organizată de OSUT Cluj la UTCN.",
    images: [
      {
        url: "/assets/images/Logo-uri/ESU_logo.png",
        width: 368,
        height: 368,
        alt: "ESU Logo",
      },
    ],
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESU - Engineering Summer University",
    description:
      "Tabără de vară STEM de două săptămâni pentru elevi de clasa a XI-a, organizată de OSUT Cluj la UTCN.",
    images: ["/assets/images/Logo-uri/ESU_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body className={poppins.variable}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
