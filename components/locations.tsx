"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const locations = [
  {
    id: "cdmx",
    name: "Hospital ABC Santa Fe",
    address: "Consultorio 524, Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX",
    phone: "55 1555 0994",
    email: "info@obesidadmx.com",
    hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9752181177184!2d-99.2754977!3d19.3659681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200075d1b4f3d%3A0x7c1c4f2d11b5fc8b!2sHospital%20ABC%20Santa%20Fe!5e0!3m2!1ses!2smx!4v1645564158974!5m2!1ses!2smx",
  },
  {
    id: "cancun",
    name: "Hospital Azura - Cancún",
    address: "Av Sunyaxchen 59-6, 77509 Cancún, Q.R.",
    phone: "55 1555 0994",
    email: "info@obesidadmx.com",
    hours: "Con cita previa",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.772761766649!2d-86.8459187!3d21.1584499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c073d139333%3A0x4a51771c8f43c537!2sHospital%20Galenia!5e0!3m2!1ses!2smx!4v1645564238974!5m2!1ses!2smx",
  },
  {
    id: "tuxtla",
    name: "Hospital San Lucas - Tuxtla",
    address: "Carr. Tuxtla Villaflores Km 1.5, Coquelequixtán, 29000 Tuxtla Gutiérrez, Chis.",
    phone: "55 1555 0994",
    email: "info@obesidadmx.com",
    hours: "Con cita previa",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.840097632654!2d-93.1549187!3d16.7584499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd964c4e4b639%3A0x4b1b0f9c4b3b0f0a!2sHospital%20San%20Lucas!5e0!3m2!1ses!2smx!4v1645564318974!5m2!1ses!2smx",
  },
]

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState(locations[0])

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Nuestras Ubicaciones</h2>
          <p className="text-lg text-gray-600">Consulte en los mejores hospitales de México</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="cdmx" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {locations.map((location) => (
                <TabsTrigger key={location.id} value={location.id} onClick={() => setActiveLocation(location)}>
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {locations.map((location) => (
              <TabsContent key={location.id} value={location.id}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-50 p-3 rounded-full">
                              <MapPin className="h-6 w-6 text-[#0066B3]" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Dirección</h3>
                              <p className="text-gray-600">{location.address}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-50 p-3 rounded-full">
                              <Phone className="h-6 w-6 text-[#0066B3]" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Teléfono</h3>
                              <p className="text-gray-600">{location.phone}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-50 p-3 rounded-full">
                              <Mail className="h-6 w-6 text-[#0066B3]" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Email</h3>
                              <p className="text-gray-600">{location.email}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-50 p-3 rounded-full">
                              <Clock className="h-6 w-6 text-[#0066B3]" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Horario</h3>
                              <p className="text-gray-600">{location.hours}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

