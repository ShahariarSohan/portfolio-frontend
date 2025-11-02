"use client";

import { Loader2 } from "lucide-react";

export default function Loader({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="flex  items-center justify-center min-h-[50vh] space-x-2">
      {/* Spinning Icon */}
      <Loader2 className="h-5 w-5 text-primary animate-spin" />

      {/* Message */}
      <p className="text-sm text-muted-foreground font-medium">{message}</p>
    </div>
  );
}
