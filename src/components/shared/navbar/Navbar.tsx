import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import NavLink from "./NavLink";
import getAdminSession from "@/helpers/getAdminSession";
import MobileMenuPopover from "./MobileMenu";

export default async function Navbar() {
  const session = await getAdminSession();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
    ...(session ? [{ name: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border/50 overflow-hidden">
      {/* Animated Background Effects - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background opacity-50" />

        {/* Floating Blobs */}
        <div
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="flex h-16 items-center justify-between gap-4 relative px-4 container mx-auto">
        {/* === Left Side === */}
        <div className="flex items-center gap-2 relative z-10">
          <Link
            href="/"
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            Sohan.
          </Link>
        </div>

        {/* === Centered Desktop Navigation === */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* === Right Side === */}
        <div className="flex items-center gap-3 ml-auto relative z-10">
          {/* Theme Toggler  */}
          <div className="">
            <AnimatedThemeToggler />
          </div>

          {/* Mobile Menu (Client Component) */}
          <div className="block lg:hidden">
            <MobileMenuPopover navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
