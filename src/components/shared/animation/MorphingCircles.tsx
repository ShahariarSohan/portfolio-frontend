
import { motion } from "framer-motion";

export default function MorphingCircles ()  {
  const circles = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};