"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    { href: "/esu2025", label: "ESU 2025", external: false },
    { href: "/faq", label: "FAQ", external: false },
    {
      href: "https://osutcluj.pixieset.com/engineeringsummeruniversity2024/",
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
            <img
              src="/assets/images/Logo-uri/ESU_logo_header.png"
              alt="ESU Logo"
            />
          </Link>
        </div>
        <ul className={styles["nav-links"]}>
          <li>
            <a
              href="https://www.facebook.com/engineering.summer.university"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/engineering.summer.university/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@esu.osut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
        </ul>
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
