import React from 'react';

export default function Build() {
  return (
    <div className="page-content" id="page-build">
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal">What we build</span>
          <h1 className="reveal">Start from the problem. <em className="grad">The system follows.</em></h1>
          <p className="lede reveal" style={{ marginTop: '20px' }}>We don't lead with technology. Tell us what's slowing the plant down — these are the problems we're asked to solve most, and what we build to solve them.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          <div className="ps-list">
            <div className="ps-row reveal">
              <span className="prob">"We can't see production in real time."</span>
              <span className="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="sol"><strong>Production monitoring &amp; machine-log systems.</strong> Operators log output, downtime, and rejections at the machine; management sees the floor live.</span>
            </div>
            <div className="ps-row reveal">
              <span className="prob">"Inventory is never accurate."</span>
              <span className="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="sol"><strong>Stores, inventory &amp; material-flow systems.</strong> Live stock by item, lot, and location — GRN to issue to dispatch — so the register, the sheet, and reality finally agree.</span>
            </div>
            <div className="ps-row reveal">
              <span className="prob">"Quality lives on paper."</span>
              <span className="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="sol"><strong>Digital QC, inspection &amp; CAPA systems.</strong> Inspections recorded against the batch, complaints traced in minutes, CAPA tracked to closure — audit-ready by default.</span>
            </div>
            <div className="ps-row reveal">
              <span className="prob">"Sales and plant don't talk."</span>
              <span className="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="sol"><strong>Inquiry-to-dispatch ERP.</strong> One flow from inquiry to sales order to plan to dispatch, so sales promises dates production can keep.</span>
            </div>
            <div className="ps-row reveal">
              <span className="prob">"Reports take days."</span>
              <span className="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="sol"><strong>Dashboards &amp; MIS.</strong> The numbers management waits for at month-end, live every day — on a desktop or a phone.</span>
            </div>
            <div className="ps-row reveal">
              <span className="prob">"People re-type data between systems."</span>
              <span className="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="sol"><strong>Integration &amp; workflow automation.</strong> Tally, weighbridges, machines, Excel — connected so data is entered once and flows everywhere it's needed.</span>
            </div>
          </div>

          <div className="callout reveal" style={{ marginBottom: '40px' }}>
            We recommend AI and automation only where they pay for themselves. If a simpler system solves it, that's what we'll tell you.
          </div>

          <div className="prose">
            <p><strong>Beyond manufacturing</strong> — the same operational DNA (inventory, dispatch, traceability, workflow) applies to logistics, distribution, and other operations-heavy businesses. If that's you, talk to us.</p>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="wrap">
          <div className="reveal">
            <h2>Not sure which of these is your problem?</h2>
            <p className="lede">That's what the walkthrough is for. Tell us how your operation runs — we'll tell you where software would help, and where it wouldn't.</p>
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
