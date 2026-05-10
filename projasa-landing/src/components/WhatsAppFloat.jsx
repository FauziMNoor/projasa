export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        
        {/* Button */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center bg-[#25D366]">
          <img
            src="/logo_wa.png"
            alt="Chat WhatsApp"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        </div>
      </div>
    </a>
  )
}
