import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">

        {/* ── Top section: brand col + nav columns ── */}
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand">
            <a className="logo" href="#/">
              <span className="logo-mark" aria-hidden="true"></span>
              <span>Astra Systems</span>
            </a>
            <p className="tagline">Operations software for growing manufacturers — built around how your plant actually works.</p>
          </div>

          {/* Nav columns */}
          <div className="footer-nav-cols">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/work">Our Work</a></li>
                <li><a href="#/what-we-build">What We Build</a></li>
                <li><a href="#/how-we-work">How We Work</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#/about">About Us</a></li>
                <li><a href="#/contact">Contact</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                <li><a href="mailto:hello@astrasystems.example">hello@astrasystems.example</a></li>
                <li style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Suite 402, Innovate Plaza,<br />Mumbai, Maharashtra 400076
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Large logo banner ── */}
        <div className="footer-logo-banner">
          <div className="footer-logo-placeholder" aria-label="Astra Systems logo">
            {/* Grey placeholder box for logo */}
          </div>
          <span className="footer-logo-wordmark">Astra Systems</span>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span className="footer-copyright">© 2026 Astra Systems Private Limited. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#/privacy">Privacy Policy</a>
            <a href="#/terms">Terms of Use</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
