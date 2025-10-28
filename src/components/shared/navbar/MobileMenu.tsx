"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import NavLink from "./NavLink";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

interface MobileMenuPopoverProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileMenuPopover({
  navLinks,
}: MobileMenuPopoverProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  // Auto-close popover when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setPopoverOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          className="group size-8"
          variant="ghost"
          size="icon"
          aria-label="Toggle Menu"
        >
          <svg
            className="pointer-events-none"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M4 12L20 12"
              className="origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
            />
            <path
              d="M4 12H20"
              className="origin-center transition-all duration-300 group-aria-expanded:rotate-45"
            />
            <path
              d="M4 12H20"
              className="origin-center translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
            />
          </svg>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-40 p-2 md:p-3 bg-background/95 backdrop-blur-md border border-border/40 rounded-lg shadow-md"
      >
        <NavigationMenu className="max-w-none *:w-full">
          <NavigationMenuList className="flex-col items-start gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name} className="w-full">
                <NavigationMenuLink asChild>
                  <NavLink
                    href={link.href}
                    className="block py-1 text-sm  hover:text-primary font-medium w-full"
                    onClick={() => setPopoverOpen(false)} // auto-close on click
                  >
                    {link.name}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {/* Theme toggle in mobile */}
            <div className="block lg:hidden mt-2">
              <AnimatedThemeToggler />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  );
}
