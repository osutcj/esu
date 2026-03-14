"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const faqData = [
  {
    question: "Costul taberei",
    answer:
      "Costul pentru participarea la tabăra de vară este de 650 lei/elev. Acest preț include cazarea, mesele, precum și toate activitățile educative și recreative organizate pe parcursul taberei.",
  },
  {
    question: "Cum te înscrii la ESU?",
    answer:
      "Înscrierea la tabăra de vară se face foarte ușor! Tot ce trebuie să faci este să completezi formularul disponibil pe site-ul nostru. În doar câțiva pași simpli, îți poți rezerva locul pentru o experiență de neuitat!",
  },
  {
    question: "Acte necesare pentru înscriere",
    answer: `1. Formularul de înscriere de la adresa esu.osut.org (completat online)
2. Adeverință din partea instituției de învățământ care atestă calitatea de elev în clasa a XI-a a aplicantului
3. Regulamentul prezent semnat de către participant și reprezentantul legal al acestuia pe fiecare pagină și scanat
4. Fotografie de profil (format .jpeg ¾, asigurându-vă că fotografia este clară și că fața este vizibilă)
5. Formular de acord a prelucrării datelor cu caracter personal (GDPR)
6. Diplome care să ateste activitatea extracurriculară din perioada liceului menționată în formular
7. Copie după buletin
8. Acord parental sau declarație pe proprie răspundere (pentru majori)
9. Aviz epidemiologic
10. Adeverință medicală care atestă faptul că participantul este clinic sănătos
11. Adeverință medicală cu eventualele afecțiuni medicale
12. Copie după pașaport (doar pentru aplicanții internaționali)`,
  },
];

const documentsData = [
  {
    name: "Regulament ESU 2025",
    file: "/assets/documente/Regulament participanți ESU - 2025.pdf",
  },
  {
    name: "Formular GDPR",
    file: "/assets/documente/Formular GDPR ESU 2025.pdf",
  },
  {
    name: "Acord Parental",
    file: "/assets/documente/Acord Parental ESU 2025.pdf",
  },
  {
    name: "Declarație pe proprie răspundere",
    file: "/assets/documente/Declarație pe propria răspundere ESU2025.pdf",
  },
];

export default function ESU2025() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className={styles["main-wrap"]}>
        <section className={styles["hero-section"]}>
          <h1 className={styles["hero-title"]}>
            <span className={styles.line1}>ESU 2025</span>
            <br />
            <span className={styles.line2}>19 IULIE - 2 AUGUST</span>
          </h1>
        </section>

        <section className={styles["faq-section"]}>
          <div className={styles["faq-container"]}>
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className={`${styles["faq-item"]}${activeIndex === idx ? ` ${styles.active}` : ""}`}
              >
                <button
                  className={styles["faq-question"]}
                  onClick={() => toggleFaq(idx)}
                >
                  <b>{item.question}</b>
                  <span
                    className={`${styles["faq-arrow"]}${activeIndex === idx ? ` ${styles.active}` : ""}`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`${styles["faq-answer"]}${activeIndex === idx ? ` ${styles.active}` : ""}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}

            <div
              className={`${styles["faq-item"]}${activeIndex === faqData.length ? ` ${styles.active}` : ""}`}
            >
              <button
                className={styles["faq-question"]}
                onClick={() => toggleFaq(faqData.length)}
              >
                <b>Documente importante</b>
                <span
                  className={`${styles["faq-arrow"]}${activeIndex === faqData.length ? ` ${styles.active}` : ""}`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`${styles["faq-answer"]}${activeIndex === faqData.length ? ` ${styles.active}` : ""}`}
              >
                <p>
                  {documentsData.map((doc, idx) => (
                    <span key={idx}>
                      {idx + 1}. {doc.name} (
                      <a href={doc.file} download>
                        descarcă aici
                      </a>
                      )<br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
