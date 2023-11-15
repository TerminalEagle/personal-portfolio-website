import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/home"}>Home</Link>
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
