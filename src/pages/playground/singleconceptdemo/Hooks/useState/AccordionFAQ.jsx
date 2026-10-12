import React, { useState } from 'react'
import faqData from '../../../../../data/faq'
import { FaChevronDown, FaChevronUp} from 'react-icons/fa';


function AccordionFAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)


  return (
  <div className=' text-[white] p-5'>
    <div className="mb-5">
      <h1 className="font-bold text-3xl">Frequentlt Asked Question</h1>
    </div>
    {faqData.map((item)=>(
      <div key={item.id} className="bg-blue-950 mb-5 p-2" >
        <div className="flex justify-between">
          <div className='flex gap-2'>
            <h1>{item.id}</h1>
            <p>{item.question}</p>
          </div>
          <div>
            <h1 className="cursor-pointer" onClick={()=>(setOpenQuestion(openQuestion===item.id ? null : item.id))}>{openQuestion === item.id ? <FaChevronUp/> : <FaChevronDown/>}</h1> 
          </div>
        </div>
        <div>
          <p>{openQuestion === item.id && item.answer}</p> 
        </div>
      </div>
    ))}
  </div>
  )
}

export default AccordionFAQ