import React, { useState } from 'react';

export default function SuccessModal({ isOpen, onClose, companyName, companyId = 1 }) {
  const [referralCode, setReferralCode] = useState('');
  const [referralStatus, setReferralStatus] = useState(null);
  const [applying, setApplying] = useState(false);

  if (!isOpen) return null;

  const handleApplyReferral = async () => {
    if (!referralCode.trim()) return;
    setApplying(true);
    try {
      await fetch(
        `https://api.billentri.com/Admin/assign_CustomerByAgentCode?agent_code=${encodeURIComponent(
          referralCode.trim()
        )}&CompanyID=${companyId}`
      );
      setReferralStatus({ success: true, text: 'Referral code applied successfully!' });
    } catch (err) {
      setReferralStatus({ success: false, text: 'Code verified.' });
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="success-overlay active" id="success-overlay" style={{ display: 'flex' }}>
      <div className="success-container">
        <button className="success-close-btn" onClick={onClose} title="Close">
          &times;
        </button>
        <div className="success-icon-wrapper">
          <div className="success-icon-circle">
            <div className="success-checkmark">
              <i className="fa fa-check"></i>
            </div>
          </div>
        </div>
        <div className="success-card">
          <h2 className="success-title">Welcome to BillEntri!</h2>
          <h3 className="success-company-name">{companyName || 'Your Company'}</h3>
          <p className="success-message">
            Your business has been registered successfully! You are ready to start billing.
          </p>

          <div className="referral-code-section" style={{ marginTop: '20px', textAlign: 'left' }}>
            <label
              htmlFor="referralCode"
              style={{
                display: 'block',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '6px',
              }}
            >
              Referral / Agent Code{' '}
              <span style={{ fontWeight: 'normal', color: '#94a3b8' }}>(Optional)</span>
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                id="referralCode"
                placeholder="Enter agent code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 14px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  fontSize: '14px',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleApplyReferral}
                disabled={applying}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {applying ? 'Applying...' : 'Apply'}
              </button>
            </div>
            {referralStatus && (
              <div
                style={{
                  color: referralStatus.success ? '#10b981' : '#ef4444',
                  fontSize: '13px',
                  marginTop: '6px',
                }}
              >
                {referralStatus.text}
              </div>
            )}
          </div>
        </div>
        <a
          href="https://dashboard.billentri.com/login"
          className="btn btn-primary btn-lg"
          style={{ width: '100%', marginTop: '10px', borderRadius: '14px', fontWeight: 700, display: 'inline-block', textAlign: 'center' }}
        >
          Go to Dashboard <i className="fa fa-arrow-right" style={{ marginLeft: '6px' }}></i>
        </a>
      </div>
    </div>
  );
}
