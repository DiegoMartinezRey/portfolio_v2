import React from "react";
import experiencesData from "../data/experiences.json";

const Content = () => {
  return (
    <>
      <div className="py-36 max-w-4xl flex flex-col items-center">
        <section className="p-4">
          <h2 className="m-2">Experiencia</h2>
          <ul className="flex flex-col gap-3">
            {experiencesData.map((experience, index) => (
              <li key={index}>
                <h3>{experience.name}</h3>
              </li>
            ))}
          </ul>
        </section>
        <section>Proyectos</section>
        <section>Sobre mi</section>
      </div>
    </>
  );
};

export default Content;
