import React from 'react';

export default function Downloads({ onOpenSignup, onOpenVideo }) {
  return (
    <>
<section className="multiplatform-section" id="downloads">
    <div className="container">
      <div className="section-header reveal-item" style={{ marginBottom: "40px" }}>
        <div className="section-badge"><i className="fa fa-download"></i> Cross-Platform Support</div>
        <h2 className="section-title">Run BillEntri On Any Device Seamlessly</h2>
        <p className="section-subtitle">Whether at your retail counter, warehouse, or on the go, choose the native application built for your platform.</p>
      </div>

      <div className="multiplatform-grid">
        {/* Windows App Card */}
        <div className="platform-download-card reveal-item stagger-1">
          <div className="platform-icon-wrap"><i className="fa fa-windows"></i></div>
          <h3>Windows Desktop</h3>
          <p>Native desktop application with plug-and-play thermal receipt printing and USB barcode scanner integration.</p>
          <a href="download/BillEntriSetup.exe" download className="platform-action-btn">
            <i className="fa fa-download"></i> Download .exe (64-bit)
          </a>
        </div>

        {/* macOS App Card */}
        <div className="platform-download-card reveal-item stagger-2">
          <div className="platform-icon-wrap"><i className="fa fa-apple"></i></div>
          <h3>macOS Desktop</h3>
          <p>Optimized for macOS on Apple Silicon (M1/M2/M3) and Intel processors for smooth billing and inventory.</p>
          <a href="download/BillEntri.dmg" download className="platform-action-btn">
            <i className="fa fa-download"></i> Download .dmg
          </a>
        </div>

        {/* Android App Card */}
        <div className="platform-download-card reveal-item stagger-3">
          <div className="platform-icon-wrap"><i className="fa fa-android"></i></div>
          <h3>Android Mobile</h3>
          <p>Bill on the go, share instant WhatsApp invoices, monitor sales, and manage stock right from your Android phone.</p>
          <a href="https://play.google.com/store/apps/details?id=com.billentri.svimers" target="_blank" rel="noopener noreferrer" className="platform-action-btn">
            <i className="fa fa-play"></i> Get on Google Play
          </a>
        </div>

        {/* iOS App Card */}
        <div className="platform-download-card reveal-item stagger-4">
          <div className="platform-icon-wrap"><i className="fa fa-apple"></i></div>
          <h3>iPhone &amp; iPad</h3>
          <p>Fast, elegant iOS application for checking real-time analytics, generating GST bills, and digital khata ledgers.</p>
          <a href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706" target="_blank" rel="noopener noreferrer" className="platform-action-btn">
            <i className="fa fa-arrow-circle-down"></i> Download on App Store
          </a>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
