"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "AI Task Manager",
    description: "An AI-powered task management application with smart organization, productivity features, and AI-assisted task prioritization.",
    challenge: "Creating an intuitive task management system that adapts to user behavior and provides intelligent suggestions.",
    solution: "Implemented machine learning algorithms to analyze task patterns and provide smart suggestions. Used React for the frontend and Node.js with Express for the backend, with MongoDB for data storage.",
    img: "/task.jpg",
    github: "https://github.com/yetty8/AI-TASK-MANAGER",
    live: "https://ai-task-manager-2.vercel.app/",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Machine Learning"]
  },
  {
    title: "IT Help-Desk",
    description: "IT Help-Desk is a web application that allows users to submit tickets for support and track their status.",
    challenge: "Building a streamlined support ticketing system with real-time updates and status tracking.",
    solution: "Developed a full-stack application with React frontend and Node.js backend, implementing WebSocket for real-time updates and role-based access control for different user types.",
    img: "/IT-helpdesk.jpg",
    github: "https://github.com/yetty8/IT-Help-Desk",
    live: "https://it-help-desk-mauve.vercel.app/",
    techStack: ["React", "Node.js", "MongoDB", "WebSocket"]
  },
  {
    title: "E-Commerce Store",
    description: "An online store built with React, Redux, and Stripe integration for payments.",
    challenge: "Creating a seamless shopping experience with secure payment processing.",
    solution: "Built a responsive e-commerce platform with product catalog, shopping cart, and secure checkout using Stripe integration. Implemented Redux for state management and responsive design for all devices.",
    img: "/website.jpg",
    github: "https://github.com/yetty8/ecommerce-store",
    live: "https://ecommerce-store-orpin-chi.vercel.app/",
    techStack: ["React", "Redux", "Stripe", "Tailwind CSS"]
  },
  {
    title: "Weather App",
    description: "A weather application built with Django, featuring real-time data, responsive UI, and location-based forecasts.",
    challenge: "Providing accurate weather data with a clean, intuitive interface.",
    solution: "Integrated with a weather API to fetch real-time data, implemented geolocation for automatic local weather, and created a responsive UI with Django templates and custom CSS.",
    img: "/weather.jpg",
    github: "https://github.com/yetty8/Django-Weather-App-1",
    live: "https://web-production-fd1a3.up.railway.app/",
    techStack: ["Django", "Python", "JavaScript", "REST API"]
  },
  {
    title: "Blog",
    description: "A personal blog built with React and Tailwind CSS, featuring dynamic categories and smooth routing.",
    challenge: "Creating a performant blog with rich content and smooth navigation.",
    solution: "Built with React for the frontend, implementing client-side routing with React Router and dynamic content loading. Used Tailwind CSS for styling and Markdown for content management.",
    img: "/travel.jpg",
    github: "https://github.com/yetty8/MyBlog",
    live: "https://my-blog-ochre-rho.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Markdown", "React Router"]
  },
  {
    title: "Hotel Website",
    description: "A modern hotel booking UI with animations, responsive design, and seamless user experience.",
    challenge: "Designing an intuitive booking interface with a focus on user experience.",
    solution: "Created a responsive booking platform with smooth animations, real-time availability checking, and a clean, modern UI using React and Framer Motion for animations.",
    img: "/Hotel.jpg",
    github: "https://github.com/yetty8/Hotel",
    live: "https://hotel-one-nu.vercel.app/",
    techStack: ["React", "Framer Motion", "Tailwind CSS"]
  },
];
interface Project {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  img: string;
  github: string;
  live: string;
  techStack: string[];
}

const ProjectModal = ({ project, onClose }: { project: Project | null, onClose: () => void }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-lg z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="relative h-64 md:h-80 w-full">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack?.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>
          
          <div className="mb-6 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Challenge</h4>
            <p className="text-gray-700 dark:text-gray-300">{project.challenge}</p>
          </div>

          <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Solution</h4>
            <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaGithub /> View Code
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                         hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.techStack?.length > 3 && (
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 text-sm">
                  {project.description}
                </p>
                <button 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}