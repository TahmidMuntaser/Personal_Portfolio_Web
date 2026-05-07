"use client";

import React from "react";
import CustomButton from './Button';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-14 lg:px-20 scroll-mt-32 bg-[#020D19] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#07141c]/90 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400"></span>
              <span className="h-3 w-3 rounded-full bg-amber-300"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-100/45 sm:block">skill-terminal.sh</p>
          </div>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent leading-tight">Contact</h2>
              <p className="mt-3 text-base md:text-lg text-slate-300 max-w-xl">I build clean, production-ready web apps. If you have a project, a question, or just want to say hi — drop a message.</p>

              <div className="mt-6 font-mono text-base md:text-lg text-slate-300 bg-[#06141a] border border-emerald-600/5 rounded-lg p-5 md:p-6">
                <p className="text-emerald-300 text-base md:text-lg">$ cat contact.txt</p>
                <p className="mt-3"><span className="text-teal-300">Phone:</span> <span className="text-white font-medium">+880 1643 372506</span></p>
                <p className="mt-2"><span className="text-teal-300">Email:</span> <span className="text-white font-medium break-words">tahmidmuntaser80@gmail.com</span></p>
                <p className="mt-2"><span className="text-teal-300">Location:</span> <span className="text-white font-medium">Mirpur-12, Dhaka, Bangladesh</span></p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <CustomButton href="#contact" className="px-6 py-3">Hire Me</CustomButton>
                <a href="mailto:tahmidmuntaser80@gmail.com" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"><FaEnvelope className="text-emerald-400"/> Email me</a>
              </div>
            </div>

            <div>
              <form onSubmit={(e)=>{e.preventDefault(); /* TODO: wire submission */ }} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="firstName" placeholder="First name" className="bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
                  <input name="lastName" placeholder="Last name" className="bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>

                <input name="email" type="email" placeholder="Email" className="w-full bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" required />

                <input name="phone" type="tel" placeholder="Phone" className="w-full bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" />

                <textarea name="message" rows={5} placeholder="Message" className="w-full bg-transparent border border-white/8 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" required />

                <div className="pt-1">
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-md">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
