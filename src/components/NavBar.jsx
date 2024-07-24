import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 p-3 flex justify-center gap-3">
        <div className="bg-gray-400 text-black flex justify-center py-2 px-3 rounded-xl gap-3">
          <p className="custom-link">Experiencia</p>
          <p className="custom-link">Proyectos</p>
          <p className="custom-link">Sobre mi</p>
          <p className="custom-link">Contacto</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
