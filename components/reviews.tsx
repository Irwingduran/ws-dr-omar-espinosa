"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const reviews = [
  {
    name: "María González",
    procedure: "Bypass Gástrico",
    rating: 5,
    date: "Enero 2024",
    location: "CDMX",
    comment:
      "Mi experiencia con el Dr. Zerrweck fue extraordinaria. Su profesionalismo y dedicación hicieron que me sintiera segura en todo momento. Los resultados han superado mis expectativas y mi calidad de vida ha mejorado significativamente.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
  {
    name: "Roberto Méndez",
    procedure: "Manga Gástrica",
    rating: 5,
    date: "Diciembre 2023",
    location: "Cancún",
    comment:
      "Después de investigar mucho, elegí al Dr. Zerrweck para mi cirugía. Su equipo es excepcional y el seguimiento post-operatorio fue impecable. Han pasado 6 meses y los resultados son increíbles.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
  {
    name: "Ana Patricia Ruiz",
    procedure: "Bypass Gástrico",
    rating: 5,
    date: "Febrero 2024",
    location: "Tuxtla",
    comment:
      "El Dr. Zerrweck no solo es un excelente cirujano, sino también una persona que se preocupa genuinamente por sus pacientes. Su experiencia y profesionalismo son evidentes en cada consulta.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
  {
    name: "Carlos Ramírez",
    procedure: "Manga Gástrica",
    rating: 5,
    date: "Noviembre 2023",
    location: "CDMX",
    comment:
      "La atención personalizada y el seguimiento constante fueron clave en mi recuperación. El Dr. Zerrweck y su equipo estuvieron siempre disponibles para resolver mis dudas.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
]

const procedures = ["Todos", "Bypass Gástrico", "Manga Gástrica"]

export default function ReviewsSection() {
  const [selectedProcedure, setSelectedProcedure] = useState("Todos")
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredReviews = reviews.filter(
    (review) => selectedProcedure === "Todos" || review.procedure === selectedProcedure,
  )

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Experiencias de Nuestros Pacientes</h2>
            <p className="text-lg text-gray-600 mb-8">
              Descubra por qué nuestros pacientes confían en nosotros para su transformación
            </p>

            {/* Rating Summary */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
                <div className="text-sm text-gray-500">{reviews.length} reseñas verificadas</div>
              </div>
            </div>

            {/* Procedure Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {procedures.map((procedure) => (
                <Button
                  key={procedure}
                  variant={selectedProcedure === procedure ? "default" : "outline"}
                  onClick={() => setSelectedProcedure(procedure)}
                  className={selectedProcedure === procedure ? "bg-[#0066B3]" : ""}
                >
                  {procedure}
                </Button>
              ))}
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {filteredReviews.map((review, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="relative">
                            <img
                              src={review.image || "/placeholder.svg"}
                              alt={`${review.name}`}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            {review.verified && <Badge className="absolute -bottom-2 -right-2 bg-green-500">✓</Badge>}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{review.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{review.procedure}</span>
                              <span>•</span>
                              <span>{review.location}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">"{review.comment}"</p>

                        <div className="text-sm text-gray-500">{review.date}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-4">
              {filteredReviews.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-2 h-2 rounded-full mx-1 p-0 ${index === currentIndex ? "bg-[#0066B3]" : "bg-gray-300"}`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

