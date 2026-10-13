import React from 'react';

export default function StatsBanner({ onOpenVideo }) {
  return (
    <>
<section className="section-padding-sm">
    <div className="container">
      <div className="video-banner-box reveal-item reveal-zoom">
        <div className="video-banner-bg"></div>
        <button type="button" className="video-play-btn" id="video-banner-btn" title="Watch BillEntri Demo Video" onClick={onOpenVideo}>
          <i className="fa fa-play"></i>
        </button>
        <h2>Watch a 2-Minute Product Tour</h2>
        <p>Discover how thousands of business owners save 2+ hours daily on billing, customer reconciliations, and tax returns.</p>
      </div>
    </div>
  </section>

  
    </>
  );
}
