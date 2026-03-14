"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

const teamMembers = [
  {
    name: "Florea Alexandru",
    role: "Coordonator",
    quote: "Să pleci două săptămâni de acasă, într-un loc necunoscut, alături de oameni pe care nu i-ai mai întâlnit, e o nebunie. Să revii, an de an, ducând mai departe aceleași emoții, înseamnă iubire. ESU devine acasă nu prin locație sau activități, ci prin sufletele care îl fac magic.",
    photo: "/assets/images/Echipa/Florea.png",
    icon: "/assets/images/Forme/rac.png",
    facebook: "https://facebook.com/flowerman13",
    instagram: "https://instagram.com/alexandruflorea13",
  },
  {
    name: "Orțan Adela",
    role: "Responsabil BC",
    quote: "Nu credeam că este posibil să te apropii atât de mult de niște persoane în doar două săptămâni. ESU mi-a schimbat complet perspectiva; este un proiect de suflet pentru mine și mi-aș dori ca toată lumea să aibă ocazia, măcar o dată în viață, să trăiască ceea ce am trăit eu la ESU.",
    photo: "/assets/images/Echipa/Adela.png",
    icon: "/assets/images/Forme/scoica1.png",
    facebook: "https://www.facebook.com/adela.ortan",
    instagram: "https://www.instagram.com/adela_ortan/",
  },
  {
    name: "Pavel Luca",
    role: "Secretar",
    quote: "Nu mă așteptam ca o tabără de vară să-mi ofere șansa unui nou început. La ESU am legat prietenii valoroase, care s-au menținut de-a lungul timpului și pentru care sunt în continuare recunoscător. Am amintiri la care aș vrea să mă întorc ori de câte ori am ocazia, fiindcă vor rămâne mereu importante pentru mine.",
    photo: "/assets/images/Echipa/Luca.png",
    icon: "/assets/images/Forme/calut_de_mare.png",
    facebook: "https://facebook.com/acu1p",
    instagram: "https://instagram.com/acu1p",
  },
  {
    name: "Bașa Iarina",
    role: "Co-coordonator",
    quote: 'Când am venit la ESU, habar n-aveam că o tabără de vară mă poate convinge unde să dau la facultate. Dar ghici ce? Fix asta s-a întâmplat. A fost genul ăla de experiență unde te simți bine, râzi, cunoști oameni super tari și, cumva, în timp ce te distrezi, îți dai seama că "aici sunt oamenii mei!"',
    photo: "/assets/images/Echipa/Iarina.png",
    icon: "/assets/images/Forme/delfin.png",
    facebook: "https://www.facebook.com/iarinamaria.basa",
    instagram: "https://www.instagram.com/iarinabasa",
  },
  {
    name: "Constandache Ionela",
    role: "Co-coordonator",
    quote: "Pentru mine ESU nu a fost doar o tabără de vară, ci o experiență care m-a ajutat să mă dezvolt mai mult decât orice așteptare. Cu siguranță, toate amintirile și prieteniile pe care le-am creat la ESU, îmi vor rămâne adânc imprimate în suflet!",
    photo: "/assets/images/Echipa/Ionela.png",
    icon: "/assets/images/Forme/scoica2.png",
    facebook: "https://www.facebook.com/share/1AuM9KcuG7/",
    instagram: "https://www.instagram.com/ionellaa__",
  },
  {
    name: "Felic Cristian",
    role: "Responsabil Activități",
    quote: "Două săptămâni, 14 zile pline de aventuri, conversații, râsete, și prietenii legate neașteptat. 14 zile dureros de scurte. Iar la final, când toți își urau rămas bun, am știut că, să vin la ESU a fost cea mai bună alegere, deoarece chiar dacă plecam cu inima grea aveam sufletul plin.",
    photo: "/assets/images/Echipa/Felic.png",
    icon: "/assets/images/Forme/caracatita2.png",
    facebook: "https://www.facebook.com/share/165S1xpKtm/",
    instagram: "https://www.instagram.com/felic.cristian",
  },
  {
    name: "Sîrb Andrei",
    role: "Responsabil Activități",
    quote: "ESU m-a făcut să-mi doresc să retrăiesc experiențele din tabără în fiecare vară. Cele două săptămâni m-au ajutat să leg prietenii de lungă durată și să mă dezvolt ca persoană.",
    photo: "/assets/images/Echipa/Deiu.png",
    icon: "/assets/images/Forme/testoasa1.png",
    facebook: "https://www.facebook.com/share/1Kr2cp5CKo/",
    instagram: "https://www.instagram.com/andreisirb3011",
  },
  {
    name: "Coș Tudor",
    role: "Responsabil Tehnic",
    quote: "ESU este cea mai tare experiență de vară din viața mea. Nu doar că mi-am făcut o mulțime de noi prieteni, dar am și reușit să ies din propria zonă de confort. Toate amintirile pe care le-am creat în cele două săptămâni de tabără vor rămâne mereu parte din sufletul meu!",
    photo: "/assets/images/Echipa/Cos.png",
    icon: "/assets/images/Forme/peste1.png",
    facebook: "https://www.facebook.com/tudoradrian.cos.5",
    instagram: "https://www.instagram.com/tudor._.cos",
  },
  {
    name: "Nicula Mălina",
    role: "Responsabil PR",
    quote: "ESU pentru mine înseamnă… tot. Este experiența care mi-a schimbat viața din toate punctele de vedere. La ESU am înțeles ce înseamnă o prietenie adevărată, cum să mă distrez la maximum și cât de ușor poate fi să socializez cu persoane necunoscute. ESU m-a învățat să apreciez fiecare lucru, oricât de mic ar fi.",
    photo: "/assets/images/Echipa/Pali.png",
    icon: "/assets/images/Forme/Steluta.png",
    facebook: "https://www.facebook.com/share/1HvuZphhkq/",
    instagram: "https://www.instagram.com/_saturn.s_ring_",
  },
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
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className={styles["social-links"]}>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className={styles["right-section"]}>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p><i>&quot;{member.quote}&quot;</i></p>
              </div>

              <div className={styles["extra-right-section"]}>
                <img src={member.icon} alt="Icon" />
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
