'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ThreatClassificationChart = () => {
  const data = [
    { label: 'True Positives', value: 68, color: 'from-green-500 to-emerald-600', glow: 'shadow-green-500/50' },
    { label: 'False Positives', value: 21, color: 'from-orange-500 to-amber-600', glow: 'shadow-orange-500/50' },
    { label: 'Under Investigation', value: 11, color: 'from-[#00f5ff] to-[#06b6d4]', glow: 'shadow-cyan-500/50' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  return (
    <div className="glass-strong rounded-2xl p-6 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Threat Classification</h3>
        <p className="text-sm text-gray-400">AI-powered threat analysis</p>
      </div>

      {/* Radial Chart */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const angle = (percentage / 100) * 360;
              const radius = 70;
              const circumference = 2 * Math.PI * radius;
              const strokeDasharray = `${(angle / 360) * circumference} ${circumference}`;
              const rotation = currentAngle;
              currentAngle += angle;

              return (
                <motion.circle
                  key={index}
                  cx="96"
                  cy="96"
                  r={radius}
                  fill="none"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="20"
                  strokeDasharray={strokeDasharray}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={{ strokeDasharray }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                  style={{
                    transformOrigin: 'center',
                    transform: `rotate(${rotation}deg)`,
                  }}
                />
              );
            })}
            
            {/* Gradients */}
            <defs>
              {data.map((item, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={item.color.includes('green') ? '#10b981' : item.color.includes('orange') ? '#f97316' : '#00f5ff'} />
                  <stop offset="100%" stopColor={item.color.includes('green') ? '#059669' : item.color.includes('orange') ? '#ea580c' : '#06b6d4'} />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{total}%</p>
              <p className="text-xs text-gray-400">Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 mt-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} ${item.glow} shadow-lg`}></div>
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
            <span className="text-sm font-bold text-white">{item.value}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThreatClassificationChart;
