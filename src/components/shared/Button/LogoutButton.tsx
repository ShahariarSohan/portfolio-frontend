"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LogoutButtonNavbar() {
 
  const handleLogout = async () => {
    await signOut({ redirect: false });
  };
  return (
    <Link href="/login" className="w-full text-center">
      <Button
        variant="outline"
        onClick={handleLogout}
        className="font-medium bg-transparent border-border text-foreground hover:bg-accent"
      >
        Logout
      </Button>
    </Link>
  );
}
