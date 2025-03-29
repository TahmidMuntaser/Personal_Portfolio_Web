import React from 'react';
import CustomButton from './Button';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 bg-gradient-to-r from-[#4a148c] via-[#4a148c] to-[#0d47a1] text-white"
    >
      {/* Left Section */}
      <div className="max-w-2xl bg-black/60 p-6 rounded-lg">
        
        <h2 className="text-4xl font-semibold">I am Tahmid</h2>

        <h1 className="text-6xl font-bold mt-4 pt-4 bg-clip-text text-transparent bg-gradient-to-r  from-purple-600  to-purple-300">
          Next-Level Web 
        </h1>
        <h1 className="text-6xl font-bold mt-2 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600  to-purple-300">
          Developer.
        </h1>
        <p className="text-xl mt-4 pb-3 text-white/90">
          I am a passionate developer who loves building beautiful and functional web 
          applications. Explore my work and get in touch!
        </p>

        <div className="mt-6 flex items-center space-x-4">
          <button className="px-6 py-3 bg-purple-800 rounded-full font-semibold hover:bg-purple-700 transition">
            Download CV
          </button>
          {/* Social Icons */}
          <FaTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="/profile.jpg"
          alt="Tahmid"
          className="w-[350px] h-[400px] rounded-2xl object-cover border-4 border-purple-800"
        />
      </div>
      
    </section>
  );
};

export default Hero;