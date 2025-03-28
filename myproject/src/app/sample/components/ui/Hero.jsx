import React from 'react';
import CustomButton from './Button';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
        
      {/* Left Section */}

      <div className="max-w-2xl bg-black/50 p-6 rounded-lg">
        
        <h2 className="text-2xl font-semibold">I am Tahmid</h2>
        
        <h1 className="text-5xl font-bold mt-2 text-purple-400">
          Next-Level Web Developer.
        </h1>

        <p className="text-lg mt-4 text-gray-300">
          I am a passionate developer who loves building beautiful and functional web applications. Explore my work and get in touch!
        </p>

        <div className="mt-6 flex items-center space-x-4">
          
          <button className="px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-500 transition">
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
          className="w-[350px] h-[400px] rounded-2xl object-cover border-4 border-purple-600"
        />

      </div>

    </section>
  );
};

export default Hero;