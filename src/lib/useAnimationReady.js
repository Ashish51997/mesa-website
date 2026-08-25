import { useEffect, useState } from 'react';

/**
 * Returns true only once we can prove the browser will actually run an
 * animation: a real animation frame has arrived and the document has been
 * visible throughout.
 *
 * Entrance animations hide their content first and reveal it afterwards. If the
 * animation never runs — background tab, bfcache restore, prerender, a headless
 * capture — that content stays hidden for good. Gate the hidden-first state on
 * this hook so the default is "visible" and the animation is the opt-in.
 *
 * Also returns false under prefers-reduced-motion, so callers get the static
 * rendering for free.
 */
export default function useAnimationReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let disposed = false;
    let everHidden = document.visibilityState === 'hidden';

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') everHidden = true;
    };
    document.addEventListener('visibilitychange', onVisibility);

    // rAF only fires while the document is being rendered — it is the probe.
    const id = requestAnimationFrame(() => {
      if (!disposed && !everHidden) setReady(true);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return ready;
}
