"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaTools, FaAws } from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiMongodb, 
  SiPostgresql, 
  SiGraphql, 
  SiDocker, 
  SiGithub, 
  SiFigma, 
  SiJest, 
  SiCypress, 
  SiRedux, 
  SiExpress, 
  SiNestjs, 
  SiFirebase 
} from "react-icons/si";

const skills = {
  "Frontend": [
    { name: "React", icon: <FaReact className="w-8 h-8 text-white" />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-white" />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-white" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-white" />, level: 90 },
    { name: "Redux", icon: <SiRedux className="w-8 h-8 text-white" />, level: 80 },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-white" />, level: 85 },
    { name: "Express", icon: <SiExpress className="w-8 h-8 text-white" />, level: 85 },
    { name: "NestJS", icon: <SiNestjs className="w-8 h-8 text-white" />, level: 75 },
    { name: "GraphQL", icon: <SiGraphql className="w-8 h-8 text-white" />, level: 80 },
    { name: "REST APIs", icon: <FaServer className="w-8 h-8 text-white" />, level: 90 },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-white" />, level: 85 },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-white" />, level: 80 },
    { name: "Firebase", icon: <SiFirebase className="w-8 h-8 text-white" />, level: 75 },
  ],
  "Tools & Others": [
    { name: "Git & GitHub", icon: <SiGithub className="w-8 h-8 text-white" />, level: 85 },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 text-white" />, level: 75 },
    { name: "AWS", icon: <FaAws className="w-8 h-8 text-white" />, level: 70 },
    { name: "Jest", icon: <SiJest className="w-8 h-8 text-white" />, level: 80 },
    { name: "Cypress", icon: <SiCypress className="w-8 h-8 text-white" />, level: 75 },
    { name: "Figma", icon: <SiFigma className="w-8 h-8 text-white" />, level: 70 },
  ]
};

const categoryGradients: Record<string, string> = {
  "Frontend": "from-blue-500 to-blue-700",
  "Backend": "from-green-500 to-green-700",
  "Databases": "from-teal-500 to-teal-700",
  "Tools & Others": "from-purple-500 to-purple-700",
};

const categoryDescriptions: Record<string, string> = {
  "Frontend": "Building responsive, interactive user interfaces with modern tools.",
  "Backend": "Designing scalable server-side applications and APIs.",
  "Databases": "Managing structured and unstructured data efficiently.",
  "Tools & Others": "Optimizing development workflows with modern tools and practices.",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 bg-gradient-to-r ${categoryGradients[category]} rounded-2xl shadow-xl`}
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <div className="p-3 mr-4 bg-white/20 rounded-lg">
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{category}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{categoryDescriptions[category]}</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      className="p-4 bg-white/20 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 p-2 mr-4 rounded-lg bg-white/30">
                          {skill.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-white truncate">
                              {skill.name}
                            </p>
                            <span className="text-sm font-medium text-white">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-2 mt-2 bg-white/30 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-2 bg-white rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Category icons
function getCategoryIcon(category: string) {
  switch(category) {
    case 'Frontend': return <FaCode className="w-6 h-6 text-white" />;
    case 'Backend': return <FaServer className="w-6 h-6 text-white" />;
    case 'Databases': return <FaDatabase className="w-6 h-6 text-white" />;
    case 'Tools & Others': return <FaTools className="w-6 h-6 text-white" />;
    default: return <FaCode className="w-6 h-6 text-white" />;
  }
}
