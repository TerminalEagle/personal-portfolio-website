import Image from "next/image";
import projects from "../data";
import { ReactNode } from "react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <section>
        {projects.map(
          ({ slug, title, description, thumbnail }): ReactNode => (
            <article key={slug}>
              <div>
                <Image width="1080" height="1000" src={thumbnail.desktop} alt={`image of the website ${title}`} />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link href={`/portfolio/${slug}`}>View project</Link>
              </div>
            </article>
          )
        )}
      </section>
    </>
  );
}
