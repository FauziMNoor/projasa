export default function CTA() {
  return (
    <section id="kontak" className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
      <div className="reveal relative rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden group">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://i.pinimg.com/736x/17/43/21/174321b860839f260a096c0dd2e3ffaf.jpg" alt="Background CTA" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-brand-dark tracking-tight leading-[1.3] mb-10 max-w-3xl mx-auto">
            Siap untuk mengurus legalitas dan perizinan bisnis Anda? <br className="hidden md:block"/> Mari konsultasikan kebutuhan Anda bersama kami.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* WhatsApp Button */}
            <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center gap-3 bg-brand-blue text-white pl-6 pr-2 py-2 rounded-full text-[15px] font-semibold shadow-lg shadow-blue-500/25 hover:bg-brand-hover hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
              Konsultasi via WhatsApp
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transform group-hover/btn:translate-x-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </a>

            {/* Email Button */}
            <a href="mailto:support@projasa.co.id" className="group/btn flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/50 text-brand-dark pl-6 pr-2 py-2 rounded-full text-[15px] font-semibold hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm">
              Kirim Email
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transform group-hover/btn:translate-x-1 transition-transform duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
