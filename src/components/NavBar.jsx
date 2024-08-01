import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <header className="fixed top-0 p-3 w-full flex items-center justify-center gap-3">
      <div
        className="bg-gray-400 text-black flex justify-center 
        py-2 px-3 rounded-xl gap-3 min-w-[350px]"
      >
        <p className="custom-link">Experiencia</p>
        <p className="custom-link">Proyectos</p>
        <p className="custom-link">Sobre mi</p>
        <p className="custom-link">Contacto</p>
      </div>
    </header>
  );
};

export default NavBar;
