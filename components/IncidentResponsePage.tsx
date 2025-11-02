'use client';

import React from 'react';
import RealTimeThreatFeed from './RealTimeThreatFeed';
import AIIncidentCards from './AIIncidentCards';
import IncidentTimeline from './IncidentTimeline';

const IncidentResponsePage = () => {
  return (
    <div>
      <h1 className="text-white text-2xl font-light mb-2">Incident Response Center</h1>
      <p className="text-gray-500 text-sm mb-8">Real-time threat monitoring and automated response</p>

      {/* Top Row - Real-Time Feed & Incident Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <RealTimeThreatFeed />
        <AIIncidentCards />
      </div>

      {/* Bottom Row - Timeline & Response Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IncidentTimeline />
        </div>

        <div className="space-y-4">
          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <div className="text-gray-500 text-xs uppercase mb-2">Response Time</div>
            <div className="text-[#00d4ff] text-4xl font-bold mb-1">3.2s</div>
            <div className="text-gray-600 text-sm">Average</div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <div className="text-gray-500 text-xs uppercase mb-2">Auto-Resolved</div>
            <div className="text-green-500 text-4xl font-bold mb-1">87%</div>
            <div className="text-gray-600 text-sm">Last 24H</div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <div className="text-gray-500 text-xs uppercase mb-2">Active Incidents</div>
            <div className="text-orange-500 text-4xl font-bold mb-1">16</div>
            <div className="text-gray-600 text-sm">Requires Attention</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentResponsePage;
