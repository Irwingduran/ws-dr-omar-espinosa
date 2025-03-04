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
import CookieConsent from "../components/cookie"
import Mockup from "../components/mockup"

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
        <VideoSection />
        <GallerySection />
        <ReviewsSection />
        <Mockup/>
        <FAQSection />
        <LocationsSection />
        <div id="contact">
        <ContactSection />
        </div>
      </main>
      <EnhancedFooter />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}

