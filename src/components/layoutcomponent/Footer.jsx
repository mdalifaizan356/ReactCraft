import React from "react";
import {
  FaArrowUp,
  FaHeart,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import Logo from "../uiComponents/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex relative overflow-hidden border-t border-slate-800 bg-[#0B1118] text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-20">
        <div className="flex flex-col items-center md:items-start">
            <a href="https://ain360.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit AIN360 website" className="group flex items-center gap-3 transition duration-300 hover:opacity-80">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-cyan-400/20 transition duration-300 group-hover:border-cyan-400/60">
                <img src="https://res.cloudinary.com/x2pybkik/image/upload/v1792567257/1000577422.jpg" alt="AIN360 Logo" className="h-full w-full rounded-full object-cover transition duration-300 group-hover:scale-105"/>
              </div>
              <span className="text-2xl font-bold tracking-wider">AIN<span className="text-cyan-400">360</span></span><FiArrowUpRight className="text-lg text-gray-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
            </a>
           <div className="flex flex-col justify-center items-center">
             <p className="text-center text-xs tracking-wide text-gray-400 sm:text-sm md:text-left">Building ideas into digital experiences.</p>
            <p className="text-xs text-gray-500">© {currentYear} AIN360. All rights reserved.</p>
            <a href="https://devfaizan.ain360.in/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-sm font-medium text-gray-400 transition duration-300 hover:text-cyan-400">Connect with me<FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
           </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
