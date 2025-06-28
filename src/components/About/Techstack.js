import React from "react";

export default function Techstack() {
  const skills = {
    "Web Development": ["React.js", "Next.js", "Node.js"],
    Languages: ["C++", "Java", "Python", "JavaScript", "Go (Golang)", "Solidity"],
    Databases: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    "Tools & Platforms": ["Visual Studio Code", "Postman", "Slack", "Vercel", "macOS"],
    "Version Control": ["Git"],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-xl bg-[#1a1a1a] border-2 border-transparent hover:border-purple-500 hover:shadow-purple-500/50 shadow-md transition-all duration-300">
      <h2 className="text-center text-purple-300 text-2xl font-semibold mb-6">
        🛠️ Tech Stack
      </h2>

      {Object.entries(skills).map(([category, items], idx) => (
        <div key={idx} className="mb-5">
          <h3 className="text-lg text-purple-400 font-medium underline mb-2">
            {category}
          </h3>
          <ul className="list-disc list-inside text-white space-y-1">
            {items.map((item, index) => (
              <li key={index} className="hover:text-purple-300 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
