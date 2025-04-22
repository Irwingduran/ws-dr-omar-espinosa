"use client"

import React, { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link" // Importamos Link para la navegación

interface ServiceCardProps {
  id: string
  title: string
  shortDescription: string
  fullDescription: string[]
  imageSrc: string
  imageAlt: string
  landingUrl: string
  imagePosition: 'left' | 'right' // Posición de la imagen
}

export default function ServiceCard({
  id,
  title,
  shortDescription,
  fullDescription,
  imageSrc,
  imageAlt,
  landingUrl,
  imagePosition,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`grid gap-8 items-start py-12 ${
        imagePosition === "right" ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-[1fr_1fr]"
      }`}
    >
      {/* Contenido de texto */}
      <div
        className={`${
          imagePosition === "right" ? "order-1" : "order-2 md:order-1"
        }`}
      >
        <h3 className="text-sm uppercase tracking-wide text-[#0066B3] mb-2">
          NUESTROS SERVICIOS
        </h3>
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
      <Link href={landingUrl}>
      <div
        className={`relative ${
          imagePosition === "right" ? "order-2" : "order-1 md:order-2"
        }`}
      >
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="w-2/5 rounded-lg mx-auto"
        />
      </div>
      </Link>
    </div>
  )
}