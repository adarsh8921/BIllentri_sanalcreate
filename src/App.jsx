import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Downloads from './components/Downloads';
import Features from './components/Features';
import Workflow from './components/Workflow';
import StatsBanner from './components/StatsBanner';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import AppDownloadCTA from './components/AppDownloadCTA';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import SignupModal from './components/SignupModal';
import SuccessModal from './components/SuccessModal';
import DriversAndManualsPage from './components/DriversAndManualsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'drivers'
  const [themeMode, setThemeMode] = useState('retail'); // 'retail' (green) | 'restaurant' (red)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [registeredCompany, setRegisteredCompany] = useState('');
  const [createdCompanyId, setCreatedCompanyId] = useState(1);

  const toggleTheme = (mode) => {
    const nextTheme = mode || (themeMode === 'retail' ? 'restaurant' : 'retail');
    setThemeMode(nextTheme);
  };

  useEffect(() => {
    if (themeMode === 'restaurant') {
      document.body.classList.add('theme-restaurant');
    } else {
      document.body.classList.remove('theme-restaurant');
    }
  }, [themeMode]);

  // 1. Clean HTML5 Path Routing & Initial Curtain Dismissal
  useEffect(() => {
    const checkRoute = () => {
      const isDrivers = window.location.pathname.includes('drivers') || window.location.hash === '#drivers';
      if (isDrivers) {
        setCurrentPage('drivers');
      } else {
        setCurrentPage('home');
      }
    };
    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);

    // Dismiss transition curtain smoothly on page ready
    const curtain = document.getElementById('page-transition-curtain');
    if (curtain) {
      setTimeout(() => {
        curtain.classList.add('page-loaded');
      }, 1600);
    }

    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  // 2. High-Performance Scroll, Reveal & Spotlight Engine (Zero React re-renders on scroll)
  useEffect(() => {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const header = document.getElementById('site-header');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-menu .nav-link'));

    // Automatically inject staggered animation delays for cards in grids
    const gridSelectors = '.bento-grid, .pricing-cards-grid, .multiplatform-grid, .testimonials-grid, .blog-grid, .workflow-grid';
    document.querySelectorAll(gridSelectors).forEach((grid) => {
      Array.from(grid.children).forEach((child, idx) => {
        if (!child.classList.contains('reveal-item') && !child.classList.contains('card-reveal')) {
          child.classList.add('card-reveal');
        }
        child.style.transitionDelay = `${idx * 0.12}s`;
      });
    });

    // Reveal Engine & Counter Animations
    let counterAnimated = false;
    const animateCounters = () => {
      if (counterAnimated) return;
      counterAnimated = true;
      document.querySelectorAll('.counter-val').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        let startTime = null;

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = target * ease;
          if (decimals > 0) {
            el.textContent = current.toFixed(decimals) + suffix;
          } else {
            el.textContent = Math.floor(current).toLocaleString() + suffix;
          }
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = (decimals > 0 ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
          }
        };
        requestAnimationFrame(step);
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.classList.contains('hero-content') || entry.target.querySelector('.counter-val')) {
              animateCounters();
            }
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.08 }
    );

    const revealElements = document.querySelectorAll(
      '.reveal-item, .card-reveal, .reveal-left, .reveal-right, .reveal-zoom'
    );
    revealElements.forEach((el) => revealObserver.observe(el));
    setTimeout(animateCounters, 300);

    // Cache section layout positions on mount & resize to prevent forced reflow during scroll
    let sectionOffsets = [];
    const measureLayout = () => {
      sectionOffsets = sections.map((sec) => ({
        id: sec.id,
        top: sec.offsetTop,
        bottom: sec.offsetTop + sec.offsetHeight,
      }));
    };
    measureLayout();
    window.addEventListener('resize', measureLayout, { passive: true });

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // 1. Back To Top Button Visibility (Left side vertical label)
        if (backToTopBtn) {
          if (scrollY > 300) {
            backToTopBtn.classList.add('is-visible');
          } else {
            backToTopBtn.classList.remove('is-visible');
          }
        }

        // 2. Sticky Header Transitions
        if (header) {
          if (scrollY > 120) header.classList.add('nav-visible');
          else header.classList.remove('nav-visible');

          if (scrollY > 500) header.classList.add('scrolled');
          else header.classList.remove('scrolled');
        }

        // 3. Scrollspy Active Navigation (only on home page and when not scrolling via click)
        if (currentPage === 'home' && !window.__isNavClickScrolling) {
          const windowBottom = scrollY + window.innerHeight;
          const totalHeight = document.documentElement.scrollHeight;
          let activeId = null;

          if (windowBottom >= totalHeight - 80) {
            activeId = 'faqs';
          } else {
            const scrollPos = scrollY + 160;
            for (let i = 0; i < sectionOffsets.length; i++) {
              const sec = sectionOffsets[i];
              if (scrollPos >= sec.top && scrollPos < sec.bottom) {
                activeId = sec.id;
                break;
              }
            }
          }

          if (activeId) {
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${activeId}`) {
                link.classList.add('active');
              } else if (href && href.startsWith('#')) {
                link.classList.remove('active');
              }
            });
          }
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measureLayout);
      revealObserver.disconnect();
    };
  }, [currentPage]);

  // Clean SPA Path Navigation
  const navigateToDrivers = () => {
    setCurrentPage('drivers');
    if (window.location.pathname !== '/drivers-and-manuals') {
      window.history.pushState({ page: 'drivers' }, '', '/drivers-and-manuals');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (callback) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      if (window.location.pathname !== '/') {
        window.history.pushState({ page: 'home' }, '', '/');
      }
      if (callback) {
        requestAnimationFrame(() => {
          setTimeout(callback, 50);
        });
      }
    } else if (callback) {
      callback();
    }
  };

  const handleOpenSignup = () => setSignupOpen(true);
  const handleCloseSignup = () => setSignupOpen(false);

  const handleOpenVideo = () => setVideoOpen(true);
  const handleCloseVideo = () => setVideoOpen(false);

  const handleSignupSuccess = (companyName, companyId) => {
    setRegisteredCompany(companyName);
    if (companyId) setCreatedCompanyId(companyId);
    setSignupOpen(false);
    setSuccessOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="billentri-app">
      {/* Left-side Vertical Back To Top Button */}
      <button
        type="button"
        id="back-to-top-btn"
        className="back-to-top-btn"
        onClick={handleScrollToTop}
        aria-label="Back to top"
      >
        <span className="back-to-top-arrow">↑</span>
        <span>Back To Top</span>
      </button>

      <Header 
        currentPage={currentPage}
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
        onOpenSignup={handleOpenSignup} 
        onToggleMobileMenu={() => setMobileMenuOpen(true)}
        onNavigateDrivers={navigateToDrivers}
        onNavigateHome={navigateToHome}
      />

      <MobileDrawer 
        currentPage={currentPage}
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onOpenSignup={() => {
          setMobileMenuOpen(false);
          handleOpenSignup();
        }}
        onNavigateDrivers={navigateToDrivers}
        onNavigateHome={navigateToHome}
      />

      <main>
        {currentPage === 'drivers' ? (
          <DriversAndManualsPage onNavigateHome={navigateToHome} />
        ) : (
          <>
            <Hero themeMode={themeMode} onOpenSignup={handleOpenSignup} onOpenVideo={handleOpenVideo} />
            <Workflow />
            <Showcase onOpenSignup={handleOpenSignup} onOpenVideo={handleOpenVideo} />
            <Downloads />
            <Features themeMode={themeMode} />
            <StatsBanner onOpenVideo={handleOpenVideo} />
            <Pricing onOpenSignup={handleOpenSignup} themeMode={themeMode} />
            <Testimonials />
            <Blog />
            <FAQ />
            <AppDownloadCTA />
          </>
        )}
      </main>

      <Footer 
        onOpenSignup={handleOpenSignup}
        onOpenVideo={handleOpenVideo}
        onNavigateDrivers={navigateToDrivers}
        onNavigateHome={navigateToHome}
      />

      <VideoModal isOpen={videoOpen} onClose={handleCloseVideo} />
      <SignupModal 
        isOpen={signupOpen} 
        onClose={handleCloseSignup} 
        onSuccess={handleSignupSuccess} 
      />
      <SuccessModal 
        isOpen={successOpen} 
        onClose={() => setSuccessOpen(false)} 
        companyName={registeredCompany} 
        companyId={createdCompanyId}
      />
    </div>
  );
}
