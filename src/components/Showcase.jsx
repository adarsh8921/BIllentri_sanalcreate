import React, { useState, useEffect } from 'react';

const mobileShowcaseData = [
  {
    img: '/assets/img/screenshots/screenshot-1.png',
    badge: '5-Second Mobile POS Billing',
    badgeIcon: 'fa-flash',
    title: 'Zero Training Required. Instant Setup in Minutes.',
    desc: 'Create GST & Non-GST bills on your Android or iOS phone in seconds. Connect via Bluetooth to 2-inch & 3-inch thermal printers and share receipts instantly on WhatsApp.',
    stat1Val: '5-Sec', stat1Lbl: 'Fast Checkout',
    stat2Val: '100%', stat2Lbl: 'Bluetooth Printing',
    stat3Val: 'Offline', stat3Lbl: 'Billing Ready',
    stat4Val: '4.9 ★', stat4Lbl: 'Play Store Rating',
  },
  {
    img: '/assets/img/screenshots/screenshot-2.png',
    badge: 'Real-Time Inventory Control',
    badgeIcon: 'fa-cubes',
    title: 'Live Stock Tracking & Phone Barcode Scanning',
    desc: 'Check live stock levels on the move. Scan product barcodes with your phone camera, set automated low-stock warnings, and manage batch numbers effortlessly.',
    stat1Val: '99.8%', stat1Lbl: 'Stock Accuracy',
    stat2Val: 'Instant', stat2Lbl: 'Barcode Camera Scan',
    stat3Val: 'Alerts', stat3Lbl: 'Batch & Expiry Warnings',
    stat4Val: 'Unlimited', stat4Lbl: 'SKUs & Products',
  },
  {
    img: '/assets/img/screenshots/screenshot-3.png',
    badge: 'Automated GSTR & Digital Khata',
    badgeIcon: 'fa-file-text',
    title: 'Digital Customer Khata & WhatsApp Payment Links',
    desc: 'Track customer credit balances, send automated payment reminders on WhatsApp with UPI payment links, and download ready-to-file GSTR-1, 3B, and P&L reports.',
    stat1Val: '1-Click', stat1Lbl: 'GSTR Filing Reports',
    stat2Val: 'WhatsApp', stat2Lbl: 'UPI Payment Links',
    stat3Val: '100%', stat3Lbl: 'GST & VAT Compliant',
    stat4Val: 'Instant', stat4Lbl: 'P&L Balance Sheet',
  },
];

export default function Showcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTextOpacity(0.45);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % mobileShowcaseData.length);
        setTextOpacity(1);
      }, 180);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = mobileShowcaseData[currentSlide];

  return (
    <>
      <section 
        className="showcase-hero-section" 
        id="showcase"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div 
              className="hero-content reveal-item reveal-left is-visible" 
              id="showcase-text-col" 
              style={{ textAlign: 'left', opacity: textOpacity, transition: 'opacity 0.2s ease-in-out' }}
            >
              <div className="section-badge" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa fa-mobile-phone"></i> Mobile Billing Suite
              </div>
              <h2 className="section-title showcase-headline-gradient">
                Speed, Precision<br />
                &amp; Real-Time<br />
                Mobile Sync
              </h2>
              <p className="section-subtitle" style={{ fontSize: '15.5px', color: '#475569', lineHeight: '1.6', marginBottom: '22px', textAlign: 'left', maxWidth: '100%' }}>
                Experience lightning-fast GST invoice creation, camera barcode scanning &amp; thermal printing right from your smartphone.
              </p>

              <div className="hero-badge-pill" id="showcase-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderColor: '#a7f3d0', marginBottom: '12px' }}>
                <i className={`fa ${slide.badgeIcon}`} style={{ color: '#059669', marginRight: '6px' }}></i> {slide.badge}
              </div>
              <h3 id="showcase-title" style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', lineHeight: '1.3', textAlign: 'left' }}>
                {slide.title}
              </h3>
              <p id="showcase-desc" style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px', textAlign: 'left' }}>
                {slide.desc}
              </p>

              <div className="hero-trust-bar" style={{ borderTopColor: '#e2e8f0', marginTop: '0', paddingTop: '20px' }}>
                <div className="hero-stat-item">
                  <strong style={{ color: '#0f172a' }}>{slide.stat1Val}</strong>
                  <span style={{ color: '#64748b' }}>{slide.stat1Lbl}</span>
                </div>
                <div className="hero-stat-item">
                  <strong style={{ color: '#0f172a' }}>{slide.stat2Val}</strong>
                  <span style={{ color: '#64748b' }}>{slide.stat2Lbl}</span>
                </div>
                <div className="hero-stat-item">
                  <strong style={{ color: '#0f172a' }}>{slide.stat3Val}</strong>
                  <span style={{ color: '#64748b' }}>{slide.stat3Lbl}</span>
                </div>
                <div className="hero-stat-item">
                  <strong style={{ color: '#0f172a' }}>{slide.stat4Val}</strong>
                  <span style={{ color: '#64748b' }}>{slide.stat4Lbl}</span>
                </div>
              </div>

              <div className="showcase-app-download-btns" style={{ justifyContent: 'flex-start', marginTop: '26px' }}>
                <a href="https://play.google.com/store/apps/details?id=com.billentri.svimers" target="_blank" rel="noopener noreferrer" className="showcase-store-btn" title="Download BillEntri on Google Play">
                  <i className="fa fa-play store-icon"></i>
                  <div className="store-btn-text">
                    <span className="store-sub">GET IT ON</span>
                    <strong className="store-name">Google Play</strong>
                  </div>
                </a>
                <a href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706" target="_blank" rel="noopener noreferrer" className="showcase-store-btn" title="Download BillEntri on App Store">
                  <i className="fa fa-apple store-icon"></i>
                  <div className="store-btn-text">
                    <span className="store-sub">Download on the</span>
                    <strong className="store-name">App Store</strong>
                  </div>
                </a>
              </div>
            </div>

            <div className="hero-visual-wrapper reveal-item reveal-right is-visible" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <div className="showcase-slider-wrapper">
                <div 
                  className="showcase-slides-track" 
                  id="showcase-slides-track"
                  style={{ transform: `translateX(-${currentSlide * 33.333333}%)`, transition: 'transform 0.4s ease' }}
                >
                  {mobileShowcaseData.map((item, index) => (
                    <div className="showcase-slide" key={index}>
                      <img src={item.img} alt={`BillEntri Slide ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clients-bar-section">
        <div className="container">
          <div className="clients-bar-inner">
            <div className="clients-bar-title">Trusted By Leading Merchants &amp; Wholesalers</div>
            <div className="clients-logos-wrap">
              <img src="/assets/img/client/sponsor-1.png" alt="Partner Sponsor 1" />
              <img src="/assets/img/client/sponsor-2.png" alt="Partner Sponsor 2" />
              <img src="/assets/img/client/sponsor-3.png" alt="Partner Sponsor 3" />
              <img src="/assets/img/client/sponsor-1.png" alt="Partner Sponsor 4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
