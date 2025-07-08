"use client"

import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Navbar from "../../components/navbar"
import Footer from "../../components/enhanced"
import WhatsAppButton from "../../components/social-media-buttons"

export default function HerniaInguinalPage() {
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
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F406795192237231%2F&show_text=false&width=267&t=0",
    
  ]

  return (
    <div>
      <WhatsAppButton/>
      <Navbar />
      <div className="w-full bg-[#fff]">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-[#0e0c3f] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">Hernia Inguinal</h1>
            <p className="text-lg">
              Una solución eficaz y segura para corregir defectos de la pared abdominal.
            </p>
          </div>
          <div className="mt-6">
            <Link href="https://wa.me/5212221843622?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20make%20an%20inquiry">
             <Button className="bg-[#FFB800] text-white hover:bg-[#0056A3] px-6 py-3 md:px-8 md:py-4">
              Agenda Tu Consulta
              </Button>
             </Link>
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
                ¿Qué es la Hernia Inguinal?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  La <strong>Hernia Inguinal</strong> o <strong>Hernia Umbilical</strong> es un defecto de la pared abdominal a través del cual pueden protruir distintos órganos de la cavidad abdominal, como intestinos, colon o vejiga. Esto puede producir complicaciones como:
                </p>
                <ul className="list-disc pl-6">
                  <li>Estrangulamiento.</li>
                  <li>Obstrucciones.</li>
                  <li>Perforaciones.</li>
                </ul>
                <p>
                  La <strong>cirugía laparoscópica</strong> busca corregir o "cubrir" el defecto con una malla que refuerza la pared abdominal, evitando que los órganos protruyan nuevamente.
                </p>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
              Beneficios de la Cirugía Laparoscópica
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
                  La cirugía laparoscópica es menos invasiva, lo que significa un procedimiento más seguro y una recuperación más rápida.
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
                  Gracias a las pequeñas incisiones, las marcas son casi imperceptibles.
                </p>
              </div>

              {/* Beneficio 3 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Recuperación Ágil
                </h3>
                <p className="text-gray-600">
                  Podrás volver a tus actividades diarias sin complicaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Llamado a la Acción */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              ¡No dejes que las dudas te frenen!
            </h2>
            <p className="text-gray-600 mb-8">
              Es tu momento de tomar el control y mejorar tu salud. Agenda una consulta y descubre si la cirugía laparoscópica para la hernia inguinal es la opción adecuada para ti.
            </p>
            <Link href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
              <Button className="bg-[#FFB800] text-white hover:bg-[#0056A3] px-8 py-4">
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
