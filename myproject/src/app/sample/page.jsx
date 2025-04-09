import React from 'react';
import Navbar from './components/ui/Navbar';
import CustomButton from './components/ui/Button';
import Hero from './components/ui/Hero';
import Services from './components/ui/Services'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
     
      
    </div>
  );
};

export default HomePage;