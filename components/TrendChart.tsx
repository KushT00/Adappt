'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TrendChart = () => {
  const weeklyData = [
    { day: 'Mon', attacks: 145, incidents: 23 },
    { day: 'Tue', attacks: 189, incidents: 31 },
    { day: 'Wed', attacks: 167, incidents: 28 },
    { day: 'Thu', attacks: 203, incidents: 35 },
    { day: 'Fri', attacks: 178, incidents: 29 },
    { day: 'Sat', attacks: 134, incidents: 19 },
    { day: 'Sun', attacks: 156, incidents: 24 },
  ];

  const maxAttacks = Math.max(...weeklyData.map(d => d.attacks));
  const avgAttacks = weeklyData.reduce((sum, d) => sum + d.attacks, 0) / weeklyData.length;
  const trend = weeklyData[weeklyData.length - 1].attacks > weeklyData[0].attacks;
  const trendPercent = Math.abs(
    ((weeklyData[weeklyData.length - 1].attacks - weeklyData[0].attacks) / weeklyData[0].attacks) * 100
  ).toFixed(1);

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">Attack Frequency Trend</h3>
          <p className="text-gray-500 text-sm">Weekly analysis</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
          trend ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'
        }`}>
          {trend ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm font-bold">{trendPercent}%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48 mb-4">
        <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          {[0, 25, 50, 75, 100].map((percent, i) => (
            <line
              key={i}
              x1="0"
              y1={200 - (percent * 2)}
              x2="700"
              y2={200 - (percent * 2)}
              stroke="#2a2a2a"
              strokeWidth="1"
            />
          ))}

          {/* Area Fill */}
          <motion.path
            d={`M 0,200 ${weeklyData.map((d, i) => {
              const x = (i / (weeklyData.length - 1)) * 700;
              const y = 200 - ((d.attacks / maxAttacks) * 180);
              return `L ${x},${y}`;
            }).join(' ')} L 700,200 Z`}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Line */}
          <motion.path
            d={`M ${weeklyData.map((d, i) => {
              const x = (i / (weeklyData.length - 1)) * 700;
              const y = 200 - ((d.attacks / maxAttacks) * 180);
              return `${x},${y}`;
            }).join(' L ')}`}
            fill="none"
            stroke="#00d4ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Data Points */}
          {weeklyData.map((d, i) => {
            const x = (i / (weeklyData.length - 1)) * 700;
            const y = 200 - ((d.attacks / maxAttacks) * 180);
            
            return (
              <motion.g key={i}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#00d4ff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                />
                <motion.circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#0a0a0a"
                />
              </motion.g>
            );
          })}
        </svg>

        {/* X-Axis Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
          {weeklyData.map((d, i) => (
            <div key={i} className="text-xs text-gray-500">{d.day}</div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2a2a2a]">
        <div>
          <div className="text-gray-500 text-xs mb-1">Peak</div>
          <div className="text-white text-xl font-bold">{maxAttacks}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs mb-1">Average</div>
          <div className="text-white text-xl font-bold">{Math.round(avgAttacks)}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs mb-1">Today</div>
          <div className="text-[#00d4ff] text-xl font-bold">{weeklyData[weeklyData.length - 1].attacks}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendChart;
