'use client';

import React from 'react';
import CentralVisualization from './CentralVisualization';
import StatsCards from './StatsCards';
import AIThreatMeter from './AIThreatMeter';
import TrendChart from './TrendChart';

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-white text-2xl font-light mb-8">Good Evening, Josh</h1>

      {/* Top Row - Central Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <CentralVisualization />
        </div>
        <div>
          <StatsCards />
        </div>
      </div>

      {/* Second Row - AI Threat Meter & Trend Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <AIThreatMeter />
        <TrendChart />
      </div>

      {/* Bottom Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Events Ingestion</div>
          <div className="text-white text-3xl font-bold mb-1">40</div>
          <div className="text-gray-600 text-sm">GB/24H</div>
          <div className="mt-4">
            <svg className="w-full h-12" viewBox="0 0 100 30">
              <path
                d="M 0,15 Q 10,10 20,12 T 40,15 T 60,13 T 80,16 T 100,14"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Data Ingestion</div>
          <div className="text-white text-3xl font-bold mb-1">65</div>
          <div className="text-gray-600 text-sm">TB/24H</div>
          <div className="mt-4">
            <svg className="w-full h-12" viewBox="0 0 100 30">
              <path
                d="M 0,18 Q 10,14 20,16 T 40,12 T 60,15 T 80,11 T 100,13"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Total Open Incidents</div>
          <div className="text-white text-3xl font-bold mb-4">16</div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-red-500/20 px-2 py-1 rounded">
              <span className="text-red-500 text-xs font-bold">C 3</span>
            </div>
            <div className="flex items-center gap-1 bg-orange-500/20 px-2 py-1 rounded">
              <span className="text-orange-500 text-xs font-bold">H 7</span>
            </div>
            <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded">
              <span className="text-yellow-500 text-xs font-bold">M 5</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-500/20 px-2 py-1 rounded">
              <span className="text-blue-500 text-xs font-bold">L 1</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Prevented Events</div>
          <div className="text-white text-4xl font-bold">286.1K</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
