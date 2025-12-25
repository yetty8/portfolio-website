"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import Link from "next/link";

const aboutItems = [
  {
    title: "Frontend Development",
    description: "Building interactive and accessible interfaces that delight users and improve engagement.",
    impact: "Optimized UI responsiveness and accessibility for high user satisfaction.",
    icon: <FaCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "Backend Development",
    description: "Creating scalable server-side applications with Node.js, Express, and efficient database management.",
    impact: "Designed reliable APIs and database structures that handle real-world traffic smoothly.",
    icon: <FaServer className="w-8 h-8 text-green-600 dark:text-green-400" />
  },
  {
    title: "Full-Stack Solutions",
    description: "Delivering end-to-end applications that integrate frontend and backend seamlessly.",
    impact: "Enabled real-world functionality by connecting interactive UI with robust backend systems.",
    icon: <FaTools className="w-8 h-8 text-purple-600 dark:text-purple-400" />
  }
];

const techStack = [
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, color: "text-blue-600 dark:text-blue-400", category: "Frontend/Backend" },
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" />, color: "text-black dark:text-white", category: "Frontend" },
  { name: "React", icon: <SiReact className="w-6 h-6" />, color: "text-blue-500 dark:text-blue-400", category: "Frontend" },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" />, color: "text-green-600 dark:text-green-400", category: "Backend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" />, color: "text-cyan-500 dark:text-cyan-400", category: "Frontend" },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" />, color: "text-green-500 dark:text-green-400", category: "Database" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-6 mx-auto max-w-7xl">

        {/* Profile & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start mb-16 gap-10"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0 transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/Yetty3.jpg"
              alt="Yetbarek Temesgen"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4"
            >
              About Me
            </motion.h2>
            <div className="w-20 h-1 mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4"
            >
              <p>
                I’m a Full-Stack Web Developer specializing in building <strong>modern, user-centered web applications</strong> that solve real problems. I work with React, Next.js, Node.js, and MongoDB to deliver scalable, maintainable solutions.
              </p>
              <p>
                I enjoy transforming complex workflows into intuitive interfaces and creating backend systems that reliably support real-world decision-making.
              </p>
              <p>
                My approach balances <strong>technical excellence, thoughtful design, and measurable impact</strong>, ensuring each project is robust, accessible, and visually appealing.
              </p>
            </motion.div>
            <Link
              href="#projects"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium"
            >
              View My Projects
            </Link>
          </div>
        </motion.div>

        {/* What I Do */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">What I Do</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className={`relative flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer group transition-transform duration-300 hover:-translate-y-1 ${tech.color}`}
                title={`${tech.name} (${tech.category})`}
              >
                <div className="mb-2">{tech.icon}</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                <span className="absolute bottom-2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
