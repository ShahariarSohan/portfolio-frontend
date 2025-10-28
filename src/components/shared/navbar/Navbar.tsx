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
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    ...(session ? [{ name: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <header className="px-4 container mx-auto">
      <div className="flex h-16 items-center justify-between gap-4 relative">
        {/* === Left Side === */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            Sohan.
          </Link>
        </div>

        {/* === Centered Desktop Navigation === */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
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
        <div className="flex items-center gap-3 ml-auto">
          {/* Theme Toggler (visible only lg+) */}
          <div className="hidden lg:block">
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
