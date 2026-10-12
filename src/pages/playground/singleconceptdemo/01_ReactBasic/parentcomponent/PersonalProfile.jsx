import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
 
 
function PersonalProfile() {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='shadow bg-amber-50 h-full w-full relative rounded-4xl md:w-100 p-2'>
        <div className='border-b-fuchsia-900 bg-[crimson] h-70 rounded-4xl'></div>
        <div className='h-50 w-50 rounded-full absolute top-40 left-1/2 -translate-x-1/2 overflow-hidden'>
          <img src='./../../../../../public/hero.png' className='w-full h-full object-cover'/>
        </div>
        <div className='border-b-fuchsia-900 w-full rounded-2xl h-50 flex justify-center items-center flex-col mt-20 gap-3'>
          <div>
            <h1 className='font-bold text-4xl'>Faizan Ali</h1>
            <h3 className='font-bold'>MERN Stack Developer</h3>
          </div>
          <div className='bg-[crimson] h-1 w-60'></div>
          <div className='text-center'>
            <p>I develop modern web applications with clean UI, secure backend systems, and efficient database management using the MERN stack.</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <FaFacebook className='text-[crimson]' />
            <RiInstagramFill className='text-[crimson]'/>
            <FaTwitterSquare className='text-[crimson]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalProfile