import React, { useState, useEffect } from 'react';

let cachedCountriesData = null;

export default function Pricing({ onOpenSignup }) {
  const [activeTab, setActiveTab] = useState('india');
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
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
<section className="section-padding pricing-modern-section" id="pricing">
    <div className="container">
      <div className="section-header reveal-item" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="section-badge"><i className="fa fa-tag"></i> Transparent Pricing</div>
        <h2 className="section-title">Simple, Predictable Plans For Every Business</h2>
        <p className="section-subtitle">No hidden charges. 100% money-back guarantee within 3 days.</p>
      </div>

      {/* Currency Switcher */}
      <div className="pricing-tabs-nav reveal-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
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

      {/* Monthly / Annual Pill Toggle (Matching Reference Image) */}
      <div className="pricing-billing-cycle-toggle reveal-item">
        <button
          type="button"
          className={`pricing-cycle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`pricing-cycle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
          onClick={() => setBillingCycle('annual')}
        >
          Annual
        </button>
      </div>

      {/* Modern 3-Card Grid (Matching Reference Design) */}
      <div className={`pricing-cards-grid modern-grid ${activeTab !== 'india' ? 'two-cards' : ''}`} id="pricing-cards-container">
        {/* India Value Plan / Free Plan */}
        <div style={{ display: activeTab === "india" ? "flex" : "none" }} className="price-card modern-card plan-item reveal-item stagger-1" data-country="india">
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Value</h3>
            <div className="modern-price-row">
              <span className="modern-currency">₹</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '499' : '49'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              Great for single cashier use or a first step to digital billing.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn outline-btn open-signup-modal">
              Get Started
            </button>
          </div>

          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> Single User Access</li>
              <li><i className="fa fa-check-circle"></i> Mobile App (Android/iOS)</li>
              <li><i className="fa fa-check-circle"></i> GST Sales &amp; Purchase Invoicing</li>
              <li><i className="fa fa-check-circle"></i> Product &amp; Stock Management</li>
              <li><i className="fa fa-check-circle"></i> Basic Sales Reports</li>
            </ul>
          </div>
        </div>

        {/* India GO Plan / Center Dark Card (Most Popular) */}
        <div style={{ display: activeTab === "india" ? "flex" : "none" }} className="price-card modern-card modern-featured plan-item reveal-item stagger-2" data-country="india">
          <div className="modern-featured-badge">Most Popular</div>
          <div className="modern-card-header">
            <h3 className="modern-plan-title">GO Pro</h3>
            <div className="modern-price-row">
              <span className="modern-currency">₹</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '1,499' : '149'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              Perfect for growing stores who want multi-user efficiency.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>

          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> Up to 3 User Accounts</li>
              <li><i className="fa fa-check-circle"></i> Mobile Application (Android/iOS)</li>
              <li><i className="fa fa-check-circle"></i> GST &amp; Non-GST Quick Billing</li>
              <li><i className="fa fa-check-circle"></i> Supplier &amp; Customer Ledger Khata</li>
              <li><i className="fa fa-check-circle"></i> Ad-Free High-Speed Performance</li>
            </ul>
          </div>
        </div>

        {/* India Prime Plan / Extended Card */}
        <div style={{ display: activeTab === "india" ? "flex" : "none" }} className="price-card modern-card plan-item reveal-item stagger-3" data-country="india">
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Prime</h3>
            <div className="modern-price-row">
              <span className="modern-currency">₹</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '2,999' : '299'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              Enhanced power with dedicated cloud sync &amp; desktop billing.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>

          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> <strong>Full Web App (Desktop/Browser)</strong></li>
              <li><i className="fa fa-check-circle"></i> <strong>Real-time Multi-Device Sync</strong></li>
              <li><i className="fa fa-check-circle"></i> Advanced Analytics &amp; Excel Reports</li>
              <li><i className="fa fa-check-circle"></i> Barcode Printing &amp; Custom Invoices</li>
              <li><i className="fa fa-check-circle"></i> Priority 24/7 Dedicated Support</li>
            </ul>
          </div>
        </div>

        {/* Overseas GO Plan (Hidden by default) */}
        <div style={{ display: activeTab === "overseas" ? "flex" : "none" }} className="price-card modern-card plan-item" data-country="overseas">
          <div className="modern-card-header">
            <h3 className="modern-plan-title">GO Overseas</h3>
            <div className="modern-price-row">
              <span className="modern-currency">{overseasCurrencySymbol}</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '5,999' : '599'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              VAT-compliant international billing for stores and outlets.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>
          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> VAT-Compliant Invoicing</li>
              <li><i className="fa fa-check-circle"></i> Up to 3 Users &bull; Mobile App</li>
              <li><i className="fa fa-check-circle"></i> Inventory &amp; Stock Tracking</li>
              <li><i className="fa fa-check-circle"></i> Customer Balance Ledger</li>
            </ul>
          </div>
        </div>

        {/* Overseas Prime Plan (Hidden by default) */}
        <div style={{ display: activeTab === "overseas" ? "flex" : "none" }} className="price-card modern-card modern-featured plan-item" data-country="overseas">
          <div className="modern-featured-badge">Best for UAE / GCC</div>
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Prime Overseas</h3>
            <div className="modern-price-row">
              <span className="modern-currency">{overseasCurrencySymbol}</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '9,999' : '999'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              Multi-device realtime cloud access for international businesses.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>
          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> <strong>Full Desktop Web Access</strong></li>
              <li><i className="fa fa-check-circle"></i> <strong>Multi-Device Realtime Cloud Sync</strong></li>
              <li><i className="fa fa-check-circle"></i> VAT Returns &amp; Export Reports</li>
              <li><i className="fa fa-check-circle"></i> Priority Dedicated Support</li>
            </ul>
          </div>
        </div>

        {/* Restaurant GO Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant" ? "flex" : "none" }} className="price-card modern-card plan-item theme-red" data-country="restaurant">
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Restaurant GO</h3>
            <div className="modern-price-row">
              <span className="modern-currency">₹</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '999' : '99'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              Entry setup for small takeaway counters and food trucks.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>
          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> Mobile Only &bull; 1 User</li>
              <li><i className="fa fa-check-circle"></i> Menu &amp; Menu Display</li>
              <li><i className="fa fa-check-circle"></i> KOT Management</li>
              <li><i className="fa fa-check-circle"></i> POS Billing (Delivery &amp; Dine)</li>
            </ul>
          </div>
        </div>

        {/* Restaurant Prime Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant" ? "flex" : "none" }} className="price-card modern-card modern-featured plan-item theme-red" data-country="restaurant">
          <div className="modern-featured-badge">Most Popular</div>
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Restaurant Prime</h3>
            <div className="modern-price-row">
              <span className="modern-currency">₹</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '3,999' : '399'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              Complete restaurant suite with table management &amp; waiter apps.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>
          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> <strong>3 Users Included</strong></li>
              <li><i className="fa fa-check-circle"></i> Menu, Menu Display, KOT &amp; POS</li>
              <li><i className="fa fa-check-circle"></i> Table, Floor &amp; Seat Management</li>
              <li><i className="fa fa-check-circle"></i> Dedicated Waiter User App</li>
              <li><i className="fa fa-check-circle"></i> Mobile, Website, POS, iOS &amp; Mac</li>
            </ul>
          </div>
        </div>

        {/* Restaurant Overseas GO Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant-overseas" ? "flex" : "none" }} className="price-card modern-card plan-item theme-red" data-country="restaurant-overseas">
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Resto GO Overseas</h3>
            <div className="modern-price-row">
              <span className="modern-currency">{overseasCurrencySymbol}</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '6,999' : '699'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              International restaurant setup with multi-currency KOT.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>
          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> Mobile Only &bull; 1 User</li>
              <li><i className="fa fa-check-circle"></i> Menu &amp; Menu Display</li>
              <li><i className="fa fa-check-circle"></i> KOT Management</li>
              <li><i className="fa fa-check-circle"></i> POS Billing (Delivery &amp; Dine)</li>
            </ul>
          </div>
        </div>

        {/* Restaurant Overseas Prime Plan (Hidden by default) */}
        <div style={{ display: activeTab === "restaurant-overseas" ? "flex" : "none" }} className="price-card modern-card modern-featured plan-item theme-red" data-country="restaurant-overseas">
          <div className="modern-featured-badge">Best for UAE / GCC</div>
          <div className="modern-card-header">
            <h3 className="modern-plan-title">Resto Prime Overseas</h3>
            <div className="modern-price-row">
              <span className="modern-currency">{overseasCurrencySymbol}</span>
              <span className="modern-amount">{billingCycle === 'annual' ? '12,999' : '1,299'}</span>
              <span className="modern-period">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            <p className="modern-plan-desc">
              All-in-one dine-in &amp; delivery suite for global restaurants.
            </p>
            <button onClick={onOpenSignup} type="button" className="modern-plan-btn lime-btn open-signup-modal">
              Try for 14 days
            </button>
          </div>
          <div className="modern-card-body">
            <span className="modern-included-label">What's included :</span>
            <ul className="modern-features-list">
              <li><i className="fa fa-check-circle"></i> <strong>3 Users Included</strong></li>
              <li><i className="fa fa-check-circle"></i> Menu, KOT, POS &amp; Table Matrix</li>
              <li><i className="fa fa-check-circle"></i> Dedicated Waiter App</li>
              <li><i className="fa fa-check-circle"></i> Owner Dashboard (iOS, Mac &amp; Web)</li>
            </ul>
          </div>
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
