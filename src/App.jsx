import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import How from './pages/How';
import Build from './pages/Build';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Preloader from './components/Preloader';


const routes = {
  '': 'home',
  '/': 'home',
  '/work': 'work',
  '/how-we-work': 'how',
  '/what-we-build': 'build',
  '/about': 'about',
  '/contact': 'contact',
  '/privacy': 'privacy',
  '/terms': 'terms',
};

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, '');
  return routes[hash] || 'home';
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash());
  const [theme, setTheme] = useState('light');
  const [isPreloading, setIsPreloading] = useState(true);

  // Prevent scroll during preload
  useEffect(() => {
    if (isPreloading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isPreloading]);

  // Handle Hash Routing
  const routeRef = useRef(route);
  useEffect(() => {
    const handleHashChange = () => {
      const next = getRouteFromHash();
      // Only reset the scroll position when the page actually changes. Clicking
      // the tab you are already on, or a link to the same route, shouldn't move
      // you. The jump is explicitly instant: animating it means watching the
      // new page scroll past you before it settles.
      if (routeRef.current === next) return;
      routeRef.current = next;
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on mount
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle Theme Side Effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // IntersectionObserver Reveal Animation
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      if (!el.classList.contains('in')) {
        io.observe(el);
      }
    });

    return () => {
      io.disconnect();
    };
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <Home />;
      case 'work':
        return <Work />;
      case 'how':
        return <How />;
      case 'build':
        return <Build />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Preloader onComplete={() => setIsPreloading(false)} />

      <div
        style={{
          opacity: isPreloading ? 0 : 1,
          transition: 'opacity 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96)',
          visibility: isPreloading ? 'hidden' : 'visible',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <a
          href="#main"
          className="btn"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '8px',
            zIndex: 100,
          }}
          onFocus={(e) => (e.target.style.left = '8px')}
          onBlur={(e) => (e.target.style.left = '-9999px')}
        >
          Skip to content
        </a>

        <Header currentRoute={route} theme={theme} toggleTheme={toggleTheme} />
        <main id="main">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
