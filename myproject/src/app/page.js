import React from 'react';
import Image from 'next/image';
import Navbar from './sample/components/ui/Navbar';
import Hero from './sample/components/ui/Hero';
import Services from './sample/components/ui/Services';
import Contact from './sample/components/ui/Contact';
import Footer from './sample/components/ui/Footer';
import Skills from './sample/components/ui/Skills';
import Works from './sample/components/ui/Works';
import Education from './sample/components/ui/Education';
import Achievements from './sample/components/ui/Achievements';
import CompetitiveProfiles from './sample/components/ui/CompetitiveProfiles';
import {
  FaReact,
  FaJava,
  FaServer,
  FaDocker,
  FaPython,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaCss3Alt
} from 'react-icons/fa';
import {
  SiDjango,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiSqlite
} from 'react-icons/si';

const HomePage = () => {
  const projectsData = [
    {
      id: 1,
      title: 'AutoCP',
      description:
        'Automated problem generation platform for competitive programming based on selected topics and difficulty ratings.',
      fullDescription:
        'AutoCP is an advanced platform designed to automate the generation of programming problems and test cases. The system allows users to select topics and difficulty levels, automatically generating comprehensive problem sets with validated test cases. It streamlines the process of creating programming challenges for educational purposes and competitive programming practice.',
      imageUrl: '/AutoCP/AutoCP1.png',
      link: 'https://auto-cp.vercel.app/',
      github: 'https://github.com/TahmidMuntaser/AutoCP',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Automated problem set generation based on selected topic and difficulty rating',
        'Interactive UI for test case generation and validation workflows',
        'Correct input-output handling with comprehensive validation',
        'Interactive forms to collect user constraints and display generated content',
        'Integration with backend APIs for problem generation and validation',
        'Real-time display of generated problems and test cases',
        'User-friendly interface for competitive programming practice'
      ],
      gallery: [
        '/AutoCP/AutoCP1.png',
        '/AutoCP/AutoCP2.png',
        '/AutoCP/AutoCP3.png',
        '/AutoCP/AutoCP4.png',
        '/AutoCP/AutoCP5.png',
        '/AutoCP/AutoCP6.png',
        '/AutoCP/AutoCP7.png',
        '/AutoCP/AutoCP8.png',
        '/AutoCP/AutoCP9.png'
      ]
    },
    {
      id: 2,
      title: 'ReliefLink',
      description:
        'A platform to connect relief organizations, volunteers, and affected individuals, ensuring resources are efficiently allocated to areas in need.',
      fullDescription:
        'The purpose is to ensure efficient resource distribution, real-time status tracking, and transparent communication. The project aims to connect relief organizations, volunteers, and affected individuals, ensuring resources are efficiently allocated to areas in need. The primary goals of this Relief Link platform are to ensure that relief resources reach the most affected areas efficiently, reducing waste and avoiding overlap in aid distribution.',
      imageUrl: '/ReliefLink0.png',
      link: 'https://',
      github: 'https://github.com/TahmidMuntaser/ReliefLink',
      tags: ['Html', 'CSS', 'Django', 'SQLite3'],
      features: [
        'Built a role-based dashboard for different users like DCs, UNOs, and Ward Members with separate permissions.',
        'Added real-time tracking of family needs and resource supplies to avoid duplication.',
        'Created a simple and responsive UI for volunteers to easily update family and flood data.',
        'Added status reports and visual tracking to monitor which areas are most affected.',
        'Improved communication between local authorities and volunteers for faster relief work.'
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
        '/ReliefLink/ReliefLink9.png'
      ]
    },
    {
      id: 3,
      title: 'AutoDocs',
      description:
        'Fast, secure, and user-friendly platform for managing and accessing academic documents with verified delivery and payment options.',
      fullDescription:
        'Seamlessly access and download your academic records and certificates with fast, secure payment options. AutoDocs ensures verified delivery of your important documents, providing a hassle-free experience for students and educational institutions alike.',
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
        '/AutoDocs/AutoDocs8.png'
      ]
    }
  ];

  const educationData = {
    degree: 'B.Sc. (Eng.) in Computer Science and Engineering',
    institution: 'Jashore University of Science and Technology',
    duration: '2022 - 2025',
    cgpa: '3.49 / 4.00',
    highlights: [
      'Built full-stack academic and production-style software projects during undergraduate studies.',
      'Focused on software engineering, backend systems, and competitive programming practice.',
      'Combined coursework with hackathons and practical product development.'
    ]
  };

  const codingProfiles = [
    {
      platform: 'Codeforces',
      handle: 'TAHMIDMUNTASER',
      url: 'https://codeforces.com/profile/TAHMIDMUNTASER',
      maxRating: '1230',
      solved: '800+ problems',
      rank: 'Pupil'
    },
    {
      platform: 'CodeChef',
      handle: 'tahmidmuntaser',
      url: 'https://www.codechef.com/users/tahmidmuntaser',
      maxRating: '1610',
      solved: '250+ problems',
      rank: '3-star'
    },
    {
      platform: 'LeetCode',
      handle: 'tahmid25muntaser',
      url: 'https://leetcode.com/u/tahmid25muntaser/',
      maxRating: '1534',
      solved: '250+ problems',
      rank: 'Active'
    }
  ];

  const achievementsData = [
    {
      event: 'SOLVIO AI Hackathon 2025',
      badge: 'Top 10 / 538',
      description: 'Competed as Team JUST_DOMinators and reached the final round among 538 teams.'
    },
    {
      event: 'HackTheAI - Green University of Bangladesh',
      badge: '41st / 242',
      description: 'Finished in the final round as Team JUST_DOMinators with a top-50 placement.'
    },
    {
      event: 'BUP CSE TECH CARNIVAL 2025',
      badge: 'Top 20 / 80',
      description: 'Reached the final round as Team JUST_DOMinators and placed among the top 20 teams.'
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
            description: 'Responsive websites with a clean, modern feel.'
          },
          {
            id: 2,
            title: 'Frontend Development',
            description: 'Simple, responsive interfaces built with React and Tailwind.'
          },
          {
            id: 3,
            title: 'Backend Development',
            description: 'Secure APIs and server-side apps with Django and DRF.'
          },
          {
            id: 4,
            title: 'Programming Solutions',
            description: 'Practical problem-solving and custom software solutions.'
          }
        ]}
      />
      <Education education={educationData} />
      <Works projects={projectsData} />
      <CompetitiveProfiles profiles={codingProfiles} />
      <Skills
        skills={[
          { name: 'JavaScript', icon: <SiJavascript size={50} /> },
          { name: 'C', icon: <FaCode size={50} /> },
          { name: 'C++', icon: <SiCplusplus size={50} /> },
          { name: 'Python', icon: <FaPython size={50} /> },
          { name: 'HTML', icon: <FaHtml5 size={50} /> },
          { name: 'CSS', icon: <FaCss3Alt size={50} /> },
          { name: 'React', icon: <FaReact size={50} /> },
          { name: 'Next.js', icon: <SiNextdotjs size={50} /> },
          { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} /> },
          { name: 'Django', icon: <SiDjango size={50} /> },
          { name: 'Django REST', icon: <FaServer size={50} /> },
          { name: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
          { name: 'SQLite', icon: <SiSqlite size={50} /> },
          { name: 'Git', icon: <FaGitAlt size={50} /> },
          { name: 'GitHub', icon: <FaGithub size={50} /> },
          {
            name: 'Playwright',
            icon: (
              <Image
                src="/icons/playwright.svg"
                alt="Playwright logo"
                width={50}
                height={50}
                className="h-[50px] w-[50px] object-contain"
              />
            )
          },
          { name: 'Docker', icon: <FaDocker size={50} /> },
          { name: 'Java', icon: <FaJava size={50} /> }
        ]}
      />
      <Achievements achievements={achievementsData} />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
