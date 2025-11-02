'use client';

import React from 'react';
import { LayoutDashboard, AlertTriangle, Shield, Package, Zap, ShoppingBag } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboards & Reports' },
    { id: 'incidents', icon: AlertTriangle, label: 'Incident Response' },
    { id: 'threats', icon: Shield, label: 'Detection & Threat Intel' },
    { id: 'assets', icon: Package, label: 'Assets' },
    { id: 'endpoints', icon: Zap, label: 'Endpoints' },
    { id: 'marketplace', icon: ShoppingBag, label: 'Marketplace' },
  ];

  return (
    <div className="w-64 bg-black border-r border-[#1a1a1a] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#00d4ff] rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">CORTEX XSIAM</div>
            <div className="text-gray-600 text-xs">SECURITY NETWORKS</div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
              activePage === item.id
                ? 'text-white bg-[#1a1a1a] border-l-2 border-[#00d4ff]'
                : 'text-gray-500 hover:text-gray-300 hover:bg-[#0f0f0f]'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User */}
      <div className="p-6 border-t border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">JY</span>
          </div>
          <div>
            <div className="text-white text-sm">Josh Yost</div>
            <div className="text-gray-600 text-xs">SE-Cortex Corporation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
