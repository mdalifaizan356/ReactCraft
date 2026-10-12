import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaCode, FaClipboardCheck } from "react-icons/fa";

function HSHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen px-5">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">Learn React Through<span className="text-blue-400"> Real Demo Projects</span></h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8 max-w-3xl mx-auto">Explore React demo projects, learn the concepts, read notes, and take quizzes.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center gap-2">
              <FaCode />Demo Projects
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center gap-2">
              <FaBookOpen />Detailed Notes
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center gap-2">
              <FaClipboardCheck />Quizzes
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link to="/playground" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">Explore or Start</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HSHero;