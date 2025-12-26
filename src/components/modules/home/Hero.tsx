"use client";

import { ShinyButton } from "@/components/ui/shiny-button";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GradientMesh from "@/components/shared/animation/GradientMesh";
import FloatingBlobs from "@/components/shared/animation/FloatingBlobs";
import MorphingCircles from "@/components/shared/animation/MorphingCircles";
import SpiralParticles from "@/components/shared/animation/SpiralParticles";
import CursorGlow from "@/components/shared/animation/CursorGlow";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative py-10 px-4 xl:py-0 xl:px-0 overflow-hidden"
    >
      {/* Animated Backgrounds */}
      <GradientMesh />
      <FloatingBlobs />
      <MorphingCircles />
      <SpiralParticles />
      <CursorGlow />

      <motion.div
        className="w-full relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20">
          {/* Content - Left Side */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div className="space-y-4">
              <motion.h1
                className="text-3xl font-bold text-balance leading-tight text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TextAnimate animation="slideLeft" by="character">
                  Shahariar Sohan.
                </TextAnimate>
                <span className="text-foreground">
                  <TextAnimate animation="slideLeft" by="character">
                    Full Stack Developer
                  </TextAnimate>
                </span>
              </motion.h1>

              <motion.p
                className="text-foreground max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Build scalable web applications with Next.js and React backed
                by PostgreSQL and MongoDB.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShinyButton className="gap-2">
                <a
                  href="/Shahariar-Sohan-Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  Download Resume
                </a>
              </ShinyButton>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Sohan - MERN Stack Developer"
                fill
                sizes="240px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Info with staggered entrance */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10"
      >
        <ContactInfo />
      </motion.div>
    </section>
  );
}
