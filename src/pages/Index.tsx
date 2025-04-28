
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
        className="bg-dark min-h-screen"
      >
        <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm border-b border-dark-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold italic">John Doe</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#projects" className="hover:text-white/70 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white/70 transition-colors">Contact</a></li>
                <li>
                  <a 
                    href="/resume.pdf" 
                    className="px-4 py-1 border border-white/30 rounded-md hover:bg-white/5 transition-all"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="pt-16">
          <HeroSection />
          <TechMarquee />
          <ProjectsSection />
          <EducationTimeline />
          <CompetitiveStats />
          <BlogSection />
          <ContactSection />
        </main>
        
        <footer className="py-12 px-4 border-t border-dark-200">
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
