import ProjectCard from "./ProjectCard";




const demoProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    thumbnail: "/images/sohan.jpg",
    tags: ["Next.js", "Tailwind", "React"],
    githubLink: "https://github.com/demo/portfolio",
    liveLink: "https://portfolio-demo.com",
  },
  {
    id: 2,
    title: "E-commerce App",
    thumbnail: "/images/icon.png",
    tags: ["MERN", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/demo/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
  {
    id: 3,
    title: "E-commerce App",
    thumbnail: "/images/icon.png",
    tags: ["MERN", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/demo/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
  {
    id: 4,
    title: "E-commerce App",
    thumbnail: "/images/icon.png",
    tags: ["MERN", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/demo/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
  {
    id: 5,
    title: "E-commerce App",
    thumbnail: "/images/icon.png",
    tags: ["MERN", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/demo/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
  {
    id: 6,
    title: "E-commerce App",
    thumbnail: "/images/icon.png",
    tags: ["MERN", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/demo/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
  {
    id: 7,
    title: "E-commerce App",
    thumbnail: "/images/icon.png",
    tags: ["MERN", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/demo/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
