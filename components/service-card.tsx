"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "./ui/button"

interface ServiceCardProps {
  title: string
  shortDescription: string
  fullDescription: string[]
  imageSrc: string
  imageAlt: string
}

export default function ServiceCard({
  title,
  shortDescription,
  fullDescription,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start py-12">
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
        <Button
          variant="ghost"
          className="mt-4 text-[#0066B3] hover:text-[#0066B3] hover:bg-blue-50 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Ver Más
        </Button>
      </div>
      <div className="relative">
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full rounded-lg" />
      </div>
    </div>
  )
}

