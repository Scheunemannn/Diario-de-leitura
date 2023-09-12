import Image from "next/image";
import styles from "../styles/landingPage.module.css";

const vagabondFrase = "⁠Não reze pelo futuro… Não pense nem no futuro e nem no passado, só se mantenha no presente."


export default function HomePage() {
  return (
    <>
      <div className={styles.landingPage}>
        <div className={styles.landingPageText}>
        <p>{vagabondFrase}</p>
        <p className={styles.vagabondReference}>-Vagabond</p>
        </div>
        <div className={styles.landingPageImage}>
          <Image
          src="/images/vagabond.png"
          width={500}
          height={700}
          alt="vagabond"/>
        </div>
      </div>
    </>
  );
}
