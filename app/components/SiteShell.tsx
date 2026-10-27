"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Intro } from "./Intro";

interface SiteShellProps {
  children: ReactNode;
}

const INTRO_SEEN_KEY = "jbgin:intro-seen";

export function SiteShell({ children }: SiteShellProps) {
  const [introDone, setIntroDone] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIntroDone(window.sessionStorage.getItem(INTRO_SEEN_KEY) === "1");
  }, []);

  return (
    <>
      <Intro onDone={() => setIntroDone(true)} />
      <div
        className={`transition-opacity duration-1000 ${
          introDone === false ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
