"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "../app/Logo.png";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo
        setVisible(false);
      } else {
        // Scroll hacia arriba
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#0066B3]">
            Inicio
          </Link>
          <Link href="/#about" className="text-white hover:text-[#0066B3]">
            Dr. Omar Espinosa
          </Link>
          <Link href="/#service" className="text-white hover:text-[#0066B3]">
            Servicios
          </Link>
          <Link href="/#resenas" className="text-white hover:text-[#0066B3]">
            Reseñas
          </Link>
          <Link href="/#contact" className="text-white hover:text-[#0066B3]">
            Contacto
          </Link>
          <Link  href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
          <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Agendar Cita</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

