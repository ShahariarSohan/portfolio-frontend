import Link from "next/link";

import { MobileMenu } from "@/components/shared/navbar/MobileMenu";

import NavLink from "./NavLink";

import getAdminSession from "@/helpers/getAdminSession";

import { AnimatedThemeToggler } from "./animated-theme-toggler";

export async function Navbar() {
  const session = await getAdminSession();
  console.log(session)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: `${session ? "Dashboard" : ""}`, href: "/dashboard" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-gradient-to-br from-background via-muted/40 to-accent/30 border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 md:px-6 xl:px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            <Link href="/" className="text-xl font-bold text-foreground">
              Sohan.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center space-x-3">
            <div className="hidden lg:block">
              <AnimatedThemeToggler></AnimatedThemeToggler>
            </div>
            {/* Mobile Menu (Client Component) */}
            <div className="lg:hidden">
              <MobileMenu navLinks={navLinks} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
