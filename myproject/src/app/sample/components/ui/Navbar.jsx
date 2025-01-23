import React from 'react';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">

      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-wide text-white"> PORTFOLIO </span>
      </div>

      <div className="flex space-x-4">
        <a href="#services" className="hover:underline">Services</a>
        <a href="#works" className="hover:underline">Works</a>
        <a href="#resume" className="hover:underline">Resume</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>

      <Button variant="contained" color="primary">Hire Me</Button>
      
    </nav>
  );
};

export default Navbar;