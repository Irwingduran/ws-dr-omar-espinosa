import React from "react";
import { Button } from "./ui/button";

interface MockupProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const Mockup: React.FC<MockupProps> = ({ imageUrl, title, description, buttonText }) => {
  return (
    <section className="w-full bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={imageUrl} alt="Medical Profile" className="w-full" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-5">{title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
            <a
              href="https://www.findoctor.com.mx/doctores/omar-espinosa-gonzalez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-500 text-white hover:bg-yellow-600  px-6 py-3 text-sm font-medium">
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Usage example
const App = () => {
  return (
    <Mockup
      imageUrl="/service/mockup.png"
      title="Discover more about my practice on Findoctor"
      description="Check my digital profile on Findoctor to learn about my services, location, schedules, and contact methods. Schedule your appointment online quickly and securely."
      buttonText="Visit my digital card"
    />
  );
};

export default App;