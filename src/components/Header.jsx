import React, { useState } from 'react';

export default function Header({ 
  currentPage = 'home', 
  themeMode = 'retail',
  onToggleTheme,
  onOpenSignup, 
  onToggleMobileMenu, 
  onNavigateDrivers, 
  onNavigateHome 
}) {
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    const nextClicks = logoClicks + 1;
    setLogoClicks(nextClicks);
    if (nextClicks >= 10) {
      setLogoClicks(0);
      const a = document.createElement('a');
      a.href = '/download/setup/Billentri-barcode-setup.zip';
      a.download = 'Billentri-barcode-setup.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const updateIndicator = () => {
    const navMenu = document.getElementById('nav-menu');
    const indicator = document.getElementById('nav-indicator-pill');
    if (!navMenu || !indicator) return;
    const activeLink = navMenu.querySelector('.nav-link.active');
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const menuRect = navMenu.getBoundingClientRect();
      const left = linkRect.left - menuRect.left;
      const width = linkRect.width;
      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.width = `${width}px`;
      indicator.style.opacity = '1';
    } else {
      indicator.style.opacity = '0';
    }
  };

  React.useEffect(() => {
    // When currentPage changes, ensure active class matches currentPage
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      const isDrivers = currentPage === 'drivers';
      navMenu.querySelectorAll('.nav-link').forEach((link) => {
        const href = link.getAttribute('href');
        if (isDrivers) {
          if (href === '/drivers-and-manuals' || href === '#drivers') {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        } else if (href === '/drivers-and-manuals' || href === '#drivers') {
          link.classList.remove('active');
        }
      });
    }

    updateIndicator();
    requestAnimationFrame(updateIndicator);
    const timer = setTimeout(updateIndicator, 120);

    window.addEventListener('resize', updateIndicator);

    // Observer to update pill whenever active class changes during manual scroll
    let observer;
    if (navMenu) {
      observer = new MutationObserver(() => {
        if (!window.__isNavClickScrolling) {
          updateIndicator();
        }
      });
      observer.observe(navMenu, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class'],
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
      if (observer) observer.disconnect();
    };
  }, [currentPage]);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    const scrollToSection = () => {
      const target = document.querySelector(hash);
      if (target) {
        // Lock scrollspy during smooth scroll so the pill doesn't jump through sections
        window.__isNavClickScrolling = true;
        if (window.__navScrollTimer) clearTimeout(window.__navScrollTimer);

        document.querySelectorAll('.nav-menu .nav-link').forEach((link) => {
          if (link.getAttribute('href') === hash) link.classList.add('active');
          else if (link.getAttribute('href')?.startsWith('#')) link.classList.remove('active');
        });
        updateIndicator();

        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });

        const endScroll = () => {
          window.__isNavClickScrolling = false;
          window.removeEventListener('scrollend', endScroll);
          if (window.__navScrollTimer) clearTimeout(window.__navScrollTimer);
        };
        window.addEventListener('scrollend', endScroll, { once: true });
        window.__navScrollTimer = setTimeout(endScroll, 850);
      }
    };

    if (onNavigateHome) {
      onNavigateHome(scrollToSection);
    } else {
      scrollToSection();
    }
  };

  const handleDriversClick = (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-menu .nav-link').forEach((link) => {
      if (link.getAttribute('href') === '/drivers-and-manuals' || link.getAttribute('href') === '#drivers') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    updateIndicator();
    if (onNavigateDrivers) onNavigateDrivers();
  };

  return (
    <header className="site-header" id="site-header">
      <div className="container-fluid">
        <div className="header-inner">
          {/* Brand Logo */}
          <a href="/" className="brand-logo custom-logo-link" title="BillEntri" onClick={(e) => { handleLogoClick(); handleNavClick(e, '#home'); }}>
            <img src="/assets/img/logo.png" alt="BillEntri Logo" className="default-logo" />
            <img src="/assets/img/sticky_logo.png" alt="BillEntri Logo" className="sticky-logo" />
          </a>

          {/* Desktop Navigation Menu */}
          <nav>
            <ul className="nav-menu" id="nav-menu">
              <span className="nav-indicator-pill" id="nav-indicator-pill" aria-hidden="true" />
              <li><a href="#home" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
              <li><a href="#showcase" className="nav-link" onClick={(e) => handleNavClick(e, '#showcase')}>POS Live</a></li>
              <li><a href="#features" className="nav-link" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
              <li><a href="#downloads" className="nav-link" onClick={(e) => handleNavClick(e, '#downloads')}>Downloads</a></li>
              <li><a href="#pricing" className="nav-link" onClick={(e) => handleNavClick(e, '#pricing')}>Pricing</a></li>
              <li><a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>Reviews</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
              <li><a href="/drivers-and-manuals" className={`nav-link ${currentPage === 'drivers' ? 'active' : ''}`} onClick={handleDriversClick}>Drivers</a></li>
              <li className="nav-divider" aria-hidden="true"></li>
              <li>
                <button
                  type="button"
                  className={`nav-restaurant-pill ${themeMode === 'restaurant' ? 'active' : ''}`}
                  onClick={() => onToggleTheme && onToggleTheme()}
                  title={themeMode === 'restaurant' ? "Active: Restaurant View (Click to switch to Retail)" : "Click to switch to Restaurant View"}
                >
                  <i className="fa fa-cutlery"></i>
                  <span>Restaurant</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Action Buttons & Mobile Toggle */}
          <div className="header-actions">
            <a href="https://dashboard.billentri.com/login" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Login</a>
            <button type="button" className="btn btn-primary open-signup-modal" id="signup-btn" onClick={onOpenSignup}>
              <span>Start Free Trial</span>
              <i className="fa fa-arrow-right" style={{ fontSize: "11px" }}></i>
            </button>
            <button type="button" className="mobile-menu-toggle" id="mobile-toggle-btn" aria-label="Toggle Navigation" onClick={onToggleMobileMenu}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
