import React from 'react';

export default function Hero({ themeMode = 'retail', onOpenSignup, onOpenVideo }) {
  const isRestaurant = themeMode === 'restaurant';

  return (
    <>
      <section className="hero-kashir-section" id="home">
        <div className="hero-vertical-stripes"></div>

        <div className="container">
          <div className="hero-kashir-grid">
            {/* Left Content Column */}
            <div className="hero-kashir-content reveal-item reveal-left is-visible">
              <h1 className="hero-kashir-title">
                {isRestaurant
                  ? 'Smart POS Built For Modern Restaurants'
                  : 'One App For All Types Of Business'}
              </h1>

              <p className="hero-kashir-subtitle">
                {isRestaurant
                  ? 'A cloud-based restaurant POS application with fast KOT management, table ordering, dynamic menus, and live kitchen tracking.'
                  : 'A cloud-based online cashier application that can take your business potential to the highest level, both online and offline.'}
              </p>

              <div className="hero-kashir-cta-group">
                <button
                  type="button"
                  className="hero-btn-white-pill open-signup-modal"
                  onClick={onOpenSignup}
                >
                  Start Free 14-Day Trial <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </button>

                <button
                  type="button"
                  className="hero-btn-glass-pill open-video-modal"
                  onClick={onOpenVideo}
                >
                  <i className="fa fa-play-circle" style={{ fontSize: '18px', marginRight: '8px' }}></i>
                  Watch Live Demo
                </button>
              </div>

              {/* Available On Badges */}
              <div className="hero-platform-row">
                <span className="hero-platform-label">AVAILABLE ON:</span>
                <div className="hero-platform-pill">
                  <i className="fa fa-windows"></i> Windows
                </div>
                <div className="hero-platform-pill">
                  <i className="fa fa-apple"></i> macOS
                </div>
                <div className="hero-platform-pill">
                  <i className="fa fa-android"></i> Android
                </div>
                <div className="hero-platform-pill">
                  <i className="fa fa-apple"></i> iOS
                </div>
                <div className="hero-platform-pill">
                  <i className="fa fa-globe"></i> Web Cloud
                </div>
              </div>
            </div>

            {/* Right Column: Angled Tablet with hero.jpeg / restaurant_terminal.jpeg */}
            <div className="hero-tablet-wrapper reveal-item reveal-right is-visible">
              <div className="hero-tablet-frame">
                <div className="hero-tablet-camera"></div>
                <img
                  src={isRestaurant ? '/assets/images/restaurant_terminal.jpeg' : '/assets/images/hero.jpeg'}
                  alt={isRestaurant ? 'BillEntri Restaurant POS Screen' : 'BillEntri Tablet POS Application Screen'}
                  className="hero-tablet-screen"
                  width="1366"
                  height="768"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Emerald Green Stats Banner */}
      <section className="hero-stats-banner">
        <div className="container">
          <div className="hero-stats-banner-grid">
            <div className="hero-stats-banner-left reveal-item is-visible">
              <h2 className="hero-stats-banner-title">
                More Than 2000K Entrepreneurs Use BillEntri
              </h2>
              <p className="hero-stats-banner-sub">
                Boost revenue, gain insight that help you grow and scale faster.
              </p>

              <div className="hero-stats-banner-row">
                <div className="hero-stats-banner-col">
                  <strong>4.8</strong>
                  <div className="hero-stats-banner-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>Reviews</span>
                </div>

                <div className="hero-stats-banner-col">
                  <strong>89.9%</strong>
                  <span>Engagement order</span>
                  <span>Loyalty customer</span>
                </div>

                <div className="hero-stats-banner-col">
                  <strong>2000k</strong>
                  <span>Trusted Retail</span>
                  <span>Business worldwide</span>
                </div>
              </div>
            </div>

            {/* Empty right column for tablet overhang */}
            <div className="hero-stats-banner-spacer" aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </>
  );
}
