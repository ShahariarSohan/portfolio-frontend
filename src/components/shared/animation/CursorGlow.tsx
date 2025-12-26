
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function CursorGlow () {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"
      animate={{
        x: position.x - 192,
        y: position.y - 192,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    />
  );
};