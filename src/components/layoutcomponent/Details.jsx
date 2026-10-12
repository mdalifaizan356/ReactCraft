import React from "react";

function Details({ project, setModel }){ 
  console.log(project);
  if (!project) {
  return <NoProject/>
  }

  return ( 
    <>
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
    <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl">
      <button onClick={()=>(setModel(null))} className="top-4 float-right mr-4 mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-xl font-bold z-50">✕</button>        
        <div className="p-6">

          <div className="bg-blue-600 text-white p-2 rounded-2xl shadow-lg mb-8 text-center">
            <h1 className="text-4xl font-bold capitalize">{project.name}</h1>
          </div>  
          {/* {Object.entries(project).map(([key, value]) =>{
            if(Array.isArray(value)){
              return(
                <section key={key} className="bg-white p-6 rounded-2xl shadow-md mb-6 border">
                <p><strong className="text-2xl font-semibold text-blue-600 mb-5">{key}<br/></strong> {value.map((item, index)=>(
                  <ul><li key={index}>{item}</li></ul>
                ))}</p>
              </section>
              )
            }
          })} */}
          <section className="bg-white p-6 rounded-2xl shadow-md mb-6 border">
            <p className="text-2xl font-semibold text-blue-600 mb-5">Sorry..! Overview Not Available Now</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details;
  