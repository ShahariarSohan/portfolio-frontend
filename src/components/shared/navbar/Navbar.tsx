
"use client"
import Link from "next/link";

import LoginButton from "@/components/shared/navbar/LoginButton";
import { MobileMenu } from "@/components/shared/navbar/MobileMenu";
import { ModeToggle } from "@/components/shared/navbar/ModeToggle";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathName = usePathname()
  console.log(pathName)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-gradient-to-br from-background via-muted/40 to-accent/30 border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground">
            Sohan.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  pathName === link.href
                    ? "text-muted-foreground hover:text-primary transition-colors duration-200 font-bold underline"
                    : "text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <LoginButton />
            {/* Mobile Menu (Client Component) */}
            <MobileMenu navLinks={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}
