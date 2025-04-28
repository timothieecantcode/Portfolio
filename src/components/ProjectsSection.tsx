
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "GreenPocket",
      description: "Eco-friendly finance tracker.",
      techStack: ["React Native", "Firebase", "Stripe"],
      url: "#"
    },
    {
      id: 2,
      title: "BusBooker",
      description: "Real-time intercity ticketing app.",
      techStack: ["Next.js", "Node.js", "MongoDB"],
      url: "#"
    },
    {
      id: 3,
      title: "TaskFlow",
      description: "Developer workflow automation.",
      techStack: ["TypeScript", "Express", "Redis"],
      url: "#"
    },
    {
      id: 4,
      title: "MindMapper",
      description: "Visual brainstorming tool.",
      techStack: ["React", "D3.js", "Electron"],
      url: "#"
    },
    {
      id: 5,
      title: "HealthPulse",
      description: "Medical appointment scheduler.",
      techStack: ["Vue.js", "Python", "PostgreSQL"],
      url: "#"
    },
    {
      id: 6,
      title: "CodeMentor",
      description: "Peer programming platform.",
      techStack: ["WebRTC", "Socket.io", "AWS"],
      url: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlowCard key={project.id} delayIndex={index}>
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold italic mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-dark-200 rounded-full text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url} 
                  className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
