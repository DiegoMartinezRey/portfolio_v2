import React from "react";
import Experience from "./Experiences";
import Projects from "./Projects";

const Content = () => {
  return (
    <>
      <div className="py-36 max-w-4xl flex flex-col items-center">
        <section className="p-4">
          <h2 className="m-2">Experiencia</h2>
          <Experience />
        </section>
        <section>
          <h2 className="m-2">Proyectos</h2>
          <Projects />
        </section>
        <section>Sobre mi</section>
      </div>
    </>
  );
};

export default Content;
