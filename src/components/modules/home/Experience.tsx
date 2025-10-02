"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        </div>

        {/* ePay Wallet Experience */}
        <Card className="border border-muted/40">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">
                MERN Stack Developer – ePay Wallet
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                Jan 2025 – Present
              </span>
            </div>
            <CardDescription className="text-primary font-medium">
              Digital Wallet System (Inspired by bKash/Nagad)
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-foreground/90 dark:text-foreground/80">
              Built a complete digital wallet ecosystem with{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                role-based dashboards
              </span>{" "}
              (
              <span className="font-semibold text-foreground dark:text-foreground">
                Admin
              </span>
              ,{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                User
              </span>
              ,{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                Agent
              </span>
              ), secure{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                JWT authentication
              </span>
              , and{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                real-time wallet transactions
              </span>{" "}
              using Express.js, MongoDB, and React. Designed REST APIs with{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                enterprise-grade modular architecture
              </span>
              , enabling features like deposit, withdrawal, and peer-to-peer
              transfers.
            </p>

            <p className="text-sm text-foreground/90 dark:text-foreground/80">
              During development, I initially used{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                three separate MongoDB collections
              </span>{" "}
              (
              <span className="font-semibold text-foreground dark:text-foreground">
                users
              </span>
              ,{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                agents
              </span>
              ,{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                admins
              </span>
              ) to isolate roles. This approach worked for CRUD operations but
              caused complexity when implementing{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                Google OAuth
              </span>
              , because user identity management had to be duplicated across
              collections.
            </p>

            <p className="text-sm text-foreground/90 dark:text-foreground/80">
              Through this experience, I learned why{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                professional systems use a single unified collection
              </span>{" "}
              with{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                role-based discriminators
              </span>{" "}
              — improving scalability and reducing redundant logic. I plan to{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                refactor
              </span>{" "}
              this in the next iteration to align with modern architectural best
              practices.
            </p>

            {/* Frontend Focus */}
            <p className="text-sm text-foreground/90 dark:text-foreground/80">
              On the frontend, developed responsive dashboards using{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                React
              </span>
              ,{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                Redux Toolkit
              </span>
              , and{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                RTK Query
              </span>{" "}
              for state and data management. Integrated APIs securely and used{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                Shadcn/UI
              </span>{" "}
              with{" "}
              <span className="font-semibold text-foreground dark:text-foreground">
                Tailwind CSS
              </span>{" "}
              to maintain a consistent design system and dark/light mode
              compatibility. Focused on component reusability, accessibility,
              and clean modular folder structure aligned with enterprise-grade
              frontend patterns.
            </p>

            {/* Tech Stack */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-1">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Mongoose",
                  "JWT",
                  "React",
                  "Redux Toolkit",
                  "RTK Query",
                  "Tailwind CSS",
                  "TypeScript",
                  "Shadcn/UI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-blue-900  text-white rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-1">Key Takeaways</h4>
              <ul className="list-disc pl-5 text-sm text-foreground/90 dark:text-foreground/80 space-y-1">
                <li>
                  Learned importance of unified schema design for scalable
                  authentication.
                </li>
                <li>
                  Implemented modular backend structure for maintainability and
                  clarity.
                </li>
                <li>
                  Enhanced frontend with role-based dashboards and secure API
                  integration.
                </li>
                <li>
                  Developed production-ready architecture following enterprise
                  standards.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
