import { Button } from "./ui/button";
import aboutImg from "../app/assets/about-img.png";

export default function About() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto (intercambiado a la derecha en pantallas md y mayores) */}
          <div className="md:order-2">
            <h2 className="text-4xl text-gray-800 font-light mb-4">
              Dr. Omar Espinosa González
            </h2>
            <div className="w-32 h-1 bg-[#0066B3] mb-8"></div>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Formado en la BUAP, completó su alta especialidad en Cirugía
                Laparoscópica Avanzada en La Salle y en Cirugía Bariátrica en la
                UNAM, destacándose como Cirujano Bariatra Certificado. Su
                compromiso y experiencia han transformado la vida de numerosos
                pacientes, ofreciendo soluciones quirúrgicas avanzadas y seguras.
              </p>
            </div>
          
          </div>

          {/* Imagen (intercambiada a la izquierda en pantallas md y mayores) */}
          <div className="relative md:order-1">
            <img
              src={aboutImg.src}
              alt="Surgical procedure demonstration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}