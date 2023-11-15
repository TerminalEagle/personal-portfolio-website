import projects from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ params }: { params: { slug: string } }) => {
  const index = projects.findIndex((project) => project.slug === params.slug);
  console.log(index);
  const previous = index === 0 ? projects[projects.length - 1] : projects[index - 1];
  const next = projects[(index + 1) % projects.length];

  const { title, description, skills, technologies, visitWebsiteLink, projectBackground, staticPreview } = projects.find((project) => project.slug === params.slug)!;

  return (
    <article>
      <div>
        <div>
          <Image width={1100} height={500} src={staticPreview.hero.desktop} alt={`image of the project ${title}`} />
        </div>
        <section>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{technologies.join(" / ")}</span>
          <span>{skills.join(" / ")}</span>
          <div>
            <Link href={visitWebsiteLink}>View demo</Link>
            <Link href={"#"}>View code</Link>
          </div>
        </section>
      </div>
      <section>
        <h2>Project background</h2>
        <p>{projectBackground}</p>
        <h2>Static Previews</h2>
        <div>
          <Image width={1100} height={500} src={staticPreview.previewOne.desktop} alt={`preview-1 image of the project ${staticPreview.previewOne.desktop}`} />
          <Image width={1100} height={500} src={staticPreview.previewTwo.desktop} alt={`preview-1 image of the project ${staticPreview.previewOne.desktop}`} />
        </div>
        <div>
          <Link href={`/portfolio/${previous.slug}`}>
            <div>
              <p>{previous.title}</p>
              <p>Previous project</p>
            </div>
          </Link>
          <Link href={`/portfolio/${next.slug}`}>
            <div>
              <p>{next.title}</p>
              <p>Next project</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Project;
