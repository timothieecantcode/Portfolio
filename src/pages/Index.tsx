
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ProjectsSection from '@/components/ProjectsSection';
import EducationTimeline from '@/components/EducationTimeline';
import CompetitiveStats from '@/components/CompetitiveStats';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-dark min-h-screen relative"
      >
        {/* Light source effect */}
        <div className="light-source animate-light-flash"></div>
        
        {/* Light rays */}
        <div className="light-ray" style={{ 
          top: '20vh', 
          left: 0, 
          width: '30vw', 
          transform: 'rotate(30deg)',
          opacity: 0.1
        }}></div>
        
        <div className="light-ray" style={{ 
          top: '40vh', 
          left: 0, 
          width: '50vw', 
          transform: 'rotate(15deg)',
          opacity: 0.05
        }}></div>
        
        <div className="light-ray" style={{ 
          top: '60vh', 
          left: 0, 
          width: '40vw', 
          transform: 'rotate(-10deg)',
          opacity: 0.07
        }}></div>
        
        <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm border-b border-dark-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold italic">John Doe</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#projects" className="hover:text-white/70 transition-colors hover:text-shadow-sm">Projects</a></li>
                <li><a href="#contact" className="hover:text-white/70 transition-colors hover:text-shadow-sm">Contact</a></li>
                <li>
                  <a 
                    href="/resume.pdf" 
                    className="cta-button text-sm px-4 py-1"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="pt-16 relative z-10">
          <HeroSection />
          <TechMarquee />
          <ProjectsSection />
          <EducationTimeline />
          <CompetitiveStats />
          <BlogSection />
          <ContactSection />
        </main>
        
        <footer className="py-12 px-4 border-t border-dark-200 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
