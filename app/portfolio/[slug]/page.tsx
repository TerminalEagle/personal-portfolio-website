import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Project.module.css";
import Button from "@/components/Reusable/Button";

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  skills: string[];
  technologies: string[];
  visitWebsiteLink: string;
  solutionLink: string;
  projectBackground: string;
}

const Project = async ({ params }: { params: { slug: string } }) => {
  const data = await fetch(`https://dev-forge.netlify.app/api/projects/${params.slug}`);
  const project: ProjectData[] = await data.json();
  if (!data) return;

  const { title, description, skills, technologies, visitWebsiteLink, projectBackground, solutionLink } = project[0];

  return (
    <article className={styles.project}>
      <div className={styles.thumbnail}>
        <Image
          sizes="(max-width: 425px) 50vw, 75w"
          width={1100}
          height={500}
          src={`https://res.cloudinary.com/duxvbkmd4/image/upload/f_auto,q_auto/v1/portfolio/${params.slug}/hero`}
          alt={`image of the project ${title}`}
        />
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
              <Link href={solutionLink}>View code</Link>
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
              src={`https://res.cloudinary.com/duxvbkmd4/image/upload/f_auto,q_auto/v1/portfolio/${params.slug}/preview-1`}
              alt={`preview-1 image of the project ${title}`}
            />
            <Image
              sizes="(max-width: 425px) 50vw, 75w"
              width={1100}
              height={500}
              src={`https://res.cloudinary.com/duxvbkmd4/image/upload/f_auto,q_auto/v1/portfolio/${params.slug}/preview-2`}
              alt={`preview-1 image of the project ${title}`}
            />
          </div>
        </section>
      </div>
    </article>
  );
};

export default Project;
