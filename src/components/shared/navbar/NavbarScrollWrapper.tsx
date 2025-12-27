"use client";

import { useEffect, useState } from "react";

export default function NavbarScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if scrolled past threshold
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        sticky top-0 z-50 transition-all duration-500 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "shadow-lg shadow-primary/5" : ""}
      `}
    >
      <div
        className={`
          transition-all duration-300 ease-out
          ${
            scrolled
              ? "backdrop-blur-xl bg-background/95"
              : "backdrop-blur-md bg-background/80"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}
