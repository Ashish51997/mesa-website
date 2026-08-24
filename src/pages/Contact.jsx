import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    phone: '',
    headache: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // TODO(P0): this form has no submission target. Nothing is sent anywhere —
  // the success message below is shown to the user while the lead is discarded.
  // Wire this to a real endpoint (Vercel serverless function, Formspree, CRM
  // webhook) before the next deploy.
  const submitLead = async (data) => {
    console.warn('[contact] No submission endpoint configured — lead discarded.', data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.company.trim()) newErrors.company = true;
    if (!EMAIL_RE.test(formData.email.trim())) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    submitLead(formData);
    setSubmitted(true);
  };

  return (
    <div className="page-content" id="page-contact">

      {/* ============ HERO ============ */}
      <header className="contact-hero">
        <div className="contact-hero-glow" aria-hidden="true"></div>
        <div className="wrap contact-hero-inner">
          <h1 className="reveal">
            Start with a walkthrough,{' '}
            <span className="grad-text">not a contract.</span>
          </h1>
          <p className="contact-lede reveal">
            Tell us how your operation runs today — 45 minutes, your team and ours.
            We'll tell you honestly where software would help, where it wouldn't,
            and what a first phase would look like. No deck, no obligation.
          </p>
        </div>
      </header>

      {/* ============ CONTACT BODY ============ */}
      <section className="contact-body">
        <div className="wrap contact-grid">

          {/* — Left: Form card — */}
          <div className="contact-form-card reveal">
            {!submitted ? (
              <form id="walkForm" onSubmit={handleSubmit} noValidate>
                <div className={`field${errors.name ? ' field-error' : ''}`}>
                  <label htmlFor="f-name">Name</label>
                  <input id="f-name" name="name" type="text" autoComplete="name"
                    placeholder="Your full name"
                    value={formData.name} onChange={handleChange} />
                </div>
                <div className={`field${errors.company ? ' field-error' : ''}`}>
                  <label htmlFor="f-company">Company</label>
                  <input id="f-company" name="company" type="text" autoComplete="organization"
                    placeholder="Company name"
                    value={formData.company} onChange={handleChange} />
                </div>
                <div className={`field${errors.email ? ' field-error' : ''}`}>
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email"
                    placeholder="you@company.com"
                    value={formData.email} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="f-role">Role</label>
                  <input id="f-role" name="role" type="text" autoComplete="organization-title"
                    placeholder="e.g. Operations Manager"
                    value={formData.role} onChange={handleChange} />
                </div>
                <div className={`field${errors.phone ? ' field-error' : ''}`}>
                  <label htmlFor="f-phone">Phone</label>
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="f-headache">Your biggest operational headache</label>
                  <textarea id="f-headache" name="headache"
                    placeholder="e.g. We never know our real stock until audit day."
                    value={formData.headache} onChange={handleChange} />
                </div>
                <button className="contact-submit-btn" id="formSubmit" type="submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Book Consultation
                </button>
                <p className="form-note">We reply within one business day — a person, not an autoresponder.</p>
              </form>
            ) : (
              <div className="form-success visible" id="formSuccess" role="status" tabIndex="-1">
                <strong>Thanks — we've got it.</strong>
                <p style={{ marginTop: '6px' }}>A person (not an autoresponder) will call or write back within one business day.</p>
              </div>
            )}
          </div>

          {/* — Right: Call card + Map card — */}
          <div className="contact-side">

            {/* Call card */}
            <div className="contact-call-card reveal">
              <h2>Prefer to just call?</h2>
              <div className="contact-call-line">
                <div className="contact-call-ic" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a href="tel:+918338081502" className="contact-call-val">+91 83380 81502</a>
              </div>
              <div className="contact-call-line">
                <div className="contact-call-ic" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m3.5 6.5 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a href="mailto:ssales@mesaorigins.com" className="contact-call-val">ssales@mesaorigins.com</a>
              </div>
              <address className="contact-addr">
                Chennai, Tamil Nadu<br />
                India
              </address>
            </div>

            {/* Map card */}
            <div className="contact-map-card reveal">
              <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Map showing route to the MesaOrigins office">
                {/* base */}
                <rect width="460" height="300" fill="var(--bg-alt)" />
                {/* blocks */}
                <rect x="24" y="24" width="110" height="72" rx="10" fill="var(--surface-2)" />
                <rect x="24" y="112" width="110" height="60" rx="10" fill="var(--surface-2)" />
                <rect x="326" y="30" width="110" height="88" rx="10" fill="var(--surface-2)" />
                <rect x="326" y="190" width="110" height="80" rx="10" fill="var(--surface-2)" />
                <ellipse cx="90" cy="236" rx="52" ry="30" fill="var(--border)" />
                {/* roads */}
                <path d="M0 190 H460" stroke="var(--bg)" strokeWidth="16" />
                <path d="M160 0 V300" stroke="var(--bg)" strokeWidth="16" />
                <path d="M300 0 V190" stroke="var(--bg)" strokeWidth="12" />
                <path d="M160 96 H300" stroke="var(--bg)" strokeWidth="10" />
                {/* labels */}
                <text x="36" y="54" fontFamily="Inter,system-ui" fontSize="10" fill="var(--muted)">Tech Innovate</text>
                <text x="36" y="67" fontFamily="Inter,system-ui" fontSize="10" fill="var(--muted)">Park</text>
                <text x="352" y="66" fontFamily="Inter,system-ui" fontSize="10" fill="var(--muted)">Campus B</text>
                <text x="66" y="240" fontFamily="Inter,system-ui" fontSize="10" fill="var(--muted)">Lake</text>
                {/* route */}
                <path d="M60 190 H160 V96 H230" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeDasharray="7 6" strokeLinecap="round" />
                {/* entrance */}
                <circle cx="60" cy="190" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="3" />
                <text x="42" y="212" fontFamily="Inter,system-ui" fontSize="9.5" fontWeight="600" letterSpacing="1" fill="var(--ink-body)">ENTRANCE</text>
                {/* office building */}
                <g>
                  <rect x="212" y="52" width="120" height="70" rx="12" fill="var(--surface)" stroke="var(--border)" />
                  <rect x="228" y="70" width="26" height="34" rx="5" fill="var(--about-glow-a)" />
                  <rect x="234" y="76" width="5" height="5" fill="var(--accent)" opacity=".55" />
                  <rect x="243" y="76" width="5" height="5" fill="var(--accent)" opacity=".55" />
                  <rect x="234" y="86" width="5" height="5" fill="var(--accent)" opacity=".55" />
                  <rect x="243" y="86" width="5" height="5" fill="var(--accent)" opacity=".55" />
                  <text x="266" y="84" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="var(--ink)">Office</text>
                  <text x="266" y="99" fontFamily="Inter,system-ui" fontSize="9.5" fill="var(--muted)">Chennai</text>
                </g>
                {/* pin */}
                <g transform="translate(230,30)">
                  <path d="M0 22 C0 8 6 0 14 0 C22 0 28 8 28 22 C28 32 14 44 14 44 C14 44 0 32 0 22 Z"
                    transform="translate(-14,-24) scale(.75)" fill="var(--accent)" />
                  <circle cx="-3.5" cy="-10" r="4" fill="var(--surface)" />
                </g>
              </svg>
              <div className="contact-map-cap">
                <span className="contact-map-dot"></span>
                Chennai, Tamil Nadu — India
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
