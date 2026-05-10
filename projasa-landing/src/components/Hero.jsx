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
        setDisplayText(currentFullText.slice(0, displayText.length + 1))
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
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

const brandLogos = [
  'armour.png', 'azarine.png', 'blibli.png', 'bocahindo.png', 'canon.png',
  'elemis.png', 'ellips.png', 'fujifilm.png', 'glints.png', 'grab.png',
  'hokben.png', 'idemitsu.png', 'itb.png', 'lotte.png', 'lps.png',
  'mondemart.png', 'nars.png', 'nissin.png', 'pegadaian.png', 'polytron.png',
  'raksa.png', 'ricola.png', 'rohto.png', 'sekai.png', 'senka.png',
  'shopee.png', 'toyota.png', 'ugm.png', 'usm.png',
]

function MarqueeBrands() {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className={`flex overflow-hidden transition-all duration-500 cursor-default ${paused ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'}`}
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {[0, 1].map((set) => (
        <div
          key={set}
          aria-hidden={set === 1}
          className="flex shrink-0 gap-10 md:gap-16 pr-10 md:pr-16 items-center"
          style={{ animation: 'marquee 60s linear infinite', animationPlayState: paused ? 'paused' : 'running' }}
        >
          {brandLogos.map((logo, i) => (
            <div key={i} className="shrink-0">
              <img
                src={`/image/logobrand_project/${logo}`}
                alt="brand"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Hero({ onViewServices }) {
  const typedText = useTypingEffect(typingTexts)
  const [consultText, setConsultText] = useState('')

  return (
    <section className="relative pt-36 pb-0 overflow-hidden bg-gradient-to-b from-[#e1f7f5] via-[#ecf4f8] to-[#f4f0fd]">
      {/* Subtle background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none"></div>

      {/* Vertical lines texture */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[75%] pointer-events-none opacity-50"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)'
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400"
          style={{
            WebkitMaskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)',
            maskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)'
          }}
        ></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center pt-8">
        
        {/* Typing effect */}
        <div className="mb-4">
          <span className="text-lg md:text-xl font-semibold text-slate-700">
            {typedText}
            <span className="inline-block w-[2px] h-[1em] bg-brand-purple ml-1 animate-pulse align-middle"></span>
          </span>
        </div>

        <h1 className="text-[3rem] md:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-6 leading-[1.05]">
          Solusi Legalitas <br className="hidden md:block"/> Bisnis Terpercaya
        </h1>
        
        <p className="text-lg md:text-xl text-slate-800 font-medium max-w-2xl mb-12 leading-relaxed">
          Urus izin usaha, legalitas, dan dokumen teknis tanpa ribet. Cukup konsultasi, kami yang handle semuanya.
        </p>

        {/* Hero Interactive Input */}
        <div className="w-full max-w-2xl bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col sm:flex-row gap-0 sm:items-center relative z-20">
          <input 
            type="text" 
            placeholder="Ketik kebutuhan Anda..."
            className="flex-1 bg-white px-6 py-4 rounded-t-2xl sm:rounded-l-full sm:rounded-r-none border-none text-slate-900 placeholder:text-slate-400 focus:outline-none text-base"
            value={consultText}
            onChange={(e) => setConsultText(e.target.value)}
          />
          <a 
            href={`https://wa.me/628125532111?text=${encodeURIComponent(consultText || 'Halo, saya ingin konsultasi mengenai layanan Projasa')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c892ff] hover:bg-[#b87df8] text-white px-8 py-4 rounded-b-2xl sm:rounded-full text-base font-bold transition-all whitespace-nowrap w-full sm:w-auto text-center"
          >
            Konsultasi Gratis
          </a>
        </div>



        {/* Hero Image — Split Layout: Gambar + Stats */}
        <div className="mt-16 w-full max-w-5xl relative z-10 px-4 md:px-0">
          <div className="bg-white/40 backdrop-blur-xl p-3 rounded-[32px] border border-white/60 shadow-2xl">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row h-[450px]">
              
              {/* Kiri: Stats & Info */}
              <div className="w-full md:w-[320px] p-8 flex flex-col justify-center gap-6 bg-white">
                <div>
                  <h3 className="text-[22px] font-black text-slate-900 tracking-tight mb-2">Kenapa Projasa?</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">Solusi legalitas bisnis terlengkap di Bali dengan pengalaman lebih dari 10 tahun.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <p className="text-[20px] font-black text-slate-900">500+</p>
                      <p className="text-[11px] font-semibold text-slate-500">Klien Terlayani</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <p className="text-[20px] font-black text-slate-900">10+</p>
                      <p className="text-[11px] font-semibold text-slate-500">Tahun Pengalaman</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <p className="text-[20px] font-black text-slate-900">3 PT</p>
                      <p className="text-[11px] font-semibold text-slate-500">Resmi & Terpercaya</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kanan: Gambar Hero */}
              <div className="flex-1 relative overflow-hidden">
                <img 
                  src="/image/hero.png" 
                  alt="Projasa Hero" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 35%' }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Logo Brand Marquee — di luar max-w-5xl, pakai max-w-7xl sendiri */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <MarqueeBrands />
      </div>

    </section>
  )
}
