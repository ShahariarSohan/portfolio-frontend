/* eslint-disable react/no-unescaped-entities */

"use client"



import { socialLinks } from "@/data/socialLinks";
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

      <div className="container mx-auto px-4 py-20 relative z-10">
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
          className="grid lg:grid-cols-2 gap-12 "
        >
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Simple intro text */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities.
              </p>
            </div>

            {/* Contact Details - Clean List */}
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:sohanshahariar4@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <FaEnvelope className="text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    sohanshahariar4@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+8801622143630"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <FaPhone className="text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +880 1622 143630
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <FaMapMarkerAlt className="text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-foreground font-medium">
                    Chattagram, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start"
          >
            <div className="w-full">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
                Connect With Me
              </h3>

              {/* Simple horizontal icon row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="text-5xl text-muted-foreground hover:text-foreground transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Optional: Small text below icons */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-muted-foreground text-center lg:text-left"
              >
                Available for freelance or remote opportunities
              </motion.p>
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
              Built with  Next.js ,PostgreSQL & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
