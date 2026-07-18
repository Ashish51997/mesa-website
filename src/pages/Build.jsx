import React from 'react';

export default function Build() {
  return (
    <div className="page-content" id="page-build">
      {/* ============ HERO ============ */}
      <header className="build-hero">
        <div className="build-hero-glow" aria-hidden="true"></div>
        <div className="wrap build-hero-inner">
          <span className="eyebrow">What We Build</span>
          <h1>Start from the problem. <span className="blue">The system follows.</span></h1>
          <p className="lede">We don't lead with technology. Tell us what's slowing the plant down — these are the problems we're asked to solve most, and what we build to solve them.</p>
        </div>
      </header>

      {/* ============ PROBLEM → SYSTEM ============ */}
      <section className="build-systems">
        <div className="wrap">
          <div className="build-rows">

            <div className="build-row reveal">
              <div className="build-prob">
                <div className="build-qmark">“</div>
                <blockquote>We can't see production in real time.</blockquote>
              </div>
              <div className="build-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="build-sol">
                <b>Production monitoring &amp; machine-log systems.</b> Operators log output, downtime, and rejections at the machine; management sees the floor live.
              </div>
            </div>

            <div className="build-row reveal">
              <div className="build-prob">
                <div className="build-qmark">“</div>
                <blockquote>Inventory is never accurate.</blockquote>
              </div>
              <div className="build-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="build-sol">
                <b>Stores, inventory &amp; material-flow systems.</b> Live stock by item, lot, and location — GRN to issue to dispatch — so the register, the sheet, and reality finally agree.
              </div>
            </div>

            <div className="build-row reveal">
              <div className="build-prob">
                <div className="build-qmark">“</div>
                <blockquote>Quality lives on paper.</blockquote>
              </div>
              <div className="build-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="build-sol">
                <b>Digital QC, inspection &amp; CAPA systems.</b> Inspections recorded against the batch, complaints traced in minutes, CAPA tracked to closure — audit-ready by default.
              </div>
            </div>

            <div className="build-row reveal">
              <div className="build-prob">
                <div className="build-qmark">“</div>
                <blockquote>Sales and plant don't talk.</blockquote>
              </div>
              <div className="build-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="build-sol">
                <b>Inquiry-to-dispatch ERP.</b> One flow from inquiry to sales order to plan to dispatch, so sales promises dates production can keep.
              </div>
            </div>

            <div className="build-row reveal">
              <div className="build-prob">
                <div className="build-qmark">“</div>
                <blockquote>Reports take days.</blockquote>
              </div>
              <div className="build-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="build-sol">
                <b>Dashboards &amp; MIS.</b> The numbers management waits for at month-end, live every day — on a desktop or a phone.
              </div>
            </div>

            <div className="build-row reveal">
              <div className="build-prob">
                <div className="build-qmark">“</div>
                <blockquote>People re-type data between systems.</blockquote>
              </div>
              <div className="build-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="build-sol">
                <b>Integration &amp; workflow automation.</b> Tally, weighbridges, machines, Excel — connected so data is entered once and flows everywhere it's needed.
              </div>
            </div>

          </div>

          <div className="build-honesty reveal">
            We recommend AI and automation only where they pay for themselves. If a simpler system solves it, that's what we'll tell you.
          </div>
        </div>
      </section>

      {/* ============ BEYOND MANUFACTURING ============ */}
      <section className="build-beyond">
        <div className="wrap build-beyond-inner reveal">
          <h2>Beyond manufacturing — <span className="blue">the same operational DNA.</span></h2>
          <p>Inventory, dispatch, traceability, workflow — the same DNA applies to logistics, distribution, and other operations-heavy businesses. If that's you, talk to us.</p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="build-cta">
        <div className="wrap">
          <div className="build-cta-card reveal">
            <div>
              <h2>Not sure which of these is <span className="blue">your problem?</span></h2>
              <p>That's what the walkthrough is for. Tell us how your operation runs — we'll tell you where software would help, and where it wouldn't.</p>
              <a href="#/contact" className="btn">Book an Operations Walkthrough</a>
            </div>
            <div className="build-cta-contact">
              <b>+91 98765 43210</b>
              <b>hello@astrasystems.example</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
