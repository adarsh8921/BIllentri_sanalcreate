import React from 'react';

const faqList = [
  {
    id: 1,
    icon: 'fa-question',
    question: 'What is BillEntri?',
    answer: 'BillEntri is an all-in-one GST billing and inventory app crafted for small and medium businesses including retail, wholesale, supermarkets, and restaurants.',
  },
  {
    id: 2,
    icon: 'fa-sliders',
    question: 'Does it support GST & VAT?',
    answer: 'Yes. BillEntri fully supports GST-compliant invoices with HSN/SAC codes, CGST/SGST/IGST tax breakdowns, and VAT rules for GCC/Overseas businesses.',
  },
  {
    id: 3,
    icon: 'fa-print',
    question: 'Can I connect thermal printers & scanners?',
    answer: 'Absolutely. BillEntri works plug-and-play with all standard 2-inch and 3-inch USB/Bluetooth thermal printers, laser printers, and barcode scanners.',
  },
  {
    id: 4,
    icon: 'fa-refresh',
    question: 'Is real-time multi-device sync supported?',
    answer: 'Yes. Access your store from Windows Desktop, Android, iOS, or any web browser simultaneously with seamless real-time cloud synchronization.',
  },
  {
    id: 5,
    icon: 'fa-user-o',
    question: 'Why is BillEntri suitable for beginners?',
    answer: 'Designed with zero learning curve. Generate professional invoices in 3 clicks, manage customer ledgers easily, and track inventory automatically.',
  },
  {
    id: 6,
    icon: 'fa-shield',
    question: 'Will my business data and money be safe?',
    answer: 'Your data is secured with enterprise-grade 256-bit encryption and backed up continuously on secure cloud servers with 99.9% uptime reliability.',
  },
];

export default function FAQ() {
  const scrollToContact = (e) => {
    e.preventDefault();
    window.open('https://wa.me/918943993001?text=Hi%20BillEntri%2C%20I%20have%20an%20inquiry', '_blank');
  };

  return (
    <section className="faq-modern-section" id="faqs">
      <div className="container faq-modern-container">
        {/* Header */}
        <div className="faq-modern-header reveal-item">
          <h2 className="faq-modern-title">Frequently Asked Questions</h2>
          <p className="faq-modern-subtitle">
            Welcome to our FAQ section, where you'll find answers to all your burning questions!
          </p>
        </div>

        {/* 6-Card Grid (Matching Reference Design) */}
        <div className="faq-modern-grid">
          {faqList.map((item) => (
            <div key={item.id} className="faq-modern-card reveal-item">
              <div className="faq-card-icon-wrap">
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h3 className="faq-card-question">{item.question}</h3>
              <p className="faq-card-answer">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Bottom Dark CTA Banner (Matching Reference Design) */}
        <div className="faq-modern-bottom-banner reveal-item">
          <div className="faq-bottom-banner-left">
            <div className="faq-bottom-headset-icon">
              <i className="fa fa-headphones"></i>
            </div>
            <span className="faq-bottom-banner-text">
              Still Unsure and Have Questions? Don't worry, we are always here for you!
            </span>
          </div>
          <a 
            href="https://wa.me/918943993001?text=Hi%20BillEntri%2C%20I%20have%20an%20inquiry" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="faq-bottom-banner-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
