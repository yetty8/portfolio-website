"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      if (!isMobileView && videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Video autoplay failed:", error);
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floating = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const techIcons = [
    { icon: <FaReact className="w-6 h-6 text-blue-500" />, name: "React" },
    { icon: <SiNextdotjs className="w-6 h-6 text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="w-6 h-6 text-blue-600" />, name: "TypeScript" },
    { icon: <FaNodeJs className="w-6 h-6 text-green-600" />, name: "Node.js" },
    { icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" />, name: "Tailwind" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
       <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/code.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div variants={item} className="inline-block mb-6">
            <span className="px-4 py-2 text-sm font-medium text-blue-100 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-500/30">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Full-Stack Web Developer <br className="hidden sm:block" />
            Building{" "}
            <span className="text-blue-400">Modern</span>,{" "}
            <span className="text-purple-400">Scalable</span>{" "}
            Web Applications
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-lg leading-8 text-gray-300"
          >
            I design and build end-to-end web applications using Next.js, React,
            Node.js, and modern databases — focused on clean architecture,
            performance, and real-world usability.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all bg-blue-600 hover:bg-blue-700 rounded-lg hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get In Touch
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/Yetbarek-Resume-v2.pdf"
              download
              className="group flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all bg-transparent hover:bg-white/10 rounded-lg border border-white/20"
            >
              Download CV
              <FiDownload className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16"
          >
            <p className="mb-6 text-sm font-medium text-gray-300">TRUSTED BY DEVELOPERS WORLDWIDE</p>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-24">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.5 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }
                  }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center group"
                >
                  <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-xs text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with fixed position */}
      <div className="fixed bottom-10 left-0 w-full z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 1 }
          }}
          className="flex flex-col items-center"
        >
          <p className="mb-2 text-sm text-gray-300">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-gray-300 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/4 left-10 z-10"
            variants={floating}
            initial="initial"
            animate="animate"
          >
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <FaReact className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 right-20 z-10"
            variants={floating}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1s" }}
          >
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <SiTypescript className="w-8 h-8 text-blue-600" />
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hero;