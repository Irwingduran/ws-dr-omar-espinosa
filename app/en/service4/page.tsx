"use client"

import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/ui/button"
import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/enhanced"
import WhatsAppButton from "../components/social-media-buttons"

export default function HerniaInguinalPage() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true, // Automatically adjusts height based on content
  }

  // Facebook video URLs
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F406795192237231%2F&show_text=false&width=267&t=0",
    
  ]

  return (
    <div>
      <WhatsAppButton/>
      <Navbar />
      <div className="w-full bg-[#fff]">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-[#0066B3] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-light mb-4">Inguinal Hernia</h1>
            <p className="text-lg">
              An effective and safe solution to correct abdominal wall defects.
            </p><br></br>
            <Link href="https://wa.me/5212221843622?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20make%20an%20inquiry">
              <Button className="bg-[#FFB800] text-white hover:bg-[#0056A3] px-6 py-3 md:px-8 md:py-4">
                Schedule appointment
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Service Description */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Carousel */}
            <div className="relative w-full max-w-md mx-auto">
              <Slider {...settings}>
                {videos.map((video, index) => (
                  <div key={index} className="relative pb-[178%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src={video}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                What is an Inguinal Hernia?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  An <strong>Inguinal Hernia</strong> or <strong>Umbilical Hernia</strong> is a defect in the abdominal wall through which various abdominal cavity organs can protrude, such as intestines, colon, or bladder. This can lead to complications like:
                </p>
                <ul className="list-disc pl-6">
                  <li>Strangulation.</li>
                  <li>Obstructions.</li>
                  <li>Perforations.</li>
                </ul>
                <p>
                  <strong>Laparoscopic surgery</strong> aims to correct or "cover" the defect with a mesh that reinforces the abdominal wall, preventing organs from protruding again.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
              Benefits of Laparoscopic Surgery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Minimally Invasive Procedure
                </h3>
                <p className="text-gray-600">
                  Laparoscopic surgery is less invasive, meaning a safer procedure and faster recovery.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Large Scars
                </h3>
                <p className="text-gray-600">
                  Thanks to the small incisions, the marks are almost imperceptible.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quick Recovery
                </h3>
                <p className="text-gray-600">
                  You'll be able to return to your daily activities without complications.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Don't let doubts hold you back!
            </h2>
            <p className="text-gray-600 mb-8">
              It's your moment to take control and improve your health. Schedule a consultation and discover if laparoscopic surgery for inguinal hernia is the right option for you.
            </p>
            <Link href="https://wa.me/5212221843622?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20make%20an%20inquiry">
              <Button className="bg-[#FFB800] text-white hover:bg-[#0056A3] px-8 py-4">
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
