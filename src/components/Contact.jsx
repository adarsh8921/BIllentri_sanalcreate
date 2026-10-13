import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStatus('Thank you! Our support team will get in touch with you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <section className="section-padding bg-subtle" id="contact">
      <div className="container">
        <div className="section-header reveal-item is-visible">
          <div className="section-badge">
            <i className="fa fa-envelope"></i> Get In Touch
          </div>
          <h2 className="section-title">We're Here To Help Your Business Grow</h2>
          <p className="section-subtitle">
            Reach out for inquiries, custom setup assistance, or hardware driver guidance.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card reveal-item reveal-left is-visible">
            <div className="info-item">
              <div className="info-icon"><i className="dripicons-location"></i></div>
              <div className="info-text">
                <h3>Our Offices</h3>
                <p>Kochi &bull; Perinthalmanna<br />Kerala, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="dripicons-phone"></i></div>
              <div className="info-text">
                <h3>Phone &amp; WhatsApp Support</h3>
                <p><a href="tel:+918943993001">+91-8943 993 001</a></p>
                <p><a href="tel:+918943993002">+91-8943 993 002</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="dripicons-mail"></i></div>
              <div className="info-text">
                <h3>Email Inquiries</h3>
                <p><a href="mailto:info@billentri.com">info@billentri.com</a></p>
              </div>
            </div>
          </div>

          <div className="contact-form-card reveal-item reveal-right is-visible">
            <form onSubmit={handleSubmit} id="main-contact-form">
              <div className="form-group">
                <label htmlFor="c-name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="c-name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="c-email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-phone">Phone / WhatsApp Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="c-phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">Message / Business Requirement</label>
                <textarea
                  className="form-control"
                  id="c-message"
                  name="message"
                  rows="4"
                  placeholder="How can our team help you?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                disabled={submitting}
              >
                {submitting ? 'Sending Message...' : (
                  <>
                    Send Message <i className="fa fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                  </>
                )}
              </button>
              {status && (
                <div
                  id="contact-status"
                  style={{
                    display: 'block',
                    marginTop: '14px',
                    fontSize: '14px',
                    textAlign: 'center',
                    color: '#10b981',
                  }}
                >
                  {status} <i className="fa fa-check"></i>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
