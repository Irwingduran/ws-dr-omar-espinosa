import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";


const services = [
  {
    id: "bypass",
    name: "Gastric Bypass",
    image: "/icon/bg.png",
    href: "/en/service1", 
  },
  {
    id: "manga",
    name: "Gastric Sleeve",
    image: "/icon/cole.png",
    href: "/en/service2", 
  },
  {
    id: "colecistectomia",
    name: "Cholecystectomy",
    image: "/icon/mg.png",
    href: "/en/service3", 
  },
  {
    id: "hil",
    name: "Laparoscopic Inguinal Hernia Repair",
    image: "/icon/hernia.png",
    href: "/en/service4", 
  },
];

export default function ServicesBanner() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-gray-800 text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              <Link href={service.href} className="group">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                  <Image 
                    src={service.image} 
                    alt={service.name}
                    width={64} 
                    height={64}
                    className="object-contain"
                  />
                </div>
              </Link>
              <h3 className="text-xl text-gray-800 mb-4">{service.name}</h3>
              <Link href={service.href}>
                <Button
                  variant="outline"
                  className="bg-[#FFB800] text-white border-0 hover:bg-[#e5a600] uppercase text-sm px-8"
                >
                  View More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
