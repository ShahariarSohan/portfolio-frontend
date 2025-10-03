"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export function GoHomeButton() {
  return (
    <div className="flex justify-center">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>
    </div>
  );
}
