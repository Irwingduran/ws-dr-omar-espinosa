import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function EnhancedFooter() {
  const locations = [
    {
      name: "Hospital ABC Santa Fe",
      address: "Consultorio 524, Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX",
      mapUrl: "https://maps.google.com/?q=Hospital+ABC+Santa+Fe",
    },
    {
      name: "Hospital Azura - Cancún",
      address: "Av Sunyaxchen 59-6, 77509 Cancún, Q.R.",
      mapUrl: "https://maps.google.com/?q=Hospital+Azura+Cancun",
    },
    {
      name: "Hospital San Lucas - Tuxtla",
      address: "Carr. Tuxtla Villaflores Km 1.5, Coquelequixtán, 29000 Tuxtla Gutiérrez, Chis.",
      mapUrl: "https://maps.google.com/?q=Hospital+San+Lucas+Tuxtla",
    },
  ]

  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066B3] to-[#004C8C] opacity-90" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-white max-w-md">
              El Dr. Carlos Zerrweck es médico cirujano especialista en cirugía bariátrica certificado por el Consejo
              Mexicano de Cirugía.
            </h2>

            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <a
                href="tel:555-1555-0994"
                className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <span>55 1555 0994</span>
              </a>

              <a
                href="mailto:info@obesidadmx.com"
                className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@obesidadmx.com</span>
              </a>
            </div>

            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.name} className="group">
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="block space-y-2">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="bg-white/10 group-hover:bg-white/20 transition-colors p-3 rounded-full">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{location.name}</span>
                    </div>
                    <p className="text-white/80 pl-12 text-sm leading-relaxed">{location.address}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} Dr. Carlos Zerrweck. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

