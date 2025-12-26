/* eslint-disable react/no-unescaped-entities */
"use client";



import { socialLinks } from "@/data/sociaLinksl";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 lg:px-20 py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.span>
            <span className="text-sm font-semibold text-primary">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out through any of these
            channels
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Brand Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-3xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl font-bold text-foreground mb-2"
              >
                Shahariar Sohan
              </motion.h3>
              <p className="text-primary font-semibold text-lg mb-6">
                Full Stack Developer
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about building scalable web applications with modern
                technologies. Specialized in MERN stack, PostgreSQL, and cloud
                solutions.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Email */}
              <motion.a
                href="mailto:sohanshahariar4@gmail.com"
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <FaEnvelope className="text-2xl text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-foreground font-semibold">
                    sohanshahariar4@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+8801622143630"
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <FaPhone className="text-2xl text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-foreground font-semibold">
                    +880 1622 143630
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm border border-border rounded-2xl"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-2xl text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-foreground font-semibold">
                    Chattagram, Bangladesh
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div variants={itemVariants} className="flex items-center">
            <div className="w-full">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl ${social.color} transition-all`}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{
                        background: social.color.includes("blue-600")
                          ? "rgba(37, 99, 235, 0.2)"
                          : social.color.includes("gray")
                          ? "rgba(107, 114, 128, 0.2)"
                          : social.color.includes("blue-500")
                          ? "rgba(59, 130, 246, 0.2)"
                          : social.color.includes("pink")
                          ? "rgba(219, 39, 119, 0.2)"
                          : social.color.includes("green")
                          ? "rgba(34, 197, 94, 0.2)"
                          : "rgba(239, 68, 68, 0.2)",
                      }}
                    />

                    <div className="relative z-10 text-4xl mb-3 text-muted-foreground group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <p className="relative z-10 text-sm font-semibold text-foreground">
                      {social.name}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-current rounded-b-2xl ${social.borderColor}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center lg:text-left"
              >
                
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shahariar Sohan. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
