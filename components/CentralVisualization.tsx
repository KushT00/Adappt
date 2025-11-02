'use client';

import React, { useEffect, useRef } from 'react';

const CentralVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dataSources = [
    { name: 'NGFW', icon: '🔥' },
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Office 365', icon: '📧' },
    { name: 'Azure', icon: '🔷' },
    { name: 'okta', icon: '🔐' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;
    let connectionOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 80;

      // Draw thread connections from data sources to center
      const sourcePositions = [
        { x: 10, y: 50 },   // NGFW
        { x: 10, y: 90 },   // Google Cloud
        { x: 10, y: 130 },  // Amazon
        { x: 10, y: 170 },  // Office 365
        { x: 10, y: 210 },  // Azure
        { x: 10, y: 250 },  // okta
      ];

      sourcePositions.forEach((source, index) => {
        const delay = index * 0.5;
        const opacity = 0.25 + Math.sin(connectionOffset + delay) * 0.15;
        
        // Draw thin animated line - white
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = -connectionOffset * 10;
        
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        
        // Curved path to center
        const controlX = (source.x + centerX) / 2 - 30;
        const controlY = (source.y + centerY) / 2;
        ctx.quadraticCurveTo(controlX, controlY, centerX, centerY);
        ctx.stroke();
        
        // Draw small white glowing dot at source
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.sin(connectionOffset + delay) * 0.3})`;
        ctx.beginPath();
        ctx.arc(source.x, source.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.setLineDash([]); // Reset dash

      // Draw rotating particles
      for (let i = 0; i < 100; i++) {
        const angle = (i / 100) * Math.PI * 2 + rotation;
        const r = radius + Math.sin(i * 0.5 + rotation) * 20;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        
        ctx.fillStyle = `rgba(0, 212, 255, ${0.3 + Math.sin(i + rotation) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 50; i++) {
        const angle1 = (i / 50) * Math.PI * 2 + rotation;
        const angle2 = ((i + 1) / 50) * Math.PI * 2 + rotation;
        const r = radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(angle1) * r, centerY + Math.sin(angle1) * r);
        ctx.lineTo(centerX + Math.cos(angle2) * r, centerY + Math.sin(angle2) * r);
        ctx.stroke();
      }

      rotation += 0.005;
      connectionOffset += 0.02;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6 h-[400px] relative">
      {/* Left - Data Sources */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 space-y-3">
        {dataSources.map((source, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-lg">{source.icon}</span>
            <span>{source.name}</span>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
          {/* <div className="text-gray-500 text-xs">+60 DATA SOURCES</div> */}
        </div>
      </div>

      {/* Center - 3D Sphere */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <canvas ref={canvasRef} width="300" height="300" className="opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#00d4ff] mb-1">2,583</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Alerts</div>
          </div>
        </div>
      </div>

      {/* Left Stats */}
      <div className="absolute left-6 bottom-6">
        <div className="text-white text-3xl font-bold">41.7K</div>
        <div className="text-gray-500 text-xs uppercase">Endpoints</div>
      </div>

      {/* Right Stats */}
      <div className="absolute right-6 bottom-6">
        <div className="text-white text-3xl font-bold">112</div>
        <div className="text-gray-500 text-xs uppercase">Incidents</div>
      </div>
    </div>
  );
};

export default CentralVisualization;
