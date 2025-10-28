"use client";

import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle, // ✅ import this
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // ✅ import this
import Link from "next/link";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>

      <SheetContent>
        {/* ✅ Accessibility-safe invisible title */}
        <VisuallyHidden>
          <SheetTitle>Mobile navigation menu</SheetTitle>
        </VisuallyHidden>

        <div className="mt-5 grid flex-1 auto-rows-min gap-2 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                pathname === link.href
                  ? "block text-muted-foreground hover:text-primary transition-colors duration-200 font-bold underline"
                  : "block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              }
            >
              {link.name}
            </Link>
          ))}

          <div>
            <AnimatedThemeToggler />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
