"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const testimonialImages = [
  "/assets/images/Testimoniale/testimoniale-01.png",
  "/assets/images/Testimoniale/testimoniale-02.png",
];

export default function DespreNoi() {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex >= testimonialImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = testimonialImages.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <>
      <Header />
      <main className={styles["main-wrap"]}>
        <section className={styles["hero-section"]}>
          <h1 className={styles["hero-title"]}>DESPRE NOI</h1>
        </section>

        <section className={styles["ce-esu"]}>
          <p className={styles["ce-esu-description"]}>
            <b className={styles["responsive-highlight"]}>
              Engineering Summer University
            </b>{" "}
            este o tabără de 2 săptămâni dedicată elevilor de clasa a 11-a.
            Organizat de OSUT Cluj și aflat la a 11-a ediție, scopul proiectului
            este acela de a oferi participanților experiența cât mai veritabilă
            de student.
            <br />
            <br />
            Pregătește-te pentru un program captivant, unde vei învăța prin
            experiență! Vei participa la cursuri interesante și laboratoare
            hands-on, susținute de profesori de top de la Universitatea Tehnică
            din Cluj-Napoca. Fiecare activitate te va provoca să gândești
            creativ și tehnic, oferindu-ți oportunitatea de a pune în practică
            ceea ce înveți într-un mod inovator și, de ce nu, distractiv.
          </p>
        </section>

        <div className={styles["video-background"]}>
          <p className={styles["ce-esu-description-2"]}>
            Dar ESU nu înseamnă doar învățat! Pe lângă experiențele
            educaționale, te așteaptă activități de echipă, provocări captivante
            și seri tematice, toate menite să îți dezvolte abilitățile sociale
            și să creeze prietenii care pot dura o viață. Cazarea în căminele
            campusului îți va oferi o experiență autentică de viață de student.
            <br />
            <br />
            Nu ai planuri pentru vară? ESU este locul ideal unde poți învăța, te
            poți distra și poți construi fundamentul unui viitor de succes! Vino
            să explorezi ingineria într-un mod inedit și să creezi amintiri de
            neuitat alături de o echipă de tineri pasionați!
          </p>
          <h2 className={styles["ce-esu-motto"]}>
            Dive into the journey of a lifetime!
          </h2>
        </div>

        <section className={styles["ce-esu"]}>
          <h2 className={styles["ce-esu-title"]}>
            Uite ce au zis foștii participanți despre ESU
          </h2>
        </section>

        <div className={styles["slideshow-container"]}>
          {testimonialImages.map((img, idx) => (
            <div
              key={idx}
              className={`${styles.slide}${slideIndex === idx ? ` ${styles.active}` : ""}`}
            >
              <Image src={img} alt={`Testimonial ${idx + 1}`} width={5625} height={3334} className={styles["slide-img"]} />
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
            {testimonialImages.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot}${slideIndex === idx ? ` ${styles.active}` : ""}`}
                onClick={() => setSlideIndex(idx)}
              />
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
