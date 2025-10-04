"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LogoutButtonNavbar() {
    
  return (
    <Button
      variant="outline"
      onClick={() => signOut()}
      className="font-medium bg-transparent border-border text-foreground hover:bg-accent"
    >
      <Link href="/login" className="w-full text-center">
        Logout
      </Link>
    </Button>
  );
}
