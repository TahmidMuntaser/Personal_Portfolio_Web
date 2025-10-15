import React from 'react';
import Navbar from './sample/components/ui/Navbar';
import CustomButton from './sample/components/ui/Button';
import Hero from './sample/components/ui/Hero';
import Services from './sample/components/ui/Services'
import Contact from './sample/components/ui/Contact'
import Footer from './sample/components/ui/Footer'
import Skills from './sample/components/ui/Skills'
import Works from './sample/components/ui/Works'
import { FaReact, FaJava } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiCplusplus } from 'react-icons/si';

import {FaServer, FaDocker } from 'react-icons/fa';
import {SiNextdotjs } from 'react-icons/si';

// ...existing code...

const HomePage = () => {

  // Update your projectsData in page.jsx
const projectsData = [
      {
          id: 1,
          title: 'ReliefLink',
          description: 'A platform to connect relief organizations, volunteers, and affected individuals, ensuring resources are efficiently allocated to areas in need.',
          fullDescription: 'The purpose is to ensure efficient resource distribution, real-time status tracking, and transparent communication. The project aims to connect relief organizations, volunteers, and affected individuals, ensuring resources are efficiently allocated to areas in need. The primary goals of this Relief Link platform are to ensure that relief resources reach the most affected areas efficiently, reducing waste and avoiding overlap in aid distribution.',
          imageUrl: '/ReliefLink0.png',
          link: 'https://',
          github: 'https://github.com/TahmidMuntaser/ReliefLink',
          tags: ['Html', 'CSS', 'Django', 'SQLite3'],
          features: [
              'Built a role-based dashboard for different users like DCs, UNOs, and Ward Members with separate permissions.',
              'Added real-time tracking of family needs and resource supplies to avoid duplication.',
              'Created a simple and responsive UI for volunteers to easily update family and flood data.',
              'Added status reports and visual tracking to monitor which areas are most affected.',
              'Improved communication between local authorities and volunteers for faster relief work.',

          ],
          gallery: [
              '/ReliefLink/ReliefLink1.png',
              '/ReliefLink/ReliefLink2.png',
              '/ReliefLink/ReliefLink3.png',
              '/ReliefLink/ReliefLink4.png',
              '/ReliefLink/ReliefLink5.png',
              '/ReliefLink/ReliefLink6.png',
              '/ReliefLink/ReliefLink7.png',
              '/ReliefLink/ReliefLink8.png',
              '/ReliefLink/ReliefLink9.png',

          ]
      },
      {
          id: 2,
          title: 'AutoDocs',
          description: 'Fast, secure, and user-friendly platform for managing and accessing academic documents with verified delivery and payment options.',
          fullDescription: 'Seamlessly access and download your academic records and certificates with fast, secure payment options. AutoDocs ensures verified delivery of your important documents, providing a hassle-free experience for students and educational institutions alike.',
          imageUrl: '/AutoDocs/AutoDocs.png',
          link: 'https://auto-docs.onrender.com/',
          github: 'https://github.com/TahmidMuntaser/AutoDocs-Cse',
          tags: ['React', 'Vite', 'Django', 'Tailwind CSS', 'SQLite3'],
          features: [
              'Instant document generation with university approval',
              'Users can request and download Marksheet, Transcript, Migration Certificate, Testimonial, and more',
              'Secure and verified digital signatures',
              '24/7 access from any device',
              'Both online and offline payment options',
              'Verified delivery via email or physical copy',
              'User-friendly interface for easy navigation',
              'Robust security measures to protect personal data',
              'Mobile responsive design'
          ],
          gallery: [
            '/AutoDocs/AutoDocs1.png',
            '/AutoDocs/AutoDocs2.png',
            '/AutoDocs/AutoDocs3.png',
            '/AutoDocs/AutoDocs4.png',
            '/AutoDocs/AutoDocs5.png',
            '/AutoDocs/AutoDocs6.png',
            '/AutoDocs/AutoDocs7.png',
            '/AutoDocs/AutoDocs8.png',
                    

          ]
      },
      //  {
      //     id: 3,
      //     title: 'Task Management App',
      //     description: 'Modern task management platform with collaboration features',
      //     fullDescription: 'A comprehensive task management solution built with Next.js and Firebase, featuring real-time collaboration, project organization, and team productivity tracking.',
      //     imageUrl: '/profile.jpeg',
      //     link: 'https://',
      //     github: 'https://github.com/',
      //     tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      //     features: [
      //         'Real-time collaboration',
      //         'Project organization',
      //         'Team productivity tracking',
      //         'File sharing and comments',
      //         'Mobile responsive design'
      //     ],
      //     gallery: []
      // }
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
            { name: 'Next.js', icon: <SiNextdotjs size={50} /> },
            { name: 'Django', icon: <SiDjango size={50} /> },
            { name: 'Django REST', icon: <FaServer size={50} /> },
            { name: 'Java', icon: <FaJava size={50} /> },
            { name: 'C++', icon: <SiCplusplus size={50} /> },
            { name: 'Docker', icon: <FaDocker size={50} /> },
          ]}
      />
      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;
