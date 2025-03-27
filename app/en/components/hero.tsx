import { Button } from "./ui/button";
import imgHero from '../../../app/assets/dr-omar-es.jpg';

export default function HeroSection() {
  return (
    <div className="w-full bg-[#E6E6E6] py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-light text-gray-800 mb-6">
              Dr. Omar
              <br />
              Espinosa González
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Dr. Omar Espinosa is a specialist in General Surgery, Advanced Laparoscopic Surgery, and Bariatric Surgery.
            </p>
            <a href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank">
              <Button className="bg-[#FFB800] text-white hover:bg-[#e5a600] text-lg px-8">Schedule an Appointment</Button>
            </a>
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
  );
}
