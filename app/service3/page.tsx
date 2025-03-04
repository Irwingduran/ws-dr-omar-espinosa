"use client"

import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Navbar from "../../components/navbar"
import Footer from "../../components/enhanced"

export default function ColecistectomiaPage() {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true, // Ajusta la altura automáticamente según el contenido
  }

  // URLs de los videos de Facebook
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1192905808428170%2F&show_text=false&width=267&t=0", 
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2709135469291943%2F&show_text=false&width=267&t=0", //

  ]

  return (
    <div>
      <Navbar />
      <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-[#E6E6E6] flex items-center justify-center">
          <div className="text-center text-black">
            <h1 className="text-5xl font-light mb-4">Colecistectomía</h1>
            <p className="text-lg">
              Un procedimiento seguro para tratar problemas de la vesícula biliar.
            </p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="container mx-auto px-4 py-16">
          {/* Descripción del Servicio */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Carrusel de videos */}
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

            {/* Texto */}
            <div>
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                ¿Qué es la Colecistectomía?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  La <strong>Colecistectomía</strong> es un procedimiento quirúrgico para extirpar la vesícula biliar, generalmente debido a la presencia de cálculos biliares que causan dolor, inflamación u otros síntomas.
                </p>
                <p>
                  Este procedimiento se realiza mediante <strong>técnica laparoscópica</strong>, lo que significa que es mínimamente invasivo, con pequeñas incisiones y una recuperación más rápida.
                </p>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
              Beneficios de la Colecistectomía
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beneficio 1 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Procedimiento Mínimamente Invasivo
                </h3>
                <p className="text-gray-600">
                  La técnica laparoscópica reduce el dolor postoperatorio y permite una recuperación más rápida.
                </p>
              </div>

              {/* Beneficio 2 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sin Cicatrices Grandes
                </h3>
                <p className="text-gray-600">
                  Las pequeñas incisiones hacen que las cicatrices sean casi imperceptibles.
                </p>
              </div>

              {/* Beneficio 3 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Recuperación Rápida
                </h3>
                <p className="text-gray-600">
                  La mayoría de los pacientes pueden regresar a sus actividades normales en pocos días.
                </p>
              </div>
            </div>
          </div>

          {/* Llamado a la Acción */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              ¿Necesitas una Colecistectomía?
            </h2>
            <p className="text-gray-600 mb-8">
              Si experimentas dolor abdominal, náuseas u otros síntomas relacionados con la vesícula biliar, no esperes más. Agenda una consulta para evaluar tu caso.
            </p>
            <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
              <Button className="bg-[#0066B3] text-white hover:bg-[#0056A3] px-8 py-4">
                Agenda tu Valoración
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}