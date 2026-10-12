import React from "react";
import {FaFolderOpen, FaTags, FaBookOpen, FaClipboardCheck, FaArrowRight, FaLightbulb} from "react-icons/fa";
import { BookOpenText, BookText, CodeXml } from 'lucide-react';
import { CiSearch, CiMenuFries } from "react-icons/ci";

function PlaygroundIntro() {
    const steps = [
    {
      icon: <CiMenuFries size={26} />,
      title: "Choose a Demo Project",
      desc: "Browse Single Concept or Multi Concept demos.",
    },
    {
      icon: <FaTags size={26} />,
      title: "Explore React Concepts",
      desc: "Every project includes concept chips buttons. Click any concept button to learn it with beginner-friendly explanations.",
    },
    {
      icon: <BookText size={26} />,
      title: "Read Detailed Notes",
      desc: "Every project includes it's own implimentation details and explanation. click to read full details and summary of demo and projects.",
    },
    {
      icon: <CodeXml size={26} />,
      title: "Code",
      desc: "Comming Soon",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to ReactCraft Playground
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          This is a place where you can learn React with demo projects, simple notes, and quizzes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <div className="text-yellow-300 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlaygroundIntro;