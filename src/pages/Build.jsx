import React from 'react';
import FinalCta from '../components/FinalCta';
import BuildFlowCard from '../components/BuildFlowCard';
import useAnimationReady from '../lib/useAnimationReady';

/* Each card pairs the complaint we heard with the system that answers it. */
const BUILD_CARDS = [
  {
    problem: "We can't see production in real time.",
    title: 'Production monitoring & machine logs',
    note: 'Operators log at the machine. Management sees the floor live.',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M6 12l3-4 3 5 2.5-3 3.5 2M8 21h8" />
      </>
    ),
  },
  {
    problem: 'Inventory is never accurate.',
    title: 'Stores, inventory & material flow',
    note: 'Stock moves when material moves — register, sheet and reality agree.',
    icon: (
      <>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  },
  {
    problem: 'Quality lives on paper.',
    title: 'Digital QC, inspection & CAPA',
    note: 'Every check recorded against the batch. Audit-ready by default.',
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3.5V6h6V3.5M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    problem: "Sales and plant don't talk.",
    title: 'Inquiry-to-dispatch ERP',
    note: 'One flow from inquiry to dispatch — sales promises dates production can keep.',
    icon: (
      <>
        <circle cx="5" cy="6" r="2.5" />
        <circle cx="19" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M7 7.5l3.5 8M17 7.5l-3.5 8M7.5 6h9" />
      </>
    ),
  },
  {
    problem: 'Reports take days.',
    title: 'Dashboards & MIS',
    note: 'Month-end numbers, live every day — on a desktop or a phone.',
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    problem: 'People re-type data between systems.',
    title: 'Integration & workflow automation',
    note: 'Entered once, flows everywhere — Tally, weighbridges, machines, Excel.',
    icon: <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />,
  },
];

const BEYOND_CHIPS = [
  {
    label: 'Logistics',
    icon: (
      <>
        <path d="M1 8h14v9H1zM15 11h4l4 4v2h-8" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
  },
  {
    label: 'Warehousing',
    icon: <path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6" />,
  },
  {
    label: 'Distribution',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
      </>
    ),
  },
  {
    label: 'Cold storage',
    icon: <path d="M12 2v20M4 6l16 12M20 6L4 18M12 5l-2-2M12 5l2-2M12 19l-2 2M12 19l2 2" />,
  },
];

export default function Build() {
  // Gate the hero's rise on the animation actually being able to run — without
  // this the copy sits at opacity 0 wherever animations are suspended.
  const animate = useAnimationReady();

  return (
    <div className="page-content" id="page-build">
      {/* ============ HERO ============ */}
      <header className="build-hero">
        <div className="build-hero-glow" aria-hidden="true"></div>
        <div className="wrap">
          <div className={`build-hero-grid${animate ? ' anim' : ''}`}>
            {/* Left Column: Copy & Actions */}
            <div className="build-hero-copy">
              <h1>
                <span className="l rise d1">You bring the </span>
                <span className="l rise d1">operational problem. </span>
                <em className="grad l rise d2">We build the system </em>
                <em className="grad l rise d2">that solves it.</em>
              </h1>
              <p className="lede rise d3">
                Not modules off a shelf. Every system below started as a complaint on a factory
                floor &mdash; a register that didn&rsquo;t match reality, a report that arrived too
                late, a WhatsApp group doing the work of software.
              </p>
              <div className="build-hero-ctas rise d4">
                <a href="#/contact" className="btn">Book Consultation</a>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    const el = document.querySelector('.build-systems');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See what we build ↓
                </button>
              </div>
            </div>

            {/* Right Column: the flow, stepping through itself */}
            <BuildFlowCard />
          </div>
        </div>
      </header>

      {/* ============ PROBLEM → SYSTEM ============ */}
      <section className="build-systems">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Six complaints. <em className="grad">Six systems.</em></h2>
            <p className="lede">
              Every system below started as a sentence we heard on a factory floor. Hover any card
              to see what answers it.
            </p>
          </div>

          <div className="build-grid">
            {BUILD_CARDS.map((card) => (
              <article className="build-card reveal" key={card.title}>
                <p className="build-card-prob">&ldquo;{card.problem}&rdquo;</p>
                <div className="flip-line" aria-hidden="true"></div>
                <div className="build-card-sol">
                  <div className="sol-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{card.icon}</svg>
                  </div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="build-beyond">
        <div className="wrap build-beyond-inner reveal">
          <h2>Beyond manufacturing &mdash; <em className="grad">the same operational DNA.</em></h2>
          <p>
            Inventory, dispatch, traceability, workflow &mdash; if your business runs on
            operations, the same systems apply.
          </p>
          <div className="beyond-chips">
            {BEYOND_CHIPS.map((chip) => (
              <span className="b-chip" key={chip.label}>
                <svg viewBox="0 0 24 24" aria-hidden="true">{chip.icon}</svg>
                {chip.label}
              </span>
            ))}
            <a className="b-chip is-you" href="#/contact">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
              That&rsquo;s you? Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <FinalCta
        heading={<>Not sure which of these is <em className="grad">your problem?</em></>}
        lede="That's what the walkthrough is for. Tell us how your operation runs — we'll tell you where software would help, and where it wouldn't."
      />

    </div>
  );
}
