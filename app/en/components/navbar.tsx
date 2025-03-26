"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "../../../public/Logo.png"
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
        <Link href="/en" className="flex items-center">
          <img src={logo.src} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/en" className="text-white hover:text-[#0066B3]">
            Home
          </Link>
          <Link href="/en/#about" className="text-white hover:text-[#0066B3]">
            Dr. Omar Espinosa
          </Link>
          <Link href="/en/#service" className="text-white hover:text-[#0066B3]">
            Services
          </Link>
          <Link href="/en/#resenas" className="text-white hover:text-[#0066B3]">
            Reviews
          </Link>
          <Link href="/en/#contact" className="text-white hover:text-[#0066B3]">
            Contact
          </Link>
          
          {/* Language selector - Mexico Flag */}
          <Link 
            href="/" 
            className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-white hover:border-[#0066B3] transition-all"
            title="English version"
          >
            {/* Mexico Flag (SVG inline) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="40" height="20">
              <rect width="20" height="30" fill="#006847" />
              <rect x="20" width="20" height="30" fill="#ffffff" />
              <rect x="40" width="20" height="30" fill="#ce1126" />
            </svg>
          </Link>

          <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Schedule Appointment</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mexico Flag in mobile (before menu button) */}
          <Link 
            href="/" 
            className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-white hover:border-[#0066B3] transition-all"
            title="English version"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="32" height="16">
              <rect width="20" height="30" fill="#006847" />
              <rect x="20" width="20" height="30" fill="#ffffff" />
              <rect x="40" width="20" height="30" fill="#ce1126" />
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
    </nav>
  );
}