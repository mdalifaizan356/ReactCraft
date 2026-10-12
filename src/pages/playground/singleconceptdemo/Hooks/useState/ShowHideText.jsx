import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";


function ShowHideText() {
  const [password, setPassword] = useState(false);
  return (
    <div>
      <div className='h-screen bg-blue-700 text-[white] flex justify-center items-center p-10'>
      <div className='bg-black flex justify-around items-center rounded-4xl p-2'>
        <input type={!password ? "password" : "text"} className="w-full h-full rounded-4xl outline-none p-2" placeholder='Enter Password' maxlength="8"/>
        <button onClick={()=>setPassword(!password)}>{!password ? <FaEyeSlash className='text-yellow-500 text-xl'/> : <IoEyeSharp className='text-yellow-500 text-xl'/> }</button>
      </div>
      </div>
    </div>
  )
}

export default ShowHideText