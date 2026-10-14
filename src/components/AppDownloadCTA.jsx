import React from 'react';

export default function AppDownloadCTA() {
  return (
    <section className="app-download-cta-section" id="download-cta">
      <div className="container">
        <div className="app-download-cta-content reveal-item reveal-left is-visible">
          <span className="app-download-cta-tag">Download Now</span>
          <h2 className="app-download-cta-title">
            Download now and<br />start smart billing
          </h2>

          <div className="app-download-cta-btns">
            <a
              href="https://apps.apple.com/in/app/bill-entri-billing-made-simple/id6758664706"
              target="_blank"
              rel="noopener noreferrer"
              className="app-download-store-badge"
              title="Download BillEntri on the App Store"
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
              className="app-download-store-badge"
              title="Get BillEntri on Google Play"
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
      </div>
    </section>
  );
}

