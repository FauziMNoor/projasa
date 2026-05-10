import { useState, useEffect } from 'react'

const typingTexts = [
  'Mau urus izin usaha?',
  'Butuh konsultan legal?',
  'Perlu SLF & IMB?',
  'Cari jasa konstruksi?',
  'Mau buat PT atau CV?',
]

function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.slice(0, displayText.length + 1))
        if (displayText.length + 1 === currentFullText.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.slice(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}

export default function Hero({ onViewServices }) {
  const typedText = useTypingEffect(typingTexts)

  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.pinimg.com/736x/27/c5/d1/27c5d192d0a032a0d43fa043e748a8a1.jpg')" }}>
      
      {/* Bottom blur transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 backdrop-blur-md bg-[#f4f7fb]/20 pointer-events-none z-0" style={{ WebkitMaskImage: 'linear-gradient(to top, black 5%, transparent 100%)', maskImage: 'linear-gradient(to top, black 5%, transparent 100%)' }}></div>

      <main className="w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-12 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start z-20">
          {/* Typing Effect */}
          <div className="mb-6">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark drop-shadow-sm">
              {typedText}
              <span className="inline-block w-[3px] h-[1em] bg-brand-blue ml-1 animate-pulse align-middle"></span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            <span className="block text-brand-dark mb-2 sm:mb-3">The Most Trusted</span>
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <span className="text-brand-blue">Legal Company</span>
              <span className="text-brand-dark">in Bali.</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
            Urus izin usaha, legalitas, dan dokumen teknis tanpa ribet. Cukup konsultasi, kami yang handle semuanya.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-blue text-white px-7 py-4 rounded-full text-base font-bold hover:bg-brand-hover hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
              Konsultasi Gratis
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bg-white/20 rounded-full p-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <button onClick={onViewServices} className="flex items-center gap-2 glass text-slate-800 px-7 py-4 rounded-full text-base font-bold hover:bg-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              Lihat Layanan
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><path d="M2 12h20"/><path d="m14 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-[500px]">
            
            {/* Main Visual */}
            <div className="w-full aspect-[4/4.5] rounded-[2.5rem] bg-slate-100 shadow-2xl relative z-10 overflow-hidden border-8 border-white group">
              <img src="/image/hero.png" alt="PROJASA Digital" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -left-4 md:-left-12 top-10 glass p-5 rounded-2xl shadow-xl z-20 animate-float">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-brand-dark">150+</h3>
              </div>
              <p className="text-sm font-semibold text-slate-500 ml-11">Proyek Selesai</p>
            </div>
            
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 glass p-5 rounded-2xl shadow-xl z-20 animate-float-delayed">
              <h3 className="text-3xl font-extrabold text-brand-dark mb-1 flex items-center gap-1">
                98% 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </h3>
              <p className="text-sm font-semibold text-slate-500">Kepuasan Klien</p>
            </div>
            
            <div className="absolute -left-2 md:-left-8 bottom-10 glass p-5 rounded-2xl shadow-xl z-20 animate-float">
              <h3 className="text-3xl font-extrabold text-brand-dark mb-1">12+</h3>
              <p className="text-sm font-semibold text-slate-500">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
