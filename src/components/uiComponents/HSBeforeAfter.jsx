import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

function HSBeforeAfter() {

  const beforePoints = [
  "React feels hard to understand.",
  "You know React but can't use it in projects.",
  "Components, Props, State, and Hooks confuse you.",
  "Real React projects look difficult.",
  "You don't know where React concepts are used.",
  "Watching videos alone is not enough to learn React.",
];

const afterPoints = [
  "Learn React with real demo projects.",
  "Understand where each React concept is used.",
  "Build React components with confidence.",
  "Read simple notes to understand concepts better.",
  "Practice your learning with quizzes.",
  "Build your own React projects with confidence.",
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14"><h2 className="text-4xl md:text-5xl font-bold text-gray-900">Before vs After ReactCraft</h2>
          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
            See how learning through real demo projects, detailed notes, and
            quizzes can transform your React journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <FaTimesCircle className="text-red-500 text-2xl" />
              </div>
              <div>
                <p className="text-sm text-red-500 font-semibold uppercase">Before</p>
                <h3 className="text-2xl font-bold text-gray-900">Learning React Feels Difficult</h3>
              </div>
            </div>
            <ul className="space-y-5">
              {beforePoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-green-200 bg-green-50 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-2xl" />
              </div>
              <div>
                <p className="text-sm text-green-600 font-semibold uppercase">After</p>
                <h3 className="text-2xl font-bold text-gray-900">Learn React with Confidence</h3>
              </div>
            </div>
            <ul className="space-y-5">
              {afterPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HSBeforeAfter;     