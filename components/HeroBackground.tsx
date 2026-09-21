import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
};

/**
 * Serves hero photos through Next's image optimizer instead of downloading the
 * full source file as a CSS background on every visit.
 */
export default function HeroBackground({ src, alt }: HeroBackgroundProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="100vw"
      quality={70}
      className="hero-background"
    />
  );
}
