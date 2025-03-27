export default function VideoSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">What Does a Bariatric Surgeon Do?</h2>
            <p className="text-lg text-gray-600">
              Learn more about the procedures and work of a certified bariatric surgeon.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-white">
            {/* Video Wrapper with 16:9 aspect ratio */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbariatrapue%2Fvideos%2F123379890530368%2F&show_text=false&width=560&t=0"
                title="What Does a Bariatric Surgeon Do?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            {/* Optional: Video Description or Call-to-Action */}
            <div className="p-6 bg-white">
              <p className="text-gray-600">
                In this video, we provide a detailed explanation of the role of a bariatric surgeon and the various 
                procedures performed to help patients achieve a healthier life.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium text-[#0066B3]">Topics covered:</span>
                  <ul className="ml-2 flex flex-wrap gap-2">
                    <li>• Gastric Bypass</li>
                    <li>• Gastric Sleeve</li>
                    <li>• Recovery Process</li>
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
