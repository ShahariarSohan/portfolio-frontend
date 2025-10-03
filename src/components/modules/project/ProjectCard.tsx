// components/home/ProjectCard.tsx
import { IProject } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";



export default function ProjectCard({
  id,
  title,
  thumbnail,
  tags,
  githubLink,
  liveLink,
}: IProject) {
  return (
    <div className="group relative bg-muted rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      {/* Project Thumbnail */}
      <div className="relative w-full h-56 sm:h-60 lg:h-52 overflow-hidden rounded-t-2xl">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent rounded-t-2xl"></div>
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col justify-between h-[160px] sm:h-[180px]">
        {/* Project Title */}
        <Link href={`/projects/${id}`}>
          <h3 className="text-xl font-semibold text-foreground relative inline-block group transition-colors duration-300 hover:text-blue-600">
            {title}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-blue-900 text-white text-xs rounded-full transform transition group-hover:-translate-y-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub & Live Links */}
        <div className="flex gap-3 mt-1">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-700 text-foreground rounded-full hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-700 text-foreground rounded-full hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-110"
            >
              <HiOutlineLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
