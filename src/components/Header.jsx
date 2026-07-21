import React from 'react';
import { Home, Users, Cpu, Mail, BookOpen, Sun, Moon } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';
import { motion } from 'framer-motion';
import LogoSvg from '../assets/logo.tsx';

export default function Header({ theme, toggleTheme }) {
  const navItems = [
    { name: 'Home', url: '#/', icon: Home },
    { name: 'How We Work', url: '#/how-we-work', icon: BookOpen },
    { name: 'What We Build', url: '#/what-we-build', icon: Cpu },
    { name: 'About', url: '#/about', icon: Users },
    { name: 'Contact', url: '#/contact', icon: Mail }
  ];

  return (
    <>
      {/* Frosted backdrop bands that blur whatever content scrolls beneath the
          navbar. Top band covers the header on every screen; bottom band shows
          only on mobile/tablet, where the nav floats at the bottom. */}
      <div className="nav-blur nav-blur--top" aria-hidden="true" />
      <div className="nav-blur nav-blur--bottom" aria-hidden="true" />

      <header className="site-header">
      <div className="grid grid-cols-[1fr_auto_1fr] w-full h-full" style={{ paddingTop: "24px" }}>
        <a href="#/" className="logo">
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              filter: 'drop-shadow(12px 24px 32px rgba(0, 0, 0, 0.250))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: "56px",
              height: "56px"
            }}
          >

            <LogoSvg />

          </div>
        </a>

        {/* Center on desktop, floating bottom bar on mobile/tablet */}
        <NavBar
          items={navItems}
          className="header-nav"
        />

        {/* Right: Theme action button */}
        <div className="header-actions" style={{ justifySelf: 'end', flexShrink: 0 }}>
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
      {/* Left: Brand Logo */}
      </header>
    </>
  );
}
