"use client";

import type { ReactNode } from "react";
import { useTheme } from "@/context/theme-context";
import AmbientBackground from "./AmbientBackground";

export default function PageShell({ children }: { children: ReactNode }) {
  const { darkMode } = useTheme();

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <AmbientBackground />
      {children}
    </main>
  );
}
