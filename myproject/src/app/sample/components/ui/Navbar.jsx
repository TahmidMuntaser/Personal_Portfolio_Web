"use client";

import React, { useEffect, useState } from 'react';
import CustomButton from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
    
    // Smooth scroll  
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 80; 
        const elementPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
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
        className={`z-50 flex items-center justify-between transition-all duration-300 p-3 ${
          scrolled
            ? 'fixed top-0 left-0 right-0 p-6  bg-[#020D19] shadow-md animate-jump'
            : 'relative p-6 bg-[#020D19]'
        }`}
      >
        <div className="flex items-center">
          <span 
            className="text-2xl font-bold tracking-widest text-white cursor-pointer hover:text-teal-300 transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            TAHMID
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 font-bold tracking-widest text-lg">
          <a href="#services" onClick={handleLinkClick} className="relative group text-white hover:text-teal-300 transition-colors duration-300">
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#works" onClick={handleLinkClick} className="relative group text-white hover:text-teal-300 transition-colors duration-300">
            Works
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#resume" onClick={handleLinkClick} className="relative group text-white hover:text-teal-300 transition-colors duration-300">
            Resume
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#skills" onClick={handleLinkClick} className="relative group text-white hover:text-teal-300 transition-colors duration-300">
            Skills
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#contact" onClick={handleLinkClick} className="relative group text-white hover:text-teal-300 transition-colors duration-300">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
        </div>

        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
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

            <div className="flex-1 overflow-y-auto px-5 py-6 pt-12">
              <div className="mb-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-100/45">Navigation</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Open the command list</h2>
                <p className="mt-2 text-sm leading-5 text-slate-300">Tap a section to jump there, or press Hire Me to jump straight to contact.</p>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2.5 text-center">
              <a 
                href="#services" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Services
              </a>
              <a 
                href="#works" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Works
              </a>
              <a 
                href="#resume" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Resume
              </a>
              <a 
                href="#skills" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="rounded-xl border border-emerald-400/10 bg-[#08131d] px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-[#0b1a24] hover:text-teal-300"
              >
                Contact
              </a>
            </div>

              {/* Mobile Hire Me Button */}
              <div className="mt-6">
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
    </>
  );
};

export default Navbar;