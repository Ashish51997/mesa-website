import React from 'react';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import founder3 from '../assets/founder_3.jpg';

export default function About() {
  return (
    <div className="page-content" id="page-about">

      {/* ============ HERO ============ */}
      <header className="ab3-hero">
        <div className="ab3-hero-glow" aria-hidden="true" />
        <div className="wrap ab3-hero-inner">

          {/* Left */}
          <div>
            <h1 className="ab3-h1">
              Engineers who <span className="ab3-blue">like factories.</span>
            </h1>
            <p className="ab3-lede">
              MesaOrigins began on a factory floor, not in a pitch meeting. In 2024, our founders
              met during a factory floor mapping project. Seeing how plants struggled with generic
              tools led them to create MesaOrigins.
            </p>
          </div>

          {/* Right: origin card */}
          <div
            className="ab3-origin-card reveal"
            role="img"
            aria-label="Timeline: from a factory floor mapping project in 2024 to MesaOrigins"
          >
            <div className="ab3-origin-label">Where this started</div>

            <div className="ab3-o-step">
              <div className="ab3-o-dot" />
              <div>
                <b>A factory floor mapping project<em className="ab3-yr">2024</em></b>
                <span>Our founders meet — on the floor, not in a pitch meeting.</span>
              </div>
            </div>

            <div className="ab3-o-step">
              <div className="ab3-o-dot" />
              <div>
                <b>Plants vs generic tools</b>
                <span>Seeing how plants struggled with software that didn't fit.</span>
              </div>
            </div>

            <div className="ab3-o-step ab3-o-step-last">
              <div className="ab3-o-dot" />
              <div>
                <b>MesaOrigins</b>
                <span>Built to do this work the way it should be done.</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ============ STORY ============ */}
      <section className="ab3-story">
        <div className="wrap">
          <div className="ab3-story-head reveal">
            <span className="ab3-kicker">Our story</span>
            <h2 className="ab3-h2">How this firm started</h2>
          </div>

          <div className="ab3-engagement reveal">
            <div className="ab3-qmark" aria-hidden="true">"</div>
            <div>
              <div className="ab3-eng-tag">The first engagement — Mass Polymers</div>
              <p>
                Mass Polymers ran a growing extrusion business on registers, spreadsheets, and
                WhatsApp. Instead of proposing a package, we spent weeks on their floor mapping
                how the plant actually worked — then built the system around it, one module at a
                time, until the whole operation ran on one connected platform.
              </p>
            </div>
          </div>

          <p className="ab3-story-close reveal">
            We're a Mumbai-based team, founded by Aravind Nair, Priya Sharma, and Marc Dupont.
            Small team, senior people, no hand-offs to juniors you've never met. The people who
            walk your floor are the people who build your system and the people who answer when
            something breaks.
          </p>
        </div>
      </section>

      {/* ============ BELIEF PULL-QUOTE ============ */}
      <section className="ab3-belief">
        <div className="ab3-belief-glow" aria-hidden="true" />
        <div className="wrap reveal">
          <blockquote className="ab3-blockquote">
            The software isn't the hard part.{' '}
            <span className="ab3-blue">Understanding the plant is.</span>
          </blockquote>
          <div className="ab3-attr">What that engagement taught us about this work</div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="ab3-founders">
        <div className="wrap">
          <div className="ab3-sec-head reveal">
            <div>
              <span className="ab3-kicker">The team</span>
              <h2 className="ab3-h2">The founders</h2>
            </div>
          </div>
          <div className="ab3-team">

            <div className="ab3-person reveal">
              <div className="ab3-portrait">
                <img src={founder1} alt="Aravind Nair" className="ab3-portrait-img" />
              </div>
              <div className="ab3-person-meta">
                <b>Aravind Nair</b>
                <span>Founder &amp; CEO</span>
              </div>
            </div>

            <div className="ab3-person reveal">
              <div className="ab3-portrait">
                <img src={founder2} alt="Priya Sharma" className="ab3-portrait-img" />
              </div>
              <div className="ab3-person-meta">
                <b>Priya Sharma</b>
                <span>Chief of Operations</span>
              </div>
            </div>

            <div className="ab3-person reveal">
              <div className="ab3-portrait">
                <img src={founder3} alt="Dr. Marc Dupont" className="ab3-portrait-img" />
              </div>
              <div className="ab3-person-meta">
                <b>Dr. Marc Dupont</b>
                <span>Chief Software Architect</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ HOW WE OPERATE ============ */}
      <section className="ab3-operate">
        <div className="wrap">
          <div className="ab3-op-head reveal">
            <span className="ab3-kicker">Principles</span>
            <h2 className="ab3-h2">How we operate</h2>
          </div>
          <div className="ab3-op-grid">

            <div className="ab3-op reveal">
              <div className="ab3-num">01</div>
              <b>We ship working software every few weeks.</b>
              <p>Not documents about software. If a phase can't produce something your team uses, we've scoped it wrong.</p>
            </div>

            <div className="ab3-op reveal">
              <div className="ab3-num">02</div>
              <b>We say no to work we shouldn't do.</b>
              <p>If a spreadsheet or an off-the-shelf tool solves your problem, we'll tell you — before you've spent anything.</p>
            </div>

            <div className="ab3-op reveal">
              <div className="ab3-num">03</div>
              <b>We put senior people on the floor.</b>
              <p>The person who maps your workflows has done it before, in plants like yours.</p>
            </div>

            <div className="ab3-op reveal">
              <div className="ab3-num">04</div>
              <b>We leave you owning everything.</b>
              <p>Your data, your code, your system. Lock-in is a business model; it isn't ours.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ab3-cta">
        <div className="wrap">
          <div className="ab3-cta-card reveal">
            <div>
              <h2 className="ab3-cta-h2">
                Come see how we work —{' '}
                <span className="ab3-blue">or let us come see how you do.</span>
              </h2>
              <a href="#/contact" className="ab3-btn">Book an Operations Walkthrough</a>
            </div>
            <div className="ab3-cta-contact">
              <b>+91 83380 81502</b>
              <b>sale@mesaorigins.com</b>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
