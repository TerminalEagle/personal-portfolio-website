import Link from "next/link";
import React from "react";
import styles from "./Reusable.module.css";
import clsx from "clsx";

interface Props {
  location?: "header" | "footer";
}

export const Navigation = ({ location }: Props) => {
  const classes = clsx({ [styles.navigation]: true, [styles[`navigation-${location}`]]: true });
  return (
    <nav className={classes}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};
