/* eslint-disable react/no-unescaped-entities */

"use client";

import { socialLinks } from "@/data/socialLinks";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactForm } from "./ContactForm";

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

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20 mb-3 sm:mb-4">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-base sm:text-lg"
            >
              👋
            </motion.span>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              Get In Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
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
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Left Side - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 sm:space-y-8 text-center lg:text-start"
          >

            {/* Contact Details - Clean List */}
            <div className="space-y-3 md:space-y-3 lg:space-y-6 max-w-md mx-auto lg:mx-0">
              {/* Email */}
              <motion.a
                whileHover={{ x: 5 }}
                className="flex items-start lg:items-center gap-2 md:gap-2.5 lg:gap-4 group"
              >
                <div className="hidden  w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 lg:flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">
                    Email
                  </p>
                  <p className="text-xs md:text-sm lg:text-base text-foreground font-medium group-hover:text-primary transition-colors break-words">
                    sohanshahariar4@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                whileHover={{ x: 5 }}
                className="flex items-start lg:items-center gap-2 md:gap-2.5 lg:gap-4 group"
              >
                <div className="hidden w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 lg:flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">
                    Phone
                  </p>
                  <p className="text-xs md:text-sm lg:text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    +880 1622 143630
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start lg:items-center gap-2 md:gap-2.5 lg:gap-4 group"
              >
                <div className="hidden w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 lg:flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg md:text-xl lg:text-2xl text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">
                    Location
                  </p>
                  <p className="text-xs md:text-sm lg:text-base text-foreground font-medium">
                    Chattagram, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="w-full px-4 sm:px-0 mt-6 md:mt-8 lg:mt-10">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8 text-center lg:text-left">
                Connect With Me
              </h3>

              {/* Simple horizontal icon row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 lg:gap-4">
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
                    <div className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground hover:text-foreground transition-colors">
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
                className="mt-3 md:mt-4 lg:mt-6 text-[10px] md:text-xs lg:text-sm text-muted-foreground text-center lg:text-left"
              >
                Available for remote opportunities
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants}>
            {/* Contact Form */}
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shahariar Sohan. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Built with Next.js , PostgreSQL & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
