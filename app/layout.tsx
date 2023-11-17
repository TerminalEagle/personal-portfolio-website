"use client";

import React, { useState } from "react";
import { Logo } from "@/components/Reusable/Logo";
import { Navigation } from "@/components/Reusable/Navigation";
import { Socials } from "@/components/Reusable/Socials";
import MaxWidthWrapper from "@/components/Reusable/MaxWidthWrapper";
import Button from "@/components/Reusable/Button";
import styles from "./layout.module.css";
import "./globals.css";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const { width } = useWindowSize();

  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <MaxWidthWrapper>
            <Logo />
            {(showNavigation || width! > 670) && <Navigation location="header" />}
            {width! <= 670 && (
              <button onClick={() => setShowNavigation((prev) => !prev)}>
                <Image height={28} width={28} src={showNavigation ? "/icons/close.svg" : "/icons/hamburger.svg"} alt="hamburger icon" />
              </button>
            )}
          </MaxWidthWrapper>
        </header>
        <main>
          <MaxWidthWrapper>
            {children}
            <section className={styles.cta}>
              <h2>Interested in doing a project together?</h2>
              <div className={styles.divider}></div>
              <Button type="tertiary">Contact Me</Button>
            </section>
          </MaxWidthWrapper>
        </main>
        <footer className={styles.footer}>
          <MaxWidthWrapper>
            <Logo location="footer" />
            <Navigation location="footer" />
            <Socials location="footer" />
          </MaxWidthWrapper>
        </footer>
      </body>
    </html>
  );
}
