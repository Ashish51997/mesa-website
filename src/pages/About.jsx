import React from 'react';
import TeamSelector from '../components/TeamSelector';
import FinalCta from '../components/FinalCta';

/* The three beats that got us here — each one an icon, not a bullet. */
const ORIGIN_STEPS = [
  {
    title: 'A factory floor mapping project',
    year: '2024',
    note: 'Our founders meet — on the floor, not in a pitch meeting.',
    /* Footprints: walking the floor. */
    icon: (
      <>
        <circle cx="6" cy="19" r="2.5" />
        <circle cx="18" cy="5" r="2.5" />
        <path d="M8.5 19h6a4 4 0 0 0 0-8h-5a4 4 0 0 1 0-8h6" />
      </>
    ),
  },
  {
    title: 'Plants vs generic tools',
    note: 'Good plants, forced into software that didn’t fit.',
    /* A puzzle piece that doesn't fit. */
    icon: (
      <>
        <path d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 0 0 4v4h-4a2 2 0 1 1-4 0H4v-4" />
        <path d="M2 13l4 4M6 13l-4 4" />
      </>
    ),
  },
  {
    title: 'MesaOrigins',
    note: 'Built to do this work the way it should be done.',
    /* A flag planted. */
    icon: (
      <>
        <path d="M5 21V4" />
        <path d="M5 4h12l-2.5 4L17 12H5" />
      </>
    ),
  },
];

/* How we operate — four commitments, each with the part that costs us something
   carried in the emphasis. */
const PRINCIPLES = [
  {
    title: 'Working software every few weeks',
    body: (
      <>
        Not documents about software.{' '}
        <em>If a phase doesn’t put something usable in your team’s hands, we scoped it wrong.</em>
      </>
    ),
    /* Shipping loop. */
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-2.6-6.3" />
        <path d="M21 3v6h-6" />
      </>
    ),
  },
  {
    title: 'We say no to work we shouldn’t do',
    body: (
      <>
        If a spreadsheet or an off-the-shelf tool solves your problem,{' '}
        <em>we’ll say so — before you’ve spent anything.</em>
      </>
    ),
    /* Open hand: stop. */
    icon: (
      <>
        <path d="M7 11V6a1.5 1.5 0 0 1 3 0v5M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V6a1.5 1.5 0 0 1 3 0v6.5" />
        <path d="M7 11l-1.6-1.6a1.6 1.6 0 0 0-2.3 2.2L8 17.5A6.5 6.5 0 0 0 13 20h1a6 6 0 0 0 6-6v-1.5" />
      </>
    ),
  },
  {
    title: 'Senior people on your floor',
    body: (
      <>
        The person mapping your workflows has done it before, in plants like yours —{' '}
        <em>not learning on your time.</em>
      </>
    ),
    /* Hard hat. */
    icon: (
      <>
        <path d="M4 16a8 8 0 0 1 16 0" />
        <path d="M10 8.5V6a2 2 0 0 1 4 0v2.5" />
        <path d="M2 16h20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2z" />
      </>
    ),
  },
  {
    title: 'You own everything',
    body: (
      <>
        Your data, your code, your system. <em>Lock-in is a business model — it isn’t ours.</em>
      </>
    ),
    /* Key. */
    icon: (
      <>
        <circle cx="8" cy="15" r="4.5" />
        <path d="M11.2 11.8L20 3M16 7l3 3M13 10l2 2" />
      </>
    ),
  },
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
              MesaOrigins didn&rsquo;t start with a pitch deck. It started on the floor of an
              extrusion plant, tracing how work actually moved &mdash; register to register, shift to
              shift. Everywhere we looked, the story was the same:{' '}
              <em>good plants running on paper and WhatsApp</em>, because their software was built
              for someone else&rsquo;s factory.
            </p>
          </div>

          {/* Right: origin card */}
          <div className="ab3-origin-card reveal">
            <div className="ab3-origin-label">Where this started</div>

            <ol className="ab3-o-steps">
              {ORIGIN_STEPS.map((step) => (
                <li className="ab3-o-step reveal" key={step.title}>
                  <div className="ab3-o-ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{step.icon}</svg>
                  </div>
                  <div>
                    <b>
                      {step.title}
                      {step.year && <em className="ab3-yr">{step.year}</em>}
                    </b>
                    <span>{step.note}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </header>

      {/* ============ TEAM ============ */}
      <section className="ab3-founders">
        <div className="wrap">
          <div className="tm-sec-head reveal">
            <h2 className="ab3-h2">
              The people who&rsquo;ll <em className="grad">walk your floor</em>
            </h2>
            <p className="ab3-team-intro">
              The people who map your workflows are the same people who build your system and pick
              up the phone when something breaks.
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
            <h2 className="ab3-h2">How <em className="grad">we operate</em></h2>
          </div>
          <div className="ab3-op-grid">
            {PRINCIPLES.map((principle) => (
              <article className="ab3-op reveal" key={principle.title}>
                <div className="ab3-op-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{principle.icon}</svg>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
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
