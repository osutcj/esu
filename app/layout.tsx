import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESU - Engineering Summer University",
  description:
    "Engineering Summer University - Tabără de vară pentru elevi pasionați de domeniile STEM",
  keywords:
    "ESU, Engineering Summer University, OSUT, tabără, STEM, inginerie, elevi",
  verification: {
    google: "-SJFpNEa0zGvDRYhIYJRuyD1vblGI3yiuXdCmpqinmk",
  },
  openGraph: {
    type: "website",
    url: "https://esu.osut.org/",
    title: "ESU - Engineering Summer University",
    description:
      "Engineering Summer University - Tabără de vară pentru elevi pasionați de domeniile STEM",
    images: [
      { url: "https://esu.osut.org/assets/images/Logo-uri/ESU_logo.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESU - Engineering Summer University",
    description:
      "Engineering Summer University - Tabără de vară pentru elevi pasionați de domeniile STEM",
    images: ["https://esu.osut.org/assets/images/Logo-uri/ESU_logo.png"],
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
        <link
          rel="icon"
          href="/assets/images/Logo-uri/ESU_logo.png"
          type="image/png"
        />
      </head>
      <body className={poppins.variable}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
