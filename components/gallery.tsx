"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const galleryItems = [
  {
    id: 1,
    type: "before-after",
    title: "Bypass Gástrico - 6 Meses",
    description: "Resultados después de 6 meses de cirugía de bypass gástrico",
    imageBefore: "/placeholder.svg?height=600&width=400",
    imageAfter: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    type: "facility",
    title: "Quirófano Hospital ABC Santa Fe",
    description: "Instalaciones de última generación",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    type: "before-after",
    title: "Manga Gástrica - 1 Año",
    description: "Transformación después de 1 año de manga gástrica",
    imageBefore: "/placeholder.svg?height=600&width=400",
    imageAfter: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 4,
    type: "facility",
    title: "Consulta Externa",
    description: "Consultorio equipado con tecnología de vanguardia",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Galería</h2>
          <p className="text-lg text-gray-600">Resultados y nuestras instalaciones</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {galleryItems.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item.id)}>
                    {item.type === "before-after" ? (
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              src={item.imageBefore || "/placeholder.svg"}
                              alt="Antes"
                              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                              Antes
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              src={item.imageAfter || "/placeholder.svg"}
                              alt="Después"
                              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                              Después
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Modal for full-size image view */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black/95 border-none">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedImage && (
              <div className="p-4">
                {galleryItems.find((item) => item.id === selectedImage)?.type === "before-after" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <img
                        src={galleryItems.find((item) => item.id === selectedImage)?.imageBefore || "/placeholder.svg"}
                        alt="Antes"
                        className="w-full rounded-lg"
                      />
                      <p className="text-white text-center mt-2">Antes</p>
                    </div>
                    <div>
                      <img
                        src={galleryItems.find((item) => item.id === selectedImage)?.imageAfter || "/placeholder.svg"}
                        alt="Después"
                        className="w-full rounded-lg"
                      />
                      <p className="text-white text-center mt-2">Después</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                    alt={galleryItems.find((item) => item.id === selectedImage)?.title}
                    className="w-full rounded-lg"
                  />
                )}
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-medium mb-2">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-300">{galleryItems.find((item) => item.id === selectedImage)?.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

