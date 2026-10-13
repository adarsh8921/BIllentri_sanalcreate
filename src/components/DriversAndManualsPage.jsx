import React, { useEffect } from 'react';
import '../drivers.css';

export default function DriversAndManualsPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="drivers-page-wrapper">
      {/* Header Breadcrumb Banner */}
<section className="drivers-hero-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="drivers-hero-content">
            <h1>Drivers &amp; Manuals</h1>
            <p>Download official setup drivers, utilities, and configuration manuals for your Billentri barcode and thermal billing printers.</p>
            <div className="breadcrumb-nav">
              <a href="#home" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>Home</a>
              <span>/</span>
              <span className="active">Drivers &amp; Manuals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section className="drivers-content-area">
    <div className="container">
      <div className="row">
        {/* Main Download Cards */}
        <div className="col-md-8 col-sm-12">
          {/* BillEntri Windows App Card */}
          <div className="driver-card">
            <span className="driver-card-badge app-badge">
              <i className="fa fa-windows"></i> Official Desktop App
            </span>
            
            <div className="driver-card-header">
              <div className="driver-card-icon app-icon">
                <i className="fa fa-desktop"></i>
              </div>
              <div className="driver-card-title">
                <h3>BillEntri for Windows</h3>
                <p>Official Windows Desktop application for fast offline &amp; online billing, inventory management, and GST invoicing.</p>
              </div>
            </div>

            {/* File details */}
            <div className="driver-meta-grid">
              <div className="meta-item">
                <span className="meta-label">File Name</span>
                <span className="meta-value">BillEntriSetup.exe</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">File Size</span>
                <span className="meta-value">19.94 MB</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Supported OS</span>
                <span className="meta-value">Windows 11 / 10 / 8 / 7 (64-bit &amp; 32-bit)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value">Billing &amp; Accounting Software</span>
              </div>
            </div>

            <div className="driver-features">
              <div className="driver-features-title">Features &amp; Highlights:</div>
              <ul className="driver-features-list">
                <li>Lightning-fast point of sale (POS) billing with barcode scanner support.</li>
                <li>Comprehensive GST invoice creation, E-Way billing &amp; GSTR report generation.</li>
                <li>Real-time multi-device cloud synchronization &amp; offline mode support.</li>
                <li>Customer ledger management, stock tracking, and payment reminders.</li>
              </ul>
            </div>

            <div className="driver-download-action">
              <a href="/download/BillEntriSetup.exe" className="btn-download-primary app-btn" download>
                <i className="fa fa-windows"></i> Download Windows (.exe)
              </a>
              <a href="/download/BillEntri.dmg" className="btn-download-primary app-btn" style={{ background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)" }} download>
                <i className="fa fa-apple"></i> Download macOS (.dmg)
              </a>
            </div>
          </div>

          {/* Barcode Printer Setup Card */}
          <div className="driver-card">
            <span className="driver-card-badge">
              <i className="fa fa-check-circle"></i> Official Driver Setup
            </span>
            
            <div className="driver-card-header">
              <div className="driver-card-icon">
                <i className="fa fa-print"></i>
              </div>
              <div className="driver-card-title">
                <h3>Barcode Printer Setup</h3>
                <p>Standard installer for Barcode &amp; Thermal Receipt Printers compatible with Billentri Billing Application.</p>
              </div>
            </div>

            {/* File details */}
            <div className="driver-meta-grid">
              <div className="meta-item">
                <span className="meta-label">File Name</span>
                <span className="meta-value">Barcode Printer Setup.exe</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">File Size</span>
                <span className="meta-value">19.46 MB</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Supported OS</span>
                <span className="meta-value">Windows 11 / 10 / 8 / 7 (32/64-bit)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value">Printer Driver &amp; Utility</span>
              </div>
            </div>

            <div className="driver-features">
              <div className="driver-features-title">Highlights &amp; Capabilities:</div>
              <ul className="driver-features-list">
                <li>Automatic port detection for USB and Serial barcode printers.</li>
                <li>Full integration with Billentri billing &amp; inventory barcode label generation.</li>
                <li>Supports standard 2-inch, 3-inch, and 4-inch thermal label rolls.</li>
                <li>High-speed spooling and clear font rendering for 1D and 2D barcode labels.</li>
              </ul>
            </div>

            <div className="driver-download-action">
              <a href="/download/Barcode%20Printer%20Setup.exe" className="btn-download-primary" download>
                <i className="fa fa-download"></i> Download Setup (.exe)
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar / Setup Guide */}
        <div className="col-md-4 col-sm-12">
          <div className="instructions-card">
            <h3><i className="fa fa-book"></i> Installation Steps</h3>
            <ul className="step-list">
              <li className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">
                  <h4>Download Installer</h4>
                  <p>Click the download button to get the <code>Barcode Printer Setup.exe</code> file on your computer.</p>
                </div>
              </li>
              <li className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">
                  <h4>Run Setup</h4>
                  <p>Double-click the downloaded executable file. When prompted by Windows User Account Control, click <strong>Yes</strong>.</p>
                </div>
              </li>
              <li className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">
                  <h4>Connect Printer</h4>
                  <p>Connect your thermal / barcode printer via USB cable and turn on power switch.</p>
                </div>
              </li>
              <li className="step-item">
                <div className="step-number">4</div>
                <div className="step-text">
                  <h4>Configure in Billentri</h4>
                  <p>Open Billentri settings, select your installed printer under <em>Print Settings</em>, and print a test barcode.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}
