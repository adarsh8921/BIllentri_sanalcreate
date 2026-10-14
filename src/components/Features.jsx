import React, { useState, useEffect } from 'react';

const storeFeatures = [
  {
    id: 'invoicing',
    tabLabel: 'GST Invoicing',
    iconClass: 'dripicons-document-edit',
    badge: 'Store Management • Invoicing',
    heading: 'GST & VAT Compliant Invoicing',
    desc: 'Create tax-compliant bills in under 5 seconds. Includes HSN/SAC codes, multi-tax breakdown tables, custom branding, QR codes, and instant WhatsApp PDF receipts.',
    highlights: [
      'Create bills in under 5 seconds',
      'HSN/SAC codes & tax breakdown tables',
      'Instant WhatsApp PDF receipt sharing',
      'Custom invoice branding & QR codes',
    ],
    screen: '/assets/img/screenshots/screenshot-1.png',
  },
  {
    id: 'inventory',
    tabLabel: 'Smart Inventory',
    iconClass: 'dripicons-view-thumb',
    badge: 'Store Management • Stock Control',
    heading: 'Smart Inventory & Barcodes',
    desc: 'Automatic stock deduction on every bill, batch tracking, expiry date monitoring, low-stock automated alerts, and 1-click custom barcode sticker printing.',
    highlights: [
      'Automatic stock deduction on sales',
      'Phone camera & barcode gun scanning',
      'Batch numbers & expiry monitoring',
      'Automated low-stock warning alerts',
    ],
    screen: '/assets/img/screenshots/screenshot-2.png',
  },
  {
    id: 'cloud',
    tabLabel: 'Real-Time Sync',
    iconClass: 'dripicons-cloud',
    badge: 'Store Management • Cloud',
    heading: 'Real-Time Cloud Sync',
    desc: 'Bill at your physical counter while monitoring revenue live on your mobile phone. Grant staff secure role-based permissions and manage multiple branches seamlessly.',
    highlights: [
      'Live counter sync across all devices',
      'Remote mobile owner dashboard',
      'Multi-user role-based permissions',
      'Multi-branch inventory synchronization',
    ],
    screen: '/assets/img/screenshots/screenshot-3.png',
  },
  {
    id: 'khata',
    tabLabel: 'Customer Khata',
    iconClass: 'dripicons-wallet',
    badge: 'Store Management • Ledger',
    heading: 'Customer & Supplier Khata',
    desc: 'Maintain accurate digital credit and debit balances, send instant PDF invoices via WhatsApp, and accelerate payment recovery with automated payment reminders.',
    highlights: [
      'Digital credit & debit balance khata',
      'Instant PDF invoices via WhatsApp',
      'Automated payment recovery reminders',
      'Direct UPI payment links for customers',
    ],
    screen: '/assets/img/screenshots/screenshot-1.png',
  },
  {
    id: 'reports',
    tabLabel: 'P&L & GSTR Reports',
    iconClass: 'dripicons-graph-bar',
    badge: 'Store Management • Analytics',
    heading: 'P&L Analytics & GST Reports',
    desc: 'Generate GSTR-1, GSTR-3B summaries, profit & loss analysis, daybook balances, cash/bank reports, and export data directly to Excel or ready-to-file PDF.',
    highlights: [
      'Ready-to-file GSTR-1 & 3B reports',
      'Automated Profit & Loss analysis',
      'Daily daybook and cash flow balances',
      '1-Click Excel and PDF data export',
    ],
    screen: '/assets/img/screenshots/screenshot-2.png',
  },
  {
    id: 'hardware',
    tabLabel: 'POS Hardware',
    iconClass: 'dripicons-print',
    badge: 'Store Management • Hardware',
    heading: 'Thermal & POS Hardware Ready',
    desc: 'Plug-and-play support for 2-inch & 3-inch USB/Bluetooth thermal printers, barcode scanner guns, electronic cash drawers, and electronic weighing scales.',
    highlights: [
      '2-inch & 3-inch Bluetooth thermal printers',
      'USB & wireless barcode scanner guns',
      'Electronic cash drawers integration',
      'Digital weighing scale connectivity',
    ],
    screen: '/assets/img/screenshots/screenshot-3.png',
  },
];

const restaurantFeatures = [
  {
    id: 'table',
    tabLabel: 'Table Management',
    iconClass: 'fa fa-cutlery',
    badge: 'Restaurant Exclusive • Operations',
    heading: 'Restaurant & Table Management',
    desc: 'Comprehensive table, floor, and seat management. Dedicated waiter user accounts with performance tracking, table reservations, and QR self-ordering.',
    highlights: [
      'Visual floor plan and table status tracking',
      'Dedicated waiter order taking accounts',
      'Table reservations & bill splitting',
      'QR code contactless table ordering',
    ],
    screen: '/assets/img/screenshots/screenshot-1.png',
  },
  {
    id: 'kot',
    tabLabel: 'KOT & POS Billing',
    iconClass: 'fa fa-ticket',
    badge: 'Restaurant Exclusive • Kitchen',
    heading: 'KOT & POS Billing',
    desc: 'Direct Kitchen Order Ticket (KOT) printing to kitchen thermal printers. Swift POS billing for dine-in, takeaway, and delivery with Swiggy and Zomato integrations.',
    highlights: [
      'Direct thermal Kitchen Order Ticket (KOT) printing',
      'Kitchen Display System (KDS) support',
      'Dine-in, takeaway & delivery billing',
      'Swiggy & Zomato order management',
    ],
    screen: '/assets/img/screenshots/screenshot-2.png',
  },
  {
    id: 'menu',
    tabLabel: 'Smart Menu',
    iconClass: 'fa fa-television',
    badge: 'Restaurant Exclusive • Dashboard',
    heading: 'Smart Menu & Owner Dashboard',
    desc: 'Dynamic menu display, item modifiers, recipe & ingredient stock deduction, and a dedicated owner dashboard accessible via Web, Mobile, iOS, and Mac.',
    highlights: [
      'Dynamic digital menu with item modifiers',
      'Recipe-level ingredient inventory tracking',
      'Real-time food cost and wastage analytics',
      'Remote owner reporting on phone & web',
    ],
    screen: '/assets/img/screenshots/screenshot-3.png',
  },
];

export default function Features({ themeMode = 'retail' }) {
  const isRestaurantView = themeMode === 'restaurant';
  const [activeCategory, setActiveCategory] = useState(isRestaurantView ? 'restaurant' : 'store'); // 'store' | 'restaurant'
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  // Sync category with themeMode
  useEffect(() => {
    if (isRestaurantView) {
      setActiveCategory('restaurant');
      setActiveTab(0);
    }
  }, [isRestaurantView]);

  const currentCategory = isRestaurantView ? 'restaurant' : activeCategory;
  const currentList = currentCategory === 'store' ? storeFeatures : restaurantFeatures;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % currentList.length);
        setFade(true);
      }, 160);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, currentList.length]);

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setFade(false);
    setActiveCategory(cat);
    setActiveTab(0);
    setTimeout(() => setFade(true), 160);
  };

  const handleTabSelect = (idx) => {
    if (idx === activeTab) return;
    setIsPaused(true);
    setFade(false);
    setTimeout(() => {
      setActiveTab(idx);
      setFade(true);
    }, 160);
  };

  const current = currentList[activeTab] || currentList[0];

  return (
    <section 
      className="features-switcher-section" 
      id="features"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Top Header & Category Switcher */}
        <div className="features-switcher-header">
          <div style={{ marginBottom: '14px', color: 'black', fontSize: '28px', fontWeight: 600, letterSpacing: '0.5px' }}>
            Features
          </div>

          <h2 className="section-title" style={{ color: '#0f172a', marginBottom: '16px' }}>
            {currentCategory === 'store' ? 'Built For Complete Store Management' : 'Powerful Tools For Food Businesses'}
          </h2>

          <p className="section-subtitle" style={{ color: '#64748b', marginBottom: '32px' }}>
            {currentCategory === 'store'
              ? 'Everything your business requires to operate smoothly, minimize errors, and maximize daily profitability.'
              : 'Everything you need to run dine-in, takeaway, and cloud kitchens flawlessly.'}
          </p>

          {/* Interactive Category Segmented Tabs */}
          <div className="features-category-toggle-wrap">
            {!isRestaurantView && (
              <button
                type="button"
                className={`features-cat-btn ${activeCategory === 'store' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('store')}
              >
                <i className="fa fa-shopping-bag"></i> Complete Store Management
              </button>
            )}
            <button
              type="button"
              className={`features-cat-btn ${isRestaurantView || activeCategory === 'restaurant' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('restaurant')}
            >
              <i className="fa fa-cutlery"></i> Food &amp; Restaurants
            </button>
          </div>
        </div>

        {/* 3-Column Interactive Switcher (Matching Reference Design) */}
        <div className="features-switcher-grid">
          {/* Left Column: Active Feature Details */}
          <div 
            className="features-switcher-left-col"
            style={{ 
              opacity: fade ? 1 : 0.35, 
              transform: fade ? 'translateY(0)' : 'translateY(6px)', 
              transition: 'opacity 0.22s ease, transform 0.22s ease' 
            }}
          >
            <span className="features-step-badge">{current.badge}</span>
            <h3 className="features-active-title">{current.heading}</h3>
            <div className="features-accent-line"></div>
            <p className="features-active-desc">{current.desc}</p>

            <ul className="features-highlights-list">
              {current.highlights.map((item, i) => (
                <li key={i}>
                  <i className="fa fa-check-circle"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column: Phone Mockup Showcase */}
          <div className="features-switcher-center-col">
            <div className="features-mockup-wrapper">
              <div className="features-mockup-backdrop">
                <img src="/assets/img/screenshots/screenshot-2.png" alt="BillEntri preview" />
              </div>

              <div 
                className="features-mockup-device"
                style={{ opacity: fade ? 1 : 0.45, transition: 'opacity 0.22s ease' }}
              >
                <img 
                  src={current.screen} 
                  alt={current.tabLabel} 
                  className="features-mockup-screen"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Capsule Switcher Tabs (Exact Image 2 Design) */}
          <div className="features-switcher-right-col">
            <div className="features-capsules-stack">
              {currentList.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`features-capsule-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleTabSelect(idx)}
                  >
                    <div className="features-capsule-icon-wrap">
                      <i className={item.iconClass}></i>
                    </div>
                    <span className="features-capsule-label">{item.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
