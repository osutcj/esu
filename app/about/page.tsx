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

  const goToSlide = (index: number) => {
    setSlideIndex(index);
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
            nu este doar o simplă tabără de vară, ci o experiență care îți
            schimbă ritmul, perspectiva și, poate, chiar planurile de viitor.
            Timp de două săptămâni, ieși din rutina de zi cu zi și intri într-un
            mediu complet nou, unde fiecare zi aduce ceva diferit. Alături de
            elevi de clasa a XI-a din toată țara, ajungi să faci parte dintr-o
            comunitate plină de energie, curiozitate și dorință de a descoperi
            mai mult.
            <br />
            <br />
            Pe parcursul acestor zile, vei simți cum e să trăiești ca un
            student: vei sta în cămin, vei împărți experiențe cu oameni noi și
            vei lega prietenii care, adesea, continuă și după finalul taberei.
            Atmosfera de campus, serile petrecute împreună, glumele, provocările
            și momentele spontane sunt cele care transformă totul într-o
            amintire de neuitat.
            <br />
            <br />
            Activitățile sunt gândite astfel încât să te facă să-ți depășești
            zona de confort și să descoperi că poți mai mult decât credeai. De
            la cursuri și laboratoare unde explorezi latura tehnică, până la
            activități recreative care îți testează creativitatea și spiritul de
            echipă, fiecare moment este o ocazie de a învăța ceva despre tine și
            despre lumea din jur.
          </p>
        </section>

        <div className={styles["video-background"]}>
          <p className={styles["ce-esu-description-2"]}>
            Dincolo de toate acestea, ESU este despre oameni. Voluntarii noștri
            sunt acolo să te ghideze, să te susțină și să se asigure că ai parte
            de cea mai tare vară. Ei sunt cei care dau viață acestui proiect și
            care, prin pasiunea lor, reușesc să creeze un spațiu unde fiecare se
            simte binevenit.
            <br />
            <br />
            Dacă ești gata pentru o aventură care îmbină distracția cu
            cunoașterea, Engineering Summer University este locul unde trebuie
            să fii. Vino să trăiești experiența de student și să vezi cum e să
            faci parte dintr-o echipă care nu se oprește niciodată din explorat!
          </p>
          <h2 className={styles["ce-esu-motto"]}>
            Dive into the journey of a lifetime!
          </h2>
        </div>

        {/*<section className={styles["ce-esu"]}>
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
           <Image
                src={img}
                alt={`Testimonial ${idx + 1}`}
                width={5625}
                height={3334}
                className={styles["slide-img"]} 
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
            {testimonialImages.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot}${slideIndex === idx ? ` ${styles.active}` : ""}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>*/}

        <Footer />
      </main>
    </>
  );
}
