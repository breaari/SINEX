import React, { useState } from "react";
import logo from "../../assets/logonaranja.png";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 100; // ajustá este valor según la altura de tu navbar
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      closeMenu();
    }
  };
  
  

  return (
    <div className="fixed top-0 left-0 w-full bg-white py-4 px-24 mq980:px-8 flex justify-between items-center shadow-xl z-50">
      {/* Logo */}
      <img src={logo} className="h-[80px] mq980:h-[60px]" alt="Logo" />

      {/* Menú Desktop */}
      <div className="block mq980:hidden flex-row space-x-20 font-semibold items-center text-xl">
        <button className="text-violaceo" onClick={() => scrollToSection("inicio")}>Inicio</button>
        <button className="text-violaceo" onClick={() => scrollToSection("servicios")}>Servicios</button>
        <button className="text-violaceo" onClick={() => scrollToSection("preguntas")}>Preguntas frecuentes</button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUmn_VJFzaoAqfs3s8m7sZbT-VG703oq1MfwCL2alFAE3-Sg/viewform?usp=preview" // Reemplazar con el link real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violaceo h-[50px] text-white px-6 py-3 rounded-md text-md shadow-md hover:scale-95">
          INICIAR RECLAMO
        </a>
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
        <div className="absolute top-[90px] left-0 w-full bg-white flex flex-col items-center space-y-4 shadow-xl py-6 z-50">
          <button className="text-violaceo font-semibold text-lg" onClick={() => scrollToSection("inicio")}>Inicio</button>
          <button className="text-violaceo font-semibold text-lg" onClick={() => scrollToSection("servicios")}>Servicios</button>
          <button className="text-violaceo font-semibold text-lg" onClick={() => scrollToSection("preguntas")}>Preguntas frecuentes</button>
          <button className="bg-violaceo h-[50px] font-semibold text-white px-6 rounded-md text-md" onClick={closeMenu}>
            INICIAR RECLAMO
          </button>
        </div>
      )}
    </div>
  );
};
