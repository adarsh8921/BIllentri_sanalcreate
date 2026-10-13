import React from 'react';

export default function Testimonials() {
  return (
    <>
<section className="section-padding" id="testimonials">
    <div className="container">
      <div className="section-header reveal-item">
        <div className="section-badge"><i className="fa fa-heart"></i> Customer Stories</div>
        <h2 className="section-title">Trusted By 10,000+ Businesses Across India</h2>
        <p className="section-subtitle">See why retail store owners, wholesalers, and distributors love BillEntri.</p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card reveal-item stagger-1">
          <div className="star-rating">
            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
          </div>
          <p className="testimonial-text">
            “BillEntri transformed our counter speed. Generating GST bills and printing thermal receipts takes just 5 seconds now. Highly recommended for busy retail stores!”
          </p>
          <div className="testimonial-author">
            <img src="assets/img/testmonial/author-1.png" alt="Suresh Kumar" className="author-img" />
            <div className="author-meta">
              <h4>Suresh Kumar</h4>
              <span>Retail Store Owner &bull; Kochi, Kerala</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card reveal-item stagger-2">
          <div className="star-rating">
            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
          </div>
          <p className="testimonial-text">
            “The multi-device cloud sync is a game-changer. I check daily sales and stock balances from my phone while my staff bills at the warehouse counter. Super reliable!”
          </p>
          <div className="testimonial-author">
            <img src="assets/img/testmonial/author-2.png" alt="Priya Nair" className="author-img" />
            <div className="author-meta">
              <h4>Priya Nair</h4>
              <span>Wholesale Trader &bull; Calicut</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card reveal-item stagger-3">
          <div className="star-rating">
            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
          </div>
          <p className="testimonial-text">
            “Digital ledger and WhatsApp invoice sharing made our payment collections twice as fast. Customers appreciate the clean, professional PDF bills.”
          </p>
          <div className="testimonial-author">
            <img src="assets/img/testmonial/author-3.png" alt="Arun Raj" className="author-img" />
            <div className="author-meta">
              <h4>Arun Raj</h4>
              <span>FMCG Distributor &bull; Perinthalmanna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
