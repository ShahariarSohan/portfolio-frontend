"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink} from "lucide-react";
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
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 text-card-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {description.slice(0,200)}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={cn(
              "px-2 py-1 text-xs font-medium rounded-full border",
              "bg-blue-50 text-blue-600 border-blue-200",
              "dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Repo / Live Buttons — FE & BE distinction */}
      <TooltipProvider>
        <div className="flex gap-2 mb-4">
          {/* Frontend Repo */}
          {frontendRepo && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={frontendRepo} target="_blank">
                  <Button size="icon" variant="secondary" className="h-9 w-9">
                    <Github className="h-4 w-4 text-blue-600" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Frontend GitHub</TooltipContent>
            </Tooltip>
          )}

          {/* Frontend Live */}
          {frontendLive && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={frontendLive} target="_blank">
                  <Button size="icon" variant="secondary" className="h-9 w-9">
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Frontend Live</TooltipContent>
            </Tooltip>
          )}

          {/* Backend Repo */}
          {backendRepo && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={backendRepo} target="_blank">
                  <Button size="icon" variant="secondary" className="h-9 w-9">
                    <Github className="h-4 w-4 text-purple-600" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Backend GitHub</TooltipContent>
            </Tooltip>
          )}

          {/* Backend Live */}
          {backendLive && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={backendLive} target="_blank">
                  <Button size="icon" variant="secondary" className="h-9 w-9">
                    <ExternalLink className="h-4 w-4 text-purple-600" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Backend Live</TooltipContent>
            </Tooltip>
          )}
        </div>
      </TooltipProvider>

      {/* View Details in separate row */}
      <div className="mt-auto pt-2">
        <Link href={`/projects/${id}`} className="block w-full">
          <Button className="w-full rounded-xl">View Details</Button>
        </Link>
      </div>
    </motion.div>
  );
}
