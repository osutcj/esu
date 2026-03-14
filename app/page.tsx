"use client";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const slideshowImages = [
  "/assets/images/Main_Page/1.jpg",
  "/assets/images/Main_Page/2.jpg",
  "/assets/images/Main_Page/3.jpg",
  "/assets/images/Main_Page/4.jpg",
  "/assets/images/Main_Page/5.jpg",
  "/assets/images/Main_Page/6.jpg",
  "/assets/images/Main_Page/7.JPG",
  "/assets/images/Main_Page/8.jpg",
];

const useCounter = (end: number, duration: number, start: number = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    const range = end - start;
    const step = Math.abs(Math.floor(duration / range));
    const increment = end > start ? 1 : -1;
    const timer = setInterval(() => {
      countRef.current += increment;
      setCount(countRef.current);
      if (countRef.current === end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
};

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const participantsCount = useCounter(2200, 4000, 1700);
  const volunteersCount = useCounter(700, 4000, 200);
  const daysCount = useCounter(14, 8000, 0);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slideshowImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = slideshowImages.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <>
      <Header />
      <main className={styles["main-wrap"]}>
        <section className={styles["hero-section"]}>
          <h1 className={styles["hero-title"]}>
            <span className={styles.line1}>ENGINEERING SUMMER</span>
            <br />
            <span className={styles.line2}>UNIVERSITY</span>
          </h1>
        </section>

        <section className={styles["ce-esu"]}>
          <h2 className={styles["ce-esu-title"]}>
            Ce este Engineering Summer University?
          </h2>
          <p className={styles["ce-esu-description"]}>
            Engineering Summer University este o tabără de vară de două
            săptămâni, destinată elevilor de clasa a XI-a pasionați de domeniile
            STEM, curioși să exploreze aceste domenii captivante și să trăiască
            experiența de student într-un mediu dinamic, ieșind din zona de
            confort.
            <br />
            <br />
            Participanții vor avea parte de un program interactiv și antrenant,
            ce îmbină teoria cu practica. Pe lângă cursuri susținute de
            profesori renumiți de la Universitatea Tehnică din Cluj-Napoca,
            elevii vor lua parte la activități de laborator, punând în aplicare
            cunoștințele acumulate într-un mod practic și inovator.
            <br />
            <br />
            Dincolo de partea academică, tabăra include și numeroase activități
            recreative menite să ajute participanții să-și dezvolte abilitățile
            de comunicare și să se integreze într-un comunitate activă și
            energică. Cazarea în căminele studențești din Observator le va oferi
            ocazia de a experimenta viața de campus într-un mod autentic.
            <br />
            <br />
            Dacă încă nu ți-ai făcut planuri pentru perioada 19 iulie - 2
            august, alătură-te nouă pentru două săptămâni pline de experiențe de
            neuitat, alături de tineri entuziaști din întreaga țară!
          </p>
        </section>

        <section className={styles["counters-section"]}>
          <div className={styles["counters-container"]}>
            <div className={styles["counter-item"]}>
              <span className={styles["counter-number"]}>
                {participantsCount}+
              </span>
              <span className={styles["counter-label"]}>Participanți</span>
            </div>
            <div className={styles["counter-item"]}>
              <span className={styles["counter-number"]}>
                {volunteersCount}+
              </span>
              <span className={styles["counter-label"]}>Voluntari</span>
            </div>
            <div className={styles["counter-item"]}>
              <span className={styles["counter-number"]}>{daysCount}</span>
              <span className={styles["counter-label"]}>Zile</span>
            </div>
          </div>
        </section>

        <section className={styles["video-section"]}>
          <h2 className={styles["video-title"]}>Aftermovie ESU 2024</h2>
          <div className={styles["video-container"]}>
            <iframe
              src="https://www.youtube.com/embed/IkRQNqete7g"
              frameBorder="0"
              allowFullScreen
              title="ESU 2024 Aftermovie"
            />
          </div>
        </section>

        <section className={styles["slideshow-section"]}>
          <section className={styles["ce-esu"]}>
            <h2 className={styles["ce-esu-title"]}>
              Iată ce înseamnă să fii participant la ESU
            </h2>
          </section>
          <div className={styles["slideshow-container"]}>
            {slideshowImages.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.slide}${slideIndex === idx ? ` ${styles.active}` : ""}`}
              >
                <img src={img} alt={`ESU Slide ${idx + 1}`} />
              </div>
            ))}
            <a
              className={`${styles["slide-arrow"]} ${styles.prev}`}
              onClick={() => plusSlides(-1)}
            >
              ❮
            </a>
            <a
              className={`${styles["slide-arrow"]} ${styles.next}`}
              onClick={() => plusSlides(1)}
            >
              ❯
            </a>
            <div className={styles["dots-container"]}>
              {slideshowImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot}${slideIndex === idx ? ` ${styles.active}` : ""}`}
                  onClick={() => setSlideIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
