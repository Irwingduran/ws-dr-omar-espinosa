import ServiceCard from "./service-card"

export default function ServicesSection() {
  const services = [
    {
      title: "Bypass Gástrico",
      shortDescription:
        "El bypass gástrico, es un tipo de cirugía de pérdida de peso que implica crear un pequeño estómago y conectarlo directamente con el intestino delgado.",
      fullDescription: [
        "Después del bypass gástrico, los alimentos ingeridos entrarán en este pequeño estómago y luego pasarán directamente al intestino delgado, evitando la mayor parte del estómago y la primera sección del intestino delgado.",
        "El bypass gástrico ayuda a reducir el riesgo de tener problemas de salud relacionados con el peso que pueden poner en riesgo la vida, es la técnica más realizada a nivel mundial con mejores resultados en cuanto a la pérdida de peso y para mejorar la situación de enfermedades asociadas como la diabetes tipo 2.",
        "Es importante que el paciente reciba y siga al pie de la letra un plan alimenticio indicado por un nutriólogo ya que la dieta es un factor que influye directamente en el resultado del procedimiento para que sea exitoso.",
      ],
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%204.50.18%E2%80%AFa.m.-QifioZ8s48vnLL9G9Ef2fcsG8qBZdk.png",
      imageAlt: "Ilustración de bypass gástrico",
    },
    {
      title: "Manga Gástrica",
      shortDescription:
        "La manga gástrica es una operación que permite reducir drásticamente el tamaño del estómago mediante la extirpación de hasta el 80% de su volumen total.",
      fullDescription: [
        "Este procedimiento quirúrgico reduce significativamente la capacidad del estómago, lo que ayuda a sentirse satisfecho con menos comida.",
        "La manga gástrica es una técnica restrictiva que no solo reduce el tamaño del estómago sino que también disminuye la producción de hormonas relacionadas con el hambre.",
        "Es un procedimiento mínimamente invasivo que se realiza por laparoscopía, lo que permite una recuperación más rápida.",
      ],
      imageSrc:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%204.50.06%E2%80%AFa.m.-dUGCAuhZaPck118vzClaZikCfLOl0f.png",
      imageAlt: "Ilustración de manga gástrica",
    },
    {
      title: "Colecistectomia",
      shortDescription:
        "La colecistectomía es la cirugía para extraer la vesícula biliar, generalmente debido a cálculos biliares que causan dolor y otros síntomas.",
      fullDescription: [
        "Este procedimiento se realiza mediante técnica laparoscópica, lo que significa pequeñas incisiones y una recuperación más rápida.",
        "La cirugía es segura y efectiva, permitiendo que el paciente continúe su vida normal sin la vesícula biliar.",
        "Después de la cirugía, la mayoría de las personas pueden regresar a sus actividades normales en aproximadamente una semana.",
      ],
      imageSrc: "/placeholder.svg?height=400&width=500",
      imageAlt: "Ilustración de colecistectomía",
    },
    {
      title: "Hernia Inguinal Laparoscópica",
      shortDescription:
        "La hernia inguinal laparoscópica es una técnica mínimamente invasiva para reparar hernias en la región inguinal mediante pequeñas incisiones.",
      fullDescription: [
        "Esta técnica moderna permite una recuperación más rápida y menor dolor postoperatorio comparado con la cirugía tradicional.",
        "Se utiliza una malla especial para reforzar la pared abdominal y prevenir futuras hernias.",
        "La mayoría de los pacientes pueden regresar a sus actividades normales en poco tiempo, con excelentes resultados a largo plazo.",
      ],
      imageSrc: "/placeholder.svg?height=400&width=500",
      imageAlt: "Ilustración de hernia inguinal laparoscópica",
    },
  ]

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={service.title}>
              <ServiceCard {...service} />
              {index < services.length - 1 && <div className="border-t border-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

