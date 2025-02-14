"use client";

import React, { useEffect, useState } from 'react';
import CustomButton from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between transition-all duration-300 p-6 ${
        scrolled
          ? 'fixed top-0 left-0 right-0 p-6 bg-[#0a192f] shadow-md animate-jump'
          : 'relative p-6 bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-wide text-blue-400">
          Portfolio
        </span>
      </div>
      <div className="flex space-x-4 font-bold tracking-widest text-lg">
        <a href="#services" className="relative group">
          Services
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
        </a>
        <a href="#works" className="relative group">
          Works
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
        </a>
        <a href="#resume" className="relative group">
          Resume
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
        </a>
        <a href="#skills" className="relative group">
          Skills
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
        </a>
        <a href="#testimonials" className="relative group">
          Testimonials
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
        </a>
        <a href="#contact" className="relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
        </a>
      </div>
      <CustomButton>
        Hire Me
      </CustomButton>
    </nav>
  );
};

export default Navbar;