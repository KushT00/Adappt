'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const IncidentTimeline = () => {
  const incidents = [
    {
      time: '10:45 AM',
      system: 'AWS EC2',
      event: 'Suspicious login from Russia',
      decision: 'AI flagged as True Positive',
      status: 'confirmed',
      analyst: 'Auto-verified',
    },
    {
      time: '10:47 AM',
      system: 'Okta',
      event: 'MFA prompt triggered',
      decision: 'Analyst verified',
      status: 'verified',
      analyst: 'Sarah Chen',
    },
    {
      time: '10:50 AM',
      system: 'Azure AD',
      event: 'Unusual access pattern',
      decision: 'Under investigation',
      status: 'investigating',
      analyst: 'AI Monitoring',
    },
    {
      time: '10:52 AM',
      system: 'AWS S3',
      event: 'Data exfiltration attempt blocked',
      decision: 'AI flagged as True Positive',
      status: 'confirmed',
      analyst: 'Auto-blocked',
    },
  ];

  return (
    <div className="glass-strong rounded-2xl p-6 h-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Incident Timeline</h3>
        <p className="text-sm text-gray-400">Real-time security events</p>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {incidents.map((incident, index) => (
          <motion.div
            key={index}
            className="relative pl-8 pb-4 border-l-2 border-white/10 last:border-l-0 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 transform -translate-x-1/2">
              {incident.status === 'confirmed' && (
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
              {incident.status === 'verified' && (
                <div className="w-4 h-4 rounded-full bg-[#00f5ff] shadow-lg shadow-cyan-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
              {incident.status === 'investigating' && (
                <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="glass rounded-lg p-3 border border-white/10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-white">{incident.event}</p>
                  <p className="text-xs text-gray-400 mt-1">{incident.system}</p>
                </div>
                <span className="text-xs font-mono text-[#00f5ff]">{incident.time}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{incident.decision}</span>
                <span className="text-gray-500">{incident.analyst}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IncidentTimeline;
