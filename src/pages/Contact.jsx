import React, { useState } from 'react';
import officeMap from '../assets/office_map.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    headache: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.company.trim()) newErrors.company = true;
    if (!formData.phone.trim()) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process successful submit
    setSubmitted(true);
  };

  return (
    <div className="page-content" id="page-contact">
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal">Contact</span>
          <h1 className="reveal">Start with a walkthrough, <em className="grad">not a contract.</em></h1>
          <p className="lede reveal" style={{ marginTop: '20px' }}>Tell us how your operation runs today — 45 minutes, your team and ours. We'll tell you honestly where software would help, where it wouldn't, and what a first phase would look like. No deck, no obligation.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              {!submitted ? (
                <form id="walkForm" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="f-name">Name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ borderColor: errors.name ? '#B4443C' : '' }}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="f-company">Company</label>
                    <input
                      id="f-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      style={{ borderColor: errors.company ? '#B4443C' : '' }}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="f-role">Role</label>
                    <input
                      id="f-role"
                      name="role"
                      type="text"
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Phone</label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ borderColor: errors.phone ? '#B4443C' : '' }}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="f-headache">Your biggest operational headache</label>
                    <textarea
                      id="f-headache"
                      name="headache"
                      placeholder="e.g. We never know our real stock until audit day."
                      value={formData.headache}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button className="btn" id="formSubmit" type="submit" style={{ width: '100%' }}>
                    Book an Operations Walkthrough
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
            <div className="reveal">
              <h3 style={{ marginBottom: '16px' }}>Prefer to just call?</h3>
              <a className="contact-big" href="tel:+919876543210">+91 98765 43210</a><br />
              <a className="contact-big" href="mailto:hello@astrasystems.example" style={{ marginBottom: '28px' }}>
                hello@astrasystems.example
              </a>
              <address style={{ margin: '20px 0 28px' }}>
                Suite 402, Innovate Plaza, Tech Park<br />
                Mumbai, Maharashtra, 400076
              </address>
              <div className="browser" style={{ borderStyle: 'none' }}>
                <img src={officeMap} alt="Office Location Map" className="asset-img" style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
