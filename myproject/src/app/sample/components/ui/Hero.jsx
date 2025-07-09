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
    <section id='resume' className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-14 pt-16 md:pt-0 pb-16 md:pb-0 bg-gradient-to-br from-[#282150] via-[#120e2b] to-[#390868] text-white">

      {/* Content Section */}
      <div className="order-2 md:order-1 max-w-2xl bg-black/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl mt-8 md:mt-0 w-full md:w-auto border border-purple-800/30 shadow-2xl">
        
          <h2 className="text-center md:text-left text-3xl md:text-5xl font-mono font-semibold mt-2 mb-6">
            <div className="pt-2">
              <AnimatedText text="Hi, I'm" showCursor={false} />
            </div>
            <div className="pt-2">
              <AnimatedText text="Tahmid Muntaser" initialDelay={1} />
            </div>
          </h2>

          <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-6xl font-bold mt-4 pt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300 leading-tight">
            Innovative Web <br className="hidden sm:block" />
            <span className="block mt-1">Developer.</span>
          </h1>
          
          <p className="text-center md:text-left text-base sm:text-lg md:text-xl mt-6 pb-6 text-white/90 leading-relaxed">
            I am a passionate developer who loves building beautiful and functional web 
            applications. Explore my work and get in touch!
          </p>

          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            
          <button className="relative px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-full overflow-hidden group transition-all duration-300 w-full sm:w-auto hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </span>
          </button>

          {/* Social Icons */}
            <div className="flex space-x-4">
              
              {/* Twitter */}
              <a 
                href="https://x.com/Tahmid_Muntaser" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 bg-transparent border-2 border-purple-600/50 rounded-full 
                            hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 hover:border-transparent hover:scale-110 
                            hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ease-in-out cursor-pointer">
                  <FaXTwitter className="text-xl text-white group-hover:text-white" />
                </div>
              </a>
              {/* GitHub */}
              <a 
                href="https://github.com/TahmidMuntaser" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 bg-transparent border-2 border-purple-600/50 rounded-full 
                              hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 hover:border-transparent hover:scale-110 
                              hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 ease-in-out cursor-pointer">
                  <FaGithub className="text-xl text-white group-hover:text-white" />
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/tahmid-muntaser-518929230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 bg-transparent border-2 border-purple-600/50 rounded-full 
                              hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 hover:border-transparent hover:scale-110 
                              hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 ease-in-out cursor-pointer">
                  <FaLinkedin className="text-xl text-white group-hover:text-white" />
                </div>
              </a>
            </div>
        </div>


      </div>

      {/* Photo Section */}
      <div className="order-1 md:order-2 mt-0 md:mt-0 mb-10 md:mb-0 relative group">
      
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
            className="w-[280px] h-[320px] md:w-[350px] md:h-[400px] rounded-2xl object-cover border-4 border-purple-800 transition-transform duration-500 group-hover:scale-105 z-10 relative mx-auto"
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