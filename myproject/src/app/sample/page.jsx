import React from 'react';
import Navbar from './components/ui/Navbar';
import CustomButton from './components/ui/Button';
import Hero from './components/ui/Hero';
import Services from './components/ui/Services'
import Contact from './components/ui/Contact'
import Footer from './components/ui/Footer'
import Skills from './components/ui/Skills'
import Works from './components/ui/Works'
import { FaReact, FaJava } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiCplusplus } from 'react-icons/si';

const HomePage = () => {

  // Update your projectsData in page.jsx
const projectsData = [
      {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'Modern e-commerce platform with advanced features',
          fullDescription: 'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, payment processing, inventory management, and real-time notifications. The platform includes both customer-facing storefront and admin dashboard.',
          imageUrl: '/profile.jpeg',
          link: 'https://',
          github: 'https://github.com/',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          features: [
              'User authentication and authorization',
              'Secure payment processing with Stripe',
              'Real-time inventory management',
              'Admin dashboard with analytics',
              'Responsive design for all devices'
          ],
          gallery: [
              '/profile.jpeg',
              '/profile.jpeg',
              '/profile.jpeg',
              
          ]
      },
      {
          id: 2,
          title: 'Task Management App',
          description: 'Modern task management platform with collaboration features',
          fullDescription: 'A comprehensive task management solution built with Next.js and Firebase, featuring real-time collaboration, project organization, and team productivity tracking.',
          imageUrl: '/profile.jpeg',
          link: 'https://',
          github: 'https://github.com/',
          tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
          features: [
              'Real-time collaboration',
              'Project organization',
              'Team productivity tracking',
              'File sharing and comments',
              'Mobile responsive design'
          ],
          gallery: [
             
          ]
      },
       {
          id: 3,
          title: 'Task Management App',
          description: 'Modern task management platform with collaboration features',
          fullDescription: 'A comprehensive task management solution built with Next.js and Firebase, featuring real-time collaboration, project organization, and team productivity tracking.',
          imageUrl: '/profile.jpeg',
          link: 'https://',
          github: 'https://github.com/',
          tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
          features: [
              'Real-time collaboration',
              'Project organization',
              'Team productivity tracking',
              'File sharing and comments',
              'Mobile responsive design'
          ],
          gallery: [
              '/images/project2-1.jpg',
              '/images/project2-2.jpg',
              '/images/project2-3.jpg'
          ]
      }
];

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
      <Works projects={projectsData} />
      <Skills 
          skills={[
            { name: 'React', icon: <FaReact size={50} /> },
            { name: 'JavaScript', icon: <SiJavascript size={50} /> },
            { name: 'Django', icon: <SiDjango size={50} /> },
            { name: 'Java', icon: <FaJava size={50} /> },
            { name: 'C++', icon: <SiCplusplus size={50} /> },
          ]}
      />
      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;