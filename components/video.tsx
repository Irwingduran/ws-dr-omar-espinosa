export default function VideoSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">¿Qué hace un cirujano Bariatra?</h2>
            <p className="text-lg text-gray-600">
              Conozca más sobre los procedimientos y el trabajo de un cirujano bariátrico certificado
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-white">
            {/* Video Wrapper with 16:9 aspect ratio */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/yKfrmDnNt-c?si=fSACc5570FDmCTcT"
                title="¿Qué hace un cirujano Bariátra?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            {/* Optional: Video Description or Call-to-Action */}
            <div className="p-6 bg-white">
              <p className="text-gray-600">
                En este video, explicamos detalladamente el rol de un cirujano bariátrico y los diferentes
                procedimientos que realizamos para ayudar a nuestros pacientes a alcanzar una vida más saludable.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium text-[#0066B3]">Temas cubiertos:</span>
                  <ul className="ml-2 flex flex-wrap gap-2">
                    <li>• Bypass Gástrico</li>
                    <li>• Manga Gástrica</li>
                    <li>• Proceso de Recuperación</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

