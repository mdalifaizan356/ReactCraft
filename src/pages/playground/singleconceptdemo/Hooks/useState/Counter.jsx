import React, { useState } from 'react'

function Counter() {
    const [value, setValue] = useState(0);
    const [controlNegVal, setControlNegVal] = useState(false);

    const Style = {
        button:"p-4 rounded-2xl"
    }
    return (
        <div className='md:flex justify-center items-center'>
            <div className='bg-blue-300  p-2 rounded-2xl'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-9xl font-bold'>{value}</h1>
                </div>
                <div className='flex flex-col justify-around md:flex-row :justify-center md:items-center gap-3 mt-10'>
                    <button className={`${Style.button} bg-green-500`} onClick={()=>{setValue(value+1); navigator.vibrate && navigator.vibrate(50);}}>Inceement</button>
                    <button className={`${Style.button} bg-yellow-500`} onClick={()=>{setValue(0)}}>Reset</button>
                    <button className={`${Style.button} ${!controlNegVal ? "bg-green-500": "bg-red-500"}`} onClick={()=>{!controlNegVal && setValue(value-1)}}>Decreement</button>
                    <button className={`${Style.button} ${!controlNegVal ? "bg-red-500": "bg-green-500" }`} onClick={()=>{setControlNegVal(!controlNegVal); setValue(0)}}>
                        {!controlNegVal ? "Restrict Negative" : "Allow Negative"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter