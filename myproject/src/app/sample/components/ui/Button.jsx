import React from 'react';

const CustomButton = ({ children, href, onClick, className = "", ...props }) => {
  const baseClasses = "group relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-6 py-3 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-0.5 focus:outline-none active:outline-none cursor-pointer text-center no-underline border border-emerald-300/20 backdrop-blur-sm overflow-hidden";
  
  if (href) {
    return (
      <a
        {...props}
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
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
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default CustomButton;