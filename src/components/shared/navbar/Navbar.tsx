
import Link from "next/link";


import { MobileMenu } from "@/components/shared/navbar/MobileMenu";
import { ModeToggle } from "@/components/shared/navbar/ModeToggle";
import NavLink from "./NavLink";
import LoginButton from "../Button/LoginButton";


import getAdminSession from "@/helpers/getAdminSession";
import LogoutButtonNavbar from "../Button/LogoutButtonNavbar";




export async function Navbar() {
  const session= await getAdminSession()
 
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: `${session?"Dashboard":""}`, href: "/dashboard" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-gradient-to-br from-background via-muted/40 to-accent/30 border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 md:px-6 xl:px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            {/* Mobile Menu (Client Component) */}
            <MobileMenu navLinks={navLinks} />
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
          <div className="flex items-center space-x-2">
            <ModeToggle />
            {session ? (
              <LogoutButtonNavbar></LogoutButtonNavbar>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
