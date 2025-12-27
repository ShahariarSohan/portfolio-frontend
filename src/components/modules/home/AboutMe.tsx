/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Zap, Target, Rocket } from "lucide-react";

export default function AboutMe() {
  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with modern technologies and best practices",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "Designing scalable database schemas with PostgreSQL, MongoDB, and Prisma ORM",
    },
    {
      icon: Layers,
      title: "System Design",
      description:
        "Creating maintainable architectures that scale with business needs",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Implementing caching, lazy loading, and efficient data fetching strategies",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description:
        "Breaking down complex challenges into elegant, testable solutions",
    },
    {
      icon: Rocket,
      title: "Modern Tooling",
      description:
        "Leveraging Next.js, TypeScript, and cutting-edge frameworks for production apps",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Crafting robust web solutions with modern technology
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="space-y-16 ">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-xl text-center lg:text-start text-foreground leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-primary">
                Shahariar Sohan
              </span>
              , a Full Stack Developer specializing in building modern web
              applications with Next.js and React. On the backend, I work
              extensively with MongoDB and PostgreSQL, using Prisma and Mongoose
              to design scalable, maintainable data layers.
            </p>
            <p className="text-lg text-muted-foreground  text-center lg:text-start leading-relaxed">
              I am deeply passionate about backend engineering and the internal
              mechanics of server-side systems—how servers operate, how data is
              stored and managed in databases, how database management systems
              function, and how cloud platforms handle data at scale.
              Understanding these underlying mechanisms strongly motivates my
              learning and development as an engineer.
            </p>
            <p className="text-lg text-muted-foreground text-center lg:text-start leading-relaxed">
              I aspire to become a highly skilled backend software engineer. So
              far, I have worked on two significant projects: a Hidden
              Dependency Risk Tracker and a Digital Wallet System, where I tried
              to focused on backend logic, data modeling, and system
              reliability.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center lg:text-start text-foreground mb-8">
              What I Bring
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {skill.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
