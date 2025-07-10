import React from "react";  
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return(
        <section id="contact" className="min-h-screen px-6 md:px-16 lg:px-20 pt-16 md:pt-20 pb-0 md:pb-12 text-white scroll-mt-40">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 p-8 md:p-12 lg:p-16 rounded-2xl w-full lg:flex-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 mb-6">Let's work together!</h2>
                        <p className="text-gray-300 mb-8 md:mb-10 text-sm md:text-base">I make clean and simple designs that bring your ideas to life!</p>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="text" placeholder="First Name" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400" />
                                <input type="text" placeholder="Last Name" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400" />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="email" placeholder="Email" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400" />
                                <input type="text" placeholder="Phone Number" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400" />
                            </div>

                            <textarea placeholder="Message" className="bg-gray-950 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"></textarea>
                            <button type="submit" className="bg-gradient-to-r from-purple-950 to-purple-800 hover:from-purple-900 hover:to-purple-700 p-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-6 md:gap-8 w-full lg:flex-1">
                        <div className="flex items-center gap-4">
                            <div className="bg-purple-800 p-3 md:p-4 rounded-full flex-shrink-0">
                                <FaPhoneAlt className="text-lg md:text-xl"/>
                            </div>
                            <div>
                                <h4 className="text-xs md:text-sm text-gray-400">Phone</h4>
                                <p className="text-white text-lg md:text-xl font-mono">0123456789</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-purple-800 p-3 md:p-4 rounded-full flex-shrink-0">
                                <FaEnvelope className="text-lg md:text-xl"/>
                            </div>
                            <div>
                                <h4 className="text-xs md:text-sm text-gray-400">Email</h4>
                                <p className="text-white text-lg md:text-xl font-mono break-all">afsd12@gamil.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-purple-800 p-3 md:p-4 rounded-full flex-shrink-0">
                                <FaMapMarkerAlt className="text-lg md:text-xl"/>
                            </div>
                            <div>
                                <h4 className="text-xs md:text-sm text-gray-400">Address</h4>
                                <p className="text-white text-lg md:text-xl font-mono">124/A, 4/5, <br />
                                Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
