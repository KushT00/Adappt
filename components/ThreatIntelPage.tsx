'use client';

import React from 'react';
import ThreatNetwork from './ThreatNetwork';
import AIThreatMeter from './AIThreatMeter';
import { Shield, Globe, AlertTriangle, TrendingUp } from 'lucide-react';

const ThreatIntelPage = () => {
  const threatSources = [
    { name: 'Malware Signatures', count: '2.4M', trend: '+12%', color: 'red' },
    { name: 'IP Blocklist', count: '847K', trend: '+5%', color: 'orange' },
    { name: 'Domain Reputation', count: '1.2M', trend: '+8%', color: 'yellow' },
    { name: 'CVE Database', count: '156K', trend: '+3%', color: 'blue' },
  ];

  return (
    <div>
      <h1 className="text-white text-2xl font-light mb-2">Detection & Threat Intelligence</h1>
      <p className="text-gray-500 text-sm mb-8">AI-powered threat detection and intelligence gathering</p>

      {/* Top Row - Network & Threat Meter */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ThreatNetwork />
        </div>
        <div>
          <AIThreatMeter />
        </div>
      </div>

      {/* Threat Intelligence Sources */}
      <div className="mb-6">
        <h2 className="text-white text-lg font-semibold mb-4">Threat Intelligence Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {threatSources.map((source, index) => {
            const colorMap: any = {
              red: { bg: 'bg-red-500/20', text: 'text-red-500', border: 'border-red-500/50' },
              orange: { bg: 'bg-orange-500/20', text: 'text-orange-500', border: 'border-orange-500/50' },
              yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50' },
              blue: { bg: 'bg-blue-500/20', text: 'text-blue-500', border: 'border-blue-500/50' },
            };
            const colors = colorMap[source.color];

            return (
              <div key={index} className={`${colors.bg} border ${colors.border} rounded-lg p-6`}>
                <div className="text-gray-400 text-xs uppercase mb-2">{source.name}</div>
                <div className="text-white text-3xl font-bold mb-1">{source.count}</div>
                <div className={`${colors.text} text-sm font-semibold flex items-center gap-1`}>
                  <TrendingUp className="w-4 h-4" />
                  {source.trend}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detection Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Active Detection Rules</h3>
          <div className="space-y-3">
            {[
              { name: 'Brute Force Detection', status: 'Active', matches: 234 },
              { name: 'Data Exfiltration Pattern', status: 'Active', matches: 45 },
              { name: 'Privilege Escalation', status: 'Active', matches: 12 },
              { name: 'Malware Communication', status: 'Active', matches: 89 },
              { name: 'Suspicious Login Behavior', status: 'Active', matches: 156 },
            ].map((rule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#00d4ff]" />
                  <div>
                    <div className="text-white text-sm font-medium">{rule.name}</div>
                    <div className="text-gray-500 text-xs">{rule.matches} matches today</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded-full">
                  {rule.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Global Threat Map</h3>
          <div className="relative h-[300px] bg-black/30 rounded-lg flex items-center justify-center">
            <Globe className="w-32 h-32 text-[#00d4ff] opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#00d4ff] text-5xl font-bold mb-2">127</div>
                <div className="text-gray-400 text-sm">Countries Monitored</div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-red-500 text-2xl font-bold">23</div>
              <div className="text-gray-500 text-xs">High Risk</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-500 text-2xl font-bold">45</div>
              <div className="text-gray-500 text-xs">Medium Risk</div>
            </div>
            <div className="text-center">
              <div className="text-green-500 text-2xl font-bold">59</div>
              <div className="text-gray-500 text-xs">Low Risk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatIntelPage;
