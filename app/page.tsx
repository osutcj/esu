"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const slideshowImages = [
  "/assets/images/Main Page/1.jpg",
  "/assets/images/Main Page/2.jpg",
  "/assets/images/Main Page/3.jpg",
  "/assets/images/Main Page/4.jpg",
  "/assets/images/Main Page/5.jpg",
  "/assets/images/Main Page/6.jpg",
  "/assets/images/Main Page/7.JPG",
  "/assets/images/Main Page/8.jpg",
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

  const goToSlide = (index: number) => {
    setSlideIndex(index);
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
            Prin proiectul Engineering Summer University, aflat la a XII-a
            ediție, Organizația Studenților din Universitatea Tehnică din
            Cluj-Napoca îți oferă ocazia să experimentezi viața de student
            într-un mod interactiv și plin de distracție! Timp de 2 săptămâni,
            poți participa la cursuri și ateliere.
            <br />
            <br />
            Înveți să lucrezi în echipă, explorezi campusul universitar și
            descoperi cum este să înveți alături de viitorii tăi colegi. Pe
            lângă toate acestea, te așteaptă și multe activități distractive,
            jocuri, seri tematice și momente de neuitat alături de oameni faini.
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
          <h2 className={styles["video-title"]}>Aftermovie ESU 2025</h2>
          <div className={styles["video-container"]}>
            <video controls width="100%" height="100%">
              <source src="/videos/aftermovie2025.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className={styles["slideshow-section"]}>
          <div className={styles["ce-esu"]}>
            <h2 className={styles["ce-esu-title"]}>
              Iată ce înseamnă să fii participant la ESU
            </h2>
          </div>
          <div className={styles["slideshow-container"]}>
            {slideshowImages.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.slide}${slideIndex === idx ? ` ${styles.active}` : ""}`}
              >
                <Image
                  src={img}
                  alt={`ESU Slide ${idx + 1}`}
                  width={1920}
                  height={1280}
                  className={styles["slide-img"]}
                  priority={idx === 0}
                />
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
                  onClick={() => goToSlide(idx)}
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
