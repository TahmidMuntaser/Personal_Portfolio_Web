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
    <section id='resume' className="flex flex-col md:flex-row items-center justify-between min-h-screen px-14 bg-gradient-to-br from-[#282150] via-[#120e2b] to-[#390868] text-white">

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
            Innovative Web 
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
              <a 
                href="https://x.com/Tahmid_Muntaser" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-transparent border border-purple-800 rounded-full 
                            hover:bg-black hover:border-transparent hover:scale-110 
                            hover:transition-all duration-300 ease-in-out cursor-pointer">
                  <FaXTwitter className="text-2xl text-white" />
                </div>
              </a>
              {/* GitHub */}
              <a 
                href="https://github.com/TahmidMuntaser" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-transparent border border-purple-800 rounded-full 
                              hover:bg-gray-700 hover:border-transparent hover:scale-110 
                              hover:transition-all duration-300 ease-in-out cursor-pointer">
                  <FaGithub className="text-2xl text-white" />
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/tahmid-muntaser-518929230/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-transparent border border-purple-800 rounded-full 
                              hover:bg-blue-700 hover:border-transparent hover:scale-110 
                              hover:transition-all duration-300 ease-in-out cursor-pointer">
                  <FaLinkedin className="text-2xl text-white" />
                </div>
              </a>
            </div>
        </div>


      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 relative group">
      
        <div 
          className="absolute -inset-1 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-1000"
          style={{
            background: 'linear-gradient(-45deg, #311b92, #4a148c, #283593, #0d47a1)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 4s ease infinite'
          }}
        ></div>
        
        <div className="relative">
          <img
            src="/profile2.png"
            alt="Tahmid"
            className="w-[350px] h-[400px] rounded-2xl object-cover border-4 border-purple-800 transition-transform duration-500 group-hover:scale-105 z-10 relative"
          />
          
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-400 rounded-tl-lg z-20"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-400 rounded-tr-lg z-20"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-400 rounded-bl-lg z-20"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-400 rounded-br-lg z-20"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;