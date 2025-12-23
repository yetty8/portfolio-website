"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const aboutItems = [
  {
    title: "Frontend Development",
    description: "Building interactive and responsive user interfaces that prioritize usability and accessibility.",
    icon: <FaCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "Backend Development",
    description: "Creating scalable server-side applications with Node.js, Express, and efficient database management.",
    icon: <FaServer className="w-8 h-8 text-green-600 dark:text-green-400" />
  },
  {
    title: "Full-Stack Solutions",
    description: "Delivering end-to-end applications that seamlessly integrate frontend and backend for real-world use.",
    icon: <FaTools className="w-8 h-8 text-purple-600 dark:text-purple-400" />
  }
];

const techStack = [
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, color: "text-blue-600 dark:text-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" />, color: "text-black dark:text-white" },
  { name: "React", icon: <SiReact className="w-6 h-6" />, color: "text-blue-500 dark:text-blue-400" },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" />, color: "text-green-600 dark:text-green-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" />, color: "text-cyan-500 dark:text-cyan-400" },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" />, color: "text-green-500 dark:text-green-400" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start mb-16 gap-10"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
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
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4"
            >
              About Me
            </motion.h2>
            <div className="w-20 h-1 mb-6 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4"
            >
              <p>
                I’m a Full-Stack Web Developer specializing in building **modern web applications** that solve real user problems.
                I work with React, Next.js, Node.js, and MongoDB to deliver clean, scalable solutions with performance, usability, and maintainability in mind.
              </p>
              <p>
                I thrive on transforming complex workflows into intuitive interfaces and building backend systems that reliably support real-world decision-making.
              </p>
              <p>
                My approach balances **technical excellence, thoughtful design, and real-world impact**, ensuring every project I deliver is robust, accessible, and visually appealing.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* What I Do */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">What I Do</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="p-6 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className={`flex flex-col items-center p-4 transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 ${tech.color}`}
              >
                <div className="mb-2">{tech.icon}</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
