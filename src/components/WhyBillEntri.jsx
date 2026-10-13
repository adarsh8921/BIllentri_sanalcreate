import React from 'react';

export default function WhyBillEntri({ onOpenSignup, onOpenVideo }) {
  return (
    <>
<section className="section-padding stack-showcase-section" id="stack-showcase">
    <div className="container">
      <div className="section-header reveal-item">
        <div className="section-badge"><i className="fa fa-layer-group"></i> Architecture Highlights</div>
        <h2 className="section-title">Why Fast-Growing Businesses Choose BillEntri</h2>
        <p className="section-subtitle">A powerhouse billing ecosystem engineered to eliminate counter friction and give you total business control.</p>
      </div>

      {/* Pin-to-Pin Interactive Navigator Dock */}
      <div className="pin-nav-dock reveal-item" id="pin-nav-dock">
        <div className="pin-nav-pill active" data-pin-target="1">
          <span className="pin-dot"></span>
          <span className="pin-label">01 POS Invoicing</span>
        </div>
        <div className="pin-nav-pill" data-pin-target="2">
          <span className="pin-dot"></span>
          <span className="pin-label">02 Live Stock</span>
        </div>
        <div className="pin-nav-pill" data-pin-target="3">
          <span className="pin-dot"></span>
          <span className="pin-label">03 Cloud Sync</span>
        </div>
        <div className="pin-nav-pill" data-pin-target="4">
          <span className="pin-dot"></span>
          <span className="pin-label">04 GST &amp; Khata</span>
        </div>
      </div>

      <div className="stack-cards-wrapper" id="stack-cards-container">
        {/* Stack Card 1 */}
        <div className="stack-card card-1 reveal-item" data-card-index="1">
          <div className="stack-card-content">
            <div className="stack-card-header-bar">
              <div className="section-badge" style={{ marginBottom: "0" }}><i className="fa fa-flash"></i> 5-Second Speed</div>
              <span className="stack-card-num">01 / 04</span>
            </div>
            <h3>Lightning-Fast Counter POS Invoicing</h3>
            <p>Scan barcodes, select items with keyboard shortcuts, calculate item discounts, and generate thermal receipts instantly during peak retail rush hours.</p>
            <div className="stack-feature-tags">
              <span className="feature-tag">2" &amp; 3" Thermal Ready</span>
              <span className="feature-tag">Barcode Scanning</span>
              <span className="feature-tag">Offline Billing</span>
            </div>
          </div>
          <div className="stack-card-visual">
            <img src="/assets/img/screenshots/pos_fast_invoicing.jpg" alt="Lightning Fast POS Counter Billing Interface" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Stack Card 2 */}
        <div className="stack-card card-2 reveal-item" data-card-index="2">
          <div className="stack-card-content">
            <div className="stack-card-header-bar">
              <div className="section-badge" style={{ marginBottom: "0" }}><i className="fa fa-cubes"></i> Inventory Control</div>
              <span className="stack-card-num">02 / 04</span>
            </div>
            <h3>Real-Time Stock &amp; Barcode Management</h3>
            <p>Track live inventory movements, set minimum reorder thresholds, track batch numbers &amp; expiry dates, and generate custom barcode price stickers on demand.</p>
            <div className="stack-feature-tags">
              <span className="feature-tag">Batch &amp; Expiry Alerts</span>
              <span className="feature-tag">Low-Stock Warnings</span>
              <span className="feature-tag">Barcode Generator</span>
            </div>
          </div>
          <div className="stack-card-visual">
            <img src="/assets/img/screenshots/realtime_barcode_stock.jpg" alt="Real Time Stock &amp; Barcode Management" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Stack Card 3 */}
        <div className="stack-card card-3 reveal-item" data-card-index="3">
          <div className="stack-card-content">
            <div className="stack-card-header-bar">
              <div className="section-badge" style={{ marginBottom: "0" }}><i className="fa fa-cloud"></i> True Cloud Sync</div>
              <span className="stack-card-num">03 / 04</span>
            </div>
            <h3>Multi-Device &amp; Multi-Branch Synchronization</h3>
            <p>Bill on your counter Windows PC, monitor revenue on your mobile phone on the move, and grant staff secure role-based permissions across multiple stores.</p>
            <div className="stack-feature-tags">
              <span className="feature-tag">Windows App</span>
              <span className="feature-tag">Mobile App</span>
              <span className="feature-tag">Encrypted Backup</span>
            </div>
          </div>
          <div className="stack-card-visual">
            <img src="/assets/img/screenshots/multidevice_sync_hub.svg" alt="Multi-Device Cloud Sync Across PC, Tablet &amp; Mobile" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Stack Card 4 */}
        <div className="stack-card card-4 reveal-item" data-card-index="4">
          <div className="stack-card-content">
            <div className="stack-card-header-bar">
              <div className="section-badge" style={{ marginBottom: "0" }}><i className="fa fa-chart-line"></i> Financial Clarity</div>
              <span className="stack-card-num">04 / 04</span>
            </div>
            <h3>Automated GSTR Reports &amp; Digital Khata</h3>
            <p>Maintain accurate digital credit ledgers, share WhatsApp invoices with payment links, and download ready-to-file GSTR-1, GSTR-3B, and P&amp;L reports in 1 click.</p>
            <div className="stack-feature-tags">
              <span className="feature-tag">WhatsApp Invoicing</span>
              <span className="feature-tag">Customer Ledger</span>
              <span className="feature-tag">Excel/PDF Export</span>
            </div>
          </div>
          <div className="stack-card-visual">
            <img src="/assets/img/screenshots/automated_gstr_reports.svg" alt="Automated GSTR Reports &amp; Digital Khata Analytics" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
