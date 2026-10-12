import React, { useState } from 'react'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      slideNumber:1
    },
    {
      slideNumber:2
    },
    {
      slideNumber:3
    },
    {
      slideNumber:1
    }
  ]

  const mooveLeft=()=>{
    let count = currentSlide;
    count = ++count;
    setCurrentSlide(count);
  }

  const mooveRight=()=>{
    let count = currentSlide;
    count = --count;
    setCurrentSlide(count);
  }
  return (
    <div className='bg-red-400 min-h-80 p-2'>
      <div className='flex justify-between items-center'>
        <div>
          <button onClick={mooveLeft}>Left</button>
        </div>
        <div className='flex justify-center items-center'>
          {slides[currentSlide].slideNumber}
        </div>
        <div>
          <button onClick={mooveRight}>Right</button>
        </div>
      </div>
    </div>
  )
}

export default Slider