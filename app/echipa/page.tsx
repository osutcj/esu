"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const teamMembers = [
  {
    name: "Călin Bogdan-Secară ",
    role: "Coordonator",
    quote: "Pentru mine ESU nu este doar un simplu proiect, ESU este locul în care eu mi-am dat seama că să spui “DA” când îți apare în cale o oportunitate este singurul lucru corect de făcut. Pentru mine această experiență se simte deja ca acasă, iar dacă ar trebui să descriu tabăra aș spune exact asa: “ESU NU POATE FI POVESTIT, POATE FI DOAR TRĂIT”",
    photo: "/assets/images/Echipa/Calin.jpeg",
    icon: "/assets/images/Forme/mana.png",
    facebook: "https://www.facebook.com/profile.php?id=100005923397549",
    instagram: "https://www.instagram.com/secaracalin?igsh=MXF3MDY1Z25veWdobA==&utm_source=qr",
  },
  {
    name: "Ormindean Vlad-Cosmin",
    role: "Responsabil BC",
    quote: "Nu m-aș fi gândit că, acum doi ani, atunci când am fost voluntar, cele două săptămâni petrecute în tabăra de vară ESU îmi vor lăsa atât de multe emoții, trăiri și amintiri frumoase. Este o experiență pe care trebuie să o vezi cu ochii tăi ca să o poți înțelege cu adevărat.",
    photo: "/assets/images/Echipa/Vlad.jpeg",
    icon: "/assets/images/Forme/glob.png",
    facebook: "https://www.facebook.com/share/1Qt3rsg3aP/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/__vld._?igsh=MThybG00M3V6N21hYw%3D%3D&utm_source=qr",
  },
  {
    name: "Bugnar Daria-Iulia",
    role: "Secretar",
    quote: "Două săptămâni la ESU mi-au resetat tot ce credeam că știu despre facultate, oameni și viitor. A fost și va rămâne cea mai frumoasă experiență. Nu se poate explica în cuvinte, ci trebuie trăită. E locul perfect să descoperi ce ți se potrivește și să-ți creezi amintiri și prietenii care devin parte din tine, dincolo de vară.",
    photo: "/assets/images/Echipa/Daria.jpg",
    icon: "/assets/images/Forme/ochi.png",
    facebook: "https://www.facebook.com/daria.bugnar.9",
    instagram: "https://www.instagram.com/daria.bugnar?igsh=bmttMTVocmp2dDV5&utm_source=qr",
  },
  {
    name: "Neacşu Andreea-Mihaela",
    role: "Co-coordonator",
    quote: "Pentru mine nu au fost doar două săptămâni de vară la ESU, ci un moment care m-a schimbat pe interior și mi-a creat amintiri pe care nu le voi putea uita niciodată. Nu există suficiente cuvinte să explici ce înseamnă ESU cu adevărat, din această cauză trebuie să îl trăiești. Totuși  există un singur cuvânt prin care aș putea descrie acest proiect: “ACASĂ”.",
    photo: "/assets/images/Echipa/Teky.jpg",
    icon: "/assets/images/Forme/luna.png",
    facebook: "https://www.facebook.com/share/1DKhsdjDsP/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/andreea_teky?igsh=MXA1cmFybjM1ajkxeg==&utm_source=qr",
  },
  {
    name: "Secară Diana-Gabriela",
    role: "Co-coordonator",
    quote: "M-am aventurat in universul ESU pe cont propriu, insa nu aveam idee ca aceasta tabără imi va dărui o nouă versiune a mea și ca ma transforma in cele mai frumoase moduri. Am avut de învățat din fiecare moment și de la fiecare persoana, iar toate experiențele cumulate mi-au colorat vara și sufletul. ESU este și va fi mereu pentru mine sinonim cu “Acasă”.",
    photo: "/assets/images/Echipa/Diana.jpeg",
    icon: "/assets/images/Forme/stea.png",
    facebook: "https://www.facebook.com/share/1DL4LaanCR/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/dia.secara?igsh=MXViMjNkMnFjOWpodg%3D%3D&utm_source=qr",
  },
  {
    name: "Cîrtiță Bianca-Yolanda",
    role: "Co-coordonator",
    quote: "Când am completat formularul pentru a fi voluntar nu mă gândeam că niște oameni cu care voi petrece 2 săptămâni îmi vor schimba percepția asupra unei “simple tabere de vară”, pentru că ESU nu e doar atât. ESU este o experiență care nu poate fi descrisă în cuvinte, trebuie trăită. ESU înseamnă prietenie, amintiri, legături care se mențin peste ani.",
    photo: "/assets/images/Echipa/Bia.jpg",
    icon: "/assets/images/Forme/fluture.png",
    facebook: "https://www.facebook.com/share/1BtvPJWoFR/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/bianca_cirtita?igsh=MXFpa2hrY2szMXExZA==&utm_source=qr",
  },
  {
    name: "Dumitrean Denis-Andrei",
    role: "Responsabil Activități",
    quote: "Nu credeam niciodată că o tabără de vară ar putea deveni o experiență de viață pe care nu o voi uita niciodată. Am cunoscut o mulțime de oameni noi, cu personalități diferite, dar cu un scop comun: de a accepta o nouă provocare. ESU reprezintă contextul perfect de a crea legături reale cu persoane noi, de a-ți îmbunătăți aptitudinile și de a deveni cea mai bună versiune a ta, alături de cei mai faini oameni.",
    photo: "/assets/images/Echipa/Denis.jpg",
    icon: "/assets/images/Forme/clepsidra.png",
    facebook: "https://www.facebook.com/profile.php?id=100040343001602",
    instagram: "https://www.instagram.com/denis._071?igsh=MWVtejAwYTJ0eTNqeQ==",
  },
  {
    name: "Armean Andrei",
    role: "Responsabil Activități",
    quote: "ESU nu este doar o tabără, este un loc din care pleci cu totul alta persoana. În acele doua saptamani mi-am dat seama ca aveam un gol în suflet pe care fiecare provocare, fiecare amintire, fiecare emoție au reușit să-l umple. Nu poti sa intelegi dacă nu ai fost aici și nu poți sa mai uiți dacă ai fost aici. Asta e ESU!",
    photo: "/assets/images/Echipa/Andrei.jpeg",
    icon: "/assets/images/Forme/bagheta.png",
    facebook: "https://www.facebook.com/share/1DntSzm8pC/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/andrei.armean/",
  }
];

export default function Echipa() {
  return (
    <>
      <Header />
      <main className={styles["main-wrap"]}>
        <section className={styles["hero-section"]}>
          <h1 className={styles["hero-title"]}>
            <span className={styles.line1}>MEET THE ESU</span>
            <br />
            <span className={styles.line2}>TEAM</span>
          </h1>
        </section>

        <section className={styles["team-section"]}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles["team-card"]}>
              <div className={styles["left-section"]}>
                <div className={styles.photo}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={240}
                    height={240}
                  />
                </div>
                <div className={styles["social-links"]}>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className={styles["right-section"]}>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>
                  <i>&quot;{member.quote}&quot;</i>
                </p>
              </div>

              <div className={styles["extra-right-section"]}>
                <Image src={member.icon} alt="Icon" width={250} height={250} />
              </div>
              <div className={styles["extra-mobile-icon"]}>
                <Image src={member.icon} alt="Icon" width={160} height={160} />
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
