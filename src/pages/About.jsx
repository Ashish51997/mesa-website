import React from 'react';
import TeamSelector from '../components/TeamSelector';
import FinalCta from '../components/FinalCta';


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
          <div className="tm-sec-head reveal">
            <h2 className="ab3-h2">
              The people who&rsquo;ll <em className="grad">walk your floor</em>
            </h2>
            <p className="ab3-team-intro">
              A small, senior team &mdash; no hand-offs to juniors you&rsquo;ve never met. The people
              who map your workflows are the same people who build your system and pick up the
              phone when something breaks.
            </p>
          </div>
          <div className="reveal">
            <TeamSelector />
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
      <FinalCta
        heading={<>Come see how we work &mdash; <em className="grad">or let us come see how you do.</em></>}
        lede="Tell us how your operation runs today — 45 minutes, your team and ours. We'll tell you honestly where software would help, where it wouldn't, and what a first phase would look like. No deck, no obligation."
      />

    </div>
  );
}
