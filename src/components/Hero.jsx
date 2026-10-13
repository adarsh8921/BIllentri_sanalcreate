import React from 'react';

export default function Hero({ onOpenSignup, onOpenVideo }) {
  return (
    <>
<section className="hero-section" id="home">
    <div className="hero-glow-orb orb-1"></div>
    <div className="hero-glow-orb orb-2"></div>

    <div className="container">
      <div className="hero-grid">
        {/* Hero Left Column: High-Impact Typography & CTAs */}
        <div className="hero-content reveal-item reveal-left is-visible">
          <div className="hero-badge-pill">
            <svg className="hero-badge-icon" width="15" height="15" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Next-Gen Billing &amp; GST POS Software</span>
          </div>

          <h1 className="hero-title">
            Effortless Billing Built for
            <span>Modern Businesses</span>
          </h1>

          <p className="hero-description">
            Power your retail counter, wholesale business, or mobile store with lightning-fast GST invoice creation, real-time inventory tracking, and wireless thermal receipt printing.
          </p>

          <div className="hero-cta-group">
            <button type="button" className="btn hero-btn-primary open-signup-modal" onClick={onOpenSignup}>
              <span>Start Free 14-Day Trial</span>
              <i className="fa fa-arrow-right"></i>
            </button>
            <button type="button" className="hero-demo-trigger" onClick={onOpenVideo} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <i className="fa fa-play-circle"></i>
              <span>Watch Live Demo</span>
            </button>
          </div>

          {/* Supported Platforms Chips */}
          <div className="hero-try-on-wrapper">
            <span className="try-on-label">Available on:</span>
            <div className="try-on-icons-group">
              <a href="#downloads" className="try-on-chip" title="BillEntri for Windows">
                <i className="fa fa-windows"></i>
                <span>Windows</span>
              </a>
              <a href="#downloads" className="try-on-chip" title="BillEntri for macOS">
                <i className="fa fa-apple"></i>
                <span>macOS</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.billentri.svimers" target="_blank" rel="noopener noreferrer" className="try-on-chip" title="BillEntri on Google Play Store">
                <i className="fa fa-android"></i>
                <span>Android</span>
              </a>
              <a href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706" target="_blank" rel="noopener noreferrer" className="try-on-chip" title="BillEntri on Apple App Store">
                <i className="fa fa-apple"></i>
                <span>iOS</span>
              </a>
              <a href="https://dashboard.billentri.com/login" target="_blank" rel="noopener noreferrer" className="try-on-chip" title="BillEntri Web Cloud App">
                <i className="fa fa-globe"></i>
                <span>Web Cloud</span>
              </a>
            </div>
          </div>

          {/* Trust & Performance Metric Bar */}
          <div className="hero-trust-bar">
            <div className="hero-stat-item">
              <strong>5-Sec</strong>
              <span>Fast Checkout</span>
            </div>
            <div className="hero-stat-item">
              <strong>100%</strong>
              <span>Bluetooth Printing</span>
            </div>
            <div className="hero-stat-item">
              <strong>Offline</strong>
              <span>Billing Ready</span>
            </div>
            <div className="hero-stat-item">
              <strong>4.9 ★</strong>
              <span>Merchant Rating</span>
            </div>
          </div>
        </div>

        {/* Hero Right Column: Interactive SaaS Window Preview */}
        <div className="hero-visual-wrapper reveal-item reveal-right is-visible">
          {/* Floating Feature Badges */}
          <div className="floating-pill pill-1">
            <div className="pill-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="pill-text">
              <strong>GST Compliant Invoicing</strong>
              <span>E-Way Bill &amp; GSTR-1 Ready</span>
            </div>
          </div>

          <div className="floating-pill pill-2">
            <div className="pill-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
            </div>
            <div className="pill-text">
              <strong>Instant Thermal Print</strong>
              <span>Bluetooth &amp; USB Enabled</span>
            </div>
          </div>

          {/* Window Card */}
          <div className="hero-window-frame">
            <div className="hero-window-topbar">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-url-bar">
                <i className="fa fa-lock"></i>
                <span>pos.billentri.com/checkout</span>
              </div>
              <div className="window-status">
                <i className="pos-pulse-dot"></i> Live Terminal
              </div>
            </div>

            <div className="pos-terminal-ui">
              <div className="pos-scan-laser-line"></div>

              <div className="pos-terminal-header">
                <div className="pos-store-badge">
                  <i className="fa fa-shopping-bag" style={{ color: "#34d399" }}></i>
                  <span>Retail POS • Quick Bill</span>
                </div>
                <div className="pos-invoice-num">#INV-2026-0842</div>
              </div>

              <div className="pos-scan-bar">
                <i className="fa fa-barcode"></i>
                <span>Scan barcode or search product [F2]...</span>
              </div>

              <table className="pos-terminal-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th style={{ textAlign: "center" }}>Qty</th>
                    <th style={{ textAlign: "right" }}>Rate</th>
                    <th style={{ textAlign: "right" }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basmati Rice Super (5kg)</td>
                    <td style={{ textAlign: "center" }}>2</td>
                    <td style={{ textAlign: "right" }}>₹450</td>
                    <td style={{ textAlign: "right", fontWeight: "700", color: "#34d399" }}>₹900.00</td>
                  </tr>
                  <tr>
                    <td>Fortune Sunflower Oil (1L)</td>
                    <td style={{ textAlign: "center" }}>3</td>
                    <td style={{ textAlign: "right" }}>₹165</td>
                    <td style={{ textAlign: "right", fontWeight: "700", color: "#34d399" }}>₹495.00</td>
                  </tr>
                  <tr>
                    <td>Tata Salt Iodized (1kg)</td>
                    <td style={{ textAlign: "center" }}>1</td>
                    <td style={{ textAlign: "right" }}>₹28</td>
                    <td style={{ textAlign: "right", fontWeight: "700", color: "#34d399" }}>₹28.00</td>
                  </tr>
                </tbody>
              </table>

              <div className="pos-terminal-summary">
                <div className="pos-summary-meta">
                  <strong>3 Items (6 units)</strong>
                  <span>Tax Incl. (GST 5% &amp; 18%)</span>
                </div>
                <div className="pos-total-val">₹1,423.00</div>
              </div>

              <div className="pos-actions-bar">
                <button type="button" className="pos-act-btn print-btn">
                  <i className="fa fa-print"></i> Thermal Print
                </button>
                <button type="button" className="pos-act-btn wa-btn">
                  <i className="fa fa-whatsapp"></i> WhatsApp Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
