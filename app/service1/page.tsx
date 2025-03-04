"use client"

import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Navbar from "../../components/navbar"
import Footer from "../../components/enhanced"

export default function BypassGastricoPage() {
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
        <div className="relative h-[400px] bg-[#E6E6E6] flex items-center justify-center">
          <div className="text-center text-black">
            <h1 className="text-5xl font-light mb-4">Bypass Gástrico</h1>
            <p className="text-lg">
              Una solución avanzada para la pérdida de peso y la mejora de la salud.
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
                ¿Qué es el Bypass Gástrico?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  El bypass gástrico laparoscópico es un procedimiento que no solo ayuda a perder
                  peso, sino que también mejora problemas como:
                </p>
                <ul className="list-disc pl-6">
                  <li>Diabetes tipo 2.</li>
                  <li>Hipertensión arterial.</li>
                  <li>Colesterol alto y apnea del sueño.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ¿Cómo funciona? */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">
              ¿Cómo Funciona el Bypass Gástrico?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Paso 1 */}
              <div className="flex items-start gap-4">
                <div className="text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Reducción del Estómago
                  </h3>
                  <p className="text-gray-600">
                    Se crea un pequeño estómago que redirige el tránsito de los alimentos, reduciendo
                    la absorción de calorías.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex items-start gap-4">
                <div className="text-black rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cambio en la Digestión
                  </h3>
                  <p className="text-gray-600">
                    Este método no solo reduce el tamaño del estómago, sino que también altera la
                    forma en la que los alimentos recorren el sistema digestivo, ayudando a los
                    pacientes a sentir saciedad con menos comida y absorber menos calorías.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
              Beneficios del Bypass Gástrico
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beneficio 1 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Pérdida de Peso Sostenida
                </h3>
                <p className="text-gray-600">
                  Ayuda a perder peso de forma saludable y a largo plazo.
                </p>
              </div>

              {/* Beneficio 2 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Procedimiento Mínimamente Invasivo
                </h3>
                <p className="text-gray-600">
                  Técnica laparoscópica con una recuperación más rápida y menos dolor.
                </p>
              </div>

              {/* Beneficio 3 */}
              <div className="text-center">
                <div className="bg-[#0066B3] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Mejora de la Salud General
                </h3>
                <p className="text-gray-600">
                  Reduce o elimina problemas como la diabetes, la hipertensión y la apnea del sueño.
                </p>
              </div>
            </div>
          </div>

          {/* Llamado a la Acción */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              ¿Sabías que este procedimiento cambia vidas?
            </h2>
            <p className="text-gray-600 mb-8">
              No solo verás cambios físicos, también recuperarás energía, confianza y salud.
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