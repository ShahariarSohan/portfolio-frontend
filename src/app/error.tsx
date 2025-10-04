// app/error.tsx
"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    
  useEffect(() => {
    console.error(error); // optional: send to logging service
  }, [error]);
 const handleRetry = () => {
   reset(); // clear error boundary
     window.location.reload()
 };
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      {/* Icon */}
      <div className="p-4 mb-6">
        <AlertCircle className="h-12 w-12 text-red-600" />
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Oops! Something went wrong.
      </h1>

      {/* Subtext */}
      <p className="text-center text-gray-600 mb-6">
        We couldn’t load this page. Try refreshing or come back later.
      </p>

      {/* Try again button */}
      <button
        onClick={handleRetry}
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
      >
        Try Again
      </button>
    </div>
  );
}
