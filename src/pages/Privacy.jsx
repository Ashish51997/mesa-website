import React from 'react';
import { BackLink, LegalSections } from '../components/legal';
import { ADDRESS } from '../lib/site';

/*
  TODO(LEGAL): have counsel review before this page goes live.

  Every value is filled in — nothing renders as a placeholder. The address,
  retention period and grievance inbox were supplied by the business and live in
  the constants below, nowhere else.

  The rest was checked against the source rather than assumed. The entity comes
  from the footer; section 06 names Cloudflare
  (confirmed from the domain's MX records) and Google, which hosts the mailbox
  Cloudflare forwards to. The "no cookies, no analytics, Google Fonts only"
  claims in sections 03, 05 and 06 hold because there is no localStorage, no
  tracking script and no third-party host beyond fonts.googleapis.com /
  fonts.gstatic.com — re-check all three if analytics or a banner is ever added.
*/

const ENTITY = 'MesaOrigins Private Limited';
const DOMAIN = 'mesaorigins.com';
/* TODO(LEGAL): bump whenever this policy changes — section 12 promises it. */
const UPDATED = '30 Aug 2026';
/* Section 07. Applies to enquiry data and to server logs. */
const RETENTION = '6 months';
/* The published grievance contact. Must stay a real, monitored inbox — the DPDP
   Act requires one. */
const PRIVACY_EMAIL = 'legal@mesaorigins.com';

const SHORT_VERSION = [
  'We only collect what you give us — mostly through the contact form and email.',
  'We use it to reply to you and set up a walkthrough. Nothing else.',
  'We never sell your information, and we never will.',
  'You can ask us at any time to show, correct, or delete what we hold about you.',
];

/* The four rights, as cards — the one place in the policy worth pulling out of
   running text, because it is the part a reader is looking for. */
const RIGHTS = [
  {
    title: 'Ask what we hold',
    body: 'Request a summary of the personal data we have about you and what we’ve done with it.',
  },
  {
    title: 'Correct or delete it',
    body: 'Ask us to fix anything inaccurate, or erase your data entirely once it’s no longer needed.',
  },
  {
    title: 'Withdraw consent',
    body: 'Change your mind at any time. Withdrawing consent won’t affect anything done before you withdrew it.',
  },
  {
    title: 'Raise a grievance',
    body: 'Complain to us first (details below). If we don’t resolve it, you can approach the Data Protection Board of India.',
  },
];

const SECTIONS = [
  {
    n: '01',
    title: 'Who we are',
    body: (
      <>
        <p>
          This website is operated by <strong>{ENTITY}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
          a company registered in India with its office at{' '}
          {ADDRESS}. We build operational software for manufacturers and other growing
          businesses.
        </p>
        <p>
          Under India&rsquo;s Digital Personal Data Protection Act, 2023 (the{' '}
          <strong>DPDP Act</strong>), we are the &ldquo;data fiduciary&rdquo; for the personal
          information collected through this website &mdash; which simply means we&rsquo;re the ones
          responsible for handling it properly.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'What this policy covers',
    body: (
      <>
        <p>
          This policy covers <strong>this website only</strong> &mdash; the pages you&rsquo;re
          browsing now, the contact form, and the emails or calls that follow from it.
        </p>
        <p>
          It does <strong>not</strong> cover the software products we build and run for our clients
          (such as our manufacturing platform). Data inside those systems belongs to our clients and
          is governed by the separate agreements we sign with each of them.
        </p>
      </>
    ),
  },
  {
    n: '03',
    title: 'What we collect',
    body: (
      <>
        <p>
          <strong>Information you give us directly.</strong> When you fill in the contact form or
          write to us, we receive what you type &mdash; typically your name, work email, phone
          number, company name, and your message. If you book a walkthrough, we&rsquo;ll also hold
          whatever you share with us during that conversation.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like almost every website, our
          hosting provider keeps standard server logs &mdash; your IP address, browser type, the
          pages you visited, and when. This site runs no analytics and builds no profile of you. It
          does load its typefaces from Google Fonts, which means Google receives your IP address and
          browser details when a page loads.
        </p>
        <p>
          <strong>What we don&rsquo;t collect.</strong> We don&rsquo;t ask for and don&rsquo;t want
          financial information, government IDs, passwords, or anything sensitive. Please
          don&rsquo;t put such details in the contact form.
        </p>
      </>
    ),
  },
  {
    n: '04',
    title: 'Why we collect it',
    body: (
      <>
        <ul className="legal-list">
          <li>
            <strong>To respond to you.</strong> If you write to us, we use your details to reply,
            answer questions, and schedule a walkthrough if you want one.
          </li>
          <li>
            <strong>To keep in touch about your enquiry.</strong> Follow-ups related to the
            conversation you started &mdash; not marketing blasts.
          </li>
          <li>
            <strong>To keep the site working and improve it.</strong> Server logs help us spot
            problems and keep the site available.
          </li>
          <li>
            <strong>To meet legal obligations,</strong> if and when the law requires us to keep or
            share certain records.
          </li>
        </ul>
        <p>
          Our legal basis for all of this is your <strong>consent</strong> &mdash; you choose to
          send us your details &mdash; along with the &ldquo;legitimate uses&rdquo; the DPDP Act
          allows, such as responding to a request you voluntarily made.
        </p>
      </>
    ),
  },
  {
    n: '05',
    title: 'Cookies',
    body: (
      <p>
        This site sets <strong>no cookies of its own</strong>, and uses no tracking or advertising
        cookies. Nothing about your visit is stored in your browser. You can block or clear cookies
        in your browser settings at any time; the site will work exactly the same.
      </p>
    ),
  },
  {
    n: '06',
    title: 'Who we share it with',
    body: (
      <>
        <p>
          <strong>We never sell your personal information.</strong> We share it only with the small
          set of services that keep this website and our email running:
        </p>
        <ul className="legal-list">
          <li>
            <strong>Hosting</strong> &mdash; Cloudflare, which serves this website.
          </li>
          <li>
            {/* Cloudflare confirmed from the domain's MX records, which point at
                route1/2/3.mx.cloudflare.net — an email-routing service, so the
                mailbox it forwards to is a second processor and needs naming. */}
            <strong>Email</strong> &mdash; Cloudflare, which routes mail sent to our domain, and
            Google, which hosts the Gmail mailbox those messages are delivered to.
          </li>
          <li>
            <strong>Fonts</strong> &mdash; Google Fonts, which serves the typefaces this site uses.
          </li>
        </ul>
        <p>
          These providers process data on our instructions only. Some of them store data on servers
          outside India; where that happens, it&rsquo;s done under the transfer conditions the DPDP
          Act permits. Beyond this, we&rsquo;d only disclose your information if a court or
          government authority lawfully requires it.
        </p>
      </>
    ),
  },
  {
    n: '07',
    title: 'How long we keep it',
    body: (
      <p>
        We keep contact-form submissions and related email threads for as long as the conversation
        is live, and for up to <strong>{RETENTION}</strong> after our last exchange &mdash; in case
        you come back to us &mdash; after which we delete them. Server logs are kept for no longer
        than <strong>{RETENTION}</strong>. If you ask us to delete your information sooner, we will
        (see your rights below).
      </p>
    ),
  },
  {
    n: '08',
    title: 'How we protect it',
    body: (
      <p>
        The site is served over HTTPS, access to enquiry data is limited to the small team that
        actually needs it, and we use reputable providers with their own strong security practices.
        No system is perfectly secure, but if a breach ever affects your personal data, we&rsquo;ll
        notify you and the Data Protection Board of India as the DPDP Act requires.
      </p>
    ),
  },
  {
    n: '09',
    title: 'Your rights',
    body: (
      <>
        <p>Under the DPDP Act, you can:</p>
        <div className="legal-cards">
          {RIGHTS.map((right) => (
            <div className="legal-card" key={right.title}>
              <h3>{right.title}</h3>
              <p>{right.body}</p>
            </div>
          ))}
        </div>
        <p>
          To use any of these rights, just email us &mdash; no forms, no fees. We&rsquo;ll respond
          within a reasonable time, and always within any timeline the law sets.
        </p>
      </>
    ),
  },
  {
    n: '10',
    title: 'Children',
    body: (
      <p>
        This website is meant for businesses and working professionals. It isn&rsquo;t directed at
        children, and we don&rsquo;t knowingly collect personal data from anyone under 18. If you
        believe a child has sent us their details, write to us and we&rsquo;ll delete them.
      </p>
    ),
  },
  {
    n: '11',
    title: 'Visitors outside India',
    body: (
      <p>
        We&rsquo;re an Indian company and this policy is written primarily around Indian law. If
        you&rsquo;re visiting from elsewhere, the same plain promises apply: we collect only what
        you give us, we use it only to respond to you, and you can ask us to correct or delete it at
        any time.
      </p>
    ),
  },
  {
    n: '12',
    title: 'Changes to this policy',
    body: (
      <p>
        If we change how we handle your data, we&rsquo;ll update this page and the &ldquo;last
        updated&rdquo; date at the top. For any significant change, we&rsquo;ll say so clearly
        rather than burying it.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="page-content" id="page-privacy">

      {/* ============ HERO ============ */}
      <header className="legal-hero">
        <div className="legal-hero-glow" aria-hidden="true" />
        <div className="wrap legal-wrap">
          <BackLink />
          <h1>
            Privacy <em className="grad">Policy</em>
          </h1>
          <p className="lede">
            This page explains, in plain words, what information this website collects, why we
            collect it, and what you can do about it.
          </p>
          <p className="legal-meta">
            Last updated: <strong>{UPDATED}</strong>
            <span aria-hidden="true"> · </span>
            Applies to: <strong>{DOMAIN}</strong>
          </p>
        </div>
      </header>

      {/* ============ POLICY ============ */}
      <section className="legal-section">
        <div className="wrap legal-wrap">

          {/* The whole policy in four lines, for anyone who won't read the rest. */}
          <div className="legal-summary reveal">
            <h2>The short version</h2>
            <ul>
              {SHORT_VERSION.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <LegalSections sections={SECTIONS} />

          <div className="legal-cta reveal">
            <h2>Questions about your data?</h2>
            <p>
              Write to our grievance contact at{' '}
              <strong><a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a></strong>, or use the
              contact page. We reply to every message.
            </p>
            <a className="btn" href="#/contact">Contact us</a>
          </div>

        </div>
      </section>

    </div>
  );
}
