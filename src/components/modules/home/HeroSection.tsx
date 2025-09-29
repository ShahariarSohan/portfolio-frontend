import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 container mx-auto mt-10 lg:mt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-center  items-center md:gap-20 ">
          {/* Content - Left Side */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl  font-bold text-balance leading-tight text-foreground">
                Here is Shahariar Sohan.
                <br />
                <span className="text-foreground">MERN Stack Developer</span>
              </h1>
              <p className=" text-foreground max-w-2xl mx-auto lg:mx-0">
                Passionate about database,server and scalable systems
              </p>
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
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Design For
          </h3>
          <p className="text-foreground font-medium">Web Application</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Phone
          </h3>
          <p className="text-foreground font-medium">+10 (67) 367-9034</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Drop your Message
          </h3>
          <p className="text-foreground font-medium">
            sohanshahariar4@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
