import React from 'react';

export default function Build() {
  return (
    <div className="page-content" id="page-build">
      {/* ============ HERO ============ */}
      <header className="build-hero">
        <div className="build-hero-glow" aria-hidden="true"></div>
        <div className="wrap">
          <div className="build-hero-grid">
            {/* Left Column: Copy & Actions */}
            <div className="build-hero-copy reveal">
              <span className="build-eyebrow-accent">What We Build</span>
              <h1>
                You bring the operational problem.<br />
                <span className="blue">We build the system that solves it.</span>
              </h1>
              <p className="lede">
                Not modules off a shelf. Every system below started as a complaint on a factory floor — a register that didn't match reality, a report that arrived too late, a WhatsApp group doing the work of software.
              </p>
              <div className="build-hero-ctas">
                <a href="#/contact" className="btn-primary-glow">Book an Operations Walkthrough</a>
                <button
                  className="btn-secondary-arrow"
                  onClick={() => {
                    const el = document.querySelector('.build-systems');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See what we build ↓
                </button>
              </div>
            </div>

            {/* Right Column: One Connected Flow Card */}
            <div className="build-hero-card reveal">
              <div className="card-header">One Connected Flow</div>
              <div className="timeline-flow">
                <div className="timeline-line"></div>
                
                <div className="timeline-step">
                  <div className="timeline-num">1</div>
                  <div className="timeline-content">
                    <h3>Inquiry &amp; order</h3>
                    <p>Sales enters it once. It never gets re-typed.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-num">2</div>
                  <div className="timeline-content">
                    <h3>Production plan <span className="live-tag">live</span></h3>
                    <p>Plan vs actual, visible per machine.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-num">3</div>
                  <div className="timeline-content">
                    <h3>Quality checks</h3>
                    <p>QC recorded at the station, with photos.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-num">4</div>
                  <div className="timeline-content">
                    <h3>Inventory &amp; stores</h3>
                    <p>Stock moves when material moves. No register.</p>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-num">5</div>
                  <div className="timeline-content">
                    <h3>Dispatch</h3>
                    <p>Batch-traceable, weighbridge-linked, invoiced.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Pill Row */}
          <div className="build-categories-row reveal">
            <span>Operations ERP</span>
            <span>Dashboards &amp; Reporting</span>
            <span>Mobile Apps for the Floor</span>
            <span>Integrations</span>
            <span>Applied AI &amp; Automation</span>
            <span>Custom Software</span>
          </div>
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
