
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SpiralParticles () {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      x: Math.cos((i / 15) * Math.PI * 4) * 300,
      y: Math.sin((i / 15) * Math.PI * 4) * 300,
      delay: i * 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent/30 rounded-full"
          initial={{ x: 0, y: 0, scale: 0 }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};