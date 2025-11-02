'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const AIDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <MainContent activePage={activePage} />
    </div>
  );
};

export default AIDashboard;
