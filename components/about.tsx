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

          {/* Video (intercambiado a la izquierda en pantallas md y mayores) */}
          <div className="relative md:order-1">
            <div className="aspect-square w-full max-w-[500px] mx-auto"> {/* Contenedor cuadrado */}
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