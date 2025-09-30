"use client"

import { Button } from "@/components/ui/button";



export default function LoginButton() {
  return (
    <Button
      variant="outline"
      className="font-medium bg-transparent border-border text-foreground hover:bg-accent"
    >
      Login
    </Button>
  );
}