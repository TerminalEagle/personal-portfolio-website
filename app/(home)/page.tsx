import Image from "next/image";
import styles from "./Home.module.css";
import Button from "@/components/Reusable/Button";

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
          <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
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
            I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love
            you to check out my work.
          </p>
          <Button type="tertiary">Go to portfolio</Button>
        </div>
      </section>
    </>
  );
}
