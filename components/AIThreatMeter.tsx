'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';

const AIThreatMeter = () => {
  const [threatLevel, setThreatLevel] = useState(67); // 0-100
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setThreatLevel(prev => {
        const change = Math.random() * 10 - 5;
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getColor = (level: number) => {
    if (level < 30) return { 
      color: '#10b981', 
      label: 'LOW RISK', 
      glow: 'rgba(16, 185, 129, 0.5)',
      bg: 'from-green-500/20 to-emerald-500/10',
      border: 'border-green-500/30'
    };
    if (level < 60) return { 
      color: '#f59e0b', 
      label: 'MODERATE', 
      glow: 'rgba(245, 158, 11, 0.5)',
      bg: 'from-yellow-500/20 to-amber-500/10',
      border: 'border-yellow-500/30'
    };
    if (level < 80) return { 
      color: '#f97316', 
      label: 'HIGH RISK', 
      glow: 'rgba(249, 115, 22, 0.5)',
      bg: 'from-orange-500/20 to-red-500/10',
      border: 'border-orange-500/30'
    };
    return { 
      color: '#ef4444', 
      label: 'CRITICAL', 
      glow: 'rgba(239, 68, 68, 0.5)',
      bg: 'from-red-500/20 to-rose-500/10',
      border: 'border-red-500/30'
    };
  };

  const { color, label, glow, bg, border } = getColor(threatLevel);
  const rotation = -135 + (threatLevel / 100) * 270; // -135° to 135°

  return (
    <div className={`bg-gradient-to-br ${bg} backdrop-blur-sm border ${border} rounded-xl p-6 relative overflow-hidden`}>
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ background: `radial-gradient(circle at 50% 50%, ${glow}, transparent 70%)` }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0099cc] flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 212, 255, 0.3)',
                '0 0 30px rgba(0, 212, 255, 0.6)',
                '0 0 20px rgba(0, 212, 255, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h3 className="text-white text-lg font-bold">AI Threat Index</h3>
            <p className="text-gray-400 text-xs">Real-time risk assessment</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <AlertTriangle className="w-5 h-5 text-gray-600" />
        </motion.div>
      </div>
      
      <div className="relative w-full aspect-square max-w-[280px] mx-auto">
        {/* Gauge Background */}
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="33%" stopColor="#f59e0b" />
              <stop offset="66%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background Arc - Darker with inner shadow */}
          <path
            d="M 30 170 A 80 80 0 1 1 170 170"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="22"
            strokeLinecap="round"
          />
          
          {/* Colored Arc with gradient */}
          <motion.path
            d="M 30 170 A 80 80 0 1 1 170 170"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 251.2 - (251.2 * threatLevel / 100) }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            filter="url(#glow)"
            style={{ 
              filter: `drop-shadow(0 0 8px ${glow})`,
            }}
          />
          
          {/* Overlay glow arc */}
          <motion.path
            d="M 30 170 A 80 80 0 1 1 170 170"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 251.2 - (251.2 * threatLevel / 100) }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            opacity="0.6"
          />
          
          {/* Tick Marks */}
          {[0, 25, 50, 75, 100].map((tick, i) => {
            const angle = -135 + (tick / 100) * 270;
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + Math.cos(rad) * 70;
            const y1 = 100 + Math.sin(rad) * 70;
            const x2 = 100 + Math.cos(rad) * 80;
            const y2 = 100 + Math.sin(rad) * 80;
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#666"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Center Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div 
              className="text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${color}, ${color}dd)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 8px ${glow})`
              }}
            >
              {Math.round(threatLevel)}
            </div>
          </motion.div>
          <div className="text-gray-400 text-xs font-semibold mb-2">Risk Score</div>
          <motion.div
            className="px-5 py-2 rounded-full text-xs font-bold border-2 backdrop-blur-sm"
            style={{ 
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}40`,
              boxShadow: `0 0 20px ${glow}, inset 0 0 20px ${glow}`
            }}  
            animate={{ 
              boxShadow: [
                `0 0 15px ${glow}, inset 0 0 15px ${glow}`,
                `0 0 25px ${glow}, inset 0 0 25px ${glow}`,
                `0 0 15px ${glow}, inset 0 0 15px ${glow}`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {label}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Legend */}
      <div className="relative z-10 grid grid-cols-4 gap-3 mt-6">
        {[
          { color: 'green', label: 'Low', range: '0-30' },
          { color: 'yellow', label: 'Moderate', range: '30-60' },
          { color: 'orange', label: 'High', range: '60-80' },
          { color: 'red', label: 'Critical', range: '80-100' },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className={`w-4 h-4 rounded-full bg-${item.color}-500 mx-auto mb-1.5 shadow-lg shadow-${item.color}-500/50`}></div>
            <div className="text-gray-300 text-xs font-semibold">{item.label}</div>
            <div className="text-gray-600 text-[10px]">{item.range}</div>
          </div>
        ))}
      </div>

      {/* Status indicator */}
      <div className="relative z-10 mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-gray-400 text-xs">Live Monitoring</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <TrendingUp className="w-3 h-3" />
          <span>Updated 2s ago</span>
        </div>
      </div>
    </div>
  );
};

export default AIThreatMeter;
