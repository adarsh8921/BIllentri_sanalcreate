import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Retail Store',
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
      setFormData({ name: '', email: '', phone: '', businessType: 'Retail Store', message: '' });
    }, 700);
  };

  return (
    <section className="contact-modern-section" id="contact">
      <div className="container contact-modern-container">
        {/* Header */}
        <div className="contact-modern-header reveal-item">
          <div className="contact-badge">
            <i className="fa fa-envelope-o"></i> Get In Touch
          </div>
          <h2 className="contact-modern-title">We're Here To Help Your Business Grow</h2>
          <p className="contact-modern-subtitle">
            Have questions about BillEntri POS, GST invoicing, printer setup, or pricing? Reach out to our expert team.
          </p>
        </div>

        {/* Content Grid */}
        <div className="contact-modern-grid">
          {/* Info Side */}
          <div className="contact-modern-info reveal-item">
            <div className="contact-info-card-item">
              <div className="contact-icon-pill">
                <i className="fa fa-phone"></i>
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Phone &amp; WhatsApp Support</span>
                <div className="contact-info-links">
                  <a href="tel:+918943993001">+91 8943 993 001</a>
                  <a href="tel:+918943993002">+91 8943 993 002</a>
                </div>
                <span className="contact-info-sub">Mon &ndash; Sat &bull; 9:00 AM &ndash; 8:00 PM IST</span>
              </div>
            </div>

            <div className="contact-info-card-item">
              <div className="contact-icon-pill">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Email Inquiries</span>
                <div className="contact-info-links">
                  <a href="mailto:info@billentri.com">info@billentri.com</a>
                  <a href="mailto:support@billentri.com">support@billentri.com</a>
                </div>
                <span className="contact-info-sub">Quick responses within 2&ndash;4 business hours</span>
              </div>
            </div>

            <div className="contact-info-card-item">
              <div className="contact-icon-pill">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Our Offices</span>
                <p className="contact-info-text">
                  Kochi &amp; Perinthalmanna<br />
                  Kerala, India
                </p>
                <span className="contact-info-sub">Serving businesses across India &amp; GCC</span>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="contact-whatsapp-card">
              <div className="contact-wa-left">
                <i className="fa fa-whatsapp"></i>
                <div>
                  <strong>Need Instant Support?</strong>
                  <p>Chat directly with our sales &amp; technical specialists</p>
                </div>
              </div>
              <a
                href="https://wa.me/918943993001?text=Hi%20BillEntri%2C%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-wa-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-modern-form-wrapper reveal-item">
            <form onSubmit={handleSubmit} className="contact-modern-form" id="main-contact-form">
              <h3 className="form-card-title">Send Us a Message</h3>
              <p className="form-card-subtitle">Fill out the form below and we will get back to you promptly.</p>

              <div className="form-row-2">
                <div className="form-group-modern">
                  <label htmlFor="c-name">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="c-name"
                    name="name"
                    placeholder="e.g. Rahul Sharma"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="c-phone">Phone / WhatsApp <span className="req">*</span></label>
                  <input
                    type="text"
                    id="c-phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group-modern">
                  <label htmlFor="c-email">Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="c-businesstype">Business Type</label>
                  <select
                    id="c-businesstype"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                  >
                    <option value="Retail Store">Retail Store / Supermarket</option>
                    <option value="Restaurant">Restaurant / Cafe / Bakery</option>
                    <option value="Wholesale">Wholesale &amp; Distribution</option>
                    <option value="Pharmacy">Pharmacy / Healthcare</option>
                    <option value="Other">Other Business</option>
                  </select>
                </div>
              </div>

              <div className="form-group-modern">
                <label htmlFor="c-message">How Can We Help? <span className="req">*</span></label>
                <textarea
                  id="c-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your billing requirements, hardware setup, or questions..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <i className="fa fa-spinner fa-spin"></i> Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <i className="fa fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                  </>
                )}
              </button>

              {status && (
                <div className="contact-status-success">
                  <i className="fa fa-check-circle"></i> {status}
                </div>
              )}

              <div className="form-privacy-note">
                <i className="fa fa-shield"></i> We respect your privacy. Your information is 100% confidential.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

