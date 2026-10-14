import React, { useEffect } from 'react';

export default function MobileDrawer({ isOpen, onClose, onOpenSignup, onNavigateDrivers, onNavigateHome }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    onClose();
    const scrollToSection = () => {
      const target = document.querySelector(hash);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    if (onNavigateHome) {
      onNavigateHome(scrollToSection);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      <div 
        className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} 
        id="mobile-nav-overlay"
        onClick={onClose}
      />
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} id="mobile-nav-drawer">
        <div className="mobile-drawer-header">
          <img 
            src="/assets/img/sticky_logo.png" 
            alt="BillEntri" 
            style={{ height: "34px", width: "auto", cursor: "pointer" }} 
            onClick={(e) => { handleLinkClick(e, '#home'); }}
          />
          <button type="button" className="mobile-drawer-close" id="mobile-drawer-close" onClick={onClose}>&times;</button>
        </div>
        <ul className="mobile-nav-links">
          <li><a href="#home" className="drawer-link" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="#showcase" className="drawer-link" onClick={(e) => handleLinkClick(e, '#showcase')}>POS Live Demo</a></li>
          <li><a href="#downloads" className="drawer-link" onClick={(e) => handleLinkClick(e, '#downloads')}>Download Apps</a></li>
          <li><a href="#stack-showcase" className="drawer-link" onClick={(e) => handleLinkClick(e, '#stack-showcase')}>Why BillEntri</a></li>
          <li><a href="#features" className="drawer-link" onClick={(e) => handleLinkClick(e, '#features')}>Features</a></li>
          <li><a href="#gallery" className="drawer-link" onClick={(e) => handleLinkClick(e, '#gallery')}>Screenshots</a></li>
          <li><a href="#pricing" className="drawer-link" onClick={(e) => handleLinkClick(e, '#pricing')}>Pricing Plans</a></li>
          <li><a href="#testimonials" className="drawer-link" onClick={(e) => handleLinkClick(e, '#testimonials')}>Customer Reviews</a></li>
          <li><a href="#faqs" className="drawer-link" onClick={(e) => handleLinkClick(e, '#faqs')}>FAQs</a></li>
          <li><a href="#contact" className="drawer-link" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a></li>
          <li><a href="#drivers" className="drawer-link" onClick={(e) => { e.preventDefault(); onClose(); onNavigateDrivers && onNavigateDrivers(); }}>Drivers &amp; Manuals</a></li>
        </ul>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="https://play.google.com/store/apps/details?id=com.billentri.svimers" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%", textAlign: "center" }}>
            <i className="fa fa-android"></i> Android Play Store
          </a>
          <a href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%", textAlign: "center" }}>
            <i className="fa fa-apple"></i> iOS App Store
          </a>
          <a href="https://dashboard.billentri.com/login" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ width: "100%", textAlign: "center" }}>
            Web Login
          </a>
          <button type="button" className="btn btn-primary open-signup-modal" style={{ width: "100%" }} onClick={onOpenSignup}>
            Start Free Trial
          </button>
        </div>
      </div>
    </>
  );
}
