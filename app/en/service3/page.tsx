"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/ui/button"
import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/enhanced"
import WhatsAppButton from "../components/social-media-buttons"

export default function CholecystectomyPage() {
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
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1192905808428170%2F&show_text=false&width=267&t=0", 
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2709135469291943%2F&show_text=false&width=267&t=0", //
  ]

  return (
    <div>
      <WhatsAppButton/>
      <Navbar />
      <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[400px] bg-[#0e0c3f] flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-light mb-4">Cholecystectomy</h1>
            <p className="text-base md:text-lg">
              A safe procedure to treat gallbladder problems.
            </p>
            <div className="mt-6">
            <Link href="https://wa.me/5212221843622?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20make%20an%20inquiry">
              <Button className="bg-[#FFB800] text-white hover:bg-[#0056A3] px-6 py-3 md:px-8 md:py-4">
                Schedule Evaluation
              </Button>
            </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto sm:px-6 px-4 py-16">
          {/* Service Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Video Carousel */}
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
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                What is a Cholecystectomy?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>Cholecystectomy</strong> is a surgical procedure to remove the gallbladder, typically due to the presence of gallstones that cause pain, inflammation, or other symptoms.
                </p>
                <p>
                  This procedure is performed using <strong>laparoscopic technique</strong>, meaning it's minimally invasive with small incisions and faster recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
              Benefits of Cholecystectomy
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
                  The laparoscopic technique reduces postoperative pain and allows for faster recovery.
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
                  The small incisions make scars nearly imperceptible.
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
                  Most patients can return to their normal activities within a few days.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Do You Need a Cholecystectomy?
            </h2>
            <p className="text-gray-600 mb-8">
              If you're experiencing abdominal pain, nausea, or other gallbladder-related symptoms, don't wait any longer. Schedule a consultation to evaluate your case.
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
