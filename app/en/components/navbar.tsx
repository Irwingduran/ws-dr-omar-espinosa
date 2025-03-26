"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Icons for the menu
import logo from "../../../public/Logo.png";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

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
        <Link href="/en" className="flex items-center">
          <img src={logo.src} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/en" className="text-white hover:text-[#0066B3]">Home</Link>
          <Link href="/#about" className="text-white hover:text-[#0066B3]">Dr. Omar Espinosa</Link>
          <Link href="/#service" className="text-white hover:text-[#0066B3]">Services</Link>
          <Link href="/#resenas" className="text-white hover:text-[#0066B3]">Reviews</Link>
          <Link href="/#contact" className="text-white hover:text-[#0066B3]">Contact</Link>

          {/* Mexico flag with link to Spanish version */}
          <Link href="/" className="flex items-center gap-2 text-white hover:text-[#0066B3]">
            🇲🇽
            ES
          </Link>

          <Link href="https://wa.me/5212221843622?text=Hello%20Dr.%20I%20found%20your%20profile%20on%20Findoctor%20and%20I%20would%20like%20to%20schedule%20a%20consultation" target="_blank">
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Schedule Appointment</Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#020043] flex flex-col items-center gap-6 justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
        <Link href="/en" className="text-white text-lg" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/#about" className="text-white text-lg" onClick={() => setIsOpen(false)}>Dr. Omar Espinosa</Link>
        <Link href="/#service" className="text-white text-lg" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/#resenas" className="text-white text-lg" onClick={() => setIsOpen(false)}>Reviews</Link>
        <Link href="/#contact" className="text-white text-lg" onClick={() => setIsOpen(false)}>Contact</Link>

        {/* Mexico flag in mobile menu */}
        <Link href="/" className="flex items-center gap-2 text-white text-lg" onClick={() => setIsOpen(false)}>
          🇲🇽
          Español
        </Link>

        <Link
          href="https://wa.me/5212221843622?text=Hello%20Dr.%20I%20found%20your%20profile%20on%20Findoctor%20and%20I%20would%20like%20to%20schedule%20a%20consultation"
          target="_blank"
          onClick={() => setIsOpen(false)}
        >
          <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">Schedule Appointment</Button>
        </Link>
      </div>
    </nav>
  );
}