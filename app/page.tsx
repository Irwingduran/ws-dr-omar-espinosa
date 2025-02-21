import TopBar from "../components/top-bar"
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
import WhatsAppButton from "../components/whatsapp-button"
import CookieConsent from "../components/cookie"

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesBanner />
        <ServicesSection />
        <VideoSection />
        <GallerySection />
        <ReviewsSection />
        <FAQSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <EnhancedFooter />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}

