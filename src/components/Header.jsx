import React from 'react';
import { Home, Users, Mail, BriefcaseBusiness, Hammer } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';
import LogoSvg from '../assets/logo.tsx';

export default function Header({ currentRoute }) {
  const navItems = [
    { name: 'Home', url: '#/', icon: Home },
    { name: 'How We Work', url: '#/how-we-work', icon: BriefcaseBusiness },
    { name: 'What We Build', url: '#/what-we-build', icon: Hammer },
    { name: 'About', url: '#/about', icon: Users },
    { name: 'Contact', url: '#/contact', icon: Mail }
  ];

  // Legal pages drop the site nav and carry their own back link instead.
  const showNav = !['privacy', 'terms'].includes(currentRoute);

  return (
    <>
      {/* Frosted backdrop bands that blur whatever content scrolls beneath the
          navbar. Top band covers the header on every screen; bottom band shows
          only on mobile/tablet, where the nav floats at the bottom. */}
      <div className="nav-blur nav-blur--top" aria-hidden="true" />
      {showNav && <div className="nav-blur nav-blur--bottom" aria-hidden="true" />}

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
        {/* Legal pages drop the site nav and carry their own back link, so the
            grid keeps an empty middle column to hold the layout. */}
        {showNav ? (
          <NavBar
            items={navItems}
            className="header-nav"
          />
        ) : (
          <div />
        )}

        {/* Right: Login. Sits in its own flex row so the button keeps its own
            height and stays centred on the same axis as the logo and nav. */}
        <div className="header-actions">
          <a
            className="btn nav-cta"
            href={import.meta.env.VITE_LOGIN_URL ?? '#/login'}
          >
            Login
          </a>
        </div>
      </div>
      {/* Left: Brand Logo */}
      </header>
    </>
  );
}
