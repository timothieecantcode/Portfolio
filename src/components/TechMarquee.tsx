
import React from 'react';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    "React", "Next.js", "Node.js", "TailwindCSS", "PostgreSQL", "AWS", "Docker", "GraphQL"
  ];
  
  const techStackRow2 = [
    "Java", "Python", "TypeScript", "MongoDB", "Redis", "Kubernetes", "GitHub Actions"
  ];
  
  const renderMarqueeItems = (items: string[]) => {
    // Duplicate items to create seamless loop
    const duplicatedItems = [...items, ...items];
    
    return duplicatedItems.map((tech, index) => (
      <span key={index} className="tech-badge mx-3">
        {tech}
      </span>
    ));
  };
  
  return (
    <section className="py-20 overflow-hidden bg-dark-100/30">
      {/* Top row - scrolling right */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll-right py-5 flex whitespace-nowrap">
          {renderMarqueeItems(techStackRow1)}
        </div>
        <div className="absolute top-0 animate-scroll-right py-5 flex whitespace-nowrap" style={{ left: '100%' }}>
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll-left py-5 flex whitespace-nowrap">
          {renderMarqueeItems(techStackRow2)}
        </div>
        <div className="absolute top-0 animate-scroll-left py-5 flex whitespace-nowrap" style={{ left: '100%' }}>
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
