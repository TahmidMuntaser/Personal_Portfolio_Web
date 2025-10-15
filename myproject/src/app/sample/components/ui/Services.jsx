"use client";

import React from 'react';

const Services = ({ services }) => {
    return (
        <section id='services' className="py-16 md:py-24 px-4 md:px-8 lg:px-20 scroll-mt-40 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        What I Offer
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Crafting digital experiences with precision and passion. 
                        Here's how I can help bring your vision to life.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-purple-500/25 transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-800 hover:border-purple-500/60 overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                        <span className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white text-xl md:text-2xl font-bold rounded-2xl w-16 h-16 md:w-18 md:h-18 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            {service.id}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                    {service.description}
                                </p>

                                {/* Decorative corner element */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;