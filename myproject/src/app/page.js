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
import { projects as projectsData } from './data/projects';
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
  const educationData = {
    degree: 'B.Sc. (Eng.) in Computer Science and Engineering',
    institution: 'Jashore University of Science and Technology',
    duration: '2022 - 2025',
    cgpa: '3.54 / 4.00',
    highlights: [
        'Studied software engineering, data structures, algorithms, databases, and computer systems.',
        'Developed full-stack applications and practical software projects.',
        'Participated in competitive programming, hackathons, and software development activities.'
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
