import React, { lazy, Suspense } from 'react';
import oneSystemProvided from '../assets/one_system_provided.png';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import founder3 from '../assets/founder_3.jpg';
import heroProvided from '../assets/hero_provided.png';
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
        </div>
        <div className="wrap">
          <div className="hero-copy reveal">
            <h1>Your factory runs. <em className="grad">Your&nbsp;systems don't.</em></h1>
            <p className="sub">Production updates on WhatsApp. Quality records in registers. Inventory that's only accurate on audit day. We build software around how your plant actually works — one connected system from inquiry to dispatch.</p>
            <div className="hero-ctas">
              <a className="btn" href="#/contact">Book an Operations Walkthrough</a>
            </div>
          </div>
          <div className="reveal" aria-label="Astra operations dashboard preview">
            <img src={heroProvided} alt="Astra Operations Dashboard" className="hero-image" />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>The business grew. <em className="grad">The spreadsheets didn't.</em></h2>
            <p className="lede">Every growing manufacturer hits the same wall. The order book is healthy, the machines are running — but the information holding it all together lives in a dozen disconnected places.</p>
          </div>
          <div className="grid-4">
            <div className="card problem-card reveal">
              <div className="glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
                  <path d="M3 8l9 5 9-5M12 13v8" />
                </svg>
              </div>
              <h3>"What's our actual stock?"</h3>
              <p>Inventory lives in a register, an Excel sheet, and the storekeeper's head. The three never agree. You find out the truth during the annual audit — or when a dispatch gets delayed.</p>
            </div>
            <div className="card problem-card reveal">
              <div className="glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />
                  <path d="M8 11h8M8 14h5" />
                </svg>
              </div>
              <h3>"Check the WhatsApp group."</h3>
              <p>Production status is a chain of photos and voice notes. By the time numbers reach a review meeting, they're two days old and nobody can verify them.</p>
            </div>
            <div className="card problem-card reveal">
              <div className="glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M9 4h6v3H9zM7 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1" />
                  <path d="M8 12h8M8 16h6" />
                </svg>
              </div>
              <h3>"The QC file is with Ramesh."</h3>
              <p>Quality inspections live on paper. When a customer complaint comes in, tracing which batch, which machine, which shift takes days — if it's possible at all.</p>
            </div>
            <div className="card problem-card reveal">
              <div className="glyph">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 9h18M8 3v4M16 3v4M12 13v5M9.5 15.5L12 18l2.5-2.5" />
                </svg>
              </div>
              <h3>"We'll confirm delivery by tomorrow."</h3>
              <p>Sales can't promise dates because they can't see production. Production can't plan because they can't see material.</p>
            </div>
          </div>
          <p className="closing-line reveal">None of this is a people problem. Your team is working hard — inside systems that were never designed to talk to each other.</p>
        </div>
      </section>

      {/* 3. THE SHIFT */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>One system. <em className="grad">One version of the truth.</em></h2>
            <p className="lede">Imagine walking into Monday's review meeting and every number on the screen is live. An inquiry becomes a sales order, a production plan, a machine schedule, a QC record, and a dispatch note — in one flow, with nothing re-typed and nothing lost.</p>
          </div>
          <div className="outcomes">
            <div className="outcome reveal">
              <b>You see the plant in real time.</b>
              <p>Production, quality, inventory, and dispatch on one screen — from the floor or from your phone.</p>
            </div>
            <div className="outcome reveal">
              <b>Every product is traceable.</b>
              <p>Batch to machine to shift to operator to raw-material lot. A complaint becomes a ten-minute lookup, not a ten-day investigation.</p>
            </div>
            <div className="outcome reveal">
              <b>Decisions stop waiting for data.</b>
              <p>Month-end reports become live dashboards. Gut-feel planning becomes plan-versus-actual.</p>
            </div>
          </div>
          <div className="annotated reveal">
            <div className="browser">
              <div className="browser-bar" aria-hidden="true"><i></i><i></i><i></i></div>
              <div className="browser-body">
                <img src={oneSystemProvided} alt="One System Operations Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
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
              <b>Build the first module</b>
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
            <p className="lede">Astra Systems is a Mumbai-based software firm founded by engineers who like factories. Small team, senior people, no hand-offs to juniors you've never met.</p>
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
          <GLSLHills />
        </Suspense>
        <div className="wrap">
          <div className="reveal">
            <h2>Start with a walkthrough, <em class="grad">not a contract.</em></h2>
            <p className="lede">Tell us how your operation runs today — 45 minutes, your team and ours. We'll tell you honestly where software would help, where it wouldn't, and what a first phase would look like. No deck, no obligation.</p>
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
