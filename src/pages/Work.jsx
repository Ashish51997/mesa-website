import React from 'react';
import FinalCta from '../components/FinalCta';
import dashboardOverview from '../assets/dashboard_overview.jpg';
import moduleScreenshots from '../assets/module_screenshots.jpg';

export default function Work() {
  return (
    <div className="page-content" id="page-work">
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal">Case study</span>
          <h1 className="reveal">Mass Polymers: from paper registers to <em className="grad">one connected plant.</em></h1>
          <p className="lede reveal" style={{ marginTop: '20px' }}>Plastic extrusion · Pune, Maharashtra · Scope: inquiry to dispatch, rolled out in phases.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <div className="browser">
              <div className="browser-bar" aria-hidden="true"><i></i><i></i><i></i></div>
              <div className="browser-body">
                <img src={dashboardOverview} alt="Extrusion plant dashboard overview" className="asset-img" style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div className="prose">
            <h2 style={{ marginTop: 0 }}>The company</h2>
            <p>Mass Polymers manufactures PVC pipes and fittings from a plant in Pune, running continuous shifts across multiple extrusion lines. The order book had been growing steadily for years, and the plant had grown with it: more machines, more shifts, more people.</p>
            <p>What hadn't grown was the way information moved. The systems that had comfortably run a smaller operation — registers, spreadsheets, phone calls — were now holding a much larger one together.</p>

            <h2>Life before</h2>
            <p>A production day started with a supervisor writing the plan into a register. Machine operators logged output on paper sheets at the end of each shift. Somebody photographed the sheets and posted them to a WhatsApp group. Somebody else typed selected numbers into Excel for the weekly review.</p>
            <p>Quality inspections were recorded in a separate register kept by the QC in-charge. Stores maintained its own stock register, updated when time allowed. When a customer asked "where's my order?", the answer required two phone calls and a walk to the floor. When a complaint arrived, tracing the batch back through machine, shift, and raw-material lot meant paging through months of paper — days of work, sometimes with no clear answer at the end.</p>
            <p>Nobody was careless. Everybody was busy. The information simply lived in too many places, in formats that couldn't be checked against each other.</p>

            <h2>The turning point</h2>
            <p>A dispatch error that delayed a key order — and the client friction that followed — became the final turning point. Management knew the plant needed one system. What held them back was what holds most manufacturers back: stories of ERP projects that ran for a year, cost more than quoted, and ended with the team working around the software instead of in it.</p>
            <p>The condition they set was simple: the system had to match how the plant already worked, and it had to prove itself in stages — working software early, not a big reveal at the end.</p>

            <h2>What we built</h2>
            <p>We spent the first weeks on the floor, mapping every workflow from inquiry to dispatch. Then we built a single connected platform, module by module:</p>
          </div>

          <div className="module-grid">
            <div className="card module reveal"><span className="num">01</span><h3>Sales &amp; inquiry</h3><p>Every inquiry logged, quoted, and tracked in one place. Nothing lives in a personal inbox; nothing goes quiet without someone noticing.</p></div>
            <div className="card module reveal"><span className="num">02</span><h3>Sales orders</h3><p>A confirmed order carries its specs, quantities, and dates straight into planning. No re-typing, no version confusion.</p></div>
            <div className="card module reveal"><span className="num">03</span><h3>Production planning</h3><p>Orders become machine-wise, shift-wise plans against real capacity. Sales can finally see when a delivery date is realistic.</p></div>
            <div className="card module reveal"><span className="num">04</span><h3>Machine logs</h3><p>Operators log output, downtime, and rejections at the machine. The paper shift-sheet and the WhatsApp photo chain are gone.</p></div>
            <div className="card module reveal"><span className="num">05</span><h3>Quality inspection</h3><p>Incoming, in-process, and final inspections recorded digitally against the batch. Every result is attributable and searchable.</p></div>
            <div className="card module reveal"><span className="num">06</span><h3>Inventory &amp; stores</h3><p>Live stock by item, lot, and location. Issues and returns update the numbers the moment they happen — not at month-end.</p></div>
            <div className="card module reveal"><span className="num">07</span><h3>Material inward (GRN)</h3><p>Every receipt checked against its purchase order, inspected, and lot-tagged at the gate — so traceability starts before production does.</p></div>
            <div className="card module reveal"><span className="num">08</span><h3>Dispatch</h3><p>Packing, loading, and dispatch documents generated from the order itself. What left the gate matches what was ordered and what was billed.</p></div>
            <div className="card module reveal"><span className="num">09</span><h3>Customer complaints</h3><p>Complaints logged against the exact batch and dispatch. The ten-day paper hunt became a ten-minute lookup.</p></div>
            <div className="card module reveal"><span className="num">10</span><h3>CAPA</h3><p>Corrective and preventive actions tracked to closure, linked to the complaint or inspection that raised them — audit-ready by default.</p></div>
            <div className="card module reveal"><span className="num">11</span><h3>Dashboards &amp; MIS</h3><p>Production, quality, inventory, and dispatch on one live screen for management — on a desktop in the office or a phone on the road.</p></div>
          </div>

          <div className="reveal" style={{ margin: '32px 0 56px' }}>
            <div className="browser">
              <div className="browser-bar" aria-hidden="true"><i></i><i></i><i></i></div>
              <div className="browser-body">
                <img src={moduleScreenshots} alt="MesaOps software modules screenshots" className="asset-img" />
              </div>
            </div>
          </div>

          <div className="prose">
            <h2 style={{ marginTop: 0 }}>How we rolled it out</h2>
            <p>The highest-pain module shipped first. Each phase went live on the floor with hands-on training — supervisors and operators using the real system on real orders before the next phase began. The rollout started with the Sales Order and Raw Material Inward modules, which closed the gaps where material had been going untracked. Production logs were digitized at the machines in an early phase. No big-bang cutover, no parallel-running paper for months.</p>

            <h2>Life after</h2>
            <p>Management now sees the entire operation in real time. Every batch is traceable — machine, shift, operator, raw-material lot. Reporting that used to be assembled by hand is now read straight off a live dashboard. Review meetings argue about decisions, not about whose numbers are right.</p>
          </div>

          <div className="problem-links">
            <h3 style={{ marginBottom: '20px' }}>The problems this story solves, one by one</h3>
            <div className="grid-4">
              <a className="plink reveal" href="#/what-we-build">Batch traceability<span>From complaint to root cause in minutes.</span></a>
              <a className="plink reveal" href="#/what-we-build">Real-time production visibility<span>The floor, live, on any screen.</span></a>
              <a className="plink reveal" href="#/what-we-build">Inventory accuracy<span>Stock you can trust between audits.</span></a>
              <a className="plink reveal" href="#/what-we-build">Digitizing quality &amp; CAPA<span>Paper QC files, retired.</span></a>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        heading={<>Your plant is different. <em className="grad">The starting point isn&rsquo;t.</em></>}
        lede="Tell us how your operation runs today. We'll tell you honestly where software would help — and where it wouldn't."
      />

    </div>
  );
}
