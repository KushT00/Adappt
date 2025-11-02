'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Database, Lock, Server, AlertTriangle } from 'lucide-react';

const ThreatNetwork = () => {
  const nodes = [
    { id: 1, name: 'AWS', icon: Cloud, status: 'normal', x: 15, y: 30 },
    { id: 2, name: 'Okta', icon: Lock, status: 'suspicious', x: 15, y: 70 },
    { id: 3, name: 'Azure', icon: Cloud, status: 'normal', x: 30, y: 50 },
    { id: 4, name: 'Database', icon: Database, status: 'normal', x: 45, y: 25 },
    { id: 5, name: 'Firewall', icon: Shield, status: 'threat', x: 45, y: 75 },
    { id: 6, name: 'Server', icon: Server, status: 'normal', x: 60, y: 50 },
    { id: 7, name: 'API Gateway', icon: Server, status: 'suspicious', x: 75, y: 35 },
    { id: 8, name: 'Storage', icon: Database, status: 'normal', x: 75, y: 65 },
  ];

  const connections = [
    { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 2, to: 3 },
    { from: 3, to: 4 }, { from: 3, to: 6 }, { from: 4, to: 6 },
    { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 6, to: 8 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return { bg: 'from-green-500/20 to-green-600/20', border: 'border-green-500/50', glow: 'shadow-green-500/50' };
      case 'suspicious': return { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/50', glow: 'shadow-orange-500/50' };
      case 'threat': return { bg: 'from-red-500/20 to-red-600/20', border: 'border-red-500/50', glow: 'shadow-red-500/50' };
      default: return { bg: 'from-gray-500/20 to-gray-600/20', border: 'border-gray-500/50', glow: 'shadow-gray-500/50' };
    }
  };

  return (
    <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Live Threat Overview</h2>
        <p className="text-gray-400 text-sm">Real-time monitoring across all connected systems</p>
      </div>

      {/* Network Visualization */}
      <div className="relative h-[400px] w-full">
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00f5ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {connections.map((conn, index) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            return (
              <motion.line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                className="flow-line"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const colors = getStatusColor(node.status);
          const Icon = node.icon;

          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`relative group cursor-pointer`}
                whileHover={{ scale: 1.1 }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full blur-xl ${colors.glow} opacity-50`}></div>
                
                {/* Node */}
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${colors.bg} border-2 ${colors.border} flex items-center justify-center glass`}>
                  <Icon className="w-7 h-7 text-white" />
                  
                  {/* Pulse ring for threats */}
                  {node.status !== 'normal' && (
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 ${colors.border}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Label */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="glass rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-semibold text-white">{node.name}</p>
                    <p className="text-xs text-gray-400 capitalize">{node.status}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
          <span className="text-sm text-gray-300">Normal Activity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50"></div>
          <span className="text-sm text-gray-300">Suspicious</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
          <span className="text-sm text-gray-300">Confirmed Threat</span>
        </div>
      </div>
    </div>
  );
};

export default ThreatNetwork;
