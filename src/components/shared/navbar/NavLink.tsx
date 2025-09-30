"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-muted-foreground hover:text-primary transition-colors duration-200 font-bold underline"
          : "text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
      }
    >
      {children}
    </Link>
  );
}
