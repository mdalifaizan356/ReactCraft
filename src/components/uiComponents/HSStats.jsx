import React from "react";

function HSStats() {

  const statsData = [
    {
      number: "20+",
      title: "Demo Projects",
      desc: "Hands-on React demos covering real-world concepts.",
    },
    {
      number: "50+",
      title: "React Concepts",
      desc: "Core React topics explained with practical examples.",
    },
    {
      number: "100+",
      title: "Detailed Notes",
      desc: "Easy-to-understand notes for every React concept.",
    },
    {
      number: "50+",
      title: "Quizzes",
      desc: "Test your knowledge after learning each topic.",
    },
  ];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item) => (
            <div key={item.title} className="group bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-5xl font-extrabold text-blue-600 mb-3">{item.number}</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-7 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HSStats;