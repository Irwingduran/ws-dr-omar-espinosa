"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Iconos para el menú
import logo from "../public/Logo.png";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-[#020043] shadow-sm fixed top-0 transition-transform duration-300 z-[1000] ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={logo.src} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Botón de menú móvil */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#0066B3]">Inicio</Link>
          <Link href="/#about" className="text-white hover:text-[#0066B3]">Dr. Omar Espinosa</Link>
          <Link href="/#service" className="text-white hover:text-[#0066B3]">Servicios</Link>
          <Link href="/#resenas" className="text-white hover:text-[#0066B3]">Reseñas</Link>
          <Link href="/#contact" className="text-white hover:text-[#0066B3]">Contacto</Link>

          {/* Bandera de EE.UU. con enlace a la versión en inglés */}
          <Link href="/en" className="flex items-center gap-2 text-white hover:text-[#0066B3]">
            🇺🇸
            EN
          </Link>

          <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Agendar Cita</Button>
          </Link>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#020043] flex flex-col items-center gap-6 justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
        <Link href="/" className="text-white text-lg" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link href="/#about" className="text-white text-lg" onClick={() => setIsOpen(false)}>Dr. Omar Espinosa</Link>
        <Link href="/#service" className="text-white text-lg" onClick={() => setIsOpen(false)}>Servicios</Link>
        <Link href="/#resenas" className="text-white text-lg" onClick={() => setIsOpen(false)}>Reseñas</Link>
        <Link href="/#contact" className="text-white text-lg" onClick={() => setIsOpen(false)}>Contacto</Link>

        {/* Bandera en el menú móvil */}
        <Link href="/en" className="flex items-center gap-2 text-white text-lg" onClick={() => setIsOpen(false)}>
          🇺🇸
          English
        </Link>

        <Link
          href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta"
          target="_blank"
          onClick={() => setIsOpen(false)}
        >
          <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Agendar Cita</Button>
        </Link>
      </div>
    </nav>
  );
}
