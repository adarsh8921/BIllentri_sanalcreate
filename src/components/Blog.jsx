import React from 'react';

export default function Blog() {
  return (
    <>
<section className="section-padding bg-subtle" id="blog">
    <div className="container">
      <div className="section-header reveal-item">
        <div className="section-badge"><i className="fa fa-newspaper-o"></i> Business Insights</div>
        <h2 className="section-title">Latest Billing Tips &amp; GST Guidelines</h2>
        <p className="section-subtitle">Practical guides to help you optimize cash flow, inventory turnover, and compliance.</p>
      </div>

      <div className="blog-grid">
        <div className="blog-card reveal-item stagger-1">
          <div className="blog-thumb-wrap">
            <img src="assets/img/blog/blog-small-thumb-1.jpg" alt="Digital Billing Guide" />
            <span className="blog-category">Billing Tips</span>
          </div>
          <div className="blog-body">
            <h3>Why Digital Billing is Essential for Growing Businesses</h3>
            <p>Discover how switching to automated GST invoicing saves time, eliminates calculations errors, and improves customer trust.</p>
            <a href="javascript:void(0)" className="blog-read-link">Read Article <i className="fa fa-arrow-right"></i></a>
          </div>
        </div>

        <div className="blog-card reveal-item stagger-2">
          <div className="blog-thumb-wrap">
            <img src="assets/img/blog/blog-small-thumb-2.jpg" alt="GST Filing Guide" />
            <span className="blog-category">GST Compliance</span>
          </div>
          <div className="blog-body">
            <h3>How BillEntri Simplifies GSTR-1 and GSTR-3B Tax Filing</h3>
            <p>Learn how automated tax categorization and Excel report exports make month-end tax filing completely effortless.</p>
            <a href="javascript:void(0)" className="blog-read-link">Read Article <i className="fa fa-arrow-right"></i></a>
          </div>
        </div>

        <div className="blog-card reveal-item stagger-3">
          <div className="blog-thumb-wrap">
            <img src="assets/img/blog/blog_8.jpg" alt="Inventory Optimization" />
            <span className="blog-category">Inventory Control</span>
          </div>
          <div className="blog-body">
            <h3>5 Common Inventory Mistakes &amp; How to Avoid Them</h3>
            <p>Master barcode management, prevent dead stock accumulation, and automate your reorder notifications seamlessly.</p>
            <a href="javascript:void(0)" className="blog-read-link">Read Article <i className="fa fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
