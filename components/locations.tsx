"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const location = {
  name: "Ubicación en Puebla",
  address: "Ubicación exacta en Puebla, México",
  phone: "55 1555 0994",
  email: "info@obesidadmx.com",
  hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.7568359803445!2d-98.23113522479579!3d19.03043378216481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzQ5LjYiTiA5OMKwMTMnNDIuOCJX!5e0!3m2!1ses!2smx!4v1736439626261!5m2!1ses!2smx",
}

export default function LocationSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900">Nuestra Ubicación</h2>
          <p className="text-lg text-gray-600">Consulta nuestra sede en Puebla</p>
        </div>

        <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.7568359803445!2d-98.23113522479579!3d19.03043378216481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzQ5LjYiTiA5OMKwMTMnNDIuOCJX!5e0!3m2!1ses!2smx!4v1736439626261!5m2!1ses!2smx"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-center">Hospital Puebla. Priv. de las Ramblas 4, Reserva Territorial Atlixcáyotl, Corredor Comercial Desarrollo Atlixcayotl, 72197 Heroica Puebla de Zaragoza, Pue.</h2>
        </div>
      </div>
      </div>
    </section>
  )
}
