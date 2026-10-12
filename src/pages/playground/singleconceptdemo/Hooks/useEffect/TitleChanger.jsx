import React, {useState, useEffect} from 'react'

function TitleChanger() {
    const [title, setTitle] = useState("React Craft")
    useEffect(()=>{
        document.title = title;
        console.log("component Mount");
    },[title])

    return (
        <div>
            <div className={`h-screen text-[white] flex justify-center items-center p-10`}>
                <div className='bg-black flex justify-around items-center rounded-4xl p-2'>
                    <input onChange={(e)=>(setTitle(e.target.value))} className="w-full h-full rounded-4xl outline-none p-2" placeholder='Enter Color Name'/>
                </div>
            </div>
        </div>
    )
}

export default TitleChanger