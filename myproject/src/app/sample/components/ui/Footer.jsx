import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    return(
        <footer className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 text-gray-400 py-10 px-4 md:px-20 mt-20"> 
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p>© {new Date().getFullYear()} All rights reserved by Tahmid</p>

                <div className="flex gap-6">
                    <a href="#" ><FaFacebookF size={20} /></a>
                    <a href="#"> <FaXTwitter size={20} /> </a>
                    <a href="#"><FaLinkedinIn size={20} /></a>
                    <a href="#"><FaGithub size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;