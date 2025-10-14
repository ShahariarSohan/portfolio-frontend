import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 container mx-auto mt-10 lg:mt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-center  items-center gap-10 md:gap-20 ">
          {/* Content - Left Side */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl  font-bold text-balance leading-tight text-foreground">
                Shahariar Sohan.
                <br />
                <span className="text-foreground">MERN Stack Developer</span>
              </h1>
              <p className=" text-foreground max-w-2xl mx-auto lg:mx-0">
                Passionate about databases, servers, and scalable systems
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                className="gap-2 transition-transform hover:scale-105"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <Image
                  src="/images/sohan.jpg"
                  alt="Sohan - MERN Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mt-20 text-center md:text-start">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Work For
          </h3>
          <p className="text-foreground font-semibold">Web Application</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Phone
          </h3>
          <p className="text-foreground font-semibold">+880 1622 143630</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Drop me an email
          </h3>
          <p className="text-foreground font-semibold">
            sohanshahariar4@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
