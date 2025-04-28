
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
    <section id="projects" className="py-20 px-4 relative">
      {/* Corner light effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-corner-light opacity-20 z-0 animate-light-flash"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlowCard 
              key={project.id} 
              delayIndex={index} 
              intensity={index % 3 === 0 ? 'high' : 'medium'}
              className="group"
            >
              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Highlight effect on hover */}
                <div className="absolute -inset-x-2 -inset-y-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity"></div>
                
                <h3 className="text-xl font-bold italic mb-2 group-hover:text-shadow-sm">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-dark-200 rounded-full text-white/60 group-hover:text-white/80 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url} 
                  className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group transition-colors relative"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
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
