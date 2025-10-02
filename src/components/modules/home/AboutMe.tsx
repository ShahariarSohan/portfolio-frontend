import {
  FaDatabase,
  FaCode,
  FaLightbulb,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          About Me
        </h2>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-foreground/70">
              Hi, I’m <span className="font-semibold">Shahariar Sohan</span>, a
              passionate backend developer specializing in{" "}
              <span className="font-semibold">
                MERN stack, PostgreSQL, and Prisma
              </span>
              . I build{" "}
              <span className="font-semibold">
                scalable, efficient, and maintainable web applications
              </span>{" "}
              that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/70">
              My focus is on writing{" "}
              <span className="font-semibold">
                clean, professional, and enterprise-grade code
              </span>
              . I constantly explore new technologies to enhance performance,
              security, and maintainability of applications.
            </p>
            <p className="text-lg text-foreground/70">
              My vision is to create software that not only works efficiently
              but also provides{" "}
              <span className="font-semibold">meaningful user experiences</span>
              . I aim to contribute to impactful projects while growing as a
              professional developer.
            </p>
          </div>

          {/* Skills / Highlights */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl shadow hover:shadow-lg transition">
              <FaCode className="text-3xl text-blue-500" />
              <div>
                <h4 className="font-semibold text-foreground">Clean Code</h4>
                <p className="text-foreground/70 text-sm">
                  Professional, maintainable, and scalable coding practices.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl shadow hover:shadow-lg transition">
              <FaDatabase className="text-3xl text-green-500" />
              <div>
                <h4 className="font-semibold text-foreground">
                  Database Design
                </h4>
                <p className="text-foreground/70 text-sm">
                  Efficient schema design, performance optimization, and data
                  integrity.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl shadow hover:shadow-lg transition">
              <FaReact className="text-3xl text-cyan-500" />
              <div>
                <h4 className="font-semibold text-foreground">
                  React App Building
                </h4>
                <p className="text-foreground/70 text-sm">
                  Building responsive, interactive, and modern React
                  applications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl shadow hover:shadow-lg transition">
              <SiNextdotjs className="text-3xl text-foreground" />
              <div>
                <h4 className="font-semibold text-foreground">
                  Next.js App Building
                </h4>
                <p className="text-foreground/70 text-sm">
                  Developing SSR, SSG, and optimized Next.js applications for
                  production.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl shadow hover:shadow-lg transition">
              <FaLightbulb className="text-3xl text-yellow-500" />
              <div>
                <h4 className="font-semibold text-foreground">
                  Problem Solving
                </h4>
                <p className="text-foreground/70 text-sm">
                  Tackling complex backend and fullstack challenges with clean
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
