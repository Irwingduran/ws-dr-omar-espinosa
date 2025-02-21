import { Button } from "./ui/button"

export default function About() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl text-gray-800 font-light mb-4">Dr. Carlos Zerrweck</h2>
            <div className="w-32 h-1 bg-[#0066B3] mb-8"></div>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Con más de 15 años de experiencia, y operando en los mejores Hospitales del país, el{" "}
                <strong>Dr. CARLOS ZERRWECK</strong> es uno de los cirujanos de obesidad más destacados de México.
                Entrenado en Francia, es Cirujano Bariatra <strong>CERTIFICADO</strong> y Ex Director de la Clínica de
                Obesidad de la Sria. de Salud de la Ciudad de México, así como Profesor Universitario, Investigador del
                Sistema Nacional de Investigadores y autor de múltiples publicaciones científicas nacionales e
                internacionales. Actualmente es Vicepresidente del Colegio Mexicano de Cirugía para la Obesidad.
              </p>
            </div>
            <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600] text-lg px-8">CONTÁCTANOS</Button>
          </div>
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%204.29.33%E2%80%AFa.m.-9yvYpBPSBPz0USvbTrvVLyxWITyrVE.png"
              alt="Surgical procedure demonstration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

