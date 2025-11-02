'use client';

import React from 'react';
import { Server, Database, Cloud, Shield, HardDrive, Cpu } from 'lucide-react';

const AssetsPage = () => {
  const assetCategories = [
    { name: 'Servers', count: 234, icon: Server, status: 'healthy', color: 'green' },
    { name: 'Databases', count: 45, icon: Database, status: 'warning', color: 'yellow' },
    { name: 'Cloud Services', count: 89, icon: Cloud, status: 'healthy', color: 'green' },
    { name: 'Network Devices', count: 156, icon: Shield, status: 'healthy', color: 'green' },
    { name: 'Storage Systems', count: 67, icon: HardDrive, status: 'critical', color: 'red' },
    { name: 'Endpoints', count: 1847, icon: Cpu, status: 'healthy', color: 'green' },
  ];

  const recentAssets = [
    { name: 'AWS-PROD-WEB-01', type: 'EC2 Instance', ip: '10.0.1.45', status: 'Active', risk: 'Low' },
    { name: 'DB-MASTER-01', type: 'PostgreSQL', ip: '10.0.2.12', status: 'Active', risk: 'Medium' },
    { name: 'AZURE-APP-SERVICE', type: 'App Service', ip: '172.16.0.8', status: 'Active', risk: 'Low' },
    { name: 'STORAGE-BACKUP-01', type: 'S3 Bucket', ip: 'N/A', status: 'Warning', risk: 'High' },
    { name: 'API-GATEWAY-01', type: 'API Gateway', ip: '10.0.3.22', status: 'Active', risk: 'Low' },
  ];

  return (
    <div>
      <h1 className="text-white text-2xl font-light mb-2">Asset Management</h1>
      <p className="text-gray-500 text-sm mb-8">Monitor and manage all infrastructure assets</p>

      {/* Asset Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {assetCategories.map((category, index) => {
          const Icon = category.icon;
          const statusColors: any = {
            healthy: { bg: 'bg-green-500/20', text: 'text-green-500', border: 'border-green-500/50' },
            warning: { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50' },
            critical: { bg: 'bg-red-500/20', text: 'text-red-500', border: 'border-red-500/50' },
          };
          const colors = statusColors[category.status];

          return (
            <div key={index} className={`${colors.bg} border ${colors.border} rounded-lg p-4`}>
              <Icon className={`w-8 h-8 ${colors.text} mb-3`} />
              <div className="text-white text-2xl font-bold mb-1">{category.count}</div>
              <div className="text-gray-400 text-xs">{category.name}</div>
            </div>
          );
        })}
      </div>

      {/* Asset List */}
      <div className="bg-[#1a1a1a] rounded-lg p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Recent Assets</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left text-gray-500 text-xs uppercase py-3 px-4">Asset Name</th>
                <th className="text-left text-gray-500 text-xs uppercase py-3 px-4">Type</th>
                <th className="text-left text-gray-500 text-xs uppercase py-3 px-4">IP Address</th>
                <th className="text-left text-gray-500 text-xs uppercase py-3 px-4">Status</th>
                <th className="text-left text-gray-500 text-xs uppercase py-3 px-4">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {recentAssets.map((asset, index) => {
                const riskColors: any = {
                  Low: 'text-green-500 bg-green-500/20',
                  Medium: 'text-yellow-500 bg-yellow-500/20',
                  High: 'text-red-500 bg-red-500/20',
                };

                return (
                  <tr key={index} className="border-b border-[#2a2a2a] hover:bg-black/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="text-white font-medium">{asset.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-400 text-sm">{asset.type}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-400 text-sm font-mono">{asset.ip}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        asset.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${riskColors[asset.risk]}`}>
                        {asset.risk}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Asset Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Total Assets</div>
          <div className="text-white text-3xl font-bold">2,438</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Monitored</div>
          <div className="text-green-500 text-3xl font-bold">2,401</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">Unmonitored</div>
          <div className="text-yellow-500 text-3xl font-bold">37</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="text-gray-500 text-xs uppercase mb-2">At Risk</div>
          <div className="text-red-500 text-3xl font-bold">12</div>
        </div>
      </div>
    </div>
  );
};

export default AssetsPage;
