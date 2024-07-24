import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function WhatsappIcon() {
  return (
    <div className="fixed z-50 top-4 right-4">
      <div className="relative group flex items-center gap-2">
        <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 transform group-hover:translate-x-0 bg-[#00e676] text-white text-lg rounded py-1 px-2">
          Order on WhatsApp
        </div>
        <div className="bg-[#00e676] p-3 rounded-full cursor-pointer hover:bg-opacity-80 flex items-center">
          <FaWhatsapp className="text-light text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default WhatsappIcon;

