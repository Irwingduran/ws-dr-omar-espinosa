"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "../app/Logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMobileMenuOpen(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

        {/* Menú para desktop */}
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
          
          {/* Selector de idioma - Bandera USA */}
          <Link 
            href="/en" 
            className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-white hover:border-[#0066B3] transition-all"
            title="English version"
          >
            {/* Bandera de USA (SVG inline) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="40" height="20">
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
              </clipPath>
              <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#cf142b" stroke-width="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" stroke-width="6"/>
            </svg>
          </Link>

          <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Agendar Cita</Button>
          </Link>
        </div>

        {/* Botón de menú para móvil */}
        <div className="md:hidden flex items-center gap-4">
          {/* Bandera USA en móvil (antes del botón de menú) */}
          <Link 
            href="/en" 
            className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-white hover:border-[#0066B3] transition-all"
            title="English version"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="32" height="16">
              <clipPath id="u">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
              </clipPath>
              <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#u)" stroke="#cf142b" stroke-width="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" stroke-width="6"/>
            </svg>
          </Link>

          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020043] pb-4 px-4 flex flex-col items-center gap-4">
          <Link href="/" className="text-white hover:text-[#0066B3] w-full text-center py-2" onClick={toggleMobileMenu}>
            Inicio
          </Link>
          <Link href="/#about" className="text-white hover:text-[#0066B3] w-full text-center py-2" onClick={toggleMobileMenu}>
            Dr. Omar Espinosa
          </Link>
          <Link href="/#service" className="text-white hover:text-[#0066B3] w-full text-center py-2" onClick={toggleMobileMenu}>
            Servicios
          </Link>
          <Link href="/#resenas" className="text-white hover:text-[#0066B3] w-full text-center py-2" onClick={toggleMobileMenu}>
            Reseñas
          </Link>
          <Link href="/#contact" className="text-white hover:text-[#0066B3] w-full text-center py-2" onClick={toggleMobileMenu}>
            Contacto
          </Link>
          
          {/* Selector de idioma en menú móvil */}
          <Link 
            href="/en/page" 
            className="flex items-center justify-center w-full py-2 text-white hover:text-[#0066B3]"
            onClick={toggleMobileMenu}
          >
            <span className="mr-2">English Version</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12">
              <clipPath id="v">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
              </clipPath>
              <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#v)" stroke="#cf142b" stroke-width="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" stroke-width="6"/>
            </svg>
          </Link>

          <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank" className="w-full text-center py-2" onClick={toggleMobileMenu}>
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600] w-full">
              Agendar Cita
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}