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
      "Mi experiencia con el Dr. Espinosa fue extraordinaria. Los resultados han superado mis expectativas.",
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
      "Después de investigar mucho, elegí al Dr. Espinosa para mi cirugía. Han pasado 6 meses y los resultados son increíbles.",
    image: "/placeholder.svg?height=400&width=400",
    verified: true,
  },
]

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => setCurrentIndex(emblaApi.selectedScrollSnap()))
    }
  }, [emblaApi])

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-6">Experiencias de Nuestros Pacientes</h2>
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 p-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full" />
                      <div>
                        <h3 className="font-medium text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.procedure} • {review.location}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">"{review.comment}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={() => emblaApi && emblaApi.scrollPrev()}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" onClick={() => emblaApi && emblaApi.scrollNext()}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}