import React, { useState, useRef } from 'react';

const galleryTabs = [
  {
    id: 1,
    title: 'Sales Invoicing',
    icon: 'fa-file-text-o',
    img: '/assets/img/screenshots/purple-screenshot-1.png',
  },
  {
    id: 2,
    title: 'Fast Counter POS',
    icon: 'fa-calculator',
    img: '/assets/img/screenshots/purple-screenshot-2.png',
  },
  {
    id: 3,
    title: 'Inventory & Stock',
    icon: 'fa-bar-chart',
    img: '/assets/img/screenshots/purple-screenshot-3.png',
  },
  {
    id: 4,
    title: 'Multi-Device Sync',
    icon: 'fa-laptop',
    img: '/assets/img/about/about-mockup.png',
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(galleryTabs[0]);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const handleTabClick = (tab) => {
    if (tab.id === activeTab.id) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
    }, 200);
  };

  return (
    <section className="section-padding" id="gallery">
      <div className="container">
        <div className="section-header reveal-item is-visible">
          <div className="section-badge">
            <i className="fa fa-desktop"></i> Interface Preview
          </div>
          <h2 className="section-title">Clean, Distraction-Free User Experience</h2>
          <p className="section-subtitle">
            Switch through the core modules to see how simple daily business operations look with BillEntri.
          </p>
        </div>

        <div className="gallery-tabs reveal-item is-visible">
          {galleryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`gallery-tab-btn ${activeTab.id === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              <i className={`fa ${tab.icon}`}></i> {tab.title}
            </button>
          ))}
        </div>

        <div className="gallery-display-wrapper reveal-item reveal-zoom is-visible">
          <img
            src={activeTab.img}
            alt={activeTab.title}
            className="gallery-display-img"
            id="gallery-main-img"
            key={activeTab.id}
            loading="lazy"
            decoding="async"
            style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.2s ease-in-out' }}
          />
        </div>
      </div>
    </section>
  );
}
