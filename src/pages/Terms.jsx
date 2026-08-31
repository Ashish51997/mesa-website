import React from 'react';
import { BackLink, LegalSections } from '../components/legal';
import { ADDRESS } from '../lib/site';

/*
  TODO(LEGAL): have counsel review before this page goes live.

  Every value is now filled in — nothing renders as a placeholder chip. The
  entity, address, jurisdiction and grievance inbox were all supplied by the
  business; they live in the constants below and nowhere else.

  Section 05 claims the MesaOrigins name only. The source content for this page
  also claimed "MesaDesk", and an earlier draft added "MesaOps"; the business
  confirmed neither is held, so neither is claimed here.
*/

const ENTITY = 'MesaOrigins Private Limited';
const DOMAIN = 'mesaorigins.com';
/* TODO(LEGAL): bump whenever these terms change — section 10 promises it. */
const UPDATED = '30 Aug 2026';
/* The published grievance contact (section 12 and the closing card). Must stay a
   real, monitored inbox — the IT Act rules require one. */
const LEGAL_EMAIL = 'legal@mesaorigins.com';

const SHORT_VERSION = [
  'Browse freely. The content here is for information — it isn’t a contract or a quote.',
  'Our real commitments to clients live in signed agreements, not on this website.',
  'The content, design, and brand on this site are ours — don’t copy them commercially.',
  'Don’t misuse the site: no scraping, probing, or sending us content that isn’t yours to send.',
];

const SECTIONS = [
  {
    n: '01',
    title: 'Who we are, and what agreeing means',
    body: (
      <>
        <p>
          This website is operated by <strong>{ENTITY}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
          a company registered in India with its office at{' '}
          {ADDRESS}.
        </p>
        <p>
          By browsing this site or sending us a message through it, you accept these terms. If you
          don&rsquo;t agree with them, the simple remedy is not to use the site.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'What these terms cover',
    body: (
      <>
        <p>
          These terms cover <strong>this website only</strong> &mdash; the pages, the content on
          them, and the contact form.
        </p>
        <p>
          They do <strong>not</strong> cover the software we build and run for clients. If you
          become a client, your relationship with us is governed by the written agreement we sign
          together &mdash; and if anything here conflicts with that agreement,{' '}
          <strong>the signed agreement wins</strong>.
        </p>
      </>
    ),
  },
  {
    n: '03',
    title: 'Information, not promises',
    body: (
      <>
        <p>
          Everything on this site &mdash; descriptions of what we build, how we work, timelines,
          examples &mdash; is <strong>general information</strong>, shared in good faith to help you
          decide whether to talk to us.
        </p>
        <p>
          It is not an offer, a quotation, or a guarantee of any outcome. Every plant is different;
          what we&rsquo;d actually build for you, on what timeline and at what cost, is only settled
          in a written proposal or agreement. Screens and figures shown on this site are
          illustrative.
        </p>
      </>
    ),
  },
  {
    n: '04',
    title: 'Using the site fairly',
    body: (
      <>
        <p>You&rsquo;re welcome to browse, read, share links, and contact us. What you may not do:</p>
        <ul className="legal-list">
          <li>
            <strong>Break or probe it</strong> &mdash; no attempts to disrupt the site, bypass
            security, or test it for vulnerabilities without our written permission.
          </li>
          <li>
            <strong>Scrape or harvest it</strong> &mdash; no automated bulk copying of content or
            collection of contact details.
          </li>
          <li>
            <strong>Misrepresent it</strong> &mdash; don&rsquo;t frame, mirror, or present this site
            or its content as your own or as endorsed by you.
          </li>
          <li>
            <strong>Abuse the contact form</strong> &mdash; no spam, no unlawful content, and
            nothing that infringes anyone else&rsquo;s rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    n: '05',
    title: 'Our content and brand',
    body: (
      <>
        <p>
          The text, design, graphics, illustrations, code, and layout of this site, along with the{' '}
          <strong>MesaOrigins</strong> name and marks, belong to us or our licensors.
        </p>
        <p>
          You may view the site and share links to it. You may not reproduce, modify, or
          commercially use its content or branding without our written permission. Nothing on this
          site grants you any licence to our software, names, or marks.
        </p>
      </>
    ),
  },
  {
    n: '06',
    title: 'What you send us',
    body: (
      <>
        <p>When you write to us through the contact form or by email:</p>
        <ul className="legal-list">
          <li>You confirm the information is accurate and yours to share.</li>
          <li>
            You allow us to use it to respond to you and follow up on your enquiry &mdash; how we
            handle it is described in our <a href="#/privacy">Privacy Policy</a>.
          </li>
          <li>
            <strong>Please don&rsquo;t send confidential business information</strong> at this
            stage. Until we&rsquo;ve signed a non-disclosure or service agreement with you, anything
            you send is treated as non-confidential. Keep the details for after we&rsquo;ve signed.
          </li>
        </ul>
      </>
    ),
  },
  {
    n: '07',
    title: 'Links to other sites',
    body: (
      <p>
        This site may link to third-party websites. We don&rsquo;t control them and aren&rsquo;t
        responsible for their content or their handling of your data. A link is a convenience, not
        an endorsement.
      </p>
    ),
  },
  {
    n: '08',
    title: 'No warranties on the site itself',
    body: (
      <p>
        We work to keep this site accurate, available, and safe &mdash; but it&rsquo;s provided{' '}
        <strong>&ldquo;as is&rdquo;</strong>. We don&rsquo;t warrant that it will always be
        error-free, uninterrupted, or free of harmful components, or that its content is complete or
        current at every moment. We may change, suspend, or remove any part of the site at any time.
      </p>
    ),
  },
  {
    n: '09',
    title: 'Limits on our liability',
    body: (
      <>
        <p>
          To the maximum extent Indian law allows, we&rsquo;re not liable for indirect or
          consequential losses &mdash; lost profits, lost business, lost data &mdash; arising from
          your use of, or inability to use, this website or reliance on its content.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot be excluded under applicable law,
          including liability for fraud. And to be clear: this section is about the{' '}
          <strong>website</strong> &mdash; liability in a client engagement is set out in the signed
          agreement for that engagement.
        </p>
      </>
    ),
  },
  {
    n: '10',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms from time to time. When we do, we&rsquo;ll update this page and
        the &ldquo;last updated&rdquo; date at the top. Continuing to use the site after a change
        means you accept the updated terms. For any significant change, we&rsquo;ll say so clearly
        rather than burying it.
      </p>
    ),
  },
  {
    n: '11',
    title: 'Governing law and disputes',
    body: (
      <>
        <p>
          These terms are governed by the laws of <strong>India</strong>. Any dispute arising from
          this website is subject to the exclusive jurisdiction of the courts at{' '}
          <strong>Chennai, Tamil Nadu</strong>.
        </p>
        <p>If any part of these terms turns out to be unenforceable, the rest still stands.</p>
      </>
    ),
  },
  {
    n: '12',
    title: 'Grievances and contact',
    body: (
      <p>
        {/* If the site ever hosts user-generated content, the IT Rules 2021
            grievance-officer requirements will need a named officer here. */}
        If you have a complaint about this website or its content &mdash; including anything you
        believe is unlawful or infringes your rights &mdash; write to{' '}
        <strong><a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a></strong>. We acknowledge and
        act on grievances within the timelines applicable under Indian law, including the
        Information Technology Act, 2000
        and rules under it.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <div className="page-content" id="page-terms">

      {/* ============ HERO ============ */}
      <header className="legal-hero">
        <div className="legal-hero-glow" aria-hidden="true" />
        <div className="wrap legal-wrap">
          <BackLink />
          <h1>
            Terms of <em className="grad">Use</em>
          </h1>
          <p className="lede">
            The ground rules for using this website. Written to be read, not skimmed past.
          </p>
          <p className="legal-meta">
            Last updated: <strong>{UPDATED}</strong>
            <span aria-hidden="true"> · </span>
            Applies to: <strong>{DOMAIN}</strong>
          </p>
        </div>
      </header>

      {/* ============ TERMS ============ */}
      <section className="legal-section">
        <div className="wrap legal-wrap">

          {/* The whole thing in four lines, for anyone who won't read the rest. */}
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
            <h2>Questions about these terms?</h2>
            <p>
              Write to us at{' '}
              <strong><a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a></strong>, or use the
              contact page. Plain questions get plain answers.
            </p>
            <a className="btn" href="#/contact">Contact us</a>
          </div>

        </div>
      </section>

    </div>
  );
}
