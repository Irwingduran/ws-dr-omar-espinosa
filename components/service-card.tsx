"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link" // Importamos Link para la navegación

interface ServiceCardProps {
  title: string
  shortDescription: string
  fullDescription: string[]
  imageSrc: string
  imageAlt: string
  landingUrl: string // Nueva prop para la URL de la landing page
}

export default function ServiceCard({
  title,
  shortDescription,
  fullDescription,
  imageSrc,
  imageAlt,
  landingUrl, // Recibimos la URL de la landing page
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start py-12">
      {/* Contenido de texto */}
      <div>
        <h3 className="text-sm uppercase tracking-wide text-[#0066B3] mb-2">NUESTROS SERVICIOS</h3>
        <h2 className="text-4xl text-gray-800 font-light mb-6">{title}</h2>
        <div className="prose prose-lg text-gray-600">
          <p>{shortDescription}</p>
          {isExpanded && (
            <>
              {fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </>
          )}
        </div>

        {/* Botón "Ver Más" para expandir/colapsar la descripción */}
        <Button
          variant="ghost"
          className="mt-4 text-[#000] hover:text-[#FFB800] hover:bg-blue-50 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Plus className="w-4 h-4 mr-2" />
          {isExpanded ? "Ver Menos" : "Ver Más"}
        </Button>

        {/* Botón para redirigir a la landing page */}
        <Link href={landingUrl} passHref>
          <Button
            variant="outline"
            className="mt-4 ml-4 bg-[#FFB800] text-white hover:bg-yellow-400"
          >
            Más Información
          </Button>
        </Link>
      </div>

      {/* Imagen */}
      <div className="relative">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  )
}