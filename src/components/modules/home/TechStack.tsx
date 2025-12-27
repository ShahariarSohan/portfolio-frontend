"use client";

import { techs } from "@/data/techs";
import { motion } from "framer-motion";

export default function TechStack() {
  

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="tech-stack"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-primary">⚡</span>
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                Technologies
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools and technologies I use to build modern web
            applications
          </p>
        </motion.div>

        {/* Tech Grid with Stagger Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Animated icon container */}
                <motion.div
                  className="text-6xl mb-4 relative"
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  {tech.icon}

                  {/* Orbiting dot */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.1,
                    }}
                  />
                </motion.div>

                {/* Tech name */}
                <p className="text-foreground font-semibold text-center text-sm group-hover:text-primary transition-colors">
                  {tech.name}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
