import React from 'react';

export default function Footer({ onOpenSignup, onOpenVideo, onNavigateDrivers, onNavigateHome }) {
  return (
    <>
<footer className="site-footer">
    <div className="container-fluid">
      <div className="footer-grid">
        <div className="footer-brand reveal-item stagger-1">
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>
            <img src="/assets/img/logo.png" alt="BillEntri Logo" style={{ height: "36px", width: "auto" }} />
          </a>
          <p>
            BillEntri is India’s easiest billing &amp; GST accounting app for small businesses. Create invoices, track inventory, manage customer credit &amp; file taxes seamlessly.
          </p>
        </div>

        <div className="footer-column reveal-item stagger-2">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home" onClick={() => onNavigateHome && onNavigateHome()}>Home</a></li>
            <li><a href="#downloads" onClick={() => onNavigateHome && onNavigateHome()}>Downloads</a></li>
            <li><a href="#stack-showcase" onClick={() => onNavigateHome && onNavigateHome()}>Why BillEntri</a></li>
            <li><a href="#features" onClick={() => onNavigateHome && onNavigateHome()}>Features</a></li>
            <li><a href="#pricing" onClick={() => onNavigateHome && onNavigateHome()}>Pricing Plans</a></li>
            <li><a href="#testimonials" onClick={() => onNavigateHome && onNavigateHome()}>Reviews</a></li>
            <li><a href="#faqs" onClick={() => onNavigateHome && onNavigateHome()}>FAQs</a></li>
            <li><a href="#contact" onClick={() => onNavigateHome && onNavigateHome()}>Contact Support</a></li>
          </ul>
        </div>

        <div className="footer-column reveal-item stagger-3">
          <h3>Resources &amp; Downloads</h3>
          <ul className="footer-links">
            <li><a href="/download/BillEntriSetup.exe" download><i className="fa fa-windows"></i> Windows App (.exe)</a></li>
            <li><a href="/download/BillEntri.dmg" download><i className="fa fa-apple"></i> macOS App (.dmg)</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.billentri.svimers" target="_blank" rel="noopener noreferrer"><i className="fa fa-android"></i> Android Play Store</a></li>
            <li><a href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706" target="_blank" rel="noopener noreferrer"><i className="fa fa-apple"></i> iOS App Store</a></li>
            <li><a href="/drivers-and-manuals" onClick={(e) => { e.preventDefault(); onNavigateDrivers && onNavigateDrivers(); }}><i className="fa fa-wrench"></i> Drivers &amp; Manuals</a></li>
            <li><a href="/download/Barcode%20Printer%20Setup.exe" download><i className="fa fa-barcode"></i> Barcode Setup (.exe)</a></li>
            <li><a href="https://dashboard.billentri.com/login" target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i> Web Cloud Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter-box reveal-item stagger-4">
          <h3>Newsletter</h3>
          <p style={{ color: "#94a3b8", fontSize: "13.5px" }}>Subscribe for feature updates, business tips, and GST guidelines.</p>
          <form id="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 BillEntri. All Rights Reserved.</p>
        <p>Built for Small &amp; Medium Businesses</p>
      </div>
    </div>
  </footer>
    </>
  );
}
