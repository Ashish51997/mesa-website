import React, { lazy, Suspense, useEffect, useRef } from 'react';
import ctaLoop from '../assets/cta-loop.mp4';

// Lazy so the WebGL library stays out of the main bundle; the canvas also
// suspends itself when the section is off-screen.
const Prism = lazy(() => import('./ui/Prism'));

/* Shared closing CTA. Every page uses this so the treatment — animated
   backdrop, frosted card, looping clip — stays identical; only the heading
   and lede change per page. `className` lets a page tighten its spacing when
   the CTA is meant to read as part of the section above it. */
export default function FinalCta({ heading, lede, className = '' }) {
  const video = useRef(null);

  /* Autoplay is not something you can fire once and trust: the attempt is
     refused while the preloader still has the page hidden, and Chrome will not
     start a clip that isn't on screen. So drive it — play when the panel is
     visible, pause when it scrolls away (which also stops decoding a video
     nobody is looking at, like the Prism canvas above). */
  useEffect(() => {
    const el = video.current;
    if (!el) return;

    // React doesn't always reflect `muted` onto the node, and an unmuted clip
    // is refused autoplay outright.
    el.muted = true;

    let onScreen = true;
    const sync = () => {
      if (onScreen && !document.hidden) {
        const play = el.play();
        if (play && play.catch) play.catch(() => {});
      } else {
        el.pause();
      }
    };

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          onScreen = entries[0].isIntersecting;
          sync();
        },
        { threshold: 0.01 }
      );
      io.observe(el);
    }

    document.addEventListener('visibilitychange', sync);
    sync();

    return () => {
      if (io) io.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  // A clip that loops forever is exactly what reduced-motion asks us to drop.
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className={`section final-cta${className ? ` ${className}` : ''}`}>
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
        <div className="cta-copy reveal">
          <h2>{heading}</h2>
          {lede && <p className="lede">{lede}</p>}

          {/* Phone and email sit under the lede, above the button. */}
          <div className="cta-contact">
            <a className="contact-big" href="tel:+918338081502">+91 83380 81502</a>
            <a className="contact-big" href="mailto:sales@mesaorigins.com">sales@mesaorigins.com</a>
          </div>

          <div className="hero-ctas">
            {/* Opens a pre-addressed email rather than routing to the contact form. */}
            <a
              className="btn"
              href="mailto:sales@mesaorigins.com?subject=Operations%20walkthrough"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Decorative backdrop on the right half of the card. Masked so it fades
            into the card instead of meeting the copy with a hard edge. */}
        {!reduced && (
          <div className="cta-media" aria-hidden="true">
            <video
              ref={video}
              className="cta-video"
              src={ctaLoop}
              autoPlay
              loop
              muted
              playsInline
              /* 16MB: don't pull it on page load, only once the panel is
                 actually scrolled into view (the observer above plays it,
                 which starts the fetch). */
              preload="metadata"
              tabIndex={-1}
            />
          </div>
        )}
      </div>
    </section>
  );
}
