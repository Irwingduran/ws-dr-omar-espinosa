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

            {/* Nueva sección para la información adicional */}
            <div className="mt-8">
              <h3 className="text-2xl text-gray-800 font-light mb-4">
                Certificaciones y Membresías
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Certificado por el Consejo Mexicano de Cirugía General</li>
                <li>
                  Miembro activo en:
                  <ul className="">
                    <li>Colegio Mexicano de Cirugía de la Obesidad y Enfermedades Metabólicas</li>
                    <li>Asociación Mexicana de Cirugía Endoscópica</li>
                    <li>Asociación Mexicana de Cirugía General</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl text-gray-800 font-light mb-4">
                Especialidades y Experiencia
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Especialista en el tratamiento médico y quirúrgico de enfermedades del aparato digestivo.</li>
                <li>Experto en cirugía de la obesidad y enfermedades metabólicas: bypass gástrico y manga gástrica por laparoscopia.</li>
                <li>Entrenamiento formal y experiencia en cirugía laparoscópica avanzada.</li>
                <li>Adiestramiento en el manejo quirúrgico de hernia compleja.</li>
                <li>Diplomado en investigación clínica.</li>
              </ul>
            </div>
          </div>

          {/* Video (intercambiado a la izquierda en pantallas md y mayores) */}
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
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

