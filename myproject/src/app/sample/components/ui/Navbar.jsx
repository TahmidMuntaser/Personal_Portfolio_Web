import React from 'react';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-wide text-blue-500">
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
      <Button variant="contained" color="primary">Hire Me</Button>
    </nav>
  );
};

export default Navbar;