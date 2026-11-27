"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import CustomButton from './Button';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'education', label: 'Education' },
  { id: 'works', label: 'Works' },
  { id: 'cp', label: 'CP' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [nameHover, setNameHover] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['resume', ...NAV_ITEMS.map((item) => item.id)];

    const updateActiveSection = () => {
      const navbarHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      const offset = navbarHeight + 120;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      let current = 'resume';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navigateToSection = useCallback(
    (href) => {
      const wasMobileOpen = mobileMenuOpen;
      setMobileMenuOpen(false);

      if (!href?.startsWith('#')) {
        router.push(href);
        return;
      }

      const targetId = href.substring(1);

      if (pathname !== '/') {
        router.push(`/#${targetId}`);
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      setActiveSection(targetId);

      const scrollToSection = () => {
        const navbarHeight = navRef.current?.getBoundingClientRect().height ?? 0;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 4;
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth',
        });
      };

      const delay = window.innerWidth < 768 && wasMobileOpen ? 280 : 0;
      window.setTimeout(scrollToSection, delay);
    },
    [mobileMenuOpen, pathname, router]
  );

  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      navigateToSection(href);
    }
  };

  const handleBrandClick = () => {
    if (pathname !== '/') {
      router.push('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`z-50 transition-colors duration-200 ${
          scrolled
            ? 'fixed top-0 left-0 right-0 border-b border-emerald-400/10 bg-[#020D19]/95 px-4 py-3.5 shadow-md backdrop-blur-md md:px-8 lg:px-10'
            : 'relative border-b border-transparent bg-[#020D19] px-4 py-4 md:px-8 lg:px-10'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4">
          <div className="flex items-center md:justify-self-start">
            <div
              className="flex cursor-pointer items-center gap-2"
              onClick={handleBrandClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleBrandClick();
              }}
            >
              <span className="font-mono text-sm font-bold text-emerald-400" aria-hidden="true">
                &gt;_
              </span>
              <span
                className="text-lg font-bold tracking-[0.04em] bg-clip-text text-transparent transition-all duration-200 md:text-xl lg:text-[1.3rem]"
                style={{
                  backgroundImage: nameHover
                    ? 'linear-gradient(90deg,#14b8a6 0%,#14b8a6 48%,#ffffff 48%,#ffffff 100%)'
                    : 'linear-gradient(90deg,#ffffff 0%,#ffffff 48%,#14b8a6 48%,#14b8a6 100%)',
                }}
                onMouseEnter={() => setNameHover(true)}
                onMouseLeave={() => setNameHover(false)}
                onFocus={() => setNameHover(true)}
                onBlur={() => setNameHover(false)}
              >
                TAHMID MUNTASER
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:justify-self-center items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-200 lg:text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  aria-current={isActive ? 'location' : undefined}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-150 ${
                    isActive
                      ? 'bg-emerald-400/15 text-emerald-300'
                      : 'text-white/80 hover:bg-white/[0.05] hover:text-teal-300'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Hire Me Button */}
          <div className="hidden md:block md:justify-self-end md:scale-90 lg:scale-100">
            <CustomButton href="#contact" onClick={handleLinkClick}>
              Hire Me
            </CustomButton>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1 transition-all duration-200 md:hidden"
            aria-label="Toggle mobile menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${mobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-200 md:hidden ${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div
          className="absolute inset-0 bg-[#020D19]/90 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className={`absolute top-0 right-0 h-full w-[88vw] max-w-sm border-l border-emerald-400/10 bg-[#07141c] shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex h-full flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-emerald-400/10 bg-[#0b1622] px-4 py-3.5">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-100/45">
                mobile-shell.sh
              </p>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-5 py-8">
              <div className="mx-auto w-full max-w-xs pb-4 pt-6 text-center">
                <div className="mb-8">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-100/45">Navigation</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">Open the command list</h2>
                  <p className="mt-2 text-sm leading-5 text-slate-300">Tap a section to jump there, or press Hire Me to jump straight to contact.</p>
                </div>

                <div className="flex flex-col space-y-2.5 text-center">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={handleLinkClick}
                        className={`rounded-xl border px-4 py-3 text-sm font-semibold tracking-[0.12em] transition-colors duration-150 ${
                          isActive
                            ? 'border-emerald-400/35 bg-emerald-400/10 text-emerald-300'
                            : 'border-emerald-400/10 bg-[#08131d] text-white hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 pb-4">
                  <CustomButton
                    href="#contact"
                    className="w-full justify-center"
                    onClick={handleLinkClick}
                  >
                    Hire Me
                  </CustomButton>
                </div>

                <div className="mt-4 font-mono text-xs text-teal-300/70">
                  $ let&apos;s work together
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
