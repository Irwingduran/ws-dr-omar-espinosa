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
    procedure: "Patient",
    rating: 5,
    date: "February 2025",
    location: "",
    comment:
      "Excellent attention, from the first consultation he explains step by step the surgery options, as well as the process before and after. In general, the doctor is very patient and empathetic. I recommend him.",
    image: "icon/cuenta.png",
    verified: true,
  },
  {
    name: "Oscar Manuel Camino Gutiérrez",
    procedure: "Patient",
    rating: 5,
    date: "December 2024",
    location: "",
    comment:
      "Excellent attention from Dr. Espinosa and his entire team, very professional with great empathy and human quality, always attentive to the patient's needs. His care before, during and after surgery is impeccable. The hospital (Puebla) is also excellent, with attentive, professional staff with a service vocation, comfortable and modern facilities, and surprise! Tasty and natural food, no boxes! Congratulations to Dr. Omar Espinosa for bringing back the human warmth that medicine has lost.",
    image: "icon/cuenta.png",
    verified: true,
  },
  {
    name: "Jose De Jesus Martinez Dominguez",
    procedure: "Patient",
    rating: 5,
    date: "December 2024",
    location: "",
    comment:
      "Very good attention. Excellent explanation before and after my surgery; his experience shows. The doctor was attentive at all times, very pleased with the good treatment.",
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
        <h2 className="text-3xl font-light text-gray-900 mb-6">Our Patients' Experiences</h2>
        
        {/* Relative container for button positioning */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
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
          
          {/* Absolutely positioned navigation buttons */}
          <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-2">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={() => emblaApi && emblaApi.scrollNext()}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Comment banner */}
        <div className="mt-12 bg-[#020043] text-white py-8 px-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Your opinion matters to us!</h3>
          <p className="text-lg mb-6">
            Have you had an experience with Dr. Espinosa? Leave us your review on Google!
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
            Leave a review
          </Button>
        </div>
      </div>
    </section>
  )
}