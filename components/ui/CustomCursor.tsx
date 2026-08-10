"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setTimeout(() => setIsVisible(true), 0);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-trigger")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow / Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-accent-gold/40 rounded-full pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center p-1"
        style={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(226, 192, 121, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-violet rounded-full pointer-events-none z-[10000]"
        style={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.1 }}
      />
    </>
  );
}
