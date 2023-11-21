"use client";

import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Portfolio.module.css";
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

async function getProjects() {
  const projects = await fetch("https://dev-forge.netlify.app/api/projects");
  return await projects.json();
}

export default async function Portfolio() {
  const data: ProjectData[] = await getProjects();

  if (!data) return;

  return (
    <>
      <section className={styles.portfolio}>
        {data.map(
          ({ slug, title, description }: ProjectData): ReactNode => (
            <article className={styles.project} key={slug}>
              <div className={styles.thumbnail}>
                <Image
                  sizes="(max-width: 425px) 50vw, 75w"
                  width="1080"
                  height="1000"
                  src={`https://res.cloudinary.com/duxvbkmd4/image/upload/f_auto,q_auto/v1/portfolio/${slug}/thumbnail`}
                  alt={`image of the website ${title}`}
                />
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
