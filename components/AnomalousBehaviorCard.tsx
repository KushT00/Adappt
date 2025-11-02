'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, TrendingUp } from 'lucide-react';

const AnomalousBehaviorCard = () => {
  return (
    <div className="glass-strong rounded-2xl p-6 h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Anomalous Behavior Detected</h3>
          <p className="text-sm text-gray-400">AI-identified security threat</p>
        </div>
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(239, 68, 68, 0.3)',
              '0 0 40px rgba(239, 68, 68, 0.6)',
              '0 0 20px rgba(239, 68, 68, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle className="w-6 h-6 text-red-400" />
        </motion.div>
      </div>

      <div className="space-y-4">
        {/* User Info */}
        <div className="glass rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#a855f7] flex items-center justify-center font-bold text-white">
              JC
            </div>
            <div>
              <p className="font-semibold text-white">James Cook</p>
              <p className="text-xs text-gray-400">AWS Account Administrator</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Alert Type:</span>
              <span className="text-sm font-semibold text-white">Unusual Access Pattern Detected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Severity:</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/20 border border-red-500/50 text-xs font-bold text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                HIGH
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Action Taken:</span>
              <span className="text-sm font-semibold text-[#00f5ff]">Automatically Quarantined Instance</span>
            </div>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="glass rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-300">AI Confidence Score</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#a855f7] bg-clip-text text-transparent">94%</span>
          </div>
          <div className="relative h-2 bg-black/30 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '94%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Based on behavioral analysis and historical patterns</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-3">
          <div className="glass rounded-lg p-3 text-center border border-white/10">
            <p className="text-xs text-gray-400 mb-1">Location</p>
            <p className="text-sm font-bold text-white">Russia</p>
          </div>
          <div className="glass rounded-lg p-3 text-center border border-white/10">
            <p className="text-xs text-gray-400 mb-1">Time</p>
            <p className="text-sm font-bold text-white">10:45 AM</p>
          </div>
          <div className="glass rounded-lg p-3 text-center border border-white/10">
            <p className="text-xs text-gray-400 mb-1">Attempts</p>
            <p className="text-sm font-bold text-red-400">7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnomalousBehaviorCard;
