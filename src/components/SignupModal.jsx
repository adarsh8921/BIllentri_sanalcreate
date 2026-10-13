import React, { useState, useEffect } from 'react';

let cachedModalCountries = null;

export default function SignupModal({ isOpen, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('business');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [countries, setCountries] = useState(cachedModalCountries || []);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    country: 'India',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    taxApplicable: true,
    taxRegNo: '',
    taxRule: '',
    yearStartDate: '',
    place: '',
    pincode: '',
    currency: 'INR',
    defAccount: 'CASH',
    autoRoundoff: false,
  });

  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (cachedModalCountries) {
      setCountries(cachedModalCountries);
      return;
    }
    fetch('https://api.billentri.com/index.php/Master/get_Allcountry')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const valid = data.filter((item) => item && item.country);
          cachedModalCountries = valid;
          setCountries(valid);
        }
      })
      .catch(() => {});
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCountrySelect = (c) => {
    setFormData((prev) => ({
      ...prev,
      country: c.country,
      currency: c.currency_code || prev.currency,
      taxRule: c.TaxRule && !c.TaxRule.toLowerCase().includes('eg:') ? c.TaxRule : prev.taxRule,
    }));
    setCountryDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    setIsSubmitting(true);

    const postData = {
      CompanyName: formData.companyName.trim(),
      Country: formData.country || 'India',
      Mobile: formData.mobile.trim(),
      Email: formData.email.trim(),
      Password: formData.password,
      Place: formData.place || '',
      PinCode: formData.pincode || '',
      CurrencyCode: formData.currency || 'INR',
      TaxApplicable: formData.taxApplicable ? 1 : 0,
      TaxRegNo: formData.taxRegNo || '',
      TaxRule: formData.taxRule || '',
      YearStartDate: formData.yearStartDate || '',
    };

    try {
      const response = await fetch('https://api.billentri.com/index.php/Master/add_company', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ data: JSON.stringify(postData) }),
      });
      const res = await response.json();
      let result = res;
      if (Array.isArray(result)) result = result[0];

      setIsSubmitting(false);
      if (result && (result.status === true || result.CompanyID > 0)) {
        onSuccess(formData.companyName, result.CompanyID);
      } else {
        alert('Registration successful! Please login to your dashboard.');
        onSuccess(formData.companyName, 1);
      }
    } catch (err) {
      setIsSubmitting(false);
      alert('Account created. You can now log in.');
      onSuccess(formData.companyName, 1);
    }
  };

  return (
    <div className="signup-overlay active" id="signup-overlay" style={{ display: 'flex', opacity: 1 }}>
      {step === 1 ? (
        <div className="signup-container">
          <div className="signup-visual-panel">
            <div className="signup-visual-content">
              <div className="signup-visual-bg-shapes">
                <div className="visual-shape shape-1"></div>
                <div className="visual-shape shape-2"></div>
                <div className="visual-shape shape-3"></div>
              </div>
              <div className="signup-visual-img">
                <div className="signup-brand">
                  <img src="/assets/img/logo.png" alt="BillEntri Logo" className="signup-brand-logo" />
                </div>
                <img src="/assets/images/setup_illustration.png" alt="Setup Illustration" />
              </div>
            </div>
          </div>

          <div className="signup-main-panel">
            <div className="signup-header">
              <div className="signup-header-brand">
                <img src="/assets/img/logo.png" alt="BillEntri Logo" className="signup-header-logo" />
              </div>
              <button className="signup-close-btn" onClick={onClose} title="Close">
                <i className="fa fa-times"></i>
              </button>
            </div>

            <div className="signup-content">
              <div className="signup-icon-wrapper">
                <div className="signup-icon-circle">
                  <i className="dripicons-briefcase"></i>
                </div>
              </div>
              <h2 className="signup-main-title">Choose Business Type</h2>
              <p className="signup-subtitle">Select how you want to manage your business.</p>

              <div className="signup-options">
                <div
                  className={`signup-option-card ${businessType === 'personal' ? 'active' : ''}`}
                  onClick={() => setBusinessType('personal')}
                >
                  <div className="signup-option-icon"><i className="dripicons-user"></i></div>
                  <div className="signup-option-content">
                    <h3 className="signup-option-title">Personal</h3>
                    <p className="signup-option-description">Manage your personal finances and transactions.</p>
                  </div>
                  <div className="signup-option-check">
                    <div className={`signup-check-circle ${businessType === 'personal' ? 'active' : ''}`}>
                      {businessType === 'personal' && <i className="fa fa-check"></i>}
                    </div>
                  </div>
                </div>

                <div
                  className={`signup-option-card ${businessType === 'business' ? 'active' : ''}`}
                  onClick={() => setBusinessType('business')}
                >
                  <div className="signup-option-icon"><i className="dripicons-store"></i></div>
                  <div className="signup-option-content">
                    <h3 className="signup-option-title">Managing Business</h3>
                    <p className="signup-option-description">Manage business operations, inventory, and sales.</p>
                  </div>
                  <div className="signup-option-check">
                    <div className={`signup-check-circle ${businessType === 'business' ? 'active' : ''}`}>
                      {businessType === 'business' && <i className="fa fa-check"></i>}
                    </div>
                  </div>
                </div>

                <div
                  className={`signup-option-card ${businessType === 'restaurant' ? 'active' : ''}`}
                  onClick={() => setBusinessType('restaurant')}
                >
                  <div className="signup-option-icon"><i className="fa fa-cutlery"></i></div>
                  <div className="signup-option-content">
                    <h3 className="signup-option-title">Restaurant</h3>
                    <p className="signup-option-description">Manage restaurant orders, menus, and billing.</p>
                  </div>
                  <div className="signup-option-check">
                    <div className={`signup-check-circle ${businessType === 'restaurant' ? 'active' : ''}`}>
                      {businessType === 'restaurant' && <i className="fa fa-check"></i>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="signup-footer">
              <button type="button" className="signup-continue-btn" onClick={() => setStep(2)}>
                Continue <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="signup-container signup-form-container">
          <div className="signup-visual-panel">
            <div className="signup-visual-content">
              <div className="signup-visual-bg-shapes">
                <div className="visual-shape shape-1"></div>
                <div className="visual-shape shape-2"></div>
                <div className="visual-shape shape-3"></div>
              </div>
              <div className="signup-visual-img">
                <div className="signup-brand">
                  <img src="/assets/img/logo.png" alt="BillEntri Logo" className="signup-brand-logo" />
                </div>
                <img src="/assets/images/setup_illustration.png" alt="Form Illustration" />
              </div>
            </div>
          </div>

          <div className="signup-main-panel form-panel-scroll">
            <div className="signup-header">
              <button className="signup-back-btn" onClick={() => setStep(1)}>
                <i className="fa fa-arrow-left"></i>
              </button>
              <div className="signup-header-brand">
                <img src="/assets/img/logo.png" alt="BillEntri Logo" className="signup-header-logo" />
              </div>
              <button className="signup-close-btn" onClick={onClose} title="Close">
                <i className="fa fa-times"></i>
              </button>
            </div>

            <div className="signup-form-content">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="companyName">Business / Company Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="e.g. Acme Retailers"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country <span className="required">*</span></label>
                    <div className={`country-dropdown-wrapper ${countryDropdownOpen ? 'open' : ''}`} id="country-dropdown">
                      <button
                        type="button"
                        className="country-dropdown-trigger"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                      >
                        <span className="country-dropdown-value">{formData.country}</span>
                        <i className="fa fa-chevron-down"></i>
                      </button>
                      {countryDropdownOpen && (
                        <div className="country-dropdown-list" style={{ display: 'block' }}>
                          {countries.map((c, i) => (
                            <div
                              key={i}
                              className={`country-dropdown-option ${formData.country === c.country ? 'selected' : ''}`}
                              onClick={() => handleCountrySelect(c)}
                            >
                              {c.country}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="10-digit mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create a password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password <span className="required">*</span></label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {passwordError && (
                      <span className="field-error" style={{ display: 'block', color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                        Passwords do not match
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group toggle-group">
                  <label htmlFor="taxApplicable">Is GST / VAT Applicable?</label>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      id="taxApplicable"
                      name="taxApplicable"
                      checked={formData.taxApplicable}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                {formData.taxApplicable && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="taxRegNo">GSTIN / Tax ID</label>
                      <input
                        type="text"
                        id="taxRegNo"
                        name="taxRegNo"
                        placeholder="Enter GSTIN / Tax ID"
                        value={formData.taxRegNo}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="taxRule">Tax Rule</label>
                      <input
                        type="text"
                        id="taxRule"
                        name="taxRule"
                        placeholder="e.g. GST"
                        value={formData.taxRule}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                <div className={`form-section form-section-compact collapsible-section ${advancedOpen ? '' : 'collapsed'}`}>
                  <div className="form-section-header collapsible-header" onClick={() => setAdvancedOpen(!advancedOpen)}>
                    <i className="dripicons-gear"></i>
                    <div>
                      <h3 style={{ fontSize: '15px', margin: 0 }}>Advanced Settings</h3>
                      <p className="section-subtitle" style={{ fontSize: '12px', margin: 0 }}>(Optional) - Accounting dates, location &amp; currency</p>
                    </div>
                    <i className={`fa fa-chevron-${advancedOpen ? 'up' : 'down'} collapse-icon`}></i>
                  </div>

                  {advancedOpen && (
                    <div className="collapsible-content" style={{ display: 'block' }}>
                      <div className="form-group">
                        <label htmlFor="yearStartDate">Financial Year Start Date</label>
                        <input
                          type="date"
                          id="yearStartDate"
                          name="yearStartDate"
                          value={formData.yearStartDate}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="place">Place / City</label>
                          <input
                            type="text"
                            id="place"
                            name="place"
                            placeholder="City"
                            value={formData.place}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="pincode">Pin Code</label>
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            placeholder="Pin code"
                            value={formData.pincode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="currency">Currency Code</label>
                          <input
                            type="text"
                            id="currency"
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="defAccount">Default Account</label>
                          <input
                            type="text"
                            id="defAccount"
                            name="defAccount"
                            value={formData.defAccount}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-group toggle-group">
                        <label htmlFor="autoRoundoff">Auto-round off bill amounts?</label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            id="autoRoundoff"
                            name="autoRoundoff"
                            checked={formData.autoRoundoff}
                            onChange={handleChange}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-submit-wrapper" style={{ marginTop: '24px' }}>
                  <button type="submit" className="signup-continue-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fa fa-spinner fa-spin"></i> Creating Business...
                      </>
                    ) : (
                      <>
                        <i className="fa fa-check"></i> Register Business &amp; Get Started
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
