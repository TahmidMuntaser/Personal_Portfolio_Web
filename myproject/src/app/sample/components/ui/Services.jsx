"use client";

import React from 'react';

const Services = ({ services }) => {
    return (
        <section className="py-10 bg-gray-1000">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-8">My Services</h2>
                <div className="grid grid-cols-1 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-1000 hover:bg-purple-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="grid grid-cols-2 items-center">
                                {/* Left Part: ID and Title */}
                                <div className="flex items-center space-x-2">
                                    <span className="bg-purple-800 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                        {service.id}
                                    </span>
                                    <h3 className="text-3xl font-bold">{service.title}</h3>
                                </div>

                                {/* Right Part: Description */}
                                <div className="text-right">
                                    <p className="text-xl text-gray-300">
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