"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqs = [
  {
    question: "¿Qué es la cirugía bariátrica?",
    answer:
      "La cirugía bariátrica es un conjunto de procedimientos quirúrgicos que ayudan a perder peso modificando el sistema digestivo. Los procedimientos más comunes son el bypass gástrico y la manga gástrica, que reducen el tamaño del estómago y alteran la forma en que el cuerpo procesa los alimentos.",
  },
  {
    question: "¿Soy candidato para cirugía bariátrica?",
    answer:
      "Los candidatos típicos tienen un IMC de 40 o mayor, o un IMC de 35 con condiciones médicas relacionadas con la obesidad. También deben estar dispuestos a hacer cambios significativos en su estilo de vida y seguir las recomendaciones médicas y nutricionales.",
  },
  {
    question: "¿Cuánto tiempo dura la recuperación?",
    answer:
      "La recuperación varía según el procedimiento y el paciente. Generalmente, los pacientes pueden regresar a sus actividades normales en 2-4 semanas. La recuperación completa puede tomar hasta 6-8 semanas. Es importante seguir todas las indicaciones post-operatorias para una óptima recuperación.",
  },
  {
    question: "¿Qué cambios en el estilo de vida debo hacer después de la cirugía?",
    answer:
      "Después de la cirugía, deberá hacer cambios significativos en su dieta, seguir un plan de ejercicios regular y mantener un seguimiento médico constante. La dieta comenzará con líquidos y progresará gradualmente a alimentos sólidos. También deberá tomar suplementos vitamínicos de por vida.",
  },
  {
    question: "¿Cuáles son los riesgos de la cirugía bariátrica?",
    answer:
      "Como cualquier cirugía mayor, la cirugía bariátrica conlleva riesgos como infección, sangrado y complicaciones de la anestesia. Sin embargo, para la mayoría de los pacientes, los beneficios superan los riesgos. Discutiremos detalladamente todos los riesgos durante su consulta.",
  },
  {
    question: "¿El seguro médico cubre la cirugía bariátrica?",
    answer:
      "Muchos seguros médicos cubren la cirugía bariátrica cuando es médicamente necesaria. La cobertura varía según la aseguradora y el plan específico. Nuestro equipo puede ayudarle a verificar su cobertura y opciones de financiamiento.",
  },
]

export default function FAQSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-gray-600">
              Encuentre respuestas a las preguntas más comunes sobre cirugía bariátrica y nuestros servicios
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

