import React from 'react';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import founder3 from '../assets/founder_3.jpg';

export default function About() {
  return (
    <div className="page-content" id="page-about">
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal">About</span>
          <h1 className="reveal"><em className="grad">Engineers who like factories.</em></h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>How this firm started</h2>
            <p>Astra Systems began on a factory floor, not in a pitch meeting. In 2024, our founders met during a factory floor mapping project. Seeing how plants struggled with generic tools led them to create Astra Systems.</p>
            <p>Mass Polymers ran a growing extrusion business on registers, spreadsheets, and WhatsApp. Instead of proposing a package, we spent weeks on their floor mapping how the plant actually worked — then built the system around it, one module at a time, until the whole operation ran on one connected platform. That engagement taught us what we now believe about this work: the software isn't the hard part. Understanding the plant is.</p>
            <p>We're a Mumbai-based team, founded by Aravind Nair, Priya Sharma, and Marc Dupont. Small team, senior people, no hand-offs to juniors you've never met. The people who walk your floor are the people who build your system and the people who answer when something breaks.</p>
          </div>

          <h2 style={{ margin: '64px 0 8px' }}>The founders</h2>
          <div className="grid-3 founder-cards">
            <div className="founder reveal">
              <img src={founder1} alt="Aravind Nair" />
              <b>Aravind Nair</b>
              <span>Founder &amp; CEO — Former manufacturing consultant</span>
            </div>
            <div className="founder reveal">
              <img src={founder2} alt="Priya Sharma" />
              <b>Priya Sharma</b>
              <span>Chief of Operations — Supply chain logistics expert</span>
            </div>
            <div className="founder reveal">
              <img src={founder3} alt="Dr. Marc Dupont" />
              <b>Dr. Marc Dupont</b>
              <span>Chief Software Architect — Tech veteran (15+ yrs)</span>
            </div>
          </div>

          <h2 style={{ margin: '72px 0 24px' }}>How we operate</h2>
          <div className="grid-2">
            <div className="card reveal">
              <h3>We ship working software every few weeks.</h3>
              <p style={{ marginTop: '10px' }}>Not documents about software. If a phase can't produce something your team uses, we've scoped it wrong.</p>
            </div>
            <div className="card reveal">
              <h3>We say no to work we shouldn't do.</h3>
              <p style={{ marginTop: '10px' }}>If a spreadsheet or an off-the-shelf tool solves your problem, we'll tell you — before you've spent anything.</p>
            </div>
            <div className="card reveal">
              <h3>We put senior people on the floor.</h3>
              <p style={{ marginTop: '10px' }}>The person who maps your workflows has done it before, in plants like yours.</p>
            </div>
            <div className="card reveal">
              <h3>We leave you owning everything.</h3>
              <p style={{ marginTop: '10px' }}>Your data, your code, your system. Lock-in is a business model; it isn't ours.</p>
            </div>
          </div>

          <div className="prose" style={{ marginTop: '64px' }}>
            <h3 style={{ marginTop: 0 }}>Where we are</h3>
            <address>
              Suite 402, Innovate Plaza, Tech Park<br />
              Mumbai, Maharashtra, 400076
            </address>
          </div>
        </div>
      </section>
      <section className="section final-cta">
        <div className="wrap">
          <div className="reveal">
            <h2>Come see how we work — or let us come see how you do.</h2>
            <div className="hero-ctas" style={{ marginTop: '32px' }}>
              <a className="btn" href="#/contact">Book an Operations Walkthrough</a>
            </div>
          </div>
          <div className="reveal">
            <a className="contact-big" href="tel:+919876543210">+91 98765 43210</a><br />
            <a className="contact-big" href="mailto:hello@astrasystems.example">hello@astrasystems.example</a>
          </div>
        </div>
      </section>
    </div>
  );
}
