import React, { useState } from "react";
import logo from "../../assets/logoverde.PNG";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white py-4 px-24 mq980:px-8 flex justify-between items-center shadow-xl">
      {/* Logo */}
      <img src={logo} className="h-[70px] mq980:h-[60px]" alt="Logo" />

      {/* Menú Desktop */}
      <div className="mq980:hidden flex flex-row space-x-20 font-semibold items-center">
        {/* <button className="text-verdeagua text-lg">Inicio</button>
        <button className="text-verdeagua text-lg">Servicios</button> */}
        <button className="bg-naranja h-[50px] text-white px-6 rounded-xl text-md">CONSULTAR RECLAMO</button>
      </div>

      {/* Menú móvil */}
      <div className="hidden mq980:block">
        <IoMenu 
          className="text-4xl text-verdeagua cursor-pointer" 
          onClick={toggleMenu} // Abre o cierra el menú al hacer clic
        />
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white flex flex-col justify-center items-center space-y-8 shadow-xl py-6">
          {/* <button className="text-verdeagua text-lg" onClick={() => setMenuOpen(false)}>Inicio</button>
          <button className="text-verdeagua text-lg" onClick={() => setMenuOpen(false)}>Servicios</button> */}
          <button className="bg-naranja h-[50px] text-white px-6 rounded-xl text-md" onClick={() => setMenuOpen(false)}>INICIAR RECLAMO</button>
        </div>
      )}
    </div>
  );
};
