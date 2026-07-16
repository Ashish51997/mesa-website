import React from 'react';
import { Home, Users, Cpu, Mail, BookOpen, Sun, Moon } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';
import { motion } from 'framer-motion';

export default function Header({ theme, toggleTheme }) {
  const navItems = [
    { name: 'Home', url: '#/', icon: Home },
    { name: 'How We Work', url: '#/how-we-work', icon: BookOpen },
    { name: 'What We Build', url: '#/what-we-build', icon: Cpu },
    { name: 'About', url: '#/about', icon: Users },
    { name: 'Contact', url: '#/contact', icon: Mail }
  ];

  return (
    <header className="site-header">
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left spacer to perfectly center the menu capsule in the header */}
        <div style={{ width: '48px', flexShrink: 0 }}></div>
        
        {/* Centered tubelight menu */}
        <NavBar 
          items={navItems} 
          className="relative top-auto bottom-auto left-auto translate-x-0 mb-0 sm:pt-0 z-10" 
        />
        
        {/* Right action theme button */}
        <div className="header-actions" style={{ flexShrink: 0 }}>
          <motion.button
            className="theme-btn"
            id="themeBtn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {theme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
