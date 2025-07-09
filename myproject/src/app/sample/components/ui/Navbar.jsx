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

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
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
        className={`z-50 flex items-center justify-between transition-all duration-300 p-6 ${
          scrolled
            ? 'fixed top-0 left-0 right-0 p-6 bg-[#0c0c0c] shadow-md animate-jump'
            : 'relative p-6 bg-gradient-to-r from-[#221636] via-[#1a0a2e] to-[#350c57]'
        }`}
      >
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-wide text-blue-400">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 font-bold tracking-widest text-lg">
          <a href="#services" className="relative group text-white hover:text-purple-300 transition-colors duration-300">
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#works" className="relative group text-white hover:text-purple-300 transition-colors duration-300">
            Works
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#resume" className="relative group text-white hover:text-purple-300 transition-colors duration-300">
            Resume
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#skills" className="relative group text-white hover:text-purple-300 transition-colors duration-300">
            Skills
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
          </a>
          <a href="#contact" className="relative group text-white hover:text-purple-300 transition-colors duration-300">
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
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-[#221636] via-[#1a0a2e] to-[#350c57] transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-8 pt-20">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-8 text-center">
              <a 
                href="#services" 
                onClick={handleLinkClick}
                className="text-xl font-bold text-white hover:text-purple-300 transition-all duration-300 hover:scale-105 pb-2 border-b border-purple-500/30 hover:border-purple-500"
              >
                Services
              </a>
              <a 
                href="#works" 
                onClick={handleLinkClick}
                className="text-xl font-bold text-white hover:text-purple-300 transition-all duration-300 hover:scale-105 pb-2 border-b border-purple-500/30 hover:border-purple-500"
              >
                Works
              </a>
              <a 
                href="#resume" 
                onClick={handleLinkClick}
                className="text-xl font-bold text-white hover:text-purple-300 transition-all duration-300 hover:scale-105 pb-2 border-b border-purple-500/30 hover:border-purple-500"
              >
                Resume
              </a>
              <a 
                href="#skills" 
                onClick={handleLinkClick}
                className="text-xl font-bold text-white hover:text-purple-300 transition-all duration-300 hover:scale-105 pb-2 border-b border-purple-500/30 hover:border-purple-500"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="text-xl font-bold text-white hover:text-purple-300 transition-all duration-300 hover:scale-105 pb-2 border-b border-purple-500/30 hover:border-purple-500"
              >
                Contact
              </a>
            </div>

            {/* Mobile Hire Me Button */}
            <div className="mt-auto mb-8">
              <CustomButton 
                href="#contact" 
                className="w-full justify-center"
                onClick={handleLinkClick}
              >
                Hire Me
              </CustomButton>
            </div>

            {/* Footer Text */}
            <div className="text-center text-purple-300/70 text-sm">
              Let's work together!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;