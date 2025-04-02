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
            <a href="https://wa.me/5212221843622?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20make%20an%20inquiry" target="_blank">
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
