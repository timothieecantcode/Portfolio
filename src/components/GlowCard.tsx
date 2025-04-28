
import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delayIndex?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  delayIndex = 0,
  intensity = 'medium'
}) => {
  // Define glow intensity levels
  const glowIntensity = {
    low: {
      initial: "0 0 5px rgba(255, 255, 255, 0.05), 0 0 10px rgba(255, 255, 255, 0.03)",
      hover: "0 0 15px rgba(255, 255, 255, 0.12), 0 0 30px rgba(255, 255, 255, 0.05)"
    },
    medium: {
      initial: "0 0 10px rgba(255, 255, 255, 0.08), 0 0 15px rgba(255, 255, 255, 0.04)",
      hover: "0 0 25px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.07)"
    },
    high: {
      initial: "0 0 15px rgba(255, 255, 255, 0.12), 0 0 20px rgba(255, 255, 255, 0.06)",
      hover: "0 0 35px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 255, 255, 0.1)"
    }
  };

  return (
    <motion.div
      className={`glow-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delayIndex * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: hoverScale,
        borderColor: "rgba(255, 255, 255, 0.3)",
      }}
      style={{
        boxShadow: glowIntensity[intensity].initial
      }}
      whileHover={{
        scale: hoverScale,
        boxShadow: glowIntensity[intensity].hover
      }}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default GlowCard;
