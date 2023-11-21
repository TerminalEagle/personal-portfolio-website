import Image from "next/image";
import styles from "./Home.module.css";
import Button from "@/components/Reusable/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles["hero-image"]}>
          <Image
            priority
            width="1110"
            height="500"
            sizes="(max-width: 425px) 50vw, 75w"
            src="/homepage/desktop/image-homepage-hero@2x.jpg"
            alt="manage landing page displayed on a monitor with a black frame"
          />
        </div>
        <div className={styles["hero-text"]}>
          <h1>Hey, I’m Affan and I love building beautiful websites</h1>
          <Button type="primary">About me</Button>
        </div>
      </section>
      <section id="#about" className={styles.about}>
        <div className={styles["about-image"]}>
          <Image src={"/homepage/desktop/image-homepage-profile@2x.jpg"} sizes="(max-width: 425px) 50vw, 75w" width={540} height={600} alt="image of alex spencer" />
        </div>
        <div className={styles["about-text"]}>
          <h2>About Me</h2>
          <p>
            A passionate MERN stack developer on a journey to turn ideas into awesome digital experiences. With a love for clean code and creative problem-solving, I specialize in
            crafting dynamic and user-friendly web applications. Whether it's bringing designs to life with React, optimizing databases with MongoDB, or ensuring seamless
            functionality with Node.js, I thrive on turning challenges into opportunities.
          </p>
          <Button type="tertiary">
            <Link href={"/portfolio"}>Go to portfolio</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
