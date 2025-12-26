
import { motion } from "framer-motion";
export default function FloatingBlobs() {
 
    return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );

}