"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Check,
  Sparkles,
  Code2,
  FileText,
} from "lucide-react";
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
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Floating Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Project Showcase
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
                {project.title}
              </h1>

              {/* Tech Tags */}
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

      {/* Description Section - Full Width Card */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-3xl shadow-2xl border border-border p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Project Overview
                </h2>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.frontendRepo && (
                <motion.a
                  href={project.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="block"
                >
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                      <Github className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      Frontend Code
                    </p>
                  </div>
                </motion.a>
              )}

              {project.frontendLive && (
                <motion.a
                  href={project.frontendLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="block"
                >
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-colors">
                      <ExternalLink className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      Frontend Live
                    </p>
                  </div>
                </motion.a>
              )}

              {project.backendRepo && (
                <motion.a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="block"
                >
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-colors">
                      <Github className="w-6 h-6 text-purple-500" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      Backend Code
                    </p>
                  </div>
                </motion.a>
              )}

              {project.backendLive && (
                <motion.a
                  href={project.backendLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="block"
                >
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-colors">
                      <ExternalLink className="w-6 h-6 text-purple-500" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      Backend Live
                    </p>
                  </div>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Masonry Style */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
                <Code2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  Core Features
                </span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                What Makes It Special
              </h2>
            </div>

            <div className="space-y-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Check className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <p className="text-foreground text-lg leading-relaxed flex-1 pt-0.5">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      {project.caseStudy && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Deep Dive
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>

              <div className="bg-gradient-to-br from-card to-muted/30 rounded-3xl border border-border p-8 lg:p-12 shadow-xl">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed text-lg">
                  {project.caseStudy}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to explore?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Experience this project live or dive into the codebase
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {project.frontendLive && (
                <a
                  href={project.frontendLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Launch Project
                  </Button>
                </a>
              )}
              {project.frontendRepo && (
                <a
                  href={project.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2">
                    <Github className="w-5 h-5" />
                    View Source
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
