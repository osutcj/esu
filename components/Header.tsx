"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Acasă", external: false },
    { href: "/about", label: "Despre noi", external: false },
    { href: "/echipa", label: "Echipa", external: false },
    { href: "/esu2026", label: "ESU 2026", external: false },
    { href: "/faq", label: "FAQ", external: false },
    {
      href: "https://mega.nz/folder/FMI0AAQC#nS9Z07iHl0qte4vJ580rGg",
      label: "Galerie",
      external: true,
    },
  ];

  return (
    <>
      <nav
        className={`${styles.navbar}${isScrolled ? ` ${styles.scrolled}` : ""}`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/assets/images/Logo-uri/ESU_logo_header.png"
              alt="ESU Logo"
              width={1080}
              height={368}
            />
          </Link>
        </div>
        <div className={styles.ctaWrapper}>
          <a
            href="https://forms.gle/wZo9khhUAR8KRS5J8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Înscrie-te acum
          </a>
        </div>
      </nav>

      <div
        className={`${styles["menu-button"]}${isOpen ? ` ${styles.open}` : ""}`}
        onClick={toggleNav}
      >
        <div className={`${styles.bar} ${styles["bar-1"]}`} />
        <div className={`${styles.bar} ${styles["bar-2"]}`} />
        <div className={`${styles.bar} ${styles["bar-3"]}`} />
      </div>

      <div className={`${styles.sidenav}${isOpen ? ` ${styles.open}` : ""}`}>
        {navLinks.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles["sidenav-link"]}${isOpen ? ` ${styles.visible}` : ""}`}
            >
              <b>{link.label}</b>
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles["sidenav-link"]}${isOpen ? ` ${styles.visible}` : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <b>{link.label}</b>
            </Link>
          ),
        )}
        <a
          href="/assets/documente/Liste finale.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles["sidenav-inscriere"]}${isOpen ? ` ${styles.visible}` : ""}`}
        >
          Liste finale
        </a>
      </div>
    </>
  );
};

export default Header;
