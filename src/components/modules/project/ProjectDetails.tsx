import Image from "next/image";
import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default async function ProjectDetails({
  project,
}: {
  project: IProject;
}) {
  if (!project) return notFound();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
          {project.title}
        </h1>

        {/* Thumbnail */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
              dark:text-white text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="text-lg text-muted-foreground leading-relaxed mb-12">
          {project.description}
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* 🚀 Case Study */}
        {project.caseStudy && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Case Study
            </h2>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {project.caseStudy}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-4">
          {/* Frontend Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-blue-600" />
                  Frontend Repo
                </Button>
              </a>
            )}

            {project.frontendLive && (
              <a
                href={project.frontendLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  Frontend Live
                </Button>
              </a>
            )}
          </div>

          {/* Backend Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-purple-600" />
                  Backend Repo
                </Button>
              </a>
            )}

            {project.backendLive && (
              <a
                href={project.backendLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-purple-600" />
                  Backend Live
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
