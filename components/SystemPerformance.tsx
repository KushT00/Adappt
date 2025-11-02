'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Target } from 'lucide-react';

const SystemPerformance = () => {
  const metrics = [
    {
      icon: Zap,
      label: 'Automated Responses',
      value: '154',
      subtitle: 'Executed Today',
      color: 'from-[#00f5ff] to-[#06b6d4]',
      glow: 'shadow-cyan-500/50',
    },
    {
      icon: Clock,
      label: 'Average Response Time',
      value: '3.2s',
      subtitle: 'Real-time Detection',
      color: 'from-[#a855f7] to-[#9333ea]',
      glow: 'shadow-purple-500/50',
    },
    {
      icon: Target,
      label: 'AI Confidence Accuracy',
      value: '97%',
      subtitle: 'Continuously Learning',
      color: 'from-green-500 to-emerald-600',
      glow: 'shadow-green-500/50',
    },
  ];

  return (
    <div className="glass-strong rounded-2xl p-6 h-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">System Performance & Automation</h3>
        <p className="text-sm text-gray-400">Real-time operational metrics</p>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className="glass rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center ${metric.glow} shadow-lg`}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${metric.glow.replace('shadow-', 'rgba(')}`,
                      `0 0 40px ${metric.glow.replace('shadow-', 'rgba(')}`,
                      `0 0 20px ${metric.glow.replace('shadow-', 'rgba(')}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r {metric.color} bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{metric.subtitle}</p>
                </div>
              </div>

              {/* Progress bar for visual effect */}
              {index === 2 && (
                <div className="mt-3">
                  <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: metric.value }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SystemPerformance;
