import React from 'react';

export default function Features() {
  return (
    <>
<section className="section-padding" id="features">
    <div className="container">
      <div className="section-header reveal-item">
        <div className="section-badge"><i className="fa fa-star"></i> Feature Suite</div>
        <h2 className="section-title">Built For Complete Store Management</h2>
        <p className="section-subtitle">Everything your business requires to operate smoothly, minimize errors, and maximize daily profitability.</p>
      </div>

      <div className="bento-grid">
        <div className="bento-card highlight reveal-item stagger-1">
          <div className="bento-icon"><i className="dripicons-document-edit"></i></div>
          <h3>GST &amp; VAT Compliant Invoicing</h3>
          <p>Create tax-compliant bills in under 5 seconds. Includes HSN/SAC codes, tax breakdown tables, item discounts, custom branding, and QR codes.</p>
        </div>

        <div className="bento-card reveal-item stagger-2">
          <div className="bento-icon"><i className="dripicons-view-thumb"></i></div>
          <h3>Smart Inventory &amp; Barcodes</h3>
          <p>Automatic stock deduction, batch tracking, expiry date monitoring, low-stock alerts, and 1-click custom barcode sticker printing.</p>
        </div>

        <div className="bento-card reveal-item stagger-3">
          <div className="bento-icon"><i className="dripicons-cloud"></i></div>
          <h3>Real-Time Cloud Sync</h3>
          <p>Bill at your physical counter while monitoring revenue live on your mobile phone. Grant staff secure role-based permissions.</p>
        </div>

        <div className="bento-card reveal-item stagger-4">
          <div className="bento-icon"><i className="dripicons-wallet"></i></div>
          <h3>Customer &amp; Supplier Khata</h3>
          <p>Maintain accurate digital credit/debit balances, send instant PDF invoices via WhatsApp, and accelerate payment recovery with reminders.</p>
        </div>

        <div className="bento-card reveal-item stagger-5">
          <div className="bento-icon"><i className="dripicons-graph-bar"></i></div>
          <h3>P&amp;L Analytics &amp; GST Reports</h3>
          <p>Generate GSTR-1, GSTR-3B summaries, profit &amp; loss analysis, daybook balances, and export data directly to Excel or PDF.</p>
        </div>

        <div className="bento-card reveal-item stagger-6">
          <div className="bento-icon"><i className="dripicons-print"></i></div>
          <h3>Thermal &amp; POS Hardware Ready</h3>
          <p>Plug-and-play support for 2-inch &amp; 3-inch USB/Bluetooth thermal printers, barcode guns, electronic cash drawers, and weighing scales.</p>
        </div>
      </div>

      {/* Restaurant Features Section */}
      <div className="section-header reveal-item" style={{ marginTop: "80px" }}>
        <div className="section-badge" style={{ background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", borderColor: "rgba(239, 68, 68, 0.2)" }}><i className="fa fa-cutlery"></i> Restaurant Exclusive</div>
        <h2 className="section-title">Powerful Tools For Food Businesses</h2>
        <p className="section-subtitle">Everything you need to run dine-in, takeaway, and cloud kitchens flawlessly.</p>
      </div>

      <div className="bento-grid">
        <div className="bento-card reveal-item stagger-1">
          <div className="bento-icon" style={{ color: "#ef4444" }}><i className="fa fa-cutlery"></i></div>
          <h3>Restaurant &amp; Table Management</h3>
          <p>Comprehensive table, floor, and seat management. Dedicated waiter user accounts with performance tracking and QR ordering.</p>
        </div>

        <div className="bento-card reveal-item stagger-2">
          <div className="bento-icon" style={{ color: "#ef4444" }}><i className="fa fa-ticket"></i></div>
          <h3>KOT &amp; POS Billing</h3>
          <p>Direct Kitchen Order Ticket (KOT) printing. Swift POS billing for dine-in and delivery with Swiggy and Zomato integrations.</p>
        </div>

        <div className="bento-card reveal-item stagger-3">
          <div className="bento-icon" style={{ color: "#ef4444" }}><i className="fa fa-television"></i></div>
          <h3>Smart Menu &amp; Owner Dashboard</h3>
          <p>Dynamic menu display, recipe &amp; ingredient tracking, and a dedicated owner dashboard accessible via Web, Mobile, iOS, and Mac.</p>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
