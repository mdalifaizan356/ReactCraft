import React from 'react'
import { FaReact, FaCode, FaPuzzlePiece, FaDatabase, FaMousePointer, FaListUl, FaWpforms, FaCogs, FaRoute, FaCloudDownloadAlt, } from "react-icons/fa";
 
const CardData = [
  {
    icon: <FaReact size={30} />,
    title: "JSX & Rendering",
    desc: "Learn how JSX creates dynamic and interactive user interfaces.",
  },
  {
    icon: <FaPuzzlePiece size={30} />,
    title: "Components",
    desc: "Build reusable and organized UI with functional components.",
  },
  {
    icon: <FaCode size={30} />,
    title: "Props",
    desc: "Pass data between components and create flexible interfaces.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "State Management",
    desc: "Control dynamic data using React's useState hook.",
  },
  {
    icon: <FaMousePointer size={30} />,
    title: "Event Handling",
    desc: "Respond to user actions like clicks, typing, and form events.",
  },
  {
    icon: <FaListUl size={30} />,
    title: "Conditional Rendering",
    desc: "Render UI dynamically based on conditions and data.",
  },
  {
    icon: <FaWpforms size={30} />,
    title: "Forms",
    desc: "Create forms, validate inputs, and manage user data.",
  },
  {
    icon: <FaCogs size={30} />,
    title: "React Hooks",
    desc: "Understand useState, useEffect, useRef, and other powerful hooks.",
  },
  {
    icon: <FaRoute size={30} />,
    title: "React Router",
    desc: "Build multi-page applications with modern routing.",
  },
  {
    icon: <FaCloudDownloadAlt size={30} />,
    title: "API Integration",
    desc: "Fetch and display real-world data using APIs.",
  },
];    

function HSWhatYouLearn() {
  return (
    <section className='mt-12 mb-5 md:mt-24'>
      <h1 className='text-3xl text-black font-bold text-center mb-5'>What You Will Learn</h1>
      <div className="flex gap-2 flex-nowrap overflow-auto scroll-smooth mb-5">
        {CardData.map((item, index) =>(
          <div key={index} className="w-[260px] flex-shrink-0 bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 m-2">
            <div className="text-blue-500 flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg text-amber-600 font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default HSWhatYouLearn