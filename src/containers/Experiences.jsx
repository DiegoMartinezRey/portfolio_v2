import React from "react";
import experiencesData from "../data/experiences.json";

const Experience = () => {
  return (
    <>
      <ul className="flex flex-col gap-3">
        {experiencesData.map((experience, index) => (
          <li key={index}>
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
