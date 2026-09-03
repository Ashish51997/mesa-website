import React, { lazy, Suspense } from 'react';
import salesConsole from '../assets/sales-console.png';
import heroProvided from '../assets/hero_provided.png';
import ProblemSection from '../components/ProblemSection';
import CapabilityExplorer from '../components/CapabilityExplorer';
import FinalCta from '../components/FinalCta';
// Lazy-loaded so their WebGL libraries (three / ogl) are code-split out of the main bundle
const GLSLHills = lazy(() =>
  import('../components/ui/glsl-hills').then((m) => ({ default: m.GLSLHills }))
);

/* Five stage illustrations, drawn in the site's line-art language: accent
   stroke, --glow-soft tints, no imported artwork. */
const HOW_STEPS = [
  {
    title: 'Walk the floor',
    body: 'We start in your plant, not a conference room, and map how work actually flows.',
    art: (
      <>
        {/* Chimney first, so the roof drawn over it hides where it lands. */}
        <path d="M90 42 92 10h10l2 24" />
        <path d="M91.5 17h11" />
        {/* Sawtooth shed roof and walls */}
        <path d="M34 72V46l24-13v13l24-13v13l24-13v39z" className="tint" />
        <rect x="41" y="50" width="16" height="8" rx="1" />
        <rect x="63" y="50" width="16" height="8" rx="1" />
        <rect x="85" y="50" width="16" height="8" rx="1" />
        {/* Doorway, two leaves */}
        <path d="M63 72V61h20v11" />
        <path d="M73 61v11" />
        <path d="M14 80h112" className="dotted" />
      </>
    ),
  },
  {
    title: 'Blueprint',
    body: "Workflows, screens, phases, timeline, cost. Before any code, you know exactly what you're getting.",
    art: (
      <>
        <rect x="26" y="20" width="88" height="56" rx="3" />
        <path d="M26 40h88M26 58h88M56 20v56M85 20v56" className="dotted" />
        <rect x="33" y="26" width="16" height="10" rx="1.5" className="tint" />
        <rect x="62" y="44" width="18" height="12" rx="1.5" className="tint" />
        <circle cx="99" cy="31" r="6" />
        <path d="M30 84h80M30 81v6M110 81v6" />
      </>
    ),
  },
  {
    title: 'Configure the first module',
    body: 'The highest-pain module ships first; working software in weeks.',
    art: (
      <>
        <rect x="28" y="46" width="26" height="26" rx="3" className="dashed" />
        <rect x="86" y="46" width="26" height="26" rx="3" className="dashed" />
        <rect x="57" y="16" width="26" height="26" rx="3" className="dashed" />
        <rect x="57" y="46" width="26" height="26" rx="3" className="solid" />
        <path d="M64 59l4.5 4.5L76 55" className="knock" />
      </>
    ),
  },
  {
    title: 'Roll out in stages',
    body: 'Training on the floor; each phase proves itself before the next.',
    art: (
      <>
        <rect x="28" y="58" width="22" height="20" rx="3" className="solid" />
        <path d="M34 67l3.5 3.5L44 64" className="knock" />
        <rect x="58" y="44" width="22" height="34" rx="3" className="tint" />
        <path d="M64 55l3.5 3.5L74 50" />
        <rect x="88" y="30" width="22" height="48" rx="3" />
        <path d="M26 40l28-14 22 8 26-18" />
        <path d="M96 14h10v10" />
      </>
    ),
  },
  {
    title: 'Stay',
    body: 'We support, refine, and extend the system as you grow.',
    art: (
      <>
        <path d="M70 82c-22-10-32-22-32-36a18 18 0 0132-11 18 18 0 0132 11c0 14-10 26-32 36z" className="tint" />
        <path d="M70 66V44" />
        <path d="M70 48c0-7 5-12 12-12 0 7-5 12-12 12z" />
        <path d="M70 56c0-7-5-12-12-12 0 7 5 12 12 12z" />
      </>
    ),
  },
];

/* Two marks, nine bullets: the icon follows from whether the card is ours. */
const CROSS = 'M6 6l12 12M18 6L6 18';
const TICK = 'M5 12.5l4.5 4.5L19 7.5';

/* Order is left-to-right; the featured card carries the tick and the link. */
const CONTRAST_CARDS = [
  {
    label: 'Choice 1',
    title: 'Ready-made solution',
    tagline: 'You must change how your plant works to match the software.',
    points: [
      '6 months of setup — and your people must change how they work',
      'Screens and steps your plant never asked for',
      'Rigid system — operators go back to paper to avoid it',
    ],
  },
  {
    featured: true,
    label: 'Our way',
    title: 'MesaOrigins',
    tagline: 'Software built for your plant, by people who know manufacturing.',
    points: [
      'We already know how plants run — planning, quality, stock, dispatch',
      'Built for your process, so it works from day one',
      'No six-month training. Your team starts using it in weeks.',
    ],
  },
  {
    label: 'Choice 2',
    title: 'Any software company',
    tagline: 'They know coding. They don\'t know manufacturing.',
    points: [
      'You have to teach them how a plant works',
      "They don't know what a QC check or a GRN is",
      'They build what you say — not what an auditor will ask for',
    ],
  },
];

export default function Home() {
  return (
    <div className="page-content" id="page-home">
      {/* 1. HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Suspense fallback={null}>
            <GLSLHills />
          </Suspense>
        </div>
        <div className="wrap">
          <div className="hero-copy reveal">
            <h1>Good plants run. <em className="grad">Great&nbsp;plants improve every day.</em></h1>
            <p className="sub">We connect your production, quality, inventory and dispatch records into one system — so you cut wastage, fix internal issues faster, and keep every delivery on your customer's calendar.</p>
            <div className="hero-ctas">
              <a className="btn" href="#/contact">Book Consultation</a>
            </div>
          </div>
          <div className="reveal" aria-label="MesaOrigins operations dashboard preview">
            <img src={heroProvided} alt="MesaOrigins operations dashboard" className="hero-image" />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <ProblemSection />

      {/* 3. THE SHIFT */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>One system. <em className="grad">One version of the truth.</em></h2>
            <p className="lede">Walk into Monday's review and every number is live. Inquiry to sales order to plan to QC to dispatch — one flow, nothing re-typed.</p>
          </div>
          <div className="outcomes">
            <div className="outcome reveal">
              <div className="glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="13" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M6 12l3-3 2.5 2.5L15 8l3 3" />
                </svg>
              </div>
              <b>You see the plant in real time.</b>
              <p>Production, quality, inventory and dispatch on one screen — from the floor or from your phone.</p>
            </div>
            <div className="outcome reveal">
              <div className="glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
                  <path d="M4 6.5l8 4.5 8-4.5M12 11v9" />
                  <circle cx="12" cy="11" r="1.6" />
                </svg>
              </div>
              <b>Every product is traceable.</b>
              <p>Batch, machine, shift, raw-material lot. A ten-minute lookup, not a ten-day investigation.</p>
            </div>
            <div className="outcome reveal">
              <div className="glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 3v18h18" />
                  <path d="M7 15l4-4 3 3 5-6" />
                  <path d="M19 8h-3.2M19 8v3.2" />
                </svg>
              </div>
              <b>Decisions stop waiting for data.</b>
              <p>Month-end reports become live dashboards. Gut feel becomes plan-versus-actual.</p>
            </div>
          </div>
          <div className="annotated reveal">
            <figure className="product-shot">
              <img
                src={salesConsole}
                alt="MesaOrigins sales and inquiry console showing live inquiries, quotations and order status"
                width="1434"
                height="1097"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 5. HOW WE'RE DIFFERENT */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Software that fits your plant — <em className="grad">not a plant that adjusts to software.</em></h2>
            <p className="lede">
              When plants decide to go digital, they usually get two choices. Both have a problem.
            </p>
          </div>
          <div className="contrast">
            {CONTRAST_CARDS.map((card) => (
              <div
                className={`card contrast-card${card.featured ? ' is-featured' : ''} reveal`}
                key={card.title}
              >
                <span className="label">{card.label}</span>
                <h3>{card.title}</h3>
                <p className="contrast-tagline">{card.tagline}</p>
                <ul className="contrast-list">
                  {card.points.map((point) => (
                    <li key={point}>
                      <span
                        className={`mark mark-${card.featured ? 'yes' : 'no'}`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24">
                          {card.featured ? <path d={TICK} /> : <path d={CROSS} />}
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                {card.featured && (
                  <a className="contrast-link" href="#/how-we-work">
                    See how we work
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="contrast-close">
            That's why we sit in the middle: manufacturing knowledge + custom software.
          </p>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>From factory walkthrough to live system — <em className="grad">in stages, not one giant leap.</em></h2>
          </div>
          <div className="timeline">
            {HOW_STEPS.map((step, i) => (
              <div className="step reveal" key={step.title}>
                <div className="step-art" aria-hidden="true">
                  <svg viewBox="0 0 140 96">{step.art}</svg>
                </div>
                <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <b>{step.title}</b>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT WE BUILD — CAPABILITY BAND */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Whatever the operational problem, <em className="grad">we build the system that solves it.</em></h2>
          </div>
          <div className="reveal">
            <CapabilityExplorer />
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <FinalCta
        heading={<>Start with a walkthrough, <em className="grad">not a contract.</em></>}
        lede="Tell us how your operation runs today — 45 minutes, your team and ours. We'll tell you honestly where software would help, where it wouldn't, and what a first phase would look like. No deck, no obligation."
      />

    </div>
  );
}
