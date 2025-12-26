import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, transparent 0%, transparent 100%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(var(--primary-rgb, 59, 130, 246), 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(var(--primary-rgb, 59, 130, 246), 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(var(--primary-rgb, 59, 130, 246), 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}