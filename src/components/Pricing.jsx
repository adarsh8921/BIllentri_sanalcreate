import React, { useState, useEffect } from 'react';

let cachedCountriesData = null;

export default function Pricing({ onOpenSignup }) {
  const [activeTab, setActiveTab] = useState('india');
  const [countries, setCountries] = useState(cachedCountriesData || []);
  const [selectedCountry, setSelectedCountry] = useState('UAE');

  useEffect(() => {
    if (cachedCountriesData) {
      setCountries(cachedCountriesData);
      return;
    }
    fetch('https://api.billentri.com/index.php/Master/get_Allcountry')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const valid = data.filter((item) => item && item.country);
          cachedCountriesData = valid;
          setCountries(valid);
        }
      })
      .catch(() => {});
  }, []);

  // Determine current currency symbol based on tab and country
  const overseasCountry = countries.find((c) => c.country.toLowerCase() === selectedCountry.toLowerCase()) || {
    country: 'UAE',
    currency_code: 'AED',
    Currency_symbol: 'AED',
  };

  const overseasCurrencySymbol = overseasCountry.Currency_symbol || overseasCountry.currency_code || 'AED';

  return (
    <>
<section className="section-padding bg-subtle" id="pricing">
    <div className="container">
      <div className="section-header reveal-item">
        <div className="section-badge"><i className="fa fa-tag"></i> Transparent Pricing</div>
        <h2 className="section-title">Simple, Predictable Plans For Every Business</h2>
        <p className="section-subtitle">No hidden charges. 100% money-back guarantee within 3 days.</p>
      </div>

      {/* Currency Switcher */}
      <div className="pricing-tabs-nav reveal-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginBottom: '35px' }}>
        <div className="pricing-switch">
          <button type="button" className={`pricing-switch-btn ${activeTab === 'india' ? 'active' : ''}`} onClick={() => setActiveTab('india')}>India (₹ INR)</button>
          <button type="button" className={`pricing-switch-btn ${activeTab === 'overseas' ? 'active' : ''}`} onClick={() => setActiveTab('overseas')}>Overseas ({overseasCurrencySymbol})</button>
          <button type="button" className={`pricing-switch-btn ${activeTab === 'restaurant' ? 'active' : ''}`} onClick={() => setActiveTab('restaurant')}>Restaurant (India)</button>
          <button type="button" className={`pricing-switch-btn ${activeTab === 'restaurant-overseas' ? 'active' : ''}`} onClick={() => setActiveTab('restaurant-overseas')}>Restaurant (Overseas)</button>
        </div>

        {/* Overseas Country Selector (Positioned below the switch bar) */}
        {(activeTab === 'overseas' || activeTab === 'restaurant-overseas') && countries.length > 0 && (
          <div 
            className="overseas-country-picker-wrap"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '12px', 
              fontSize: '14px',
              padding: '6px 16px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              marginTop: '4px'
            }}
          >
            <label htmlFor="pricing-country-select" style={{ color: '#94a3b8', fontWeight: 500, margin: 0 }}>
              Select Overseas Country:
            </label>
            <select
              id="pricing-country-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                background: 'rgba(4, 30, 23, 0.9)',
                fontWeight: 600,
                color: '#34d399',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              {countries.filter(c => c.country.toLowerCase() !== 'india').map((c) => (
                <option key={c.id || c.country} value={c.country} style={{ background: '#041f17', color: '#ffffff' }}>
                  {c.country} ({c.Currency_symbol || c.currency_code})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Pricing Cards Grid */}
      <div className={`pricing-cards-grid ${activeTab !== 'india' ? 'two-cards' : ''}`} id="pricing-cards-container">
        {/* India Value Plan */}
        <div style={{ display: activeTab === "india" ? "flex" : "none" }}  className="price-card plan-item reveal-item stagger-1" data-country="india">
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-value">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h3 className="plan-name">Value Plan (1 User)</h3>
            <div className="plan-price"><span className="currency">₹</span>499<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> Single User Access</li>
            <li><i className="fa fa-check"></i> Mobile Application (Android/iOS)</li>
            <li><i className="fa fa-check"></i> GST Sales &amp; Purchase Invoicing</li>
            <li><i className="fa fa-check"></i> Product &amp; Stock Management</li>
            <li><i className="fa fa-check"></i> Basic Sales Reports</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-secondary open-signup-modal">Choose Value</button>
        </div>

        {/* India GO Plan */}
        <div style={{ display: activeTab === "india" ? "flex" : "none" }}  className="price-card plan-item reveal-item stagger-2" data-country="india">
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-go">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3 className="plan-name">GO Plan (3 Users)</h3>
            <div className="plan-price"><span className="currency">₹</span>1,499<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> Up to 3 User Accounts</li>
            <li><i className="fa fa-check"></i> Mobile Application (Android/iOS)</li>
            <li><i className="fa fa-check"></i> GST &amp; Non-GST Billing</li>
            <li><i className="fa fa-check"></i> Supplier &amp; Customer Ledger Khata</li>
            <li><i className="fa fa-check"></i> Ad-Free Premium Experience</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-secondary open-signup-modal">Choose GO</button>
        </div>

        {/* India Prime Plan */}
        <div style={{ display: activeTab === "india" ? "flex" : "none" }} className="price-card featured plan-item reveal-item stagger-3" data-country="india">
          <div className="featured-ribbon">Most Popular</div>
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-prime">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9z"></path>
                <path d="M11 3 8 9l4 12 4-12-3-6"></path>
                <path d="M2 9h20"></path>
              </svg>
            </div>
            <h3 className="plan-name">Prime Plan (3 Users)</h3>
            <div className="plan-price"><span className="currency">₹</span>2,999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> <strong>Full Web App (Desktop/Browser)</strong></li>
            <li><i className="fa fa-check"></i> <strong>Real-time Multi-Device Sync</strong></li>
            <li><i className="fa fa-check"></i> Advanced Analytics &amp; Excel Reports</li>
            <li><i className="fa fa-check"></i> Barcode Printing &amp; Custom Invoices</li>
            <li><i className="fa fa-check"></i> Priority 24/7 WhatsApp Support</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-primary open-signup-modal">Choose Prime Plan</button>
        </div>

        {/* Overseas GO Plan (Hidden by default) */}
        <div style={{ display: activeTab === "overseas" ? "flex" : "none" }}  className="price-card plan-item" data-country="overseas" >
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-go">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3 className="plan-name">GO Plan (Overseas)</h3>
            <div className="plan-price"><span className="currency">{overseasCurrencySymbol}</span> 5,999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> VAT-Compliant Invoicing</li>
            <li><i className="fa fa-check"></i> Up to 3 Users &bull; Mobile App</li>
            <li><i className="fa fa-check"></i> Inventory &amp; Stock Tracking</li>
            <li><i className="fa fa-check"></i> Customer Balance Ledger</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-secondary open-signup-modal">Choose GO Overseas</button>
        </div>

        {/* Overseas Prime Plan (Hidden by default) */}
        <div style={{ display: activeTab === "overseas" ? "flex" : "none" }} className="price-card featured plan-item" data-country="overseas" >
          <div className="featured-ribbon">Best for UAE / GCC</div>
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-prime">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9z"></path>
                <path d="M11 3 8 9l4 12 4-12-3-6"></path>
                <path d="M2 9h20"></path>
              </svg>
            </div>
            <h3 className="plan-name">Prime Plan (Overseas)</h3>
            <div className="plan-price"><span className="currency">{overseasCurrencySymbol}</span> 9,999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> <strong>Full Desktop Web Access</strong></li>
            <li><i className="fa fa-check"></i> <strong>Multi-Device Realtime Cloud Sync</strong></li>
            <li><i className="fa fa-check"></i> VAT Returns &amp; Export Reports</li>
            <li><i className="fa fa-check"></i> Priority Dedicated Support</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-primary open-signup-modal">Choose Prime Overseas</button>
        </div>

        {/* Restaurant GO Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant" ? "flex" : "none" }}  className="price-card plan-item theme-red" data-country="restaurant" >
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-go theme-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3 className="plan-name">GO Plan</h3>
            <div className="plan-price"><span className="currency">₹</span>999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> Mobile Only &bull; 1 User</li>
            <li><i className="fa fa-check"></i> Menu &amp; Menu Display</li>
            <li><i className="fa fa-check"></i> KOT Management</li>
            <li><i className="fa fa-check"></i> POS Billing (Delivery &amp; Dine)</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-secondary open-signup-modal">Choose GO</button>
        </div>

        {/* Restaurant Prime Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant" ? "flex" : "none" }} className="price-card featured plan-item theme-red" data-country="restaurant" >
          <div className="featured-ribbon">Most Popular</div>
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-prime theme-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9z"></path>
                <path d="M11 3 8 9l4 12 4-12-3-6"></path>
                <path d="M2 9h20"></path>
              </svg>
            </div>
            <h3 className="plan-name">Prime Plan</h3>
            <div className="plan-price"><span className="currency">₹</span>3,999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> <strong>3 Users Included</strong></li>
            <li><i className="fa fa-check"></i> Menu, Menu Display, KOT &amp; POS Billing</li>
            <li><i className="fa fa-check"></i> Table, Floor &amp; Seat Management</li>
            <li><i className="fa fa-check"></i> Dedicated Waiter User &amp; Performance</li>
            <li><i className="fa fa-check"></i> Owner Dashboard</li>
            <li><i className="fa fa-check"></i> Mobile, Website, POS, iOS &amp; Mac</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-primary open-signup-modal">Choose Prime</button>
        </div>

        {/* Restaurant Overseas GO Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant-overseas" ? "flex" : "none" }}  className="price-card plan-item theme-red" data-country="restaurant-overseas" >
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-go theme-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3 className="plan-name">GO Plan (Overseas)</h3>
            <div className="plan-price"><span className="currency">{overseasCurrencySymbol}</span> 6,999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> Mobile Only &bull; 1 User</li>
            <li><i className="fa fa-check"></i> Menu &amp; Menu Display</li>
            <li><i className="fa fa-check"></i> KOT Management</li>
            <li><i className="fa fa-check"></i> POS Billing (Delivery &amp; Dine)</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-secondary open-signup-modal">Choose GO Overseas</button>
        </div>

        {/* Restaurant Overseas Prime Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant-overseas" ? "flex" : "none" }} className="price-card featured plan-item theme-red" data-country="restaurant-overseas" >
          <div className="featured-ribbon">Best for UAE / GCC</div>
          <div className="price-card-header">
            <div className="plan-logo-badge plan-logo-prime theme-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9z"></path>
                <path d="M11 3 8 9l4 12 4-12-3-6"></path>
                <path d="M2 9h20"></path>
              </svg>
            </div>
            <h3 className="plan-name">Prime Plan (Overseas)</h3>
            <div className="plan-price"><span className="currency">{overseasCurrencySymbol}</span> 12,999<span className="period">/ year</span></div>
          </div>
          <ul className="plan-features-list">
            <li><i className="fa fa-check"></i> <strong>3 Users Included</strong></li>
            <li><i className="fa fa-check"></i> Menu, Menu Display, KOT &amp; POS Billing</li>
            <li><i className="fa fa-check"></i> Table, Floor &amp; Seat Management</li>
            <li><i className="fa fa-check"></i> Dedicated Waiter User &amp; Performance</li>
            <li><i className="fa fa-check"></i> Owner Dashboard</li>
            <li><i className="fa fa-check"></i> Mobile, Website, POS, iOS &amp; Mac</li>
          </ul>
          <button onClick={onOpenSignup} type="button" className="btn btn-primary open-signup-modal">Choose Prime Overseas</button>
        </div>
      </div>

      {/* Retail & Wholesale Comparison Table */}
      <div className="comparison-wrapper reveal-item">
        <div className="section-header" style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "24px" }}>Retail &amp; Wholesale Plan Features</h3>
        </div>
        <div className="comparison-table-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Features &amp; Capabilities</th>
                <th>Value Plan</th>
                <th>GO Plan</th>
                <th className="highlight-col">Prime Plan (Recommended)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price (India)</strong></td>
                <td>₹499 / yr</td>
                <td>₹1,499 / yr</td>
                <td className="highlight-col"><strong>₹2,999 / yr</strong></td>
              </tr>
              <tr>
                <td><strong>Price (Overseas / {selectedCountry})</strong></td>
                <td>—</td>
                <td>{overseasCurrencySymbol} 5,999 / yr</td>
                <td className="highlight-col"><strong>{overseasCurrencySymbol} 9,999 / yr</strong></td>
              </tr>
              <tr>
                <td><strong>Desktop / Web App Access</strong></td>
                <td><span className="status-cross"><i className="fa fa-times"></i> Mobile Only</span></td>
                <td><span className="status-cross"><i className="fa fa-times"></i> Mobile Only</span></td>
                <td className="highlight-col"><span className="status-check"><i className="fa fa-check"></i> Yes (Full Web &amp; Desktop)</span></td>
              </tr>
              <tr>
                <td><strong>Multi-Device Cloud Sync</strong></td>
                <td><span className="status-cross"><i className="fa fa-times"></i> No</span></td>
                <td><span className="status-cross"><i className="fa fa-times"></i> No</span></td>
                <td className="highlight-col"><span className="status-check"><i className="fa fa-check"></i> Yes (Instant Sync)</span></td>
              </tr>
              <tr>
                <td><strong>Sales, Purchase &amp; Quotations</strong></td>
                <td><span className="status-check"><i className="fa fa-check"></i> Yes</span></td>
                <td><span className="status-check"><i className="fa fa-check"></i> Yes</span></td>
                <td className="highlight-col"><span className="status-check"><i className="fa fa-check"></i> Yes</span></td>
              </tr>
              <tr>
                <td><strong>Inventory &amp; Barcode Management</strong></td>
                <td><span className="status-check"><i className="fa fa-check"></i> Basic</span></td>
                <td><span className="status-check"><i className="fa fa-check"></i> Advanced</span></td>
                <td className="highlight-col"><span className="status-check"><i className="fa fa-check"></i> Full Barcode Label Printing</span></td>
              </tr>
              <tr>
                <td><strong>Reports &amp; Analytics</strong></td>
                <td>Basic Reports</td>
                <td>Business Analytics</td>
                <td className="highlight-col">Advanced P&amp;L + Excel/PDF Export</td>
              </tr>
              <tr>
                <td><strong>Customer Support</strong></td>
                <td>Email Support</td>
                <td>Standard Support</td>
                <td className="highlight-col"><strong>Priority 24/7 Phone &amp; WhatsApp</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Restaurant Comparison Table */}
      <div className="comparison-wrapper reveal-item" style={{ marginTop: "50px" }}>
        <div className="section-header" style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "24px" }}>Restaurant Plan Features</h3>
        </div>
        <div className="comparison-table-scroll">
          <table className="comparison-table theme-red">
            <thead>
              <tr>
                <th>Features &amp; Capabilities</th>
                <th>Restaurant GO</th>
                <th className="highlight-col theme-red">Restaurant Prime (Recommended)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price (India)</strong></td>
                <td>₹999 / yr</td>
                <td className="highlight-col theme-red"><strong>₹3,999 / yr</strong></td>
              </tr>
              <tr>
                <td><strong>Price (Overseas / {selectedCountry})</strong></td>
                <td>{overseasCurrencySymbol} 6,999 / yr</td>
                <td className="highlight-col theme-red"><strong>{overseasCurrencySymbol} 12,999 / yr</strong></td>
              </tr>
              <tr>
                <td><strong>Desktop / Web App Access</strong></td>
                <td><span className="status-cross"><i className="fa fa-times"></i> Mobile Only</span></td>
                <td className="highlight-col theme-red"><span className="status-check"><i className="fa fa-check"></i> Yes (Full Web &amp; Desktop)</span></td>
              </tr>
              <tr>
                <td><strong>Multi-Device Cloud Sync</strong></td>
                <td><span className="status-cross"><i className="fa fa-times"></i> No</span></td>
                <td className="highlight-col theme-red"><span className="status-check"><i className="fa fa-check"></i> Yes (Instant Sync)</span></td>
              </tr>
              <tr>
                <td><strong>Core Billing Features</strong></td>
                <td><span className="status-check"><i className="fa fa-check"></i> KOT &amp; POS Billing</span></td>
                <td className="highlight-col theme-red"><span className="status-check"><i className="fa fa-check"></i> KOT &amp; POS Billing</span></td>
              </tr>
              <tr>
                <td><strong>Management &amp; Tracking</strong></td>
                <td><span className="status-check"><i className="fa fa-check"></i> Menu Management</span></td>
                <td className="highlight-col theme-red"><span className="status-check"><i className="fa fa-check"></i> Table &amp; Floor Management</span></td>
              </tr>
              <tr>
                <td><strong>Reports &amp; Analytics</strong></td>
                <td>Owner Dashboard</td>
                <td className="highlight-col theme-red">Owner Dashboard + Waiter Perf.</td>
              </tr>
              <tr>
                <td><strong>Customer Support</strong></td>
                <td>Standard Support</td>
                <td className="highlight-col theme-red"><strong>Priority 24/7 Phone &amp; WhatsApp</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}
