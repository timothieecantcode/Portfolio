
import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delayIndex?: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  delayIndex = 0
}) => {
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
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.05)" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
