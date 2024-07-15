import React from "react";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <>
      <ul className="flex flex-col gap-3">
        {projectsData.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <h3>{project.tools}</h3>
            <h3>{project.description}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
