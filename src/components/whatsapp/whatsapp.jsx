import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {

    return (
            <a className={`fixed right-0 bottom-0 mr-8 mb-12 shadow-xl cursor-pointer rounded-full bg-green-500 w-18 h-18 flex items-center justify-evenly overflow-hidden transition-all duration-300 `}
            href="https://api.whatsapp.com/send?phone=5491136002250." 
                target="_blank"
                rel="noopener noreferrer"
            >
            <FaWhatsapp className="text-white text-5xl"/>
            </a>
            )
}