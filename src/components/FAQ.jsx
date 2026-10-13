import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'What is BillEntri and who is it designed for?',
    answer: 'BillEntri is an all-in-one GST billing and inventory app crafted for small and medium businesses including retailers, wholesalers, supermarkets, pharmacies, restaurants, and distributors.',
  },
  {
    id: 2,
    question: 'Does BillEntri support GST and VAT compliant invoicing?',
    answer: 'Yes. BillEntri fully supports GST-compliant invoices with HSN/SAC codes, CGST/SGST/IGST tax breakdowns, tax invoice numbering, and VAT rules for GCC/Overseas businesses.',
  },
  {
    id: 3,
    question: 'Can I connect my thermal printer and barcode scanner?',
    answer: 'Absolutely. BillEntri is plug-and-play compatible with all 2-inch and 3-inch USB/Bluetooth thermal receipt printers, standard laser/inkjet printers, and barcode scanners. You can download drivers directly from our Drivers & Manuals section.',
  },
  {
    id: 4,
    question: 'Can I access my billing data from multiple devices?',
    answer: 'Yes. With the Prime Plan, you get real-time multi-device cloud sync across Windows Desktop, Web browser, Android, and iOS devices with automated encrypted cloud backups.',
  },
  {
    id: 5,
    question: 'Is my business data secure with BillEntri?',
    answer: 'Your data is encrypted with industry-standard 256-bit encryption and backed up continuously on secure cloud servers, ensuring 100% data safety and availability.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding" id="faqs">
      <div className="container">
        <div className="faqs-layout">
          <div className="faqs-intro reveal-item reveal-left is-visible">
            <div className="section-badge">
              <i className="fa fa-question-circle"></i> Got Questions?
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ marginBottom: '30px' }}>
              Have questions about GST compliance, printer drivers, or multi-device sync? Find answers below or contact our 24/7 team.
            </p>
            <div className="faq-visual-wrapper">
              <img
                src="/assets/img/faqs/faq_support_hub.jpg"
                alt="BillEntri Support &amp; FAQ Knowledge Hub"
                className="faq-mockup-img spotlight-card"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="faqs-accordion-list reveal-item reveal-right is-visible">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${openId === item.id ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleFaq(item.id)}>
                  <span>{item.question}</span>
                  <i className="fa fa-chevron-down"></i>
                </div>
                {openId === item.id && (
                  <div className="faq-answer" style={{ display: 'block' }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
