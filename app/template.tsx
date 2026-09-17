"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow flex flex-col">
      {children}
    </main>
  );
}
