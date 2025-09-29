import Link from "next/link";

import LoginButton from "@/components/utils/LoginButton";
import { MobileMenu } from "@/components/utils/MobileMenu";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-gradient-to-br from-background via-muted/40 to-accent/30 border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LoginButton />
            {/* Mobile Menu (Client Component) */}
            <MobileMenu navLinks={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}
