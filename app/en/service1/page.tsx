"use client"

import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/ui/button"
import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/enhanced"

export default function BypassGastricoPage() {
  // Carousel configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  // Facebook video URLs
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F842349414485330%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F248244954591421%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1059868305090631%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1081002959607834%2F&show_text=false&width=267&t=0",
  ]

  return (
    <div>
      <Navbar />
      <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px] bg-[#0066B3] flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-light mb-4">Gastric Bypass</h1>
            <p className="text-base md:text-lg">
              An advanced solution for weight loss and health improvement.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          {/* Service Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Video carousel - Updated with responsive container */}
          <div className="relative w-full max-w-md mx-auto">
  <Slider {...settings}>
    {videos.map((video, index) => (
      <div key={index} className="w-full">
        <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '177.78%' }}> {/* Aspect ratio para vertical */}
          <iframe
            src={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    ))}
  </Slider>
</div>

            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
                What is Gastric Bypass?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Laparoscopic gastric bypass is a procedure that not only helps with weight loss,
                  but also improves conditions such as:
                </p>
                <ul className="list-disc pl-6">
                  <li>Type 2 diabetes.</li>
                  <li>High blood pressure.</li>
                  <li>High cholesterol and sleep apnea.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How does it work? */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6 text-center">
              How Does Gastric Bypass Work?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Stomach Reduction
                  </h3>
                  <p className="text-gray-600">
                    A small stomach is created that redirects food transit, reducing
                    calorie absorption.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Change in Digestion
                  </h3>
                  <p className="text-gray-600">
                    This method not only reduces stomach size but also alters how
                    food travels through the digestive system, helping patients feel
                    full with less food and absorb fewer calories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 text-center">
              Benefits of Gastric Bypass
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sustained Weight Loss
                </h3>
                <p className="text-gray-600">
                  Helps lose weight in a healthy and long-term way.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Minimally Invasive Procedure
                </h3>
                <p className="text-gray-600">
                  Laparoscopic technique with faster recovery and less pain.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Overall Health Improvement
                </h3>
                <p className="text-gray-600">
                  Reduces or eliminates problems like diabetes, hypertension, and sleep apnea.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              Did you know this procedure changes lives?
            </h2>
            <p className="text-gray-600 mb-8 px-4">
              You'll not only see physical changes, but you'll also regain energy, confidence, and health.
            </p>
            <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
              <Button className="bg-[#FFB800] text-white hover:bg-[#0056A3] px-6 py-3 md:px-8 md:py-4">
                Schedule Your Evaluation
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}