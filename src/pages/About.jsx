import React from 'react';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import founder3 from '../assets/founder_3.jpg';

export default function About() {
  return (
    <div className="page-content" id="page-about">
      {/* ============ HERO + STORY (merged) ============ */}
      <header className="about-hero">
        <div className="about-hero-glow" aria-hidden="true"></div>
        <div className="wrap" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="about-story-grid">
            {/* Left: headline */}
            <div className="reveal">
              <span className="eyebrow">About</span>
              <h1 style={{ marginTop: '18px' }}>Engineers who like factories.</h1>
              <span className="about-kicker" style={{ marginTop: '32px', display: 'block' }}>Our story</span>
              <h2 style={{ marginTop: '8px', fontSize: 'clamp(20px, 2.4vw, 26px)' }}>How this firm started</h2>
            </div>
            {/* Right: copy */}
            <div className="about-story-copy reveal">
              <p>Astra Systems began on a factory floor, not in a pitch meeting. In 2024, our founders met during a factory floor mapping project. Seeing how plants struggled with generic tools led them to create Astra Systems.</p>
              <p>Mass Polymers ran a growing extrusion business on registers, spreadsheets, and WhatsApp. Instead of proposing a package, we spent weeks on their floor mapping how the plant actually worked — then built the system around it, one module at a time, until the whole operation ran on one connected platform. That engagement taught us what we now believe about this work: <span className="belief">the software isn't the hard part. <span className="blue">Understanding the plant is.</span></span></p>
              <p>We're a Mumbai-based team, founded by Aravind Nair, Priya Sharma, and Marc Dupont. Small team, senior people, no hand-offs to juniors you've never met. The people who walk your floor are the people who build your system and the people who answer when something breaks.</p>
            </div>
          </div>
        </div>
      </header>


      {/* ============ FOUNDERS ============ */}
      <section className="about-section-alt">
        <div className="wrap">
          <div className="about-sec-head reveal">
            <span className="about-kicker">The team</span>
            <h2>The founders</h2>
          </div>
          <div className="about-team">
            <div className="about-person reveal">
              <div className="about-portrait">
                <img src={founder1} alt="Aravind Nair" className="about-portrait-img" />
              </div>
              <div className="about-person-meta">
                <b>Aravind Nair</b>
                <span>Founder &amp; CEO — Former manufacturing consultant</span>
              </div>
            </div>
            <div className="about-person reveal">
              <div className="about-portrait">
                <img src={founder2} alt="Priya Sharma" className="about-portrait-img" />
              </div>
              <div className="about-person-meta">
                <b>Priya Sharma</b>
                <span>Chief of Operations — Supply chain logistics expert</span>
              </div>
            </div>
            <div className="about-person reveal">
              <div className="about-portrait">
                <img src={founder3} alt="Dr. Marc Dupont" className="about-portrait-img" />
              </div>
              <div className="about-person-meta">
                <b>Dr. Marc Dupont</b>
                <span>Chief Software Architect — Tech veteran (15+ yrs)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW WE OPERATE ============ */}
      <section className="about-section">
        <div className="wrap">
          <div className="about-sec-head reveal">
            <span className="about-kicker">Principles</span>
            <h2>How we operate</h2>
          </div>
          <div className="about-op-grid">
            <div className="about-op-card reveal">
              <div className="about-op-ic" aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <b>We ship working software every few weeks.</b>
                <p>Not documents about software. If a phase can't produce something your team uses, we've scoped it wrong.</p>
              </div>
            </div>
            <div className="about-op-card reveal">
              <div className="about-op-ic" aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <b>We say no to work we shouldn't do.</b>
                <p>If a spreadsheet or an off-the-shelf tool solves your problem, we'll tell you — before you've spent anything.</p>
              </div>
            </div>
            <div className="about-op-card reveal">
              <div className="about-op-ic" aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M4.5 20c1.4-3.2 4.2-5 7.5-5s6.1 1.8 7.5 5" stroke="currentColor" stroke-width="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <b>We put senior people on the floor.</b>
                <p>The person who maps your workflows has done it before, in plants like yours.</p>
              </div>
            </div>
            <div className="about-op-card reveal">
              <div className="about-op-ic" aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="10.5" width="16" height="9.5" rx="2.5" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M8 10.5V7.5a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 14.5v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <b>We leave you owning everything.</b>
                <p>Your data, your code, your system. Lock-in is a business model; it isn't ours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHERE WE ARE ============ */}
      <section className="about-section-bottom">
        <div className="wrap">
          <div className="about-where-card reveal">
            <div className="about-op-ic" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8"/>
              </svg>
            </div>
            <div>
              <b>Where we are</b>
              <p>Suite 402, Innovate Plaza, Tech Park<br/>Mumbai, Maharashtra, 400076</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="build-cta">
        <div className="wrap">
          <div className="build-cta-card reveal">
            <div>
              <h2>Come see how we work — or let us come see how you do.</h2>
              <a href="#/contact" className="btn-primary-glow" style={{ marginTop: '26px' }}>Book an Operations Walkthrough</a>
            </div>
            <div className="build-cta-contact">
              <b>+91 98765 43210</b>
              <b>hello@astrasystems.example</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
