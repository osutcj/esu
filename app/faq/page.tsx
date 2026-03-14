"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const faqData = [
  { question: "Unde? Când? Cine?", answer: "Cluj-Napoca, perioada 19 iulie - 2 august 2025 și o mulțime de oameni faini." },
  { question: "Cât este prețul taberei?", answer: "Taxa de participare este în valoare de 650 de lei." },
  { question: "Trebuie să am o anumită vârstă?", answer: "Tabăra este destinată elevilor de clasa a XI-a." },
  { question: "Unde o să fim cazați?", answer: "Cazarea se va face într-unul dintre căminele din Campusul Studențesc Observator, iar în cameră vor sta câte 4 persoane alese aleatoriu." },
  { question: "De ce acte am nevoie pentru a mă înscrie?", answer: "link:/esu2025", isLink: true },
  { question: "Cum se va face repartizarea în camere? Pot sta cu cine vreau în cameră?", answer: "Repartizarea în camere se va realiza aleatoriu, în funcție de gen." },
  { question: "Contează pe ce profil sunt?", answer: "Nu, experiența ESU este aceeași pentru toate ramurile." },
  { question: "După ce criterii se va face selecția pe facultăți?", answer: "Criterile de selecție pentru admiterea în tabără sunt: alegerea făcută în formularul de înscriere, diplome/certificate ce atestă interesul în ramura respectivă alegerii și argumentarea din formular privind motivul alegerii ramurii." },
  { question: "Cum aflăm dacă am fost acceptați în tabără?", answer: "Răspunsul o să fie postat atât pe site prin intermediul listelor preliminare/finale, cât și prin intermediul unui apel telefonic." },
  { question: "Unde se face înscrierea?", answer: "Înscrierea se face prin formularul de înscriere disponibil pe pagina ESU 2025." },
  { question: "Pot pleca mai repede din tabără dacă am și alte chestii planificate dinainte?", answer: "Da, doar în prezența unui părinte/tutore legal, pentru maxim 24 de ore." },
];

export default function FAQ() {
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
            <span className={styles.line1}>FREQUENTLY ASKED</span>
            <br />
            <span className={styles.line2}>QUESTIONS</span>
          </h1>
        </section>

        <section className={styles["faq-section"]}>
          <div className={styles["faq-container"]}>
            {faqData.map((item, idx) => (
              <div key={idx} className={styles["faq-item"]}>
                <button className={styles["faq-question"]} onClick={() => toggleFaq(idx)}>
                  <b>{item.question}</b>
                  <span className={`${styles["faq-arrow"]}${activeIndex === idx ? ` ${styles.active}` : ""}`}>▼</span>
                </button>
                <div className={`${styles["faq-answer"]}${activeIndex === idx ? ` ${styles.active}` : ""}`}>
                  {item.isLink ? (
                    <p>
                      Găsești lista completă de documente necesare pe pagina{" "}
                      <Link href="/esu2025">ESU 2025</Link>.
                    </p>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
