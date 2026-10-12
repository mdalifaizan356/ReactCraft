import React, {useState} from 'react'
import { Outlet, useLocation  } from 'react-router-dom'
import Menu from '../../components/uiComponents/Menu';
import Details from './../../components/layoutcomponent/Details';
import { BookOpenText, BookText, CodeXml } from 'lucide-react';
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { demoData } from '../../data/demoData';
import { multiconceptData } from '../../data/multiDemoData';
import ConceptChips from '../../components/layoutcomponent/ConceptChips';
import Concept from '../../components/layoutcomponent/Concept';
 

function PlaygroundLayout() {
  const [showMenu, setShowMenu] = useState(false);
  const [model, setModel] = useState(null);
  const [concept, setConcept] = useState(null);

  console.log(concept);

  const location = useLocation();
  const pathPart = location.pathname.split("/"); 
  const defaultPath = pathPart[1]
  const projectType = pathPart[2]; 
  const projectId = pathPart[3]; 

  let project = null; 

  if(projectType==="singleconceptdemo"){
    project = demoData.find(item => item.id === projectId);  
  }

  if(projectType==="multiconceptdemo"){
    project = multiconceptData.find(item => item.id === projectId);  
  }

  return (
    <div className="min-h-screen relative">  
      <div className="flex justify-between items-center px-5 py-4 bg-white shadow-md border-b sticky top-0 z-50">  
        <div>
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {!project ? "No Project Selected" : project.name}
          </h1>
        </div>

        <div className="flex items-center gap-5 relative">          
        <button className={`cursor-not-allowed disabled text-gray-400`} onClick={()=>(setModel("Code"))}><CodeXml size={30}/></button>

          <button onClick={() => setModel("Documentation")} disabled={!project}  className={`transition ${
          !project ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:text-blue-800 cursor-pointer" }`}>
          {model === "Documentation" ? ( <BookOpenText size={30} />) : ( <BookText size={30} />)}
          </button>

          <button onClick={() => setShowMenu(!showMenu)} className="text-black hover:text-gray-700 transition">
            {showMenu ? (<IoMdClose size={30} />) : (<CiMenuFries size={30} />)}
          </button>

          {showMenu && (
            <div className="absolute top-14 right-0 w-72 bg-white shadow-2xl rounded-2xl p-4 z-50 border">
              <Menu setShowMenu={setShowMenu} />
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 relative p-2">
        {model === "Documentation" && (<Details project={project} setModel={setModel}/>)}
        {model === "Concept" && (<Concept concept={concept} setModel={setModel}/>)}
          <div className='shadow mb-5 bg-gray-200'>
          {project && (
            <div className='flex justify-start items-center gap-2 p-1 w-100 overflow-y-scroll min-h-10 md:w-auto md:h-auto md:overflow-auto md:flex-wrap'>
                <h1 className='font-bold min-w-30'>Used Concept:</h1>
                {project.UsedConcept.map((concept, index)=>(
                  <button key={index} className='bg-white shadow p-2 rounded-2xl cursor-pointer min-w-50' onClick={()=>{setModel("Concept"); setConcept(concept)}}>{concept}</button>
                ))}
              </div>
          )}
          </div>
          <Outlet />
      </div>
    </div>
  )
}

export default PlaygroundLayout