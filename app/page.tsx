import Navbar from "../components/navbar"
import HeroSection from "../components/hero"
import AboutSection from "../components/about"
import ServicesBanner from "../components/services-banner"
import ServicesSection from "../components/services-section"
import VideoSection from "../components/video"
import GallerySection from "../components/gallery"
import ReviewsSection from "../components/reviews"
import FAQSection from "../components/faq"
import LocationsSection from "../components/locations"
import ContactSection from "../components/contact"
import EnhancedFooter from "../components/enhanced"
import WhatsAppButton from "../components/social-media-buttons"
import Mockup from "../components/mockup"
import Carousel from "../components/carousel"

export default function Home() {
  return (
    <>

      <Navbar />
      <main>
        <HeroSection />
        <div id="about">
        <AboutSection />
        </div>
        <div id="service">
        <ServicesBanner />
        </div>
        <ServicesSection />
        <Carousel/>
        <VideoSection />
        <ReviewsSection />
        <Mockup/>
        <FAQSection />
        <LocationsSection />
        <GallerySection />
        <div id="contact">
        <ContactSection />
        </div>
      </main>
      <EnhancedFooter />
      <WhatsAppButton />
    </>
  )
}

