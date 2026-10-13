import React from 'react';

export default function Workflow() {
  return (
    <>
<section className="section-padding bg-subtle" id="workflow">
    <div className="container">
      <div className="section-header reveal-item">
        <div className="section-badge"><i className="fa fa-play"></i> Seamless Onboarding</div>
        <h2 className="section-title">Start Billing In 3 Simple Steps</h2>
        <p className="section-subtitle">No complicated setups or technical accounting skills required. Get up and running in under a minute.</p>
      </div>

      <div className="workflow-grid">
        <div className="workflow-card reveal-item stagger-1">
          <div className="step-num-badge">01</div>
          <h3>Create Your Account</h3>
          <p>Register in 30 seconds using your phone number or email. Enter your business name and GSTIN to auto-configure standard tax rules.</p>
        </div>

        <div className="workflow-card reveal-item stagger-2">
          <div className="step-num-badge">02</div>
          <h3>Open on Any Device</h3>
          <p>Use our browser Web App or install the lightweight Windows or Android app. Connect thermal printers and barcode scanners in one click.</p>
        </div>

        <div className="workflow-card reveal-item stagger-3">
          <div className="step-num-badge">03</div>
          <h3>Start Billing &amp; Growing</h3>
          <p>Issue professional GST bills, track stock movements in real time, record customer payments, and download complete financial reports.</p>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
