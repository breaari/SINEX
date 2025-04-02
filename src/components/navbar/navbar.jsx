import React, { useState } from "react";
import logo from "../../assets/logoviolaceo.PNG";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white py-4 px-24 mq980:px-8 flex justify-between items-center shadow-xl z-50">
      {/* Logo */}
      <img src={logo} className="h-[70px] mq980:h-[60px]" alt="Logo" />

      {/* Menú Desktop */}
      <div className="block mq980:hidden flex-row space-x-20 font-semibold items-center">
        <button className="text-violaceo" onClick={closeMenu}>INICIO</button>
        <button className="text-violaceo" onClick={closeMenu}>SERVICIOS</button>
        <button className="text-violaceo" onClick={closeMenu}>PREGUNTAS FRECUENTES</button>
        {/* <button className="text-violaceo" onClick={closeMenu}>CONTACTO</button> */}
        <button className="bg-violaceo h-[50px] text-white px-6 rounded-md text-md shadow-md hover:scale-95">
          INICIAR RECLAMO
        </button>
      </div>

      {/* Menú móvil */}
      <div className="hidden mq980:block">
        <IoMenu 
          className="text-4xl text-violaceo cursor-pointer" 
          onClick={toggleMenu} 
        />
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white flex flex-col items-center space-y-6 shadow-xl py-6 z-50">
          <button className="text-violaceo font-semibold text-lg" onClick={closeMenu}>INICIO</button>
          <button className="text-violaceo font-semibold text-lg" onClick={closeMenu}>SERVICIOS</button>
          <button className="text-violaceo font-semibold text-lg" onClick={closeMenu}>PREGUNTAS FRECUENTES</button>
          <button className="bg-violaceo h-[50px] font-semibold text-white px-6 rounded-xl text-md" onClick={closeMenu}>
            INICIAR RECLAMO
          </button>
        </div>
      )}
    </div>
  );
};
