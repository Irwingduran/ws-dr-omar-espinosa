import ServiceCard from "./service-card";

export default function ServicesSection() {
  const services = [
    {
      id: "bypassg",
      title: "Gastric Bypass",
      shortDescription:
        "Gastric bypass is a type of weight loss surgery that involves creating a small stomach and connecting it directly to the small intestine.",
      fullDescription: [
        "After gastric bypass, the food consumed will enter this small stomach and then pass directly into the small intestine, bypassing most of the stomach and the first section of the small intestine.",
        "Gastric bypass helps reduce the risk of life-threatening weight-related health problems. It is the most widely performed technique worldwide, yielding the best results in terms of weight loss and improving conditions like type 2 diabetes.",
        "It is essential for the patient to strictly follow a dietary plan provided by a nutritionist, as diet directly influences the success of the procedure.",
      ],
      imageSrc: "/service/BypassGastrico.webp",
      imageAlt: "Illustration of gastric bypass",
      landingUrl: "/en/service1",
    },
    {
      id: "mangag",
      title: "Gastric Sleeve",
      shortDescription:
        "Gastric sleeve surgery drastically reduces the size of the stomach by removing up to 80% of its total volume.",
      fullDescription: [
        "This surgical procedure significantly reduces the stomach's capacity, helping patients feel full with less food.",
        "The gastric sleeve is a restrictive technique that not only reduces stomach size but also decreases the production of hunger-related hormones.",
        "It is a minimally invasive procedure performed via laparoscopy, allowing for a faster recovery.",
      ],
      imageSrc: "/service/MangaG.webp",
      imageAlt: "Illustration of gastric sleeve",
      landingUrl: "/en/service2",
    },
    {
      id: "colecistectomiaa",
      title: "Cholecystectomy",
      shortDescription:
        "Cholecystectomy is the surgery to remove the gallbladder, usually due to gallstones causing pain and other symptoms.",
      fullDescription: [
        "This procedure is performed using a laparoscopic technique, which means smaller incisions and a faster recovery.",
        "The surgery is safe and effective, allowing the patient to continue living a normal life without a gallbladder.",
        "Most people can return to their normal activities within about a week after surgery.",
      ],
      imageSrc: "/service/Colecistectomia.webp",
      imageAlt: "Illustration of cholecystectomy",
      landingUrl: "/en/service3",
    },
    {
      id: "HIL",
      title: "Laparoscopic Inguinal Hernia Repair",
      shortDescription:
        "Laparoscopic inguinal hernia repair is a minimally invasive technique to repair hernias in the groin area using small incisions.",
      fullDescription: [
        "This modern technique allows for a faster recovery and less postoperative pain compared to traditional surgery.",
        "A special mesh is used to reinforce the abdominal wall and prevent future hernias.",
        "Most patients can return to their normal activities in a short time, with excellent long-term results.",
      ],
      imageSrc: "/service/HIL.webp",
      imageAlt: "Illustration of laparoscopic inguinal hernia repair",
      landingUrl: "/en/service4",
    },
  ];
  

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={service.id} id={service.id}>
              <ServiceCard
                {...service}
                imagePosition={index % 2 === 0 ? "left" : "right"}
              />
              {/* Separador entre servicios */}
              {index < services.length - 1 && (
                <div className="border-t border-gray-200 my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}