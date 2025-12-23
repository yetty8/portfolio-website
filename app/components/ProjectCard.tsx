"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  img: string;
  github: string;
  live: string;
  techStack: string[];
}

export default function ProjectCard({
  title,
  description,
  challenge,
  solution,
  img,
  github,
  live,
  techStack,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-xl dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        
        <div className="mt-4 space-y-3">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Challenge</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{challenge}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Solution</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FiGithub className="w-4 h-4 mr-2" />
            View Code
          </Link>
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FiExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}