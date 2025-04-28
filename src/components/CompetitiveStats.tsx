
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CompetitiveStats: React.FC = () => {
  // Dummy data for charts
  const leetcodeData = [
    { month: 'Jan', rating: 1400 },
    { month: 'Feb', rating: 1450 },
    { month: 'Mar', rating: 1500 },
    { month: 'Apr', rating: 1480 },
    { month: 'May', rating: 1550 },
    { month: 'Jun', rating: 1600 },
    { month: 'Jul', rating: 1650 },
    { month: 'Aug', rating: 1700 },
  ];
  
  const codeforcesData = [
    { month: 'Jan', rating: 1700 },
    { month: 'Feb', rating: 1750 },
    { month: 'Mar', rating: 1800 },
    { month: 'Apr', rating: 1850 },
    { month: 'May', rating: 1900 },
    { month: 'Jun', rating: 1870 },
    { month: 'Jul', rating: 1950 },
    { month: 'Aug', rating: 2000 },
  ];
  
  const codechefData = [
    { month: 'Jan', rating: 1600 },
    { month: 'Feb', rating: 1650 },
    { month: 'Mar', rating: 1680 },
    { month: 'Apr', rating: 1750 },
    { month: 'May', rating: 1800 },
    { month: 'Jun', rating: 1850 },
    { month: 'Jul', rating: 1840 },
    { month: 'Aug', rating: 1900 },
  ];

  const renderChart = (data: typeof leetcodeData, color: string) => {
    return (
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
          <XAxis dataKey="month" stroke="#666666" tick={{ fill: '#666666', fontSize: 10 }} />
          <YAxis stroke="#666666" tick={{ fill: '#666666', fontSize: 10 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333333', borderRadius: '4px' }} 
            labelStyle={{ color: 'white' }} 
          />
          <Line 
            type="monotone" 
            dataKey="rating" 
            stroke={color} 
            strokeWidth={2} 
            dot={{ r: 2, fill: color }} 
            activeDot={{ r: 4, fill: color, stroke: 'white', strokeWidth: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Competitive Programming Stats
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LeetCode Card */}
          <GlowCard delayIndex={0}>
            <div className="p-6">
              <h3 className="text-xl font-bold italic mb-2">LeetCode</h3>
              <p className="text-white/80 mb-4">350 problems solved</p>
              <div className="mb-3 h-[150px]">
                {renderChart(leetcodeData, '#FFA116')}
              </div>
              <p className="text-sm text-white/60 text-center">1400 → 1700 rating trend</p>
            </div>
          </GlowCard>
          
          {/* Codeforces Card */}
          <GlowCard delayIndex={1}>
            <div className="p-6">
              <h3 className="text-xl font-bold italic mb-2">Codeforces</h3>
              <p className="text-white/80 mb-4">Current: 1850</p>
              <div className="mb-3 h-[150px]">
                {renderChart(codeforcesData, '#318CE7')}
              </div>
              <p className="text-sm text-white/60 text-center">Highest: 2000</p>
            </div>
          </GlowCard>
          
          {/* CodeChef Card */}
          <GlowCard delayIndex={2}>
            <div className="p-6">
              <h3 className="text-xl font-bold italic mb-2">CodeChef</h3>
              <p className="text-white/80 mb-4">4⭐ Rating</p>
              <div className="mb-3 h-[150px]">
                {renderChart(codechefData, '#9C7A2E')}
              </div>
              <p className="text-sm text-white/60 text-center">Best Rank: 150</p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStats;
