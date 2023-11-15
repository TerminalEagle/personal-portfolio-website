import React from "react";
import { Logo } from "@/components/Reusable/Logo";
import { Navigation } from "@/components/Reusable/Navigation";
import { Socials } from "@/components/Reusable/Socials";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
          <section>
            <p>Interested in doing a project together?</p>
            <button>Contact Me</button>
          </section>
        </main>
        <footer>
          <Logo />
          <Navigation />
          <Socials />
        </footer>
      </body>
    </html>
  );
}
