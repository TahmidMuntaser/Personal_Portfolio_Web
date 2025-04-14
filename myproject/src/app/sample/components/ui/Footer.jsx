import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-purple-900/50 to-purple-900/30 text-gray-300 py-12 px-6 md:px-20 mt-20">
            <div className="border-t border-purple-800 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm md:text-base">
                        © {new Date().getFullYear()} All rights reserved by Tahmid Muntaser
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="p-2 border border-purple-800 rounded-full hover:bg-purple-800 transition-colors"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 border border-purple-800 rounded-full hover:bg-purple-800 transition-colors"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 border border-purple-800 rounded-full hover:bg-purple-800 transition-colors"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 border border-purple-800 rounded-full hover:bg-purple-800 transition-colors"
                        >
                            <FaGithub size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;