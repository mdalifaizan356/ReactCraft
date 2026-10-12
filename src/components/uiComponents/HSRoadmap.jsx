import React from "react";
import { FaReact, FaPuzzlePiece, FaCogs, FaRoute, FaLaptopCode, FaClipboardCheck} from "react-icons/fa";

function HSRoadmap() {

  const roadmapData = [
    {
      icon: <FaReact />,
      phase: "Foundation",
      title: "Start with React Fundamentals",
      desc: "Build a solid understanding of React, JSX, rendering, and the core concepts that every React developer should know before building applications.",
    },
    {
      icon: <FaPuzzlePiece />,
      phase: "Building Blocks",
      title: "Master Components & Props",
      desc: "Learn how to create reusable components, organize your UI, and pass data efficiently between components using props.",
    },
    {
      icon: <FaCogs />,
      phase: "Interactivity",
      title: "Work with State & Hooks",
      desc: "Make your applications interactive by managing state, handling events, building forms, and using React Hooks effectively.",
    },
    {
      icon: <FaRoute />,
      phase: "Advanced React",
      title: "Routing & API Integration",
      desc: "Create multi-page applications with React Router and connect your projects to real-world APIs for dynamic data.",
    },
    {
      icon: <FaLaptopCode />,
      phase: "Practical Learning",
      title: "Explore Real Demo Projects",
      desc: "See every React concept in action through practical demo projects. Discover how multiple concepts work together in real applications.",
    },
    {
      icon: <FaClipboardCheck />,
      phase: "Mastery",
      title: "Read Notes & Test Yourself",
      desc: "Strengthen your understanding with detailed concept notes and quizzes designed to reinforce everything you've learned.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Your Journey to Learn React</h2>
          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            ReactCraft follows a structured learning path that helps you
            understand React through real demo projects, detailed notes, and
            quizzes. Learn every concept step by step and apply it in practice.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2"></div>
          {roadmapData.map((item, index) => (
            <div key={item.phase} className={`relative flex items-center mb-5 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
              <div className="md:hidden absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg">
                {item.icon}
              </div>
              <div className={`ml-20 md:ml-0 w-full md:w-[44%] bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 ${index % 2 === 0 ? "md:mr-20" : "md:ml-20"}`}>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{item.phase}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HSRoadmap;



