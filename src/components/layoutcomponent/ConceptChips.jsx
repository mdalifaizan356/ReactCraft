import React from 'react'
import Concept from './Concept'
import { useNavigate } from 'react-router-dom';

function ConceptChips({usedConcept, setModel}) {
    const navigate = useNavigate();
  return (
    <div className='flex justify-end items-center gap-5 p-1'>
    <button onClick={()=>(setModel(null))} className="sticky top-4 float-right mr-4 mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-xl font-bold z-50">✕</button>        
    <h1 className='font-bold'>Used Concept</h1>
        {usedConcept.map((concept)=>(
            <button className='bg-white shadow p-2 rounded-2xl cursor-pointer'>{concept}</button>
        ))}
    </div>
  )
}

export default ConceptChips