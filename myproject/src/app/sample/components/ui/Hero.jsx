import React from 'react';
import CustomButton from './Button';
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const AnimatedText = ({ text, showCursor = true, initialDelay = 0, letterDelay = 0.1 }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ animationDelay: `${initialDelay + index * letterDelay}s` }}
          className={`inline-block opacity-0 animate-letter ${
            char === " " ? "px-[0.2px]" : ""
          } ${index === text.length - 1 && showCursor ? "terminal-cursor" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-14 bg-gradient-to-br from-[#282150] via-[#120e2b] to-[#390868] text-white">

      {/* Left Section */}
      <div className="max-w-2xl bg-black/60 p-10 rounded-lg">
        
          <h2 className="text-5xl font-mono font-semibold mt-4">
            <div className="pt-2">
              <AnimatedText text="Hi," showCursor={false} />
            </div>
            <div className="pt-2">
              <AnimatedText text="I'm Tahmid" initialDelay={1} />
            </div>
          </h2>

          <h1 className="text-6xl font-bold mt-4 pt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300">
            Next-Level Web 
          </h1>
          <h1 className="text-6xl font-bold mt-2 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300">
            Developer.
          </h1>
          <p className="text-xl mt-4 pb-3 text-white/90">
            I am a passionate developer who loves building beautiful and functional web 
            applications. Explore my work and get in touch!
          </p>

          
          <div className="mt-6 flex items-center space-x-6">
            
          <button className="relative px-6 py-3 font-semibold text-white border border-purple-800 rounded-full overflow-hidden group transition duration-300">
            <span className="absolute inset-0 bg-purple-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Download CV</span>
          </button>

          {/* Social Icons */}
            <div className="flex space-x-3">
              
              {/* Twitter */}
              <div className="p-3 bg-transparent border border-purple-800 rounded-full 
                  hover:bg-black hover:border-transparent hover:scale-110 
                  hover: transition-all duration-300 ease-in-out cursor-pointer">
                <FaXTwitter className="text-2xl text-white" />
              </div>
              {/* GitHub */}
              <div className="p-3 bg-transparent border border-purple-800 rounded-full 
                              hover:bg-gray-700 hover:border-transparent hover:scale-110 
                              hover: transition-all duration-300 ease-in-out cursor-pointer">
                <FaGithub className="text-2xl text-white" />
              </div>

              {/* LinkedIn */}
              <div className="p-3 bg-transparent border border-purple-800 rounded-full 
                              hover:bg-blue-700 hover:border-transparent hover:scale-110 
                              hover: transition-all duration-300 ease-in-out cursor-pointer">
                <FaLinkedin className="text-2xl text-white" />
              </div>
            </div>
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