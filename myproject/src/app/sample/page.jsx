import React from 'react';
import Navbar from './components/ui/Navbar';
import CustomButton from './components/ui/Button';
import Hero from './components/ui/Hero';
import Services from './components/ui/Services'
import Contact from './components/ui/Contact'
import Footer from './components/ui/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services
        services={[
          {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive and functional websites using modern technologies.'
          },

          {
            id: 2,
            title: "Frontend Development",
            description: "Build visually appealing and highly responsive interfaces using modern frontend technologies like React, Next.js, and Tailwind CSS."
          },

          {
            id: 3,
            title: "Backend Development",
            description: "Develop secure and scalable APIs and server-side applications using Django and Django REST Framework."
          },

          {
            id: 4,
            title: "Programming Solutions",
            description: "Solve complex problems, create efficient algorithms, and build custom applications using Python, Java, or C/C++."
          }
  
        ]}
      />

      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;