import React, { useState, useEffect } from 'react';

const mobileShowcaseData = [
  {
    tabLabel: 'Fast POS Billing',
    tabIcon: 'fa-bolt',
    img: '/assets/img/screenshots/screenshot-1.png',
    title: 'Zero Training Required. Instant Setup in Minutes.',
    desc: 'Create GST & Non-GST bills on your Android or iOS phone in seconds. Connect via Bluetooth to 2-inch & 3-inch thermal printers and share receipts instantly on WhatsApp.',
    stats: [
      { val: '5-Sec', lbl: 'Fast Checkout' },
      { val: '100%', lbl: 'Bluetooth Print' },
      { val: 'Offline', lbl: 'Billing Ready' },
      { val: '4.9 ★', lbl: 'Play Store Rating' },
    ],
  },
  {
    tabLabel: 'Barcode & Stock',
    tabIcon: 'fa-barcode',
    img: '/assets/img/screenshots/screenshot-2.png',
    title: 'Live Stock Tracking & Camera Barcode Scan',
    desc: 'Check live stock levels on the move. Scan product barcodes with your phone camera, set automated low-stock warnings, and manage batch numbers effortlessly.',
    stats: [
      { val: '99.8%', lbl: 'Stock Accuracy' },
      { val: 'Instant', lbl: 'Camera Barcode' },
      { val: 'Alerts', lbl: 'Batch & Expiry' },
      { val: 'Unlimited', lbl: 'SKUs & Products' },
    ],
  },
  {
    tabLabel: 'Khata & WhatsApp UPI',
    tabIcon: 'fa-book',
    img: '/assets/img/screenshots/screenshot-3.png',
    title: 'Digital Customer Khata & WhatsApp Payment Links',
    desc: 'Track customer credit balances, send automated payment reminders on WhatsApp with UPI payment links, and download ready-to-file GSTR-1, 3B, and P&L reports.',
    stats: [
      { val: '1-Click', lbl: 'GSTR Filing' },
      { val: 'WhatsApp', lbl: 'UPI Pay Links' },
      { val: '100%', lbl: 'GST Compliant' },
      { val: 'Instant', lbl: 'P&L Reports' },
    ],
  },
];

export default function Showcase({ onOpenSignup, onOpenVideo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTextOpacity(0.4);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % mobileShowcaseData.length);
        setTextOpacity(1);
      }, 160);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTabClick = (idx) => {
    if (idx === currentSlide) return;
    setIsPaused(true);
    setTextOpacity(0.4);
    setTimeout(() => {
      setCurrentSlide(idx);
      setTextOpacity(1);
    }, 150);
  };

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
              style={{ textAlign: 'left' }}
            >
              <h2 className="showcase-title">
                Speed, Precision &amp; Real-Time Mobile Sync
              </h2>

              <p className="showcase-subtitle">
                Experience lightning-fast GST invoice creation, camera barcode scanning &amp; thermal printing right from your smartphone.
              </p>

              {/* Interactive Feature Switcher Tabs */}
              <div className="showcase-feature-tabs">
                {mobileShowcaseData.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`showcase-tab-btn ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => handleTabClick(idx)}
                  >
                    <i className={`fa ${item.tabIcon}`}></i>
                    <span>{item.tabLabel}</span>
                  </button>
                ))}
              </div>

              {/* Active Feature Detail Card */}
              <div 
                className="showcase-feature-box" 
                style={{ opacity: textOpacity, transition: 'opacity 0.2s ease-in-out' }}
              >
                <h3 className="showcase-feature-title">{slide.title}</h3>
                <p className="showcase-feature-desc">{slide.desc}</p>
              </div>

              {/* Clean Stats Row */}
              <div 
                className="showcase-stats-row" 
                style={{ opacity: textOpacity, transition: 'opacity 0.2s ease-in-out' }}
              >
                {slide.stats.map((s, idx) => (
                  <div className="showcase-stat-col" key={idx}>
                    {s.val.includes('★') ? (
                      <strong style={{ color: '#d97706' }}>
                        {s.val.replace('★', '').trim()}{' '}
                        <span style={{ color: '#f59e0b' }}>★</span>
                      </strong>
                    ) : (
                      <strong>{s.val}</strong>
                    )}
                    <span>{s.lbl}</span>
                  </div>
                ))}
              </div>

              {/* Official Store Download Badges */}
              <div className="showcase-store-badges-row">
                <a
                  href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-official-store-badge"
                  title="Download on the App Store"
                >
                  <i className="fa fa-apple store-badge-icon"></i>
                  <div className="store-badge-text">
                    <span className="store-badge-sub">Download on the</span>
                    <strong className="store-badge-name">App Store</strong>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.billentri.svimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-official-store-badge"
                  title="GET IT ON Google Play"
                >
                  <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="store-badge-icon" style={{ flexShrink: 0 }}>
                    <path fill="#00E676" d="M47 38.6c-4.4 7.6-7 16.5-7 26.4v382c0 9.9 2.6 18.8 7 26.4l238.1-238.4L47 38.6z"/>
                    <path fill="#FFD400" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.8z"/>
                    <path fill="#FF3D00" d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
                    <path fill="#00B0FF" d="M455.5 233.1L385.4 193l-60.1 60.1 60.1 60.1 70.1-40.1c17.1-9.9 17.1-29.8 0-40z"/>
                  </svg>
                  <div className="store-badge-text">
                    <span className="store-badge-sub">GET IT ON</span>
                    <strong className="store-badge-name">Google Play</strong>
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
