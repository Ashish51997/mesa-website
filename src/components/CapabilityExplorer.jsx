import React, { useRef, useState } from 'react';

/* Eight capabilities behind a chip/tab strip. Artwork is authored inline with
   token-driven classes (.f-accent / .f-tint / .f-surface / .s-mid / .s-line /
   .knock) rather than literal hex, so every drawing themes with the site. */
const CAPABILITIES = [
  {
    id: 'erp',
    label: 'Custom ERP',
    title: 'Custom ERP',
    desc: 'One platform for the whole operation — commercial to dispatch — shaped around how your plant already runs, with every role seeing only what it needs.',
    examples: ['Six-stage production flow', 'Role-based access', 'Lot traceability'],
    art: (
      <>
        <rect x="26" y="26" width="46" height="46" rx="9" className="f-accent" />
        <rect x="88" y="26" width="46" height="46" rx="9" className="f-surface" />
        <rect x="26" y="88" width="46" height="46" rx="9" className="f-surface" />
        <rect x="88" y="88" width="46" height="46" rx="9" className="f-tint" />
        <path d="M72 49h16M49 72v16M111 72v16M88 111H72" className="s-mid" />
        <path d="M40 44h18M40 52h12" className="knock" />
      </>
    ),
  },
  {
    id: 'production',
    label: 'Production & Quality Systems',
    title: 'Production & Quality Systems',
    desc: 'Digital shift logbooks, in-process inspection, and a CAPA loop that actually closes — mirroring your paper formats so operators recognise every screen.',
    examples: ['Shift logbooks', 'Incoming inspection', '8D / CAPA'],
    art: (
      <>
        <rect x="34" y="24" width="76" height="106" rx="10" className="f-surface" />
        <rect x="56" y="16" width="32" height="16" rx="5" className="f-tint" />
        <path d="M48 56h48M48 74h48M48 92h30" className="s-line" strokeWidth="6" />
        <circle cx="116" cy="112" r="26" className="f-accent" />
        <path d="M106 112l7 7 14-15" className="knock" strokeWidth="3" />
      </>
    ),
  },
  {
    id: 'inventory',
    label: 'Inventory & Dispatch',
    title: 'Inventory & Dispatch',
    desc: 'From GRN at the gate to FIFO picking to gate pass — stock that matches reality, and every dispatch traceable back to its lots.',
    examples: ['GRN & stores', 'FIFO picking', 'Gate pass & LR'],
    art: (
      <>
        <rect x="24" y="38" width="34" height="34" rx="6" className="f-surface" />
        <rect x="24" y="76" width="34" height="34" rx="6" className="f-tint" />
        <path d="M74 96h30V78h16l14 14v22H74z" className="f-tint" />
        <rect x="74" y="70" width="30" height="44" rx="3" className="f-accent" />
        <circle cx="88" cy="118" r="8" className="f-surface" />
        <circle cx="120" cy="118" r="8" className="f-surface" />
        <path d="M35 50h12M35 58h8M35 88h12M35 96h8" className="s-mid" />
      </>
    ),
  },
  {
    id: 'dashboards',
    label: 'Dashboards & MIS',
    title: 'Dashboards & MIS',
    desc: 'Role-aware home screens — task queues for the floor, KPIs for management — so every login opens on what that person must act on today.',
    examples: ['Role home screens', 'Daily production MIS', 'Exception alerts'],
    art: (
      <>
        <rect x="22" y="30" width="116" height="84" rx="10" className="f-surface" />
        <rect x="36" y="76" width="14" height="24" rx="3" className="f-mid" />
        <rect x="56" y="60" width="14" height="40" rx="3" className="f-accent" />
        <rect x="76" y="48" width="14" height="52" rx="3" className="f-tint" />
        <circle cx="114" cy="60" r="14" className="s-line" strokeWidth="6" fill="none" />
        <path d="M114 46a14 14 0 0112 21" strokeWidth="6" fill="none" />
        <path d="M104 92h22" className="s-mid" strokeWidth="3" />
        <path d="M60 128h40M80 114v14" strokeWidth="2.5" />
      </>
    ),
  },
  {
    id: 'automation',
    label: 'Workflow Automation',
    title: 'Workflow Automation',
    desc: 'Approvals, escalations, and reminders that move on their own — a plan release pings QA, an overdue follow-up pings sales, without anyone chasing.',
    examples: ['Approval chains', 'Auto escalations', 'WhatsApp / email alerts'],
    art: (
      <>
        <circle cx="42" cy="80" r="17" className="f-accent" />
        <circle cx="118" cy="44" r="15" className="f-surface" />
        <circle cx="118" cy="116" r="15" className="f-tint" />
        <path d="M58 72C80 58 92 52 102 48" className="s-mid" />
        <path d="M58 88C80 102 92 108 102 112" className="s-mid" />
        <path d="M96 42l8 5-4 8" className="s-mid" fill="none" />
        <path d="M37 80l4 4 7-8" className="knock" />
      </>
    ),
  },
  {
    id: 'mobile',
    label: 'Mobile Apps for the Floor',
    title: 'Mobile Apps for the Floor',
    desc: 'Scan-first, pick-don’t-type screens built for gloved hands and shop-floor light — big targets, chips and steppers, keyboard only for remarks.',
    examples: ['QR lot scanning', 'Operator log entry', 'Offline-tolerant'],
    art: (
      <>
        <rect x="52" y="20" width="56" height="120" rx="12" className="f-surface" />
        <rect x="62" y="42" width="36" height="36" rx="5" className="f-tint" />
        <path
          d="M68 48h8v8h-8zM84 48h8M84 56h4M68 64h8M84 64h8v8M68 72h4"
          strokeWidth="2.4"
        />
        <rect x="62" y="88" width="36" height="9" rx="4.5" className="f-accent" />
        <rect x="62" y="103" width="24" height="9" rx="4.5" className="f-tint" />
        <path d="M74 132h12" className="s-mid" />
      </>
    ),
  },
  {
    id: 'integrations',
    label: 'Integrations',
    title: 'Integrations (Tally, weighbridges, machines)',
    desc: 'Your system talks to what you already run — vouchers flow to Tally, weighbridge readings land in GRNs, machine counters feed production logs.',
    examples: ['Tally sync', 'Weighbridge capture', 'Machine counters'],
    art: (
      <>
        <path d="M50 50l16 18M110 50L94 68M50 110l16-18M110 110L94 92" className="s-mid" />
        <circle cx="80" cy="80" r="20" className="f-accent" />
        <path d="M74 80h12M80 74v12" className="knock" />
        <rect x="20" y="28" width="34" height="26" rx="7" className="f-surface" />
        <rect x="106" y="28" width="34" height="26" rx="7" className="f-tint" />
        <rect x="20" y="106" width="34" height="26" rx="7" className="f-tint" />
        <rect x="106" y="106" width="34" height="26" rx="7" className="f-surface" />
      </>
    ),
  },
  {
    id: 'ai',
    label: 'Applied AI',
    title: 'Applied AI (where it earns its keep)',
    desc: 'AI where it has a payback — flagging drifting process parameters, drafting CAPA analyses, answering “where is lot B14?” in plain language.',
    examples: ['Anomaly flags', 'Draft 8D analysis', 'Ask-your-data'],
    art: (
      <>
        <path d="M80 26l10 26 26 10-26 10-10 26-10-26-26-10 26-10z" className="f-accent" />
        <path d="M120 92l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" className="f-mid" />
        <path d="M44 100l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" className="f-tint" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function CapabilityExplorer() {
  const [active, setActive] = useState(0);
  const chipRefs = useRef([]);

  // Roving focus, as expected of a tablist.
  const onKeyDown = (e) => {
    const last = CAPABILITIES.length - 1;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    chipRefs.current[next]?.focus();
  };

  const current = CAPABILITIES[active];

  return (
    <div className="cap-explorer">
      <div className="cap-chips" role="tablist" aria-label="What we build" onKeyDown={onKeyDown}>
        {CAPABILITIES.map((cap, i) => (
          <button
            key={cap.id}
            ref={(el) => { chipRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`cap-tab-${cap.id}`}
            aria-selected={i === active}
            aria-controls={`cap-panel-${cap.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`cap-chip${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {cap.label}
          </button>
        ))}
      </div>

      <div
        className="cap-panel"
        role="tabpanel"
        id={`cap-panel-${current.id}`}
        aria-labelledby={`cap-tab-${current.id}`}
        tabIndex={-1}
      >
        <div className="cap-art" key={`art-${current.id}`} aria-hidden="true">
          <svg viewBox="0 0 160 160">{current.art}</svg>
        </div>
        <div className="cap-body" key={`body-${current.id}`}>
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
          <div className="cap-eg-label">Typical builds</div>
          <div className="cap-eg-row">
            {current.examples.map((eg) => (
              <span className="cap-eg" key={eg}>{eg}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
