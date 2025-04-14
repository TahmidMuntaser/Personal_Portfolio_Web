"use client";

import React from 'react';

const Services = ({ services }) => {
    return (
        <section id='services' className="py-20 scroll-mt-40">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-purple-100">
                    My Services
                </h2>
                <p className="text-center text-gray-300 max-w-prose mx-auto mb-8">
                    A quick overview of what I can do for you. I focus on delivering 
                    high-quality, efficient solutions tailored to each project's needs.
                </p>
                <div className="grid grid-cols-1 gap-0">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-1000 hover:bg-purple-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 overflow-hidden border-b-[1px] border-purple-800"
                        >
                            <div className="grid grid-cols-2 items-center h-full">
                                {/* Left Part: ID and Title */}
                                <div className="flex items-center space-x-2">
                                    <span className="bg-purple-800 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                        {service.id}
                                    </span>
                                    <h3 className="text-3xl font-bold">{service.title}</h3>
                                </div>

                                {/* Right Part: Description */}
                                <div className="text-right">
                                    <p className="text-lg text-gray-300">
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