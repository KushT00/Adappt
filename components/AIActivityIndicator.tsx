'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const AIActivityIndicator = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="glass-strong rounded-2xl p-4 border border-white/20">
        <div className="flex items-center gap-3">
          <motion.div
            className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f5ff] to-[#a855f7] flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 245, 255, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.5)',
                '0 0 20px rgba(0, 245, 255, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-6 h-6 text-white" />
            
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-[#00f5ff]"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-[#a855f7]"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          <div>
            <p className="text-sm font-semibold text-white">AI Active</p>
            <p className="text-xs text-gray-400">Continuously Learning</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIActivityIndicator;
