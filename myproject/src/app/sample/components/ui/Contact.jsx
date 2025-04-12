import React from "react";  
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return(
        <section id="contact" className="min-h-screen px-5 py-16 md:px-20 text-white scroll-mt-40">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                {/* info */}
                <div className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 pl-10 pr-10 pt-16 pb-20 rounded-2xl flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Let's work together!</h2>
                    <p className="text-gray-400 mb-8">I make clean and simple designs that bring your ideas to life!</p>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder="First Name" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                            <input type="text" placeholder="Last Name" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="email" placeholder="Email" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                            <input type="text" placeholder="Phone Number" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                        </div>

                        <textarea  placeholder="Message" className="bg-gray-950 p-3 rounded-lg h-32 resize-none focus:outline-none"></textarea>
                        <button type="submit" className="bg-gradient-to-r from-purple-950 to-purple-800 hover:from-purple-900 hover:to-purple-700 p-3 rounded-lg font-semibold">Send Message</button>
                    </form>
                </div>

                {/* details */}
                <div className="flex flex-col gap-8 flex-1 mt-36 ml-20">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-800 p-4 rounded-full">
                            <FaPhoneAlt className="text-xl"/>
                        </div>
                        <div>
                            <h4 className="text-sm">Phone</h4>
                            <p className="text-gray-400 text-xl font-mono">0123456789</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-purple-800 p-4 rounded-full">
                            <FaEnvelope className="text-xl"/>
                        </div>
                        <div>
                            <h4 className="text-sm">Email</h4>
                            <p className="text-gray-400 text-xl font-mono">afsd12@gamil.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-purple-800 p-4 rounded-full">
                            <FaMapMarkerAlt className="text-xl"/>
                        </div>
                        <div>
                            <h4 className="text-sm">Address</h4>
                            <p className="text-gray-400 text-xl font-mono">124/A, 4/5, <br />
                            Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                
            
            </div>
        </section>
    );
};

export default Contact;
