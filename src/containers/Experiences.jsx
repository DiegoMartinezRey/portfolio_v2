import React from "react";
import experiencesData from "../data/experiences.json";

const Experience = () => {
  return (
    <>
      <ul className="flex flex-col gap-3 border-l-[1px] border-black bg-gradient-to-br">
        {experiencesData.map((experience, index) => (
          <li key={index} className="ms-5 mb-4">
            <div className="relative h-4 w-4 rounded-full bg-slate-500 -left-7 top-4"></div>
            <h3>{experience.name}</h3>
            <h3>{experience.tools}</h3>
            <h3>{experience.description}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Experience;
