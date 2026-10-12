import React from 'react'
import { FaLinkedin, FaGithub, FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function Footer() {
  return (
    <footer className='bg-black mt-5 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]'>
      <div className='flex flex-col items-center gap-8 md:flex-row justify-around'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-xl font-bold text-white">About Me</h1>
            <p className="text-gray-400 text-center max-w-xs">
              I'm a Full Stack Developer specializing in the MERN stack.  
              I build scalable web applications and love turning ideas into real products.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-xl font-bold mb-2 text-white">Social Links</h1>
          <ul className='flex gap-5 text-xl'>
            <li><FaLinkedin/></li>
            <li><FaGithub/></li>
            <li><FaInstagramSquare/></li>
            <li><FaFacebookSquare/></li>
            <li><FaWhatsapp/></li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-xl font-bold text-white">Contact Me</h1>
          <p><a href="tel:9887370536" className="text-blue-500">9887370536</a></p>
          <p><a href="mailto:mdalifaizan356@gmail" className="text-blue-500">mdalifaizan356@gmail.com</a></p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <p> © {new Date().getFullYear()} Faizan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer