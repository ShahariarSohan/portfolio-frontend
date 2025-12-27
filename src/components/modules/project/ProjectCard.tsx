"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IProject } from "@/types/project.type";

export default function ProjectCard({
  id,
  title,
  thumbnail,
  description,
  tags,
  frontendRepo,
  frontendLive,
  backendRepo,
  backendLive,
}: IProject) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="group relative w-full h-[350px] rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={95}
            className="object-cover"
            priority={false}
          />
        </motion.div>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content - Left aligned */}
      <div className="relative h-full flex items-center px-4  py-6">
        <div className="w-full max-w-2xl space-y-4">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-foreground"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base text-muted-foreground line-clamp-2 max-w-xl leading-relaxed"
          >
            {description.slice(0, 200)}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 py-1"
          >
            {tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm",
                  "bg-primary/10 text-primary border border-primary/20"
                )}
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-primary/10 text-primary border border-primary/20">
                +{tags.length - 4}
              </span>
            )}
          </motion.div>

          {/* Action buttons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <Link href={`/projects/${id}`}>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </Link>

            <TooltipProvider>
              <div className="flex gap-2 flex-wrap">
                {frontendRepo && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={frontendRepo} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-9 w-9 rounded-lg border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500"
                          >
                            <Github className="h-4 w-4 text-blue-500" />
                          </Button>
                        </motion.div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Frontend Code</TooltipContent>
                  </Tooltip>
                )}

                {frontendLive && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={frontendLive} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-9 w-9 rounded-lg border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500"
                          >
                            <ExternalLink className="h-4 w-4 text-blue-500" />
                          </Button>
                        </motion.div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Frontend Live</TooltipContent>
                  </Tooltip>
                )}

                {backendRepo && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={backendRepo} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-9 w-9 rounded-lg border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500"
                          >
                            <Github className="h-4 w-4 text-purple-500" />
                          </Button>
                        </motion.div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Backend Code</TooltipContent>
                  </Tooltip>
                )}

                {backendLive && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={backendLive} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-9 w-9 rounded-lg border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500"
                          >
                            <ExternalLink className="h-4 w-4 text-purple-500" />
                          </Button>
                        </motion.div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Backend Live</TooltipContent>
                  </Tooltip>
                )}
              </div>
            </TooltipProvider>
          </motion.div>
        </div>
      </div>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(var(--primary-rgb, 59, 130, 246), 0.3), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
