"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "./animated-theme-toggler";



interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

export  function MobileMenu({ navLinks }: MobileMenuProps) {
  
   const pathname = usePathname();
    
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 rounded-md hover:bg-accent/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 border-t border-border/50 backdrop-blur-md md:hidden">
          <div className="px-6 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  pathname===link.href
                    ? "block text-muted-foreground hover:text-primary transition-colors duration-200 font-bold underline"
                    : "block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <AnimatedThemeToggler></AnimatedThemeToggler>
          </div>
        </div>
      )}
    </>
  );
}
