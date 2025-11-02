'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="glass-strong border-b border-white/10">
      <div className="container mx-auto px-6 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f5ff] to-[#a855f7] flex items-center justify-center neon-glow-turquoise"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 245, 255, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(0, 245, 255, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
            
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00f5ff] via-white to-[#a855f7] bg-clip-text text-transparent">
                AI-Driven SOC Dashboard
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">
                Unified security data. Automated threat response. Real-time intelligence.
              </p>
            </div>
          </div>

          {/* Right Side - Status and Toggle */}
          <div className="flex items-center gap-6">
            {/* Last Updated Indicator */}
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00f5ff]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-gray-300">
                Last Updated: <span className="text-[#00f5ff] font-semibold">Just now</span>
              </span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="glass rounded-lg px-4 py-2 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-[#00f5ff]" />
              ) : (
                <Moon className="w-4 h-4 text-[#a855f7]" />
              )}
              <span className="text-sm font-medium text-gray-300">
                {darkMode ? 'AI Mode' : 'Light Mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
