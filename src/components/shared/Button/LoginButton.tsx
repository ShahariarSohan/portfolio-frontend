"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login" className="w-full text-center">
      <Button
        variant="outline"
        className="font-medium bg-transparent border-border text-foreground hover:bg-accent"
      >
        Login
      </Button>
    </Link>
  );
}
