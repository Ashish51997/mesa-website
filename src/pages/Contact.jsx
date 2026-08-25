import React, { useState } from 'react';

/* What the walkthrough actually is — icon rows in place of a paragraph. */
const EXPECT = [
  {
    lead: '45 minutes',
    rest: ' — your team and ours, on how your operation runs today.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    lead: 'An honest answer',
    rest: ' — where software would help, and where it wouldn’t.',
    icon: (
      <>
        <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    lead: 'No deck, no obligation',
    rest: ' — just what a first phase would look like.',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <path d="M3 3l18 18" />
      </>
    ),
  },
];

/* Icons sit inside the inputs, so they live next to the field definitions. */
const FIELD_ICONS = {
  name: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </>
  ),
  company: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6" />
    </>
  ),
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  role: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
};

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

  /* One field, icon inside the input. `full` spans both grid columns. */
  const field = ({ id, name, label, type = 'text', placeholder, autoComplete, inputMode, full }) => (
    <div className={`field${full ? ' full' : ''}${errors[name] ? ' field-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="field-input">
        <span className="field-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24">{FIELD_ICONS[name]}</svg>
        </span>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          value={formData[name]}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  return (
    <div className="page-content" id="page-contact">

      {/* One section — the pitch, the ways to reach us and the form side by side,
          so nothing sits in a dead full-screen band above the form. */}
      <section className="contact-section">
        <div className="contact-glow" aria-hidden="true"></div>
        <div className="wrap contact-grid">

          {/* — Left: pitch and the ways to reach us — */}
          <div className="contact-pitch">
            <h1 className="reveal">
              Start with a walkthrough, <em className="grad">not a contract.</em>
            </h1>

            <ul className="contact-expect reveal">
              {EXPECT.map((item) => (
                <li key={item.lead}>
                  <span className="contact-expect-ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{item.icon}</svg>
                  </span>
                  <span>
                    <em>{item.lead}</em>{item.rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* Same chip as the What We Build page. */}
            <div className="contact-direct reveal">
              <a className="b-chip" href="tel:+918338081502">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                +91 83380 81502
              </a>
              <a className="b-chip" href="mailto:sales@mesaorigins.com">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                sales@mesaorigins.com
              </a>
              <span className="b-chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
                Chennai, Tamil Nadu — India
              </span>
            </div>
          </div>

          {/* — Right: the form — */}
          <div className="contact-form-card reveal">
            {!submitted ? (
              <form id="walkForm" className="contact-form-grid" onSubmit={handleSubmit} noValidate>
                {field({ id: 'f-name', name: 'name', label: 'Name', placeholder: 'Your full name', autoComplete: 'name' })}
                {field({ id: 'f-company', name: 'company', label: 'Company', placeholder: 'Company name', autoComplete: 'organization' })}
                {field({ id: 'f-email', name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', autoComplete: 'email', inputMode: 'email' })}
                {field({ id: 'f-phone', name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 00000 00000', autoComplete: 'tel', inputMode: 'tel' })}
                {field({ id: 'f-role', name: 'role', label: 'Role', placeholder: 'e.g. Owner, Plant Head, Operations Manager', autoComplete: 'organization-title', full: true })}

                <div className="field full">
                  <label htmlFor="f-headache">Your biggest operational headache</label>
                  <textarea id="f-headache" name="headache"
                    placeholder="e.g. We never know our real stock until audit day."
                    value={formData.headache} onChange={handleChange} />
                </div>

                <button className="contact-submit-btn" id="formSubmit" type="submit">
                  Book a walkthrough
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                <p className="form-note">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  We reply within one business day — a person, not an autoresponder.
                </p>
              </form>
            ) : (
              <div className="form-success visible" id="formSuccess" role="status" tabIndex="-1">
                <strong>Thanks — we've got it.</strong>
                <p style={{ marginTop: '6px' }}>A person (not an autoresponder) will call or write back within one business day.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
