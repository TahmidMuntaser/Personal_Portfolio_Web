"use client";

import React from 'react';

const Services = ({ services }) => {
    return (
        <section id='services' className="py-12 md:py-20 scroll-mt-40">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-purple-100">
                    My Services
                </h2>
                <p className="text-center text-gray-300 max-w-prose mx-auto mb-8 text-sm md:text-base px-4">
                    A quick overview of what I can do for you. I focus on delivering 
                    high-quality, efficient solutions tailored to each project's needs.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-1000 hover:bg-purple-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.02] md:hover:scale-[1.01] overflow-hidden border border-purple-700/30 hover:border-purple-500/50"
                        >
                            <div className="grid grid-cols-1 items-start h-full gap-3 md:gap-4">
                                {/* Unified layout for all screen sizes */}
                                <div className="flex items-center space-x-4 justify-start">
                                    <span className="bg-purple-800 text-white text-lg md:text-xl font-bold rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                                        {service.id}
                                    </span>
                                    <h3 className="text-xl md:text-3xl font-bold text-left text-white">{service.title}</h3>
                                </div>

                                {/* Description below title */}
                                <div className="text-left pl-16 md:pl-[4.5rem]">
                                    <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;