import projects from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Project.module.css";
import Button from "@/components/Reusable/Button";

const Project = ({ params }: { params: { slug: string } }) => {
  const index = projects.findIndex((project) => project.slug === params.slug);
  const previous = index === 0 ? projects[projects.length - 1] : projects[index - 1];
  const next = projects[(index + 1) % projects.length];

  const { title, description, skills, technologies, visitWebsiteLink, projectBackground, staticPreview } = projects.find((project) => project.slug === params.slug)!;

  return (
    <article className={styles.project}>
      <div className={styles.thumbnail}>
        <Image sizes="(max-width: 425px) 50vw, 75w" width={1100} height={500} src={staticPreview.hero.desktop} alt={`image of the project ${title}`} />
      </div>
      <div className={styles.details}>
        <section className={styles.summary}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <span className={styles.technologies}>{technologies.join(" / ")}</span>
          <span className={styles.skills}>{skills.join(" / ")}</span>
          <div className={styles.actions}>
            <Button type="tertiary">
              <Link href={visitWebsiteLink}>View demo</Link>
            </Button>
            <Button type="primary">
              <Link href={"#"}>View code</Link>
            </Button>
          </div>
        </section>
        <section className={styles.content}>
          <h2>Project background</h2>
          <p className={styles.technologies}>{projectBackground}</p>
          <h2>Static Previews</h2>
          <div>
            <Image
              sizes="(max-width: 425px) 50vw, 75w"
              width={1100}
              height={500}
              src={staticPreview.previewOne.desktop}
              alt={`preview-1 image of the project ${staticPreview.previewOne.desktop}`}
            />
            <Image
              sizes="(max-width: 425px) 50vw, 75w"
              width={1100}
              height={500}
              src={staticPreview.previewTwo.desktop}
              alt={`preview-1 image of the project ${staticPreview.previewOne.desktop}`}
            />
          </div>
        </section>
      </div>
      <div className={styles.navigate}>
        <div>
          <Image height={12} width={12} src={"/icons/arrow-left.svg"} alt="left arrow" />
          <Link href={`/portfolio/${previous.slug}`}>
            <h3>{previous.title}</h3>
            <p>Previous project</p>
          </Link>
        </div>
        <div>
          <Link href={`/portfolio/${next.slug}`}>
            <h3>{next.title}</h3>
            <p>Next project</p>
          </Link>
          <Image height={12} width={12} src={"/icons/arrow-right.svg"} alt="left arrow" />
        </div>
      </div>
    </article>
  );
};

export default Project;
