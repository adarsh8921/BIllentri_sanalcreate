import React from 'react';

const steps = [
  {
    id: 1,
    stepNum: '01',
    icon: 'fa-user-circle-o',
    title: 'Create Your Account',
    desc: 'Register in 30 seconds using your phone number or email. Enter your business name and GSTIN to auto-configure standard tax rules.',
    action: '+ READ MORE',
    link: '#pricing',
  },
  {
    id: 2,
    stepNum: '02',
    icon: 'fa-laptop',
    title: 'Open on Any Device',
    desc: 'Use our browser Web App or install the lightweight Windows or Android app. Connect thermal printers and barcode scanners in one click.',
    action: '+ READ MORE',
    link: '#downloads',
    active: true,
  },
  {
    id: 3,
    stepNum: '03',
    icon: 'fa-file-text-o',
    title: 'Start Billing & Growing',
    desc: 'Issue professional GST bills, track stock movements in real time, record customer payments, and download complete financial reports.',
    action: '+ READ MORE',
    link: '#pricing',
  },
];

export default function Workflow() {
  return (
    <section className="workflow-modern-section" id="workflow">
      <div className="container workflow-modern-container">
        <div className="workflow-modern-header reveal-item">
          <span className="workflow-eyebrow">OUR PROCESS</span>
          <h2 className="workflow-modern-title">Start Billing In 3 Simple Steps</h2>
          <p className="workflow-modern-subtitle">
            No complicated setups or technical accounting skills required. Get up and running in under a minute.
          </p>
        </div>

        <div className="workflow-timeline-wrapper">
          <div className="workflow-timeline-grid">
            {steps.map((step, idx) => (
              <div 
                key={step.id} 
                className={`workflow-timeline-card-wrapper reveal-item ${step.active ? 'is-active' : ''}`}
              >
                {/* Connector line for steps 2 and 3 */}
                {idx > 0 && (
                  <div className="workflow-connector-line" aria-hidden="true">
                    <span className="workflow-connector-dot"></span>
                  </div>
                )}

                <div className="workflow-timeline-card">
                  <div className="workflow-card-icon-box">
                    <i className={`fa ${step.icon}`}></i>
                  </div>
                  <div className="workflow-card-body">
                    <span className="workflow-step-tag">Step {step.stepNum}</span>
                    <h3 className="workflow-card-title">{step.title}</h3>
                    <p className="workflow-card-desc">{step.desc}</p>
                    <a href={step.link} className="workflow-card-link">
                      {step.action}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

