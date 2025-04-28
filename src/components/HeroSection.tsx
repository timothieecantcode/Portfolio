
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
      {/* Corner light effect */}
      <div className="corner-light animate-light-flash"></div>
      
      {/* Central glow effect */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial-glow opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-light-flash"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold italic mb-6 leading-tight relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.15)' }}
        >
          Hi, I'm John Doe — turning ideas into powerful digital products.
          <span className="absolute -inset-1 bg-white/5 rounded-lg blur-2xl -z-10"></span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-light italic text-white/80 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Building robust solutions with code, design, and caffeine.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a 
            href="#projects" 
            className="cta-button group inline-flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
