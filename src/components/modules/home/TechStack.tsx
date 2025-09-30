// components/home/TechStack.tsx
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiMongoose,
} from "react-icons/si";

export default function TechStack() {
  const techs = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Prisma", icon: <SiPrisma className="text-gray-700" /> },
    { name: "Express.js", icon: <FaServer className="text-foreground" /> },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          My Tech Stack
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-muted rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <p className="text-foreground font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
