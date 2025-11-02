'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Database, Lock, CheckCircle, XCircle } from 'lucide-react';

const AIIncidentCards = () => {
  const incidents = [
    {
      id: 1,
      title: 'Unauthorized Access Attempt - AWS EC2',
      description: 'Multiple failed SSH login attempts from IP 185.220.101.45 (Russia)',
      severity: 'critical',
      confidence: 94,
      status: 'active',
      icon: Lock,
      timestamp: '2 minutes ago',
      aiAction: 'Auto-blocked IP and triggered MFA',
    },
    {
      id: 2,
      title: 'Data Exfiltration Pattern Detected',
      description: 'Unusual data transfer volume from database server to external endpoint',
      severity: 'high',
      confidence: 87,
      status: 'investigating',
      icon: Database,
      timestamp: '15 minutes ago',
      aiAction: 'Quarantined connection, awaiting analyst review',
    },
    {
      id: 3,
      title: 'Malware Signature in Email Attachment',
      description: 'Phishing email with malicious payload detected and quarantined',
      severity: 'medium',
      confidence: 98,
      status: 'resolved',
      icon: Shield,
      timestamp: '1 hour ago',
      aiAction: 'Email quarantined, users notified',
    },
    {
      id: 4,
      title: 'Privilege Escalation Attempt',
      description: 'User account attempted to access admin-level resources',
      severity: 'high',
      confidence: 91,
      status: 'active',
      icon: AlertTriangle,
      timestamp: '5 minutes ago',
      aiAction: 'Account suspended, security team alerted',
    },
  ];

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'critical':
        return { color: 'red', bg: 'bg-red-500/20', text: 'text-red-500', border: 'border-red-500/50', glow: 'shadow-red-500/50' };
      case 'high':
        return { color: 'orange', bg: 'bg-orange-500/20', text: 'text-orange-500', border: 'border-orange-500/50', glow: 'shadow-orange-500/50' };
      case 'medium':
        return { color: 'yellow', bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50', glow: 'shadow-yellow-500/50' };
      default:
        return { color: 'blue', bg: 'bg-blue-500/20', text: 'text-blue-500', border: 'border-blue-500/50', glow: 'shadow-blue-500/50' };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'investigating': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default: return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">AI-Summarized Incidents</h3>
          <p className="text-gray-500 text-sm">Automated threat analysis & response</p>
        </div>
        <div className="text-[#00d4ff] text-sm font-semibold">{incidents.length} Active</div>
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {incidents.map((incident, index) => {
          const config = getSeverityConfig(incident.severity);
          const Icon = incident.icon;

          return (
            <motion.div
              key={incident.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${config.bg} border ${config.border} rounded-lg p-4 hover:bg-opacity-30 transition-all cursor-pointer`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 rounded-lg ${config.bg} border ${config.border} flex items-center justify-center flex-shrink-0 ${config.glow} shadow-lg`}>
                  <Icon className={`w-6 h-6 ${config.text}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-white font-semibold text-sm leading-tight">{incident.title}</h4>
                    {getStatusIcon(incident.status)}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{incident.description}</p>
                </div>
              </div>

              {/* AI Confidence Score */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-gray-500">AI Confidence Score</span>
                  <span className="text-[#00d4ff] font-bold">{incident.confidence}%</span>
                </div>
                <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00a8cc] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${incident.confidence}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </div>

              {/* AI Action */}
              <div className="bg-black/30 rounded-lg p-3 mb-3">
                <div className="text-gray-500 text-xs mb-1">AI Automated Action:</div>
                <div className="text-white text-sm font-medium">{incident.aiAction}</div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className={`${config.text} font-bold uppercase`}>{incident.severity}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500">{incident.timestamp}</span>
                </div>
                <button className="text-[#00d4ff] hover:text-[#00a8cc] font-semibold transition-colors">
                  View Details →
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AIIncidentCards;
