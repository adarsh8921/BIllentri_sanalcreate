import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Downloads from './components/Downloads';
import WhyBillEntri from './components/WhyBillEntri';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Gallery from './components/Gallery';
import StatsBanner from './components/StatsBanner';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import SignupModal from './components/SignupModal';
import SuccessModal from './components/SuccessModal';
import DriversAndManualsPage from './components/DriversAndManualsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'drivers'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [registeredCompany, setRegisteredCompany] = useState('');
  const [createdCompanyId, setCreatedCompanyId] = useState(1);

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
      }, 150);
    }

    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  // 2. High-Performance Scroll, Reveal & Spotlight Engine (Zero React re-renders on scroll)
  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress-bar');
    const header = document.getElementById('site-header');
    const stackCards = Array.from(document.querySelectorAll('.stack-card'));
    const pinPills = Array.from(document.querySelectorAll('.pin-nav-pill'));
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

    // Cache layout positions on mount & resize to prevent forced reflow during scroll
    let cardOffsets = [];
    let sectionOffsets = [];
    const measureLayout = () => {
      const scrollY = window.scrollY;
      cardOffsets = stackCards.map((card) => card.getBoundingClientRect().top + scrollY);
      sectionOffsets = sections.map((sec) => ({
        id: sec.id,
        top: sec.offsetTop,
        bottom: sec.offsetTop + sec.offsetHeight,
      }));
    };
    measureLayout();
    window.addEventListener('resize', measureLayout, { passive: true });

    let activePinIndex = 1;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // 1. Dynamic Scroll Progress Bar (Direct DOM update - 0 React re-renders)
        if (progressBar && docHeight > 0) {
          const progress = Math.min((scrollY / docHeight) * 100, 100);
          progressBar.style.width = `${progress}%`;
        }

        // 2. Sticky Header Transitions
        if (header) {
          if (scrollY > 120) header.classList.add('nav-visible');
          else header.classList.remove('nav-visible');

          if (scrollY > 500) header.classList.add('scrolled');
          else header.classList.remove('scrolled');
        }

        // 3. Pin-to-Pin Stack Cards scaling & pin dock (Desktop)
        if (window.innerWidth > 1024 && stackCards.length) {
          let currentTopCard = 1;

          for (let index = 0; index < stackCards.length; index++) {
            const card = stackCards[index];
            const cardTop = cardOffsets[index] || 0;
            const cardIndex = index + 1;
            const nextCardTop = cardOffsets[index + 1];

            if (scrollY >= cardTop - 220) {
              currentTopCard = cardIndex;
            }

            if (nextCardTop !== undefined) {
              const diff = nextCardTop - scrollY;
              const triggerPoint = 190 + index * 25;
              if (diff < triggerPoint + 180) {
                const progress = Math.max(0, Math.min(1, (triggerPoint + 180 - diff) / 180));
                const scale = 1 - progress * 0.055;
                const brightness = 1 - progress * 0.08;
                const blur = progress * 1.8;
                card.style.transform = `scale(${scale})`;
                card.style.filter = `brightness(${brightness}) blur(${blur}px)`;
                card.style.opacity = `${1 - progress * 0.15}`;
                card.classList.remove('is-pinned-active');
              } else {
                card.style.transform = 'scale(1)';
                card.style.filter = 'none';
                card.style.opacity = '1';
                card.classList.add('is-pinned-active');
              }
            }
          }

          if (currentTopCard !== activePinIndex) {
            activePinIndex = currentTopCard;
            pinPills.forEach((pill) => {
              const target = parseInt(pill.getAttribute('data-pin-target'));
              if (target === currentTopCard) pill.classList.add('active');
              else pill.classList.remove('active');
            });
          }
        } else if (stackCards.length) {
          stackCards.forEach((c) => {
            c.style.transform = '';
            c.style.filter = '';
            c.style.opacity = '';
          });
        }

        // 4. Scrollspy Active Navigation (disabled during programmatic nav click scroll)
        if (!window.__isNavClickScrolling) {
          const windowBottom = scrollY + window.innerHeight;
          const totalHeight = document.documentElement.scrollHeight;
          let activeId = null;

          if (windowBottom >= totalHeight - 80) {
            activeId = 'contact';
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

    // 5. Pin Nav Pill Click Interaction
    const handlePinClick = (e) => {
      const pill = e.currentTarget;
      const targetIndex = pill.getAttribute('data-pin-target');
      const targetCard = document.querySelector(`.stack-card.card-${targetIndex}`);
      if (targetCard) {
        const top = targetCard.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    pinPills.forEach((p) => p.addEventListener('click', handlePinClick));

    // 6. Interactive 3D Card Hover & Magnetic Spotlight (Optimized coordinate caching)
    const cleanupSpotlights = [];
    if (window.innerWidth >= 768) {
      const selector =
        '.platform-download-card, .stack-card, .bento-card, .price-card, .testimonial-card, .blog-card, .workflow-card, .pos-preview-box';
      const spotlightCards = document.querySelectorAll(selector);

      spotlightCards.forEach((card) => {
        card.classList.add('spotlight-card');
        let rect = null;

        const onMouseEnter = () => {
          rect = card.getBoundingClientRect();
        };

        const onMouseMove = (e) => {
          if (!rect) rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4.2;
          const rotateY = ((x - centerX) / centerX) * 4.2;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.01, 1.01, 1.01)`;
        };

        const onMouseLeave = () => {
          rect = null;
          card.style.transform = '';
        };

        card.addEventListener('mouseenter', onMouseEnter, { passive: true });
        card.addEventListener('mousemove', onMouseMove, { passive: true });
        card.addEventListener('mouseleave', onMouseLeave, { passive: true });

        cleanupSpotlights.push(() => {
          card.removeEventListener('mouseenter', onMouseEnter);
          card.removeEventListener('mousemove', onMouseMove);
          card.removeEventListener('mouseleave', onMouseLeave);
        });
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measureLayout);
      revealObserver.disconnect();
      pinPills.forEach((p) => p.removeEventListener('click', handlePinClick));
      cleanupSpotlights.forEach((fn) => fn());
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

  return (
    <div className="billentri-app">
      {/* Scroll Progress Bar (width animated via direct DOM styling) */}
      <div id="scroll-progress-bar" />

      <Header 
        onOpenSignup={handleOpenSignup} 
        onToggleMobileMenu={() => setMobileMenuOpen(true)}
        onNavigateDrivers={navigateToDrivers}
        onNavigateHome={navigateToHome}
      />

      <MobileDrawer 
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
            <Hero onOpenSignup={handleOpenSignup} onOpenVideo={handleOpenVideo} />
            <Showcase />
            <Downloads />
            <WhyBillEntri />
            <Features />
            <Workflow />
            <Gallery />
            <StatsBanner onOpenVideo={handleOpenVideo} />
            <Pricing onOpenSignup={handleOpenSignup} />
            <Testimonials />
            <Blog />
            <FAQ />
            <Contact />
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
