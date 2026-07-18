import React from 'react';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import founder3 from '../assets/founder_3.jpg';

export default function About() {
  return (
    <div className="page-content" id="page-about">

      {/* ============ HERO ============ */}
      <header className="ab-hero">
        <div className="ab-hero-glow" aria-hidden="true" />
        <div className="wrap ab-hero-wrap">

          {/* Left: headline */}
          <div className="ab-hero-left reveal">
            <span className="ab-eyebrow">About</span>
            <h1 className="ab-h1">
              Engineers who{' '}
              <span className="ab-accent">like</span>{' '}
              factories.
            </h1>
            <p className="ab-hero-body">
              Astra Systems began on a factory floor, not in a pitch meeting. In 2024, our
              founders met during a factory floor mapping project. Seeing how plants struggled
              with generic tools led them to create Astra Systems.
            </p>
          </div>

          {/* Right: key-points card */}
          <div className="ab-hero-right reveal">
            <div className="ab-points-card">
              <p className="ab-points-label">CURRENT FOCUS AREAS</p>
              <div className="ab-points-list">
                <div className="ab-point">
                  <div className="ab-point-dot" />
                  <div>
                    <b>Applying from idea to operations</b>
                    <span>We help manufacturers run their full operation on one connected platform.</span>
                  </div>
                </div>
                <div className="ab-point">
                  <div className="ab-point-dot" />
                  <div>
                    <b>Has a proven track record</b>
                    <span>Deployed in active manufacturing facilities since 2024.</span>
                  </div>
                </div>
                <div className="ab-point">
                  <div className="ab-point-dot" />
                  <div>
                    <b>Astra Systems</b>
                    <span>A small team of senior engineers who only work in manufacturing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ============ STORY ============ */}
      <section className="ab-section ab-section-alt">
        <div className="wrap ab-story-wrap">

          {/* Left: section heading */}
          <div className="ab-story-left reveal">
            <span className="ab-kicker">OUR STORY</span>
            <h2 className="ab-h2">How this firm started</h2>
          </div>

          {/* Right: quote card + body */}
          <div className="ab-story-right reveal">
            <div className="ab-quote-card">
              <div className="ab-quote-avatar" aria-hidden="true">
                <div className="ab-quote-av-inner" />
              </div>
              <div>
                <p className="ab-quote-text">
                  Mass Polymers ran a growing extrusion business on registers, spreadsheets, and
                  WhatsApp. Instead of proposing a package, we spent weeks on their floor mapping
                  how the plant actually worked — then built the system around it, one module at a
                  time, until the whole operation ran on one connected platform.
                </p>
              </div>
            </div>
            <p className="ab-body-copy">
              We're a Mumbai-based team, founded by Aravind Nair, Priya Sharma, and Marc Dupont.
              Small team, senior people, no hand-offs to juniors you've never met. The people who
              walk your floor are the people who build your system and the people who answer when
              something breaks.
            </p>
          </div>

        </div>
      </section>

      {/* ============ BIG QUOTE ============ */}
      <section className="ab-section ab-quote-section">
        <div className="wrap ab-quote-center">
          <p className="ab-big-quote reveal">
            The software isn't the hard part.{' '}
            <span className="ab-accent">Understanding the plant is.</span>
          </p>
          <p className="ab-big-quote-sub reveal">
            What we've learned from every engagement, and what we believe about this work.
          </p>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="ab-section">
        <div className="wrap">
          <div className="ab-sec-head reveal">
            <span className="ab-kicker">THE TEAM</span>
            <h2 className="ab-h2">The founders</h2>
          </div>
          <div className="ab-founders-grid">

            <div className="ab-founder-card reveal">
              <div className="ab-founder-badges">
                <span className="ab-badge">Founder</span>
              </div>
              <div className="ab-founder-portrait">
                <img src={founder1} alt="Aravind Nair" />
              </div>
              <div className="ab-founder-meta">
                <b>Aravind Nair</b>
                <span>Founder &amp; CEO — Former manufacturing consultant</span>
              </div>
            </div>

            <div className="ab-founder-card reveal">
              <div className="ab-founder-badges">
                <span className="ab-badge">Operations</span>
              </div>
              <div className="ab-founder-portrait">
                <img src={founder2} alt="Priya Sharma" />
              </div>
              <div className="ab-founder-meta">
                <b>Priya Sharma</b>
                <span>Chief of Operations — Supply chain logistics expert</span>
              </div>
            </div>

            <div className="ab-founder-card reveal">
              <div className="ab-founder-badges">
                <span className="ab-badge">Software</span>
              </div>
              <div className="ab-founder-portrait">
                <img src={founder3} alt="Dr. Marc Dupont" />
              </div>
              <div className="ab-founder-meta">
                <b>Dr. Marc Dupont</b>
                <span>Chief Software Architect — Tech veteran (15+ yrs)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ HOW WE OPERATE ============ */}
      <section className="ab-section ab-section-alt">
        <div className="wrap">
          <div className="ab-sec-head reveal">
            <span className="ab-kicker">PRINCIPLES</span>
            <h2 className="ab-h2">How we operate</h2>
          </div>
          <div className="ab-op-grid">

            <div className="ab-op-col reveal">
              <span className="ab-op-num">01</span>
              <b className="ab-op-title">We ship working software every few weeks.</b>
              <p className="ab-op-body">Not documents about software. If a phase can't produce something your team uses, we've scoped it wrong.</p>
            </div>

            <div className="ab-op-col reveal">
              <span className="ab-op-num">02</span>
              <b className="ab-op-title">We say no to work we shouldn't do.</b>
              <p className="ab-op-body">If a spreadsheet or an off-the-shelf tool solves your problem, we'll tell you — before you've spent anything.</p>
            </div>

            <div className="ab-op-col reveal">
              <span className="ab-op-num">03</span>
              <b className="ab-op-title">We put senior people on the floor.</b>
              <p className="ab-op-body">The person who maps your workflows has done it before, in plants like yours.</p>
            </div>

            <div className="ab-op-col reveal">
              <span className="ab-op-num">04</span>
              <b className="ab-op-title">We leave you owning everything.</b>
              <p className="ab-op-body">Your data, your code, your system. Lock-in is a business model; it isn't ours.</p>
            </div>

          </div>

          {/* Location card */}
          <div className="ab-location-card reveal">
            <div className="ab-loc-ic" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8"/>
              </svg>
            </div>
            <span>Suite 402, Innovate Plaza, Tech Park — Mumbai, Maharashtra, 400076</span>
          </div>

        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ab-cta-section">
        <div className="wrap ab-cta-wrap">
          <div className="ab-cta-left reveal">
            <h2 className="ab-cta-h2">
              Come see how we work —{' '}
              <em>or let us come see how you do.</em>
            </h2>
            <a href="#/contact" className="ab-cta-btn">Book an Operations Walkthrough</a>
          </div>
          <div className="ab-cta-right reveal">
            <a href="tel:+919876543210" className="ab-cta-contact">+91 98765 43210</a>
            <a href="mailto:hello@astrasystems.example" className="ab-cta-contact">hello@astrasystems.example</a>
          </div>
        </div>
      </section>

    </div>
  );
}
