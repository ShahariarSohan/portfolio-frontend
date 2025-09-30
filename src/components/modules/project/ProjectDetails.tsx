import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import { notFound } from "next/navigation";

// Temporary demo data (replace with server fetch)
const demoProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    thumbnail: "/images/sohan.jpg",
    description:
            "A personal portfolio website built with Next.js, ShadCN, and Tailwind CSS. It showcases my professional journey, technical skills, and featured projects with an elegant dark/light mode toggle.A personal portfolio website built with Next.js, ShadCN, and Tailwind CSS. It showcases my professional journey, technical skills, and featured projects with an elegant dark/light mode toggle.A personal portfolio website built with Next.js, ShadCN, and Tailwind CSS. It showcases my professional journey, technical skills, and featured projects with an elegant dark/light mode toggle.A personal portfolio website built with Next.js, ShadCN, and Tailwind CSS. It showcases my professional journey, technical skills, and featured projects with an elegant dark/light mode toggle.",
    githubLink: "https://github.com/demo/portfolio",
    liveLink: "https://portfolio-demo.com",
    features: [
      "Next.js 14 App Router",
      "Server Components & SSR",
      "Dynamic routing for project pages",
      "ShadCN UI dark/light mode",
      "Responsive Tailwind design",
    ],
    tags: ["Next.js", "React", "TypeScript", "ShadCN", "TailwindCSS"],
  },
];

export default async function ProjectDetails({ id }:{id:string}
) {
  const project = demoProjects.find((p) => p.id === Number(id));

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
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
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

        {/* Links */}
        <div className="flex justify-center gap-6">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-muted hover:bg-accent text-foreground transition"
            >
              <FaGithub className="text-xl" />
              <span>View Code</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-muted hover:bg-accent text-foreground transition"
            >
              <HiOutlineLink className="text-xl" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
