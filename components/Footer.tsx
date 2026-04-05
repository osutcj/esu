"use client";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-logo"]}>
          <a
            href="https://www.utcluj.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/Logo-uri/UTalb.png"
              alt="UT Logo"
              width={140}
              height={40}
            />
          </a>
          <a href="https://osut.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/images/Logo-uri/OSUT alb.png"
              alt="OSUT Logo"
              width={140}
              height={40}
            />
          </a>
        </div>
        <div className={styles["footer-social"]}>
          <a
            href="https://www.facebook.com/engineering.summer.university"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/engineering.summer.university"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@esu.osut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="mailto:esu.osutcluj@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <hr className={styles["footer-divider"]} />
      <div className={styles["footer-bottom"]}>
        <a
          href="https://esu.osut.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/Logo-uri/ESU_logo.png"
            alt="ESU Logo"
            width={140}
            height={140}
          />
        </a>
        <div className={styles["footer-contact"]}>
          <h3>Contact:</h3>
          <p>
            <b>Vlad Cosmin Ormindean - Responsabil BC</b>
          </p>
          <p>
            Număr de telefon: <i> 0743135003</i>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:vlad.ormindean@osutcluj.com">
              vlad.ormindean@osutcluj.com
            </a>
          </p>
          <p>
            <b>Călin-Bogdan Secară - Coordonator</b>
          </p>
          <p>
            Număr de telefon: <i>0734785227</i>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:calin.secara@osutcluj.com">
              calin.secara@osutcluj.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
