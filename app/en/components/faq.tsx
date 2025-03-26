"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqs = [
  {
    question: "What is bariatric surgery?",
    answer:
      "Bariatric surgery is a set of surgical procedures that help with weight loss by modifying the digestive system. The most common procedures are gastric bypass and gastric sleeve, which reduce the size of the stomach and alter how the body processes food.",
  },
  {
    question: "Am I a candidate for bariatric surgery?",
    answer:
      "Typical candidates have a BMI of 40 or higher, or a BMI of 35 with obesity-related medical conditions. They must also be willing to make significant lifestyle changes and follow medical and nutritional recommendations.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery varies depending on the procedure and patient. Generally, patients can return to normal activities in 2-4 weeks. Complete recovery may take 6-8 weeks. It's important to follow all post-operative instructions for optimal recovery.",
  },
  {
    question: "What lifestyle changes should I make after surgery?",
    answer:
      "After surgery, you'll need to make significant dietary changes, follow a regular exercise plan, and maintain constant medical follow-ups. The diet will start with liquids and gradually progress to solid foods. You'll also need to take vitamin supplements for life.",
  },
  {
    question: "What are the risks of bariatric surgery?",
    answer:
      "Like any major surgery, bariatric surgery carries risks such as infection, bleeding, and anesthesia complications. However, for most patients, the benefits outweigh the risks. We'll discuss all risks in detail during your consultation.",
  },
  {
    question: "Does health insurance cover bariatric surgery?",
    answer:
      "Many health insurance plans cover bariatric surgery when it's medically necessary. Coverage varies by insurer and specific plan. Our team can help you verify your coverage and financing options.",
  },
]

export default function FAQSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about bariatric surgery and our services
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