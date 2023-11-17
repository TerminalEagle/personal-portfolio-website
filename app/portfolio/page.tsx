import Image from "next/image";
import projects from "../data";
import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Portfolio.module.css";
import Button from "@/components/Reusable/Button";

export default function Portfolio() {
  return (
    <>
      <section className={styles.portfolio}>
        {projects.map(
          ({ slug, title, description, thumbnail }): ReactNode => (
            <article className={styles.project} key={slug}>
              <div className={styles.thumbnail}>
                <Image sizes="(max-width: 425px) 50vw, 75w" width="1080" height="1000" src={thumbnail.desktop} alt={`image of the website ${title}`} />
              </div>
              <div className={styles.info}>
                <h2 className={styles.name}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <Link href={`/portfolio/${slug}`}>
                  <Button type="tertiary">View project</Button>
                </Link>
              </div>
            </article>
          )
        )}
      </section>
    </>
  );
}
