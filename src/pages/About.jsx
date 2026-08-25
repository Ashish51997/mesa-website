import React from 'react';

const TEAM = [
  { name: 'Ashish Kumar Roule', role: 'Technology', initials: 'AK' },
  { name: 'Saikat Maiti', role: 'Product Design', initials: 'SM' },
  { name: 'Tanmay Bhaat', role: 'Sales & Marketing', initials: 'TB' },
  { name: 'Tania', role: 'AI & Technology', initials: 'T' },
  { name: 'Ayush Singhal', role: 'Technology', initials: 'AS' },
];

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
              MesaOrigins didn&rsquo;t start with a pitch deck. It started in 2024 on the floor of an
              extrusion plant, tracing how work actually moved &mdash; register to register, shift to
              shift. What we saw everywhere after that was the same: good plants running on paper and
              WhatsApp, because the software they&rsquo;d bought was built for someone else&rsquo;s
              factory.
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

      {/* ============ BELIEF PULL-QUOTE ============ */}
      <section className="ab3-belief">
        <div className="ab3-belief-glow" aria-hidden="true" />
        <div className="wrap reveal">
          <blockquote className="ab3-blockquote">
            The software isn't the hard part.{' '}
            <span className="ab3-blue">Understanding the plant is.</span>
          </blockquote>
          <div className="ab3-attr">Everything we build starts on the floor &mdash; not in a requirements document.</div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="ab3-founders">
        <div className="wrap">
          <div className="ab3-sec-head reveal">
            <div>
              <span className="ab3-kicker">The team</span>
              <h2 className="ab3-h2">The people who&rsquo;ll walk your floor</h2>
            </div>
          </div>
          <p className="ab3-team-intro reveal">
            A small, senior team &mdash; no hand-offs to juniors you&rsquo;ve never met. The people who
            map your workflows are the same people who build your system and pick up the phone when
            something breaks.
          </p>
          <div className="ab3-team">
            {TEAM.map((person) => (
              <div className="ab3-person reveal" key={person.name}>
                <div className="ab3-portrait">
                  <span className="ab3-initials" aria-hidden="true">{person.initials}</span>
                </div>
                <div className="ab3-person-meta">
                  <b>{person.name}</b>
                  <span>{person.role}</span>
                </div>
              </div>
            ))}
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
              <div className="ab3-tick" aria-hidden="true" />
              <div className="ab3-num">01</div>
              <b>Working software every few weeks.</b>
              <p>Not documents about software. If a phase doesn&rsquo;t put something usable in your team&rsquo;s hands, we scoped it wrong.</p>
            </div>

            <div className="ab3-op reveal">
              <div className="ab3-tick" aria-hidden="true" />
              <div className="ab3-num">02</div>
              <b>We say no to work we shouldn&rsquo;t do.</b>
              <p>If a spreadsheet or an off-the-shelf tool solves your problem, we&rsquo;ll say so &mdash; before you&rsquo;ve spent anything.</p>
            </div>

            <div className="ab3-op reveal">
              <div className="ab3-tick" aria-hidden="true" />
              <div className="ab3-num">03</div>
              <b>Senior people on your floor.</b>
              <p>The person mapping your workflows has done it before, in plants like yours &mdash; not learning on your time.</p>
            </div>

            <div className="ab3-op reveal">
              <div className="ab3-tick" aria-hidden="true" />
              <div className="ab3-num">04</div>
              <b>You own everything.</b>
              <p>Your data, your code, your system. Lock-in is a business model &mdash; it isn&rsquo;t ours.</p>
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
              <a href="#/contact" className="ab3-btn">Book Consultation</a>
            </div>
            <div className="ab3-cta-contact">
              <a href="tel:+918338081502">
                <span className="ab3-cta-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.5 2.9.7a2 2 0 0 1 1.6 2z" /></svg>
                </span>
                +91 83380 81502
              </a>
              <a href="mailto:sales@mesaorigins.com">
                <span className="ab3-cta-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="M22 7l-10 7L2 7" /></svg>
                </span>
                sales@mesaorigins.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
