import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import FinalCta from '../components/FinalCta';
import iconGear from '../assets/how-icon-gear.png';
import iconTools from '../assets/how-icon-tools.png';
import iconChecklist from '../assets/how-icon-checklist.png';

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
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="faq-split-a"
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
}

const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1];

/* Hero entrance. Runs once when the page is ready — nothing is scroll-linked,
   so there is no per-frame work while scrolling. The props start further out
   and land at staggered delays, which reads as depth without tracking scroll. */
const HERO_STAGE = {
  hidden: {},
  shown: { transition: { delayChildren: 0.05, staggerChildren: 0.08 } },
};

const TABLET = {
  hidden: { opacity: 0, y: 90 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT_CUBIC },
  },
};

const prop = (x, y, rotate, duration) => ({
  hidden: { opacity: 0, x, y, rotate },
  shown: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration, ease: EASE_OUT_CUBIC },
  },
});

const HERO_PROPS = [
  { cls: 'how-prop-gear', src: iconGear, w: 667, h: 667, variants: prop(-40, 70, -18, 0.8) },
  { cls: 'how-prop-tools', src: iconTools, w: 565, h: 565, variants: prop(46, 84, 16, 0.85) },
  { cls: 'how-prop-checklist', src: iconChecklist, w: 663, h: 592, variants: prop(34, 96, 10, 0.9) },
];

const STAGE_IDS = ['s1', 's2', 's3', 's4', 's5'];

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

  // Same probe as the stage rail below: never hide the hero unless we can prove
  // the entrance will actually run.
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let disposed = false;
    let everHidden = document.visibilityState === 'hidden';
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') everHidden = true;
    };
    document.addEventListener('visibilitychange', onVisibility);
    const id = requestAnimationFrame(() => {
      if (!disposed && !everHidden) setHeroReady(true);
    });
    return () => {
      disposed = true;
      cancelAnimationFrame(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

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
      <header className="how-hero">
        <div className="wrap">
          <motion.div
            className="how-stage"
            initial={heroReady ? 'hidden' : false}
            animate={heroReady ? 'shown' : undefined}
            variants={HERO_STAGE}
          >
            {HERO_PROPS.map((prop) => (
              <motion.img
                key={prop.cls}
                className={`how-prop ${prop.cls}`}
                src={prop.src}
                alt=""
                aria-hidden="true"
                width={prop.w}
                height={prop.h}
                decoding="async"
                variants={prop.variants}
              />
            ))}

            <motion.div className="how-tablet" variants={TABLET}>
              <div className="how-tablet-screen">
                <h1>
                  From factory walkthrough to live system &mdash;{' '}
                  <span className="accent">in stages, not one giant leap.</span>
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

                <div className="stage-strip" aria-hidden="true">
                  <a className="chip" href="#s1"><span className="n">01</span>Walk the floor</a>
                  <span className="dash"></span>
                  <a className="chip" href="#s2"><span className="n">02</span>Blueprint</a>
                  <span className="dash"></span>
                  <a className="chip" href="#s3"><span className="n">03</span>Configure first module</a>
                  <span className="dash"></span>
                  <a className="chip" href="#s4"><span className="n">04</span>Roll out</a>
                  <span className="dash"></span>
                  <a className="chip" href="#s5"><span className="n">05</span>Stay</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* STAGES */}
      <section className="stages-section" id="stages">
        <div className="wrap">
          <div className="section-head reveal in">
            <h2>Five stages. <span className="accent">One honest sequence.</span></h2>
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
              {/* STAGE 1 */}
              <article className={`stage ${activeStages.s1 ? 'on' : ''}`} id="s1">
                <div className="stage-num"><span>01</span></div>
                <div className="stage-body">
                  <div className="stage-kicker">Stage one · The visit</div>
                  <h3>Walk the floor</h3>
                  <p>
                    We start in your plant, not a conference room. We follow an order through its whole life — inquiry, planning, production, QC, stores, dispatch — and talk to the people who actually do the work: supervisors, operators, storekeepers, the QC in-charge. We map how work actually flows, including the workarounds nobody wrote down.
                  </p>
                  <div className="you-get">
                    <b>What you get:</b>
                    <span>a shared, honest picture of how your operation runs today. Most owners tell us this alone was worth the visit.</span>
                  </div>
                </div>
              </article>

              {/* STAGE 2 */}
              <article className={`stage ${activeStages.s2 ? 'on' : ''}`} id="s2">
                <div className="stage-num"><span>02</span></div>
                <div className="stage-body">
                  <div className="stage-kicker">Stage two · On paper first</div>
                  <h3>Blueprint</h3>
                  <p>
                    Before any code, we put the whole system on paper. The Blueprint is a fixed document you can read, question, and approve:
                  </p>

                  <div className="bp-grid">
                    <div className="bp-card">
                      <div className="ic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M3 12h18M3 18h18"/>
                        </svg>
                      </div>
                      <h4>Workflow maps</h4>
                      <p>Every process the system will cover, drawn as it will work, step by step.</p>
                    </div>
                    
                    <div className="bp-card">
                      <div className="ic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="14" rx="2"/>
                          <path d="M8 21h8"/>
                        </svg>
                      </div>
                      <h4>Screen designs</h4>
                      <p>The actual screens your team will use, so an operator can react to them before they're built.</p>
                    </div>

                    <div className="bp-card">
                      <div className="ic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                        </svg>
                      </div>
                      <h4>Phase plan</h4>
                      <p>Which module ships first, second, third — and why.</p>
                    </div>

                    <div className="bp-card">
                      <div className="ic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"/>
                          <path d="M12 7v5l3 3"/>
                        </svg>
                      </div>
                      <h4>Timeline &amp; cost</h4>
                      <p>Per phase, fixed scope. No open-ended billing.</p>
                    </div>
                  </div>

                  <div className="bp-doc" aria-hidden="true">
                    <div className="bp-doc-inner">
                      <div className="bp-doc-bar">
                        <i></i><i></i><i></i><em>BLUEPRINT_V1 · WORKFLOW &amp; PHASE PLAN</em>
                      </div>
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

                  <div className="you-get">
                    <b>What you get:</b>
                    <span>workflow maps, screen designs, phase plans, and absolute cost clarity before writing any code.</span>
                  </div>
                </div>
              </article>

              {/* STAGE 3 */}
              <article className={`stage ${activeStages.s3 ? 'on' : ''}`} id="s3">
                <div className="stage-num"><span>03</span></div>
                <div className="stage-body">
                  <div className="stage-kicker">Stage three · Working software in weeks</div>
                  <h3>Configure the first module</h3>
                  <p>
                    We start from the proven MesaOps platform and configure your highest-pain module first. Working software in weeks — not a blank canvas.
                  </p>
                  <div className="you-get">
                    <b>What you get:</b>
                    <span>a live module your team runs daily — not a demo, not a prototype.</span>
                  </div>
                </div>
              </article>

              {/* STAGE 4 */}
              <article className={`stage ${activeStages.s4 ? 'on' : ''}`} id="s4">
                <div className="stage-num"><span>04</span></div>
                <div className="stage-body">
                  <div className="stage-kicker">Stage four · Prove, then proceed</div>
                  <h3>Roll out in stages</h3>
                  <p>
                    Each phase goes live with training on the floor — not a manual sent by email. Supervisors and operators use the system on real work before the next phase starts. Each phase proves itself before the next begins, and you decide whether to continue at every stage.
                  </p>
                  <div className="you-get">
                    <b>What you get:</b>
                    <span>a system that earns its next phase — and an exit door at every stage.</span>
                  </div>
                </div>
              </article>

              {/* STAGE 5 */}
              <article className={`stage ${activeStages.s5 ? 'on' : ''}`} id="s5">
                <div className="stage-num"><span>05</span></div>
                <div className="stage-body">
                  <div className="stage-kicker">Stage five · For the long run</div>
                  <h3>Stay</h3>
                  <p>
                    Plants change: new machines, new products, new customers with new requirements. We support the system, fix what breaks, and extend it as you grow — with the same senior team, long after go-live. The people who built it are the people who answer the phone.
                  </p>
                  <div className="you-get">
                    <b>What you get:</b>
                    <span>a partner who knows your plant — not a ticket queue.</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="engage-section">
        <div className="wrap">
          <div className="section-head reveal in">
            <h2>Engagement model. <span className="accent">Built so you stay in control.</span></h2>
            <p>Three commitments that hold from the first walkthrough to years after go-live.</p>
          </div>
          <div className="tri-grid">
            <div className="tri-card">
              <div className="ic">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2"/>
                  <path d="M3 10h18M8 2v4M16 2v4"/>
                </svg>
              </div>
              <h4>Fixed-scope phases</h4>
              <p>Every phase has a defined scope, timeline, and price agreed in the Blueprint. You pay for outcomes, not hours.</p>
            </div>

            <div className="tri-card">
              <div className="ic">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.5 0 9-3.5 9-9V6l-9-4-9 4v7c0 5.5 3.5 9 9 9z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h4>Ongoing support</h4>
              <p>After go-live, a simple monthly arrangement covers support, fixes, and small refinements. Larger extensions get their own fixed-scope phase.</p>
            </div>

            <div className="tri-card">
              <div className="ic">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="9" rx="2"/>
                  <path d="M8 11V7a4 4 0 0 1 8 0"/>
                </svg>
              </div>
              <h4>No lock-in</h4>
              <p>You own your data and your system. If we ever part ways, you keep everything — code, database, documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="wrap">
          <div className="faq-split-grid">
            <div className="reveal in">
              <h2>Questions <span className="accent">owners ask us.</span></h2>
              <p className="faq-split-note">
                Asked something else? Bring it to the walkthrough — or write to{' '}
                <a href="mailto:sales@mesaorigins.com">sales@mesaorigins.com</a>.
              </p>
            </div>
            
            <div className="faq-split-list">
              <FaqItem 
                question="How long until something is live?" 
                answer="The first module is typically in your team's hands within weeks of Blueprint approval — running on real orders, not test data. The exact timeline is fixed per phase in the Blueprint, so you know the date before we write a line of code."
                defaultOpen={true}
              />
              <FaqItem 
                question="What happens to our existing data?" 
                answer="It comes with you. Registers, Excel sheets, and existing records are migrated as part of the relevant phase — cleaned, structured, and verified against your originals before go-live. Nothing is retired until the new system has proven it holds the truth."
              />
              <FaqItem 
                question="What if we already use Tally?" 
                answer="Keep it. Tally stays your accounting system; we integrate with it so invoices, vouchers, and ledgers flow without double entry. We build the operations layer — production, quality, stores, dispatch — that Tally was never meant to handle."
              />
              <FaqItem 
                question="Do we need our own IT team?" 
                answer="No. The system is built for supervisors and operators, not engineers, and we handle hosting, updates, and support under the ongoing arrangement. If you do have IT staff, we work alongside them and hand over whatever they want to own."
              />
              <FaqItem 
                question="Who owns the code and data?" 
                answer="You do. Every phase ends with your data in your system, and if we ever part ways you keep the code, the database, and the documentation. No lock-in is a design decision, not a promise."
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
