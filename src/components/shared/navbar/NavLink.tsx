"use client"; // required for usePathname
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  activeClassName?: string; // optional class for active link
}

export default function NavLink({
  href,
  children,
  className,
  onClick,
  activeClassName = "text-primary bg-muted", // default active styles
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        ${className ?? ""}
        ${isActive ? activeClassName : ""}
        hover:text-accent transition-colors duration-200
      `}
    >
      {children}
    </Link>
  );
}
