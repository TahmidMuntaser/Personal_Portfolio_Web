import React from 'react';

const CustomButton = ({ children, href, onClick, className = "", ...props }) => {
  const baseClasses = "group relative inline-block bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white rounded-xl px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 focus:outline-none active:outline-none cursor-pointer text-center no-underline border border-purple-500/30 backdrop-blur-sm overflow-hidden";
  
  if (href) {
    return (
      <a
        {...props}
        href={href}
        className={`${baseClasses} ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default CustomButton;