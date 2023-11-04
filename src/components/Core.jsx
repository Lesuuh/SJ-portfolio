// import { useEffect, useState } from "react";
import "../assets/css/Core.css";
import { ProgressBar } from "./ProgressBar";

export const Core = () => {
  const skillsData = [
    { name: "Interaction Design", percentage: 60 },
    { name: "Usability Testing", percentage: 70 },
    { name: "UX Research", percentage: 45 },
    { name: "Figma", percentage: 90 },
    { name: "Prototyping", percentage: 80 },
    { name: "Information Architecture", percentage: 50 },
  
  ];

  return (
    <div className="core">
      <div className="core-container">
        <h1>Core Design Skills</h1>
        <p>
          I excel in essential design skills, creating visually stunning and
          functional digital experiences. From UI design to UX research, my
          passion is to craft effective and memorable digital solutions.
        </p>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <ProgressBar
            key={index}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};
