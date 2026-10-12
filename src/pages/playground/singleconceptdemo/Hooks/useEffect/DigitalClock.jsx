import React, {useState, useEffect} from 'react'

function DigitalClock() {
  // const toDay = new Date();
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const timer = setInterval( ()=> {
      setTime(new Date())
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  },[])

  return (
      <div>
          <div className={`h-screen text-[white] flex justify-center items-center p-10`}>
              <div className='flex justify-around items-center gap-5 rounded-4xl p-2'>
                  <h1 className="font-bold text-5xl text-amber-200">{time.getHours()}</h1>
                  <h1 className="font-bold text-5xl text-amber-200">{time.getMinutes()}</h1>
                  <h1 className="font-bold text-5xl text-amber-200">{time.getSeconds()}</h1>
              </div>
          </div>
      </div>
  )
}

export default DigitalClock;

