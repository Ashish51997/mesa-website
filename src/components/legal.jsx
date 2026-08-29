import React from 'react';

/*
  Shared furniture for the legal pages (Privacy Policy, Terms of Use). Both
  pages are built the same way, so these live here rather than being copied
  into each one and drifting apart.
*/

/* A value only the business can supply. Deliberately loud, so an unanswered
   question can't quietly ship — see the TODO block in each legal page. */
export const Fill = ({ children }) => <span className="legal-fill">{children}</span>;

/* Return the reader wherever they came from. The href is the fallback for a
   direct visit or a shared link, where there is nothing to go back to. */
function goBack(e) {
  if (window.history.length > 1) {
    e.preventDefault();
    window.history.back();
  }
}

/* Replaces the eyebrow chip on legal pages: the site nav is hidden on them, so
   this is the way back out. */
export function BackLink() {
  return (
    <a className="legal-back" href="#/" onClick={goBack}>
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18 9 12l6-6" />
      </svg>
      Back
    </a>
  );
}

/* The numbered body of a legal page, plus the closing contact card. */
export function LegalSections({ sections, children }) {
  return (
    <>
      {sections.map((section) => (
        <section className="legal-block reveal" key={section.n}>
          <h2>
            <span className="legal-num" aria-hidden="true">{section.n}</span>
            {section.title}
          </h2>
          {section.body}
        </section>
      ))}
      {children}
    </>
  );
}
