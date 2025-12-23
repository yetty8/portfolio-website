export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "AI Task Manager",
    description:
      "A full-stack task management application with AI-assisted features for organizing and prioritizing tasks.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yetty8/AI-TASK-MANAGER",
    liveUrl: "https://ai-task-manager-2.vercel.app/",
  },
  {
    title: "IT Helpdesk System",
    description:
      "A ticketing system designed for IT support teams, allowing users to submit, track, and manage technical issues.",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    githubUrl: "https://github.com/yetty8/IT-Help-Desk",
    liveUrl: "https://it-help-desk-mauve.vercel.app/",
  },
  {
    title: "Hotel Booking Application",
    description:
      "A responsive hotel booking platform with room listings, availability, and booking management.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yetty8/Hotel",
    liveUrl: "https://hotel-one-nu.vercel.app/",
  },
];