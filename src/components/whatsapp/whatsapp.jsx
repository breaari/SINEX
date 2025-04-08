import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {
  return (
    <a
      className="fixed right-0 bottom-0 mr-8 mb-12 mq980:mr-6 mq980:mb-8 group shadow-xl p-4 rounded-full bg-green-500 flex items-center gap-2 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 z-50"
      href="https://api.whatsapp.com/send?phone=5491168958732&text=Hola!%20Quiero%20iniciar%20un%20reclamo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl animate-pulse group-hover:animate-none" />
    </a>
  );
};
