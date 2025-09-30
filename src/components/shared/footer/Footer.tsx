// components/layout/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Shahariar Sohan
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Backend Developer — MERN | PostgreSQL | Prisma
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 justify-center md:justify-end">
          <a
            href="https://github.com/shahariarsohan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shahariarsohan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sohanshahariar4@gmail.com"
            className="text-muted-foreground hover:text-primary transition text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border text-center py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shahariar Sohan. All rights reserved.
      </div>
    </footer>
  );
}
