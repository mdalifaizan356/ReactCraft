import React, { useState } from 'react'

function ColorChanger() {
  const [color, setColor] = useState("black")
  return (
    <div>
      <div className={`h-screen text-[white] flex justify-center items-center p-10`} style={{backgroundColor:`${color}`}}>
        <div className='bg-black flex justify-around items-center rounded-4xl p-2'>
          <input onChange={(e)=>(setColor(e.target.value))} className="w-full h-full rounded-4xl outline-none p-2" placeholder='Enter Color Name'/>
        </div>
      </div>
    </div>
  )
}

export default ColorChanger