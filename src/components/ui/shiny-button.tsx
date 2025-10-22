"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// ---- Motion configuration ----
const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.98 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.96 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 25,
    damping: 18,
    mass: 1.5,
    scale: {
      type: "spring",
      stiffness: 250,
      damping: 6,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof MotionProps
    >,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

// ---- Component ----
export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        // Base ShadCN button look
        "relative overflow-hidden inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

        // Light / Dark modes
        "bg-primary text-primary-foreground shadow hover:shadow-lg dark:shadow-none dark:bg-primary dark:text-primary-foreground",

        // Interactive scaling
        "cursor-pointer active:scale-95 hover:scale-[1.03]",

        className
      )}
      {...animationProps}
      {...props}
    >
      {/* Text layer with gradient mask animation */}
      <span
        className="relative z-20 block size-full uppercase tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg, var(--primary) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--primary) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, var(--primary) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* Shiny overlay layer */}
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg, var(--primary)/10% calc(var(--x)+20%), var(--primary)/60% calc(var(--x)+25%), var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40"
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
