import React, { lazy, Suspense } from 'react';
import salesConsole from '../assets/mesaops-sales-console.png';
import heroProvided from '../assets/hero_provided.png';
import ProblemSection from '../components/ProblemSection';
import CapabilityExplorer from '../components/CapabilityExplorer';
// Lazy-loaded so their WebGL libraries (three / ogl) are code-split out of the main bundle
const GLSLHills = lazy(() =>
  import('../components/ui/glsl-hills').then((m) => ({ default: m.GLSLHills }))
);
const Prism = lazy(() => import('../components/ui/Prism'));

/* Five stage illustrations, drawn in the site's line-art language: accent
   stroke, --glow-soft tints, no imported artwork. */
const HOW_STEPS = [
  {
    title: 'Walk the floor',
    body: 'We start in your plant, not a conference room, and map how work actually flows.',
    art: (
      <>
        <path d="M22 72V46l13-8v8l13-8v8l13-8v34z" className="tint" />
        <rect x="74" y="30" width="24" height="42" rx="2" className="tint" />
        <rect x="30" y="56" width="9" height="9" rx="1" />
        <rect x="44" y="56" width="9" height="9" rx="1" />
        <rect x="81" y="42" width="10" height="9" rx="1" />
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
            <h1>Your factory runs. <em className="grad">Your&nbsp;systems don't.</em></h1>
            <p className="sub">Production updates on WhatsApp. Quality records in registers. Inventory that's only accurate on audit day. We build software around how your plant actually works — one connected system from inquiry to dispatch.</p>
            <div className="hero-ctas">
              <a className="btn" href="#/contact">Book Consultation</a>
            </div>
          </div>
          <div className="reveal" aria-label="MesaOps operations dashboard preview">
            <img src={heroProvided} alt="MesaOps Operations Dashboard" className="hero-image" />
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
              {/* TODO(NAMING): capture shows "MesaOrigins" branding; public product name is "MesaOps".
                  Awaiting either a re-exported capture or a decision to adopt the company name on
                  product surfaces. Do not crop/edit the image to hide it. */}
              <img
                src={salesConsole}
                alt="MesaOps Sales and Inquiry Console showing live inquiries, quotations and order status"
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
            <h2>Software shaped to your process — <em className="grad">not your process contorted to software.</em></h2>
          </div>
          <div className="contrast">
            <div className="card contrast-card reveal">
              <span className="label">Option one</span>
              <h3>Packaged ERP</h3>
              <p className="contrast-tagline">Your plant adapts to the software.</p>
              <ul className="contrast-list">
                <li>
                  <span className="mark mark-no" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </span>
                  Six months of "implementation" = six months of changing how your people work
                </li>
                <li>
                  <span className="mark mark-no" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </span>
                  Consultants configuring screens nobody asked for
                </li>
                <li>
                  <span className="mark mark-no" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </span>
                  Rigid workflows your operators route around on paper
                </li>
              </ul>
            </div>

            <div className="card contrast-card is-featured reveal">
              <span className="label">The middle — deliberately</span>
              <h3>MesaOrigins</h3>
              <p className="contrast-tagline">The software adapts to your plant.</p>
              <ul className="contrast-list">
                <li>
                  <span className="mark mark-yes" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  We already know how mid-size plants run — planning, quality, traceability, dispatch
                </li>
                <li>
                  <span className="mark mark-yes" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  Built custom, so it fits your workflow on day one
                </li>
                <li>
                  <span className="mark mark-yes" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  No retraining ritual, no domain tuition on your invoice
                </li>
              </ul>
              <a className="contrast-link" href="#/how-we-work">
                See how we work
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>

            <div className="card contrast-card reveal">
              <span className="label">Option two</span>
              <h3>Generic dev shop</h3>
              <p className="contrast-tagline">Learning manufacturing on your invoice.</p>
              <ul className="contrast-list">
                <li>
                  <span className="mark mark-no" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </span>
                  Builds whatever you specify — you become the domain expert
                </li>
                <li>
                  <span className="mark mark-no" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </span>
                  Doesn't know what a CAPA is or why a GRN matters
                </li>
                <li>
                  <span className="mark mark-no" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </span>
                  No idea what an auditor will ask for
                </li>
              </ul>
            </div>
          </div>
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
      <section className="section final-cta">
        <Suspense fallback={null}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
            suspendWhenOffscreen
          />
        </Suspense>
        <div className="wrap">
          <div className="reveal">
            <h2>Start with a walkthrough, <em className="grad">not a contract.</em></h2>
            <p className="lede">Tell us how your operation runs today — 45 minutes, your team and ours. We'll tell you honestly where software would help, where it wouldn't, and what a first phase would look like. No deck, no obligation.</p>
            <div className="hero-ctas" style={{ marginTop: '32px' }}>
              <a className="btn" href="#/contact">Book Consultation</a>
            </div>
          </div>
          <div className="reveal">
            <a className="contact-big" href="tel:+918338081502">+91 83380 81502</a><br />
            <a className="contact-big" href="mailto:sales@mesaorigins.com">sales@mesaorigins.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
