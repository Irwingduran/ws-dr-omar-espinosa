import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import logo from "../public/Logo.png"
import { FaTiktok } from "react-icons/fa"

export default function EnhancedFooter() {
  const locations = [
    {
      name: "Hospital Puebla",
      address: "Priv. de las Ramblas 4, Reserva Territorial Atlixcáyotl, Corredor Comercial Desarrollo Atlixcayotl, 72197 Puebla, Pue.",
      mapUrl: "https://maps.app.goo.gl/XTRXhw7znQVJREDy7",
    },
  ]

  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#020043] opacity-90" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            <img src={logo.src} alt="logo" className="h-24" />
            <h2 className="text-1xl font-light text-white max-w-md">
              El Dr. Omar Espinosa es médico cirujano especialista en cirugía bariátrica certificado por el Consejo
              Mexicano de Cirugía.
            </h2>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/bariatrapue?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/drespinosabariatra?igshid=YTQwZjQ0NmI0OA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@drespinosabariatra?_t=8naCuDgx1Bl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
              >
                <FaTiktok className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <a
                href="tel:2221843622"
                className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <span> 222 184 3622</span>
              </a>

              <a
                href="mailto:drespinosa.cirugia@gmail.com"
                className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <span>drespinosa.cirugia@gmail.com</span>
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
            © {new Date().getFullYear()} Delta <a href="https://marketingmedicos.com.mx/" className="hover:text-yellow-400">by Imagen Médica </a>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
