export default function About() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text (switched to the right on md screens and larger) */}
          <div className="md:order-2">
            <h2 className="text-4xl text-gray-800 font-light mb-4">
              Dr. Omar Espinosa González
            </h2>
            <div className="w-32 h-1 bg-[#0066B3] mb-8"></div>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Trained at BUAP, he completed his advanced specialization in Advanced Laparoscopic Surgery at La Salle and in Bariatric Surgery at UNAM, standing out as a Certified Bariatric Surgeon. His commitment and experience have transformed the lives of numerous patients, offering advanced and safe surgical solutions.
              </p>
            </div>

            {/* New section for additional information */}
            <div className="mt-8">
              <h3 className="text-2xl text-gray-800 font-light mb-4">
                Certifications and Memberships
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Certified by the Mexican Board of General Surgery in Bariatric Surgery and General Surgery</li>
                <li>
                  Active member of:
                  <ul className="">
                    <li>Mexican College of Obesity Surgery and Metabolic Diseases</li>
                    <li>Mexican Association of Endoscopic Surgery</li>
                    <li>Mexican Association of General Surgery</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl text-gray-800 font-light mb-4">
                Specialties and Experience
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Specialist in the medical and surgical treatment of digestive system diseases.</li>
                <li>Expert in obesity surgery and metabolic diseases: gastric bypass and gastric sleeve by laparoscopy.</li>
                <li>Formal training and experience in advanced laparoscopic surgery.</li>
                <li>Training in the surgical management of complex hernias.</li>
                <li>Diploma in clinical research.</li>
              </ul>
            </div>
          </div>

          {/* Video (switched to the left on md screens and larger) */}
          <div className="relative md:order-1">
            <div className="aspect-square w-full max-w-[500px] mx-auto">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=500&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1820883811758217%2F&show_text=false&width=500&t=0"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
