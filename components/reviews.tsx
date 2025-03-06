"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const reviews = [
  {
    name: "Dennis Trujillo",
    procedure: "Paciente",
    rating: 5,
    date: "Febrero 2025",
    location: "",
    comment:
      "Excelente atención, desde la consulta uno explica paso a paso las opciones de cirugías, así como el proceso que se debe llevar antes y después, en general el Dr. es muy paciente y empático. Lo recomiendo.",
    image: "icon/cuenta.png",
    verified: true,
  },
  {
    name: "Oscar Manuel Camino Gutiérrez",
    procedure: "Paciente",
    rating: 5,
    date: "Diciembre 2024",
    location: "",
    comment:
      "Excelente atención del doctor Espinosa y todo su equipo, muy profesional y con mucha empatía y calidad humana, siempre atento a las necesidades de uno como paciente, su atención previa, durante y después de la cirugía es impecable. El hospital (Puebla) excelente también , personal atento, profesional y con vocación de servicio, instalaciones cómodas y modernas, y sorpresa ! Comida sabrosa y natural nada de cajitas! Felicidades al doctor Omar Espinosa por devolverle a la medicina la calidez humana que tanto se ha perdido.",
    image: "icon/cuenta.png",
    verified: true,
  },
  {
    name: "Jose De Jesus Martinez Dominguez",
    procedure: "Paciente",
    rating: 5,
    date: "Diciembre 2024",
    location: "",
    comment:
      "Muy buena atención. Excelente explicación antes y después de mi cirugía; se nota la experiencia. El doctor pendiente en todo momento, muy a gusto con el buen trato.",
    image: "icon/cuenta.png",
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
    <section className="w-full py-16 bg-gray-50" id="resenas">
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

        {/* Banner para dejar un comentario */}
        <div className="mt-8 bg-[#020043] text-white py-8 px-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">¡Tu opinión nos importa!</h3>
          <p className="text-lg mb-6">
            ¿Has tenido una experiencia con el Dr. Espinosa? ¡Déjanos tu opinión en Google!
          </p>
          <Button
            variant="default"
            className="bg-yellow-500 text-white hover:bg-[#e5a600] hover:text-white uppercase px-6 py-3 text-sm font-medium transition-colors"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/wr4HmbDLBLPPHzX29",
                "_blank"
              )
            }
          >
            Dejar un comentario
          </Button>
        </div>
      </div>
    </section>
  )
}
