import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5215515550994"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

