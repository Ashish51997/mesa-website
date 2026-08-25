import React, { lazy, Suspense } from 'react';
import salesConsole from '../assets/mesaops-sales-console.png';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import founder3 from '../assets/founder_3.jpg';
import heroProvided from '../assets/hero_provided.png';
import ProblemSection from '../components/ProblemSection';
// Lazy-loaded so their WebGL libraries (three / ogl) are code-split out of the main bundle
const GLSLHills = lazy(() =>
  import('../components/ui/glsl-hills').then((m) => ({ default: m.GLSLHills }))
);
const Prism = lazy(() => import('../components/ui/Prism'));

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
              <b>You see the plant in real time.</b>
              <p>Production, quality, inventory and dispatch on one screen — from the floor or from your phone.</p>
            </div>
            <div className="outcome reveal">
              <b>Every product is traceable.</b>
              <p>Batch, machine, shift, raw-material lot. A ten-minute lookup, not a ten-day investigation.</p>
            </div>
            <div className="outcome reveal">
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
                width="1426"
                height="1103"
                loading="lazy"
                decoding="async"
              />
              <figcaption>MesaOps &mdash; Sales &amp; Inquiry Console</figcaption>
            </figure>
            <div className="annotations-below">
              <span className="annot-pill">Live machine status</span>
              <span className="annot-pill">Batch trace in one click</span>
              <span className="annot-pill">Plan vs actual, today</span>
            </div>
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
            <div className="card reveal">
              <span className="label">Option one</span>
              <h3>Packaged ERP</h3>
              <p>Forces your plant to work the way the software was designed. "Six months of implementation" is really six months of changing how your people work — and paying consultants to configure screens nobody asked for.</p>
            </div>
            <div className="card reveal">
              <span className="label">Option two</span>
              <h3>Generic dev shop</h3>
              <p>Will build whatever you specify — but they're learning manufacturing on your invoice. They don't know what a CAPA is, why a GRN matters, or what an auditor will ask for.</p>
            </div>
          </div>
          <p className="resolution reveal">We sit in the middle, deliberately. We already know how mid-size plants run — production planning, quality systems, traceability, dispatch. And we build custom, so the system fits your workflow on day one.</p>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>From factory walkthrough to live system — <em className="grad">in stages, not one giant leap.</em></h2>
          </div>
          <div className="timeline">
            <div className="step reveal">
              <b>Walk the floor</b>
              <p>We start in your plant, not a conference room, and map how work actually flows.</p>
            </div>
            <div className="step reveal">
              <b>Blueprint</b>
              <p>Workflows, screens, phases, timeline, cost. Before any code, you know exactly what you're getting.</p>
            </div>
            <div className="step reveal">
              <b>Configure the first module</b>
              <p>The highest-pain module ships first; working software in weeks.</p>
            </div>
            <div className="step reveal">
              <b>Roll out in stages</b>
              <p>Training on the floor; each phase proves itself before the next.</p>
            </div>
            <div className="step reveal">
              <b>Stay</b>
              <p>We support, refine, and extend the system as you grow.</p>
            </div>
          </div>
          <p className="trust-line reveal">Fixed-scope phases. No lock-in — you own your data and your system.</p>
        </div>
      </section>

      {/* 7. WHAT WE BUILD — CAPABILITY BAND */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Whatever the operational problem, <em className="grad">we build the system that solves it.</em></h2>
          </div>
          <div className="chips reveal">
            <span className="chip">Custom ERP</span>
            <span className="chip">Production &amp; Quality Systems</span>
            <span className="chip">Inventory &amp; Dispatch</span>
            <span className="chip">Dashboards &amp; MIS</span>
            <span className="chip">Workflow Automation</span>
            <span className="chip">Mobile Apps for the Floor</span>
            <span className="chip">Integrations (Tally, weighbridges, machines)</span>
            <span className="chip">Applied AI (where it earns its keep)</span>
          </div>
          <div className="callout reveal">We recommend AI and automation only where they pay for themselves. If a simpler system solves it, that's what we'll tell you.</div>
        </div>
      </section>

      {/* 8. WHO WE ARE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>The people who'll actually be in your plant.</h2>
            <p className="lede">MesaOrigins is a Mumbai-based software firm founded by engineers who like factories. Small team, senior people, no hand-offs to juniors you've never met.</p>
          </div>
          <div className="grid-3 founder-cards">
            <div className="founder reveal">
              <img src={founder1} alt="Aravind Nair" />
              <b>Aravind Nair</b>
              <span>Founder &amp; CEO</span>
            </div>
            <div className="founder reveal">
              <img src={founder2} alt="Priya Sharma" />
              <b>Priya Sharma</b>
              <span>Chief of Operations</span>
            </div>
            <div className="founder reveal">
              <img src={founder3} alt="Dr. Marc Dupont" />
              <b>Dr. Marc Dupont</b>
              <span>Chief Software Architect</span>
            </div>
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
            <a className="contact-big" href="mailto:ssales@mesaorigins.com">ssales@mesaorigins.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
