import React from "react";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import "./LeetCodeStats.css";

export default function TechExpertise() {
  const expertise = [
    {
      icon: <FaCode />,
      title: "Languages",
      items: ["C", "C++","Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      icon: <FaDatabase />,
      title: "Web & Databases",
      items: ["React.js", "Next.js", "Flask", "Node.js", "MongoDB", "MySQL", "Firebase"],
    },
    {
      icon: <GiArtificialIntelligence />,
      title: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP","Data Preprocessing", "Deep Learning", "Streamlit" ],
    },
    {
      icon: <FaServer />,
      title: "Tools",
      items: [ "Git","Github", "Postman"],
    },
  ];

  return (
    <div className="expertise-wrapper">
      <h2 className="expertise-heading">Technical Expertise</h2>
      {expertise.map((item, index) => (
        <div key={index} className="expertise-card">
          <div className="expertise-left">
            <div className="expertise-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
          <div className="expertise-right">
            <p>{item.items.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
