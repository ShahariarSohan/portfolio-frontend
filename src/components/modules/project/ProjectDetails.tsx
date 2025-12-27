"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Check, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetails({ project }: { project: IProject }) {
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image - Full Width Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="100vw"
          quality={95}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-xs font-semibold bg-background/80 backdrop-blur-sm border border-border rounded-lg text-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Container - All sections use same container */}
      <div className="container mx-auto px-4">
        {/* Quick Links - Right Below Hero */}
        <section className="py-8 border-b border-border">
          <div className="flex flex-wrap gap-3">
            {project.frontendLive && (
              <a
                href={project.frontendLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  Frontend
                </Button>
              </a>
            )}
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  Backend
                </Button>
              </a>
            )}
            {project.backendLive && (
              <a
                href={project.backendLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <ArrowUpRight className="w-4 h-4" />
                  API
                </Button>
              </a>
            )}
          </div>
        </section>

        {/* Description Section - Clean Typography */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Features Section - Clean List */}
        <section className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Key Features
            </h2>

            <div className="space-y-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Case Study Section - Clean Typography */}
        {project.caseStudy && (
          <section className="py-16 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Technical Details
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.caseStudy}
                </p>
              </div>
            </motion.div>
          </section>
        )}

        {/* Bottom Spacing */}
        <div className="py-16" />
      </div>
    </div>
  );
}
