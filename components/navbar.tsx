import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/placeholder.svg?height=50&width=50" alt="Logo" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#0066B3]">
            Inicio
          </Link>
          <Link href="/doctor" className="text-gray-700 hover:text-[#0066B3]">
            Dr. Carlos Zerrweck
          </Link>
          <Link href="/servicios" className="text-gray-700 hover:text-[#0066B3]">
            Servicios
          </Link>
          <Link href="/preguntas" className="text-gray-700 hover:text-[#0066B3]">
            Preguntas Frecuentes
          </Link>
          <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600]">CONTACTO</Button>
        </div>
      </div>
    </nav>
  )
}

