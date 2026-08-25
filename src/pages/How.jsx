import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import FinalCta from '../components/FinalCta';
import iconGear from '../assets/how-icon-gear.png';
import iconTools from '../assets/how-icon-tools.png';
import iconChecklist from '../assets/how-icon-checklist.png';
import faqWorker from '../assets/faq-worker.png';

function FaqItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`faq-split-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="faq-split-q" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="chev">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
      {/* Open/closed is a CSS grid-row transition rather than a JS height
          animation: the panel's expanded state is then declarative, so it is
          correct even if the animation never gets a frame to run. */}
      <div className="faq-split-a">
        <div className="faq-split-a-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* Hero travel. The tablet starts low in the viewport and rises to centre as the
   hero scrolls past, settling once it gets there. The props share the motion
   but each covers a slightly different distance, so they drift rather than
   moving as one rigid block. `to` is where each element ends (0 = at rest);
   `from` is its offset in px at the top of the page. */
const TABLET_FROM = 300;

const HERO_PROPS = [
  { cls: 'how-prop-gear', src: iconGear, w: 667, h: 667, from: 400, until: 0.52 },
  { cls: 'how-prop-tools', src: iconTools, w: 565, h: 565, from: 340, until: 0.46 },
  { cls: 'how-prop-checklist', src: iconChecklist, w: 663, h: 592, from: 440, until: 0.56 },
];

const BP_CHIPS = [
  { title: 'Workflow maps', note: 'Every process, step by step',
    icon: <path d="M4 6h16M4 12h16M4 18h10" /> },
  { title: 'Screen designs', note: 'Screens your team reacts to first',
    icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8" /></> },
  { title: 'Phase plan', note: 'What ships first, and why',
    icon: <path d="M4 20V10M10 20V4M16 20v-9M22 20H2" /> },
  { title: 'Timeline & cost', note: 'Fixed scope per phase',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></> },
];

/* Engagement commitments. Each card carries a tinted illustration panel above
   its copy; the drawings are line art in the site's accent, matching the stage
   icons rather than importing artwork. */
const COMMITMENTS = [
  {
    title: 'Fixed-scope phases',
    body: (
      <>
        Scope, timeline and price are locked in the Blueprint before work starts.{' '}
        <b>You pay for outcomes, not hours.</b>
      </>
    ),
    art: (
      <>
        <rect x="18" y="30" width="44" height="26" rx="8" className="fill" />
        <path d="M32 43l6 6 10-12" className="knock" />
        <rect x="70" y="30" width="44" height="26" rx="8" />
        <rect x="122" y="30" width="44" height="26" rx="8" className="dashed" />
        <path d="M18 68h148" className="dashed" />
      </>
    ),
  },
  {
    title: 'Ongoing support',
    body: (
      <>
        One simple monthly plan covers support, fixes and small refinements.{' '}
        <b>Bigger extensions get their own fixed-scope phase.</b>
      </>
    ),
    art: (
      <path d="M92 12l38 15v24c0 21-16 35-38 43-22-8-38-22-38-43V27z" />
    ),
  },
  {
    title: 'No lock-in',
    body: (
      <>
        Your system, your data. If we ever part ways, <b>you keep everything</b> &mdash; code,
        database, documentation.
      </>
    ),
    art: (
      <>
        <rect x="20" y="42" width="46" height="36" rx="8" />
        <path d="M30 42V30a13 13 0 0 1 26 0" />
        <circle cx="43" cy="58" r="5" />
        <path d="M43 63v6" />
        <rect x="86" y="28" width="42" height="18" rx="6" />
        <rect x="112" y="50" width="42" height="18" rx="6" className="fill-soft" />
        <rect x="86" y="72" width="42" height="18" rx="6" />
        <path d="M94 37h22M120 59h22M94 81h22" className="hint" />
      </>
    ),
  },
];

const STAGES = [
  {
    id: 's1',
    num: '01',
    kicker: 'Stage one · The visit',
    title: 'Walk the floor',
    body: 'We start in your plant, not a conference room. We follow an order through its whole life — inquiry, planning, production, QC, stores, dispatch — and talk to the people who actually do the work: supervisors, operators, storekeepers, the QC in-charge. We map how work actually flows, including the workarounds nobody wrote down.',
    icon: (
      <>
        <circle cx="6" cy="19" r="2.5" />
        <circle cx="18" cy="5" r="2.5" />
        <path d="M8.5 19h6a4 4 0 0 0 0-8h-5a4 4 0 0 1 0-8h6" />
      </>
    ),
  },
  {
    id: 's2',
    num: '02',
    kicker: 'Stage two · On paper first',
    title: 'Blueprint',
    body: 'Before any code, we put the whole system on paper. The Blueprint is a fixed document you can read, question, and approve:',
    chips: BP_CHIPS,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 9v12" />
      </>
    ),
  },
  {
    id: 's3',
    num: '03',
    kicker: 'Stage three · Working software in weeks',
    title: 'Configure the first module',
    body: 'We start from the proven MesaOps platform and configure your highest-pain module first. Working software in weeks — not a blank canvas.',
    icon: (
      <>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  },
  {
    id: 's4',
    num: '04',
    kicker: 'Stage four · Prove, then proceed',
    title: 'Roll out in stages',
    body: 'Each phase goes live with training on the floor — not a manual sent by email. Supervisors and operators use the system on real work before the next phase starts. Each phase proves itself before the next begins, and you decide whether to continue at every stage.',
    icon: <path d="M3 20h5v-4h5v-4h5V8h3" />,
  },
  {
    id: 's5',
    num: '05',
    kicker: 'Stage five · For the long run',
    title: 'Stay',
    body: 'Plants change: new machines, new products, new customers with new requirements. We support the system, fix what breaks, and extend it as you grow — with the same senior team, long after go-live. The people who built it are the people who answer the phone.',
    icon: <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2z" />,
  },
];

const STAGE_IDS = STAGES.map((st) => st.id);

export default function How() {
  const containerRef = useRef(null);
  
  // Track scroll progress within the stage-list container for the timeline rail
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const [activeStages, setActiveStages] = useState({
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
  });

  // Gate the scroll animation on JS actually being able to run it. The CSS keeps
  // stage copy visible by default, so a failed observer can never swallow a
  // stage's title and body the way it did before.
  const [animate, setAnimate] = useState(false);

  // Hero travel is driven by how far the hero itself has scrolled past.
  const heroRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Takes the edge off trackpad jitter without lagging behind the scrollbar.
  const heroTravel = useSpring(heroProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // The hero is much shorter on phones, so a full-size travel would start the
  // tablet mostly clipped by the hero's own bottom edge.
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const travel = compact ? 0.45 : 1;

  const tabletY = useTransform(heroTravel, [0, 0.45], [TABLET_FROM * travel, 0]);
  const gearY = useTransform(heroTravel, [0, HERO_PROPS[0].until], [HERO_PROPS[0].from * travel, 0]);
  const toolsY = useTransform(heroTravel, [0, HERO_PROPS[1].until], [HERO_PROPS[1].from * travel, 0]);
  const checklistY = useTransform(heroTravel, [0, HERO_PROPS[2].until], [HERO_PROPS[2].from * travel, 0]);
  const propY = [gearY, toolsY, checklistY];

  // Arm the reveal animation only when we can prove the browser will actually
  // run it. Two things can stop it:
  //   1. The preloader holds the app at visibility:hidden for several seconds,
  //      so observers armed during that window never see a real scroll.
  //   2. If the document is not being rendered at all (background tab, bfcache
  //      restore, prerender, screenshot capture), requestAnimationFrame and
  //      IntersectionObserver are both suspended and no stage ever gets .on.
  // In either failure case we leave the animation off, and the CSS default
  // keeps every stage's title and body visible.
  useEffect(() => {
    const markAllActive = () =>
      setActiveStages(Object.fromEntries(STAGE_IDS.map(id => [id, true])));

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      markAllActive();
      return;
    }

    let disposed = false;
    let everHidden = document.visibilityState === 'hidden';
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') everHidden = true;
    };
    document.addEventListener('visibilitychange', onVisibility);

    // rAF only fires while the document is being rendered — it is the probe.
    const arm = () => {
      if (disposed) return;
      requestAnimationFrame(() => {
        if (disposed) return;
        if (everHidden) markAllActive();
        else setAnimate(true);
      });
    };

    let mo;
    if (document.body.classList.contains('no-scroll')) {
      mo = new MutationObserver(() => {
        if (!document.body.classList.contains('no-scroll')) {
          mo.disconnect();
          arm();
        }
      });
      mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    } else {
      arm();
    }

    return () => {
      disposed = true;
      document.removeEventListener('visibilitychange', onVisibility);
      if (mo) mo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStages(prev => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -12% 0px' }
    );

    const els = STAGE_IDS.map(id => document.getElementById(id)).filter(Boolean);
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [animate]);

  return (
    <div className="how-page" id="page-how">
      {/* HERO — the whole hero renders on a tablet screen, with the tablet and
          the props around it animating in once the section is reached. */}
      <header className="how-hero" ref={heroRef}>
        <div className="wrap">
          <div className="how-stage">
            {HERO_PROPS.map((prop, i) => (
              <motion.img
                key={prop.cls}
                className={`how-prop ${prop.cls}`}
                src={prop.src}
                alt=""
                aria-hidden="true"
                width={prop.w}
                height={prop.h}
                decoding="async"
                style={reduced ? undefined : { y: propY[i] }}
              />
            ))}

            <motion.div className="how-tablet" style={reduced ? undefined : { y: tabletY }}>
              <div className="how-tablet-screen">
                <h1>
                  From factory walkthrough to live system &mdash;{' '}
                  <em className="grad">in stages, not one giant leap.</em>
                </h1>
                <p className="lead">
                  You should never sign for a year of work and hope. Here&rsquo;s exactly what
                  happens, in what order, and what you hold in your hands at each stage.
                </p>
                <div className="hero-actions">
                  <a
                    className="btn-primary"
                    href="#stages"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('stages')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    See the five stages
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </a>
                  <a className="btn-ghost" href="#/contact">Book a walkthrough</a>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* STAGES */}
      <section className="stages-section" id="stages">
        <div className="wrap">
          <div className="section-head reveal in">
            <h2>Five stages. <em className="grad">One honest sequence.</em></h2>
            <p>Each stage ends with something concrete you can read, use, or run — and a decision point where you choose whether to continue.</p>
          </div>

          <div className="rail-layout">
            <div className="rail" aria-hidden="true">
              <div className="rail-track">
                <motion.div 
                  className="rail-fill" 
                  style={{ scaleY: scrollYProgress }} 
                />
              </div>
            </div>

            <div className={`stage-list${animate ? ' anim' : ''}`} ref={containerRef}>
              {STAGES.map((st) => (
                <article
                  className={`stage ${activeStages[st.id] ? 'on' : ''}`}
                  id={st.id}
                  key={st.id}
                >
                  <div className="stage-num"><span>{st.num}</span></div>
                  <div className="stage-body">
                    <div className="card-top">
                      <div className="stage-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">{st.icon}</svg>
                      </div>
                      <div>
                        <div className="stage-kicker">{st.kicker}</div>
                        <h3>{st.title}</h3>
                      </div>
                    </div>

                    <p>{st.body}</p>

                    {st.chips && (
                      <div className="bp-grid">
                        {st.chips.map((chip) => (
                          <div className="bp-chip" key={chip.title}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">{chip.icon}</svg>
                            <span>
                              {chip.title}
                              <small>{chip.note}</small>
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {st.id === 's2' && (
                      <div className="bp-doc" aria-hidden="true">
                        <div className="bp-doc-inner">
                          <div className="bp-doc-body">
                            <div className="bp-flow">
                              <span className="node">INQUIRY → SALES ORDER</span>
                              <span className="arrow"></span>
                              <span className="node">PRODUCTION PLAN</span>
                              <span className="arrow"></span>
                              <span className="node">QC · BATCH TRACE</span>
                              <span className="arrow"></span>
                              <span className="node">DISPATCH → INVOICE</span>
                            </div>
                            <div className="bp-side">
                              <span className="tag">PHASE 1 · FIXED SCOPE</span>
                              <div className="row w90"></div>
                              <div className="row w70"></div>
                              <div className="row w90"></div>
                              <div className="row w55"></div>
                              <span className="tag">TIMELINE · 6 WKS</span>
                              <div className="row w70"></div>
                              <div className="row w55"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="engage-section">
        <div className="wrap">
          <div className="section-head reveal in">
            <h2>Built so you <em className="grad">stay in control.</em></h2>
            <p>Three commitments that hold from the first walkthrough to years after go-live.</p>
          </div>
          <div className="tri-grid">
            {COMMITMENTS.map((c) => (
              <div className="tri-card" key={c.title}>
                <div className="tri-art" aria-hidden="true">
                  <svg viewBox="0 0 184 100">{c.art}</svg>
                </div>
                <div className="tri-body">
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="wrap">
          <div className="faq-split-grid">
            <div className="reveal in">
              <h2>Questions <em className="grad">owners ask us.</em></h2>
              <p className="faq-split-note">
                Asked something else? Bring it to the walkthrough — or write to{' '}
                <a href="mailto:sales@mesaorigins.com">sales@mesaorigins.com</a>.
              </p>
              <img
                className="faq-figure"
                src={faqWorker}
                alt=""
                aria-hidden="true"
                width="1122"
                height="1402"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="faq-split-list">
              <FaqItem
                question="How long until something is live?"
                answer="Weeks, not months. We start from the proven MesaOps platform and configure your highest-pain module first — so your team is running real work on it early, not waiting for a big-bang launch. The exact timeline is written into your Blueprint before we begin, so you know the date before you commit."
                defaultOpen={true}
              />
              <FaqItem
                question="What happens to our existing data?"
                answer="It comes with you. Customer lists, item masters, opening stock, running orders — we bring the useful data in during setup, and your team verifies it before go-live. Nobody sits and retypes registers into the new system."
              />
              <FaqItem
                question="What if we already use Tally?"
                answer="Keep it. Tally stays your accounting system — we don't replace it. We run the factory side: orders, production, QC, stores and dispatch. Your accounts team gets clean, ready-to-enter numbers from the system instead of chasing the floor for figures."
              />
              <FaqItem
                question="Do we need our own IT team?"
                answer="No. We host the system, keep it secure, back it up and update it — that's part of the monthly plan. If your team can use WhatsApp, they can use this. And we train everyone on the floor, shift by shift, until they're comfortable."
              />
              <FaqItem
                question="Who owns the code and data?"
                answer="You do. If we ever part ways, you keep everything — the code, the database, the documentation. No lock-in is one of our standing commitments, and it's written into the agreement, not just this page."
              />
              <FaqItem
                question="Will our operators actually use it?"
                answer="That's the test we design for. Screens mirror the paper registers your team already fills every shift — same fields, same order — so day one feels familiar, not foreign. Entries are made by tapping and picking, not typing. And the system never blocks a save: it records what really happened on the floor."
              />
              <FaqItem
                question="What does it cost?"
                answer="Every phase is a fixed price, agreed in the Blueprint before any work starts — no hourly billing, no open-ended invoices. The walkthrough is where we understand your plant and give you that number. You'll know the full cost of a phase before you say yes to it."
              />
              <FaqItem
                question="What if something breaks during a night shift?"
                answer="You call, we fix. Support comes from the same senior team that built your system — the people who know your plant, not a ticket queue. And because nothing in the system blocks a save, a glitch never stops your line: the floor keeps running while we sort it out."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta
        heading={<>Start with a walkthrough, <em className="grad">not a contract.</em></>}
        lede="45 minutes, your team and ours. No deck, no obligation — just an honest look at how your operation runs today."
      />

    </div>
  );
}
