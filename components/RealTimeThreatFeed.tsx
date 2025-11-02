'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shield, Database, Lock, Server } from 'lucide-react';

interface Threat {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  timestamp: string;
  icon: any;
}

const RealTimeThreatFeed = () => {
  const [threats, setThreats] = useState<Threat[]>([
    {
      id: '1',
      title: 'Possible data exfiltration detected on server AWS-PROD-01',
      severity: 'critical',
      timestamp: 'Just now',
      icon: Database,
    },
    {
      id: '2',
      title: 'Unusual login pattern from Russia - User: james.cook@company.com',
      severity: 'high',
      timestamp: '2 min ago',
      icon: Lock,
    },
    {
      id: '3',
      title: 'Multiple failed authentication attempts on Azure AD',
      severity: 'medium',
      timestamp: '5 min ago',
      icon: Shield,
    },
  ]);

  const threatTemplates = [
    { title: 'Suspicious API calls detected on endpoint /admin/users', severity: 'high', icon: Server },
    { title: 'Malware signature detected in uploaded file: invoice.pdf.exe', severity: 'critical', icon: AlertTriangle },
    { title: 'Brute force attack blocked on SSH port 22', severity: 'medium', icon: Shield },
    { title: 'Unauthorized access attempt to S3 bucket: company-secrets', severity: 'critical', icon: Database },
    { title: 'Privilege escalation detected on server WEB-SERVER-03', severity: 'high', icon: Server },
    { title: 'Phishing email detected and quarantined - 47 recipients', severity: 'medium', icon: AlertTriangle },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat: Threat = {
        id: Date.now().toString(),
        ...threatTemplates[Math.floor(Math.random() * threatTemplates.length)],
        timestamp: 'Just now',
      } as Threat;

      setThreats(prev => [newThreat, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return { bg: 'bg-red-500/20', text: 'text-red-500', border: 'border-red-500/50', glow: 'shadow-red-500/50' };
      case 'high': return { bg: 'bg-orange-500/20', text: 'text-orange-500', border: 'border-orange-500/50', glow: 'shadow-orange-500/50' };
      case 'medium': return { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50', glow: 'shadow-yellow-500/50' };
      default: return { bg: 'bg-blue-500/20', text: 'text-blue-500', border: 'border-blue-500/50', glow: 'shadow-blue-500/50' };
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-lg font-semibold">Real-Time Threat Feed</h3>
        <motion.div
          className="w-2 h-2 rounded-full bg-[#00d4ff]"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        <AnimatePresence mode="popLayout">
          {threats.map((threat) => {
            const colors = getSeverityColor(threat.severity);
            const Icon = threat.icon;

            return (
              <motion.div
                key={threat.id}
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`${colors.bg} border ${colors.border} rounded-lg p-4 hover:${colors.bg.replace('/20', '/30')} transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 ${colors.glow} shadow-lg`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium mb-1 leading-snug">
                      {threat.title}
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`${colors.text} font-semibold uppercase`}>
                        {threat.severity}
                      </span>
                      <span className="text-gray-500">{threat.timestamp}</span>
                    </div>
                  </div>

                  <motion.div
                    className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-[#2a2a2a] flex items-center justify-between text-xs text-gray-500">
        <span>Auto-refreshing every 8 seconds</span>
        <span>{threats.length} active alerts</span>
      </div>
    </div>
  );
};

export default RealTimeThreatFeed;
