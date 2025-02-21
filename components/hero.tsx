import { Button } from "./ui/button"
import imgHero from '../app/assets/dr-omar-es.jpg';

export default function HeroSection() {
  return (
    <div className="w-full bg-[#E6E6E6] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-light text-gray-800 mb-6">
              Dr. Omar
              <br />
              Espinosa González
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
            El Dr. Omar Espinosa es especialista en Cirugía General, Cirugía Laparoscópica Avanzada y Cirugía Bariátrica.
            </p>
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600] text-lg px-8">Agendar Cita</Button>
          </div>
          <div className="relative">
            <img
              src={imgHero.src}
              alt="Professional doctor portrait"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

