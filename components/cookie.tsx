"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 z-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia en nuestro sitio y para efectos de
          publicidad relacionada con tus preferencias mediante el análisis de tus hábitos de navegación.
        </p>
        <Button
          onClick={() => setIsVisible(false)}
          className="bg-[#FFB800] text-white hover:bg-[#e5a600] whitespace-nowrap"
        >
          OK
        </Button>
      </div>
    </div>
  )
}

