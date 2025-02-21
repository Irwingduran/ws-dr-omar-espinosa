import { Button } from "./ui/button"

export default function HeroSection() {
  return (
    <div className="w-full bg-[#E6E6E6] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-light text-gray-800 mb-6">
              Dr. Carlos
              <br />
              Zerrweck
            </h1>
            <p className="text-gray-600 mb-8">
              El Dr. Carlos Zerrweck, cirujano bariatra certificado con más de 15 años de experiencia, es un referente
              en cirugía de obesidad en México.
            </p>
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600] text-lg px-8">CONTÁCTANOS</Button>
          </div>
          <div className="relative">
            <img
              src="https://sjc.microlink.io/oIwP7bNwbFHdKogd_mKlfvIYcYprWDbZ-dgFRKaj2A38p1mh-3SMmIGymH2BPxuEIX6bLCpTmWX43lC2qbq2Jg.jpeg"
              alt="Professional doctor portrait"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

