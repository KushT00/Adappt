'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import DashboardPage from './DashboardPage';
import IncidentResponsePage from './IncidentResponsePage';
import ThreatIntelPage from './ThreatIntelPage';
import AssetsPage from './AssetsPage';

interface MainContentProps {
  activePage: string;
}

const MainContent: React.FC<MainContentProps> = ({ activePage }) => {
  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'incidents':
        return <IncidentResponsePage />;
      case 'threats':
        return <ThreatIntelPage />;
      case 'assets':
        return <AssetsPage />;
      case 'endpoints':
        return (
          <div>
            <h1 className="text-white text-2xl font-light mb-2">Endpoints Management</h1>
            <p className="text-gray-500 text-sm mb-8">Monitor and secure all endpoint devices</p>
            <div className="bg-[#1a1a1a] rounded-lg p-12 text-center">
              <p className="text-gray-400">Endpoints page content coming soon...</p>
            </div>
          </div>
        );
      case 'marketplace':
        return (
          <div>
            <h1 className="text-white text-2xl font-light mb-2">Security Marketplace</h1>
            <p className="text-gray-500 text-sm mb-8">Browse and install security integrations</p>
            <div className="bg-[#1a1a1a] rounded-lg p-12 text-center">
              <p className="text-gray-400">Marketplace content coming soon...</p>
            </div>
          </div>
        );
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-black border-b border-[#1a1a1a] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">XSIAM Command Center</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-300 text-sm rounded hover:bg-[#2a2a2a] transition-colors">
            Last 24H
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-[#0a0a0a]">
        {renderPage()}
      </main>
    </div>
  );
};

export default MainContent;
