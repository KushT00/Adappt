'use client';

import React from 'react';

const StatsCards = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6 h-[400px] flex flex-col justify-between">
      {/* Automated */}
      <div>
        <div className="text-white text-5xl font-bold mb-1">90</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">Automated</div>
      </div>

      {/* Resolved Incidents */}
      <div>
        <div className="text-white text-5xl font-bold mb-1">96</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">Resolved Incidents</div>
      </div>

      {/* Manual */}
      <div>
        <div className="text-white text-4xl font-bold mb-1">22</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">Manual</div>
      </div>

      {/* Open Incidents */}
      <div>
        <div className="text-white text-4xl font-bold mb-2">16</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-3">Open Incidents</div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-red-500/20 px-2 py-1 rounded">
            <span className="text-red-500 text-xs font-bold">C 3</span>
          </div>
          <div className="bg-orange-500/20 px-2 py-1 rounded">
            <span className="text-orange-500 text-xs font-bold">H 7</span>
          </div>
          <div className="bg-yellow-500/20 px-2 py-1 rounded">
            <span className="text-yellow-500 text-xs font-bold">M 5</span>
          </div>
          <div className="bg-blue-500/20 px-2 py-1 rounded">
            <span className="text-blue-500 text-xs font-bold">L 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
