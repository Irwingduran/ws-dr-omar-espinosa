import { Button } from "./ui/button"
import Link from "next/link"

const services = [
  {
    id: "bypass",
    name: "Bypass Gástrico",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
        <path
          fill="currentColor"
          d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
        />
      </svg>
    ),
    href: "/servicios/bypass-gastrico",
  },
  {
    id: "manga",
    name: "Manga Gástrica",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
        <path
          fill="currentColor"
          d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
        />
      </svg>
    ),
    href: "/servicios/manga-gastrica",
  },
  {
    id: "banda",
    name: "Banda Gástrica",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
        <path
          fill="currentColor"
          d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
        />
      </svg>
    ),
    href: "/servicios/banda-gastrica",
  },
  {
    id: "balon",
    name: "Balón Gástrico",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
        <path
          fill="currentColor"
          d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
        />
      </svg>
    ),
    href: "/servicios/balon-gastrico",
  },
]

export default function ServicesBanner() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-gray-800 text-center mb-16">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#0066B3] flex items-center justify-center mb-6 transition-transform hover:scale-105">
                {service.icon}
              </div>
              <h3 className="text-xl text-gray-800 mb-4">{service.name}</h3>
              <Link href={service.href}>
                <Button
                  variant="outline"
                  className="bg-[#FFB800] text-white border-0 hover:bg-[#e5a600] uppercase text-sm px-8"
                >
                  Ver Más
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

