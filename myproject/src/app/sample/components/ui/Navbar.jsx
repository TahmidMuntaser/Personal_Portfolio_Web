"use client";

import React, { useEffect, useRef, useState } from 'react';
import CustomButton from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nameHover, setNameHover] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile menu state on page load/refresh
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href');

    setMobileMenuOpen(false);

    if (!href?.startsWith('#')) {
      return;
    }

    e.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    const scrollToSection = () => {
      const navbarHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      const extraOffset = 4;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;

      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    };

    const isMobileView = window.innerWidth < 768;
    const delay = isMobileView && mobileMenuOpen ? 320 : 0;

    window.setTimeout(scrollToSection, delay);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`z-50 transition-all duration-300 p-3 ${
          scrolled
            ? 'fixed top-0 left-0 right-0 px-4 py-4 md:px-8 lg:px-10 bg-[#020D19]/95 shadow-md backdrop-blur-md animate-jump'
            : 'relative px-4 py-4 md:px-8 lg:px-10 bg-[#020D19]'
        }`}
      >
        <div className="flex items-center justify-between gap-4 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-6">
        <div className="flex items-center md:justify-self-start">
          <div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span
              className="text-lg font-bold tracking-[0.04em] bg-clip-text text-transparent transition-all duration-300 md:text-xl lg:text-[1.35rem]"
              style={{
                backgroundImage: nameHover
                  ? 'linear-gradient(90deg,#14b8a6 0%,#14b8a6 48%,#ffffff 48%,#ffffff 100%)'
                  : 'linear-gradient(90deg,#ffffff 0%,#ffffff 48%,#14b8a6 48%,#14b8a6 100%)'
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
        <div className="hidden md:flex md:justify-self-center items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200 lg:text-xs">
          <a href="#services" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            Services
          </a>
          <a href="#education" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            Education
          </a>
          <a href="#works" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            Works
          </a>
          <a href="#cp" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            CP
          </a>
          <a href="#achievements" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            Achievements
          </a>
          <a href="#skills" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            Skills
          </a>
          <a href="#contact" onClick={handleLinkClick} className="relative rounded-full px-3 py-2 text-white/85 transition-all duration-300 hover:bg-white/[0.04] hover:text-teal-300">
            Contact
          </a>
        </div>

        {/* Desktop Hire Me Button */}
        <div className="hidden md:block md:justify-self-end md:scale-90 lg:scale-100">
          <CustomButton href="#contact">
            Hire Me
          </CustomButton>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-300 z-50 relative"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#020D19] backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 h-full w-[88vw] max-w-sm bg-[#07141c] border-l border-emerald-400/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex h-full flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-emerald-400/10 bg-[#0b1622] px-4 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-100/45">
                mobile-shell.sh
              </p>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-5 py-8">
              <div className="mx-auto w-full max-w-xs text-center pt-6 pb-4">
                <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-100/45">Navigation</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Open the command list</h2>
                <p className="mt-2 text-sm leading-5 text-slate-300">Tap a section to jump there, or press Hire Me to jump straight to contact.</p>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2.5 text-center">
              <a 
                href="#services" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Services
              </a>
              <a 
                href="#education" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Education
              </a>
              <a 
                href="#works" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Works
              </a>
              <a 
                href="#achievements" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Achievements
              </a>
              <a 
                href="#cp" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                CP
              </a>
              <a 
                href="#skills" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Contact
              </a>
            </div>

              {/* Mobile Hire Me Button */}
              <div className="mt-8 pb-4">
                <CustomButton 
                  href="#contact" 
                  className="w-full justify-center"
                  onClick={handleLinkClick}
                >
                  Hire Me
                </CustomButton>
              </div>

              {/* Footer Text */}
              <div className="mt-4 text-center text-teal-300/70 text-xs font-mono">
                {`$`} let's work together
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
