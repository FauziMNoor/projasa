import { useEffect, useRef } from 'react'

const googleMapsUrl = 'https://www.google.com/maps/place/PT+Projasa+Legal+Insani+-+Konsultan+Izin+Usaha+-+NIB,+PT,+CV,+PT+PMA,+PASPOR,+VISA,+SAMSAT+%26+DLL/@-8.6827199,115.2002033,17z'

const testimonials = [
  {
    name: 'Amy Claudies',
    initials: 'AC',
    color: 'bg-pink-500',
    rating: 5,
    title: 'Puas dengan Pelayanan',
    text: 'Pengurusannya cepat dan mudah. Pelayanannya ramah. Pokoknya saya merasa puas dengan pelayanan di kantor ini. Sukses selalu untuk tim disini.',
    image: '/image/testimoni/Amy_Claudies-clean.png',
  },
  {
    name: 'Anggie Trisna',
    initials: 'AT',
    color: 'bg-blue-500',
    rating: 5,
    title: 'Langganan 5 Tahun',
    text: 'Cepat dan sangat membantu untuk perpanjangan STNK. Sudah langganan disini selama lebih dari 5 tahun.',
    image: '/image/testimoni/Anggie_Trisna-clean.png',
  },
  {
    name: 'Rena Ayu',
    initials: 'RA',
    color: 'bg-emerald-500',
    rating: 5,
    title: 'Amanah dari Luar Kota',
    text: 'Alhamdulillah.. sudah sering pakai jasa di projasa ini meskipun dr luar kota tapi tetap amanah. Sukses selalu dan semakin berkembang..',
    image: '/image/testimoni/Rena_Ayu-clean.png',
  },
  {
    name: 'Franz DK',
    initials: 'FD',
    color: 'bg-amber-500',
    rating: 5,
    title: 'Tidak Menyesal',
    text: 'Layanan cepat dan pelayanan ramah, sungguh tidak menyesal mengurus disini. Trimakasih atas sgala bantuannya 🙏',
    image: '/image/testimoni/Franz_DK-clean.png',
  },
  {
    name: 'Abdul Rosyid A.',
    initials: 'AR',
    color: 'bg-red-500',
    rating: 5,
    title: 'Fast Respon & Terjangkau',
    text: 'Fast respon, ramah, kebutuhan pelayanan pengurusan administrasi samsat saya di bantu dg cepat dan dengan harga jasa terjangkau.',
    image: '/image/testimoni/Abdul_Rosyid-clean.png',
  },
  {
    name: 'Iffa 1404',
    initials: 'IF',
    color: 'bg-purple-500',
    rating: 5,
    title: 'Konsultan Tercepat',
    text: 'Ini jasa konsultan tercepat, karyawannya ramah-ramah juga.. terima kasih, next bakalan pakai jasa konsultan ini lagi 😊',
    image: '/image/testimoni/Iffa_1404-clean.png',
  },
  {
    name: 'Wahyu Hidayat',
    initials: 'WH',
    color: 'bg-sky-500',
    rating: 5,
    title: 'Cepat Tanpa Ribet',
    text: 'Prosesnya cepat engga pake ribet. Pokoknya keren!',
    image: '/image/testimoni/Wahyu_Hidayat-clean.png',
  },
  {
    name: 'Fatika Arum',
    initials: 'FA',
    color: 'bg-indigo-500',
    rating: 5,
    title: 'Harga Ramah di Kantong',
    text: 'Pelayanannya cepat, harga ramah di kantong, dan staffnya ramah. Thanks projasa atas bantuannya!',
    image: '/image/testimoni/Fatika_Arum-clean.png',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Testimonials() {
  const scrollRef = useRef(null)
  const animationRef = useRef(null)
  const scrollPosRef = useRef(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Wait for DOM to render, then calculate total width of one set
    const cards = scrollContainer.querySelectorAll('.testi-card')
    const halfCount = cards.length / 2
    let singleSetWidth = 0
    for (let i = 0; i < halfCount; i++) {
      singleSetWidth += cards[i].offsetWidth + 32 // 32px = gap-8
    }

    const speed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosRef.current += speed

      // Reset seamlessly when we've scrolled past one full set
      if (scrollPosRef.current >= singleSetWidth) {
        scrollPosRef.current -= singleSetWidth
      }

      scrollContainer.style.transform = `translateX(-${scrollPosRef.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="w-full py-24 relative z-10 bg-gradient-to-b from-[#f4f0fd] to-white overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 px-6">
        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-black text-slate-900 tracking-tighter">
          Apa Kata Klien Kami
        </h2>
      </div>

      {/* Marquee Slider with blur edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left blur/fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-20 pointer-events-none bg-gradient-to-r from-[#f4f0fd] via-[#f4f0fd]/80 to-transparent" />
        {/* Right blur/fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-20 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Scrolling track */}
        <div
          ref={scrollRef}
          className="flex gap-8 items-stretch pb-4 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="testi-card shrink-0 w-[75vw] md:w-[480px] bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden"
            >
              {/* Text Content */}
              <div className="w-full md:w-[60%] p-5 md:p-7 flex flex-col justify-center bg-white z-10">
                <div className="flex items-center gap-2 mb-3">
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold text-slate-400">Google Review</span>
                </div>
                <StarRating rating={t.rating} />
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-3 mb-2 leading-tight">{t.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5 flex-1 font-medium">"{t.text}"</p>
                <div className="flex items-center gap-2.5 mt-auto">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">Klien Projasa</p>
                  </div>
                </div>
              </div>

              {/* Right side image */}
              <div className="w-full md:w-[40%] h-48 md:h-auto bg-gradient-to-br from-[#f4f0fd] to-[#e1f7f5] flex items-center justify-center relative overflow-hidden">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12 px-6">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-7 py-4 bg-white border-2 border-slate-200 rounded-full shadow-sm hover:shadow-lg hover:border-[#c892ff]/30 transition-all duration-300"
        >
          <GoogleIcon />
          <span className="font-semibold text-slate-900 text-sm md:text-base">
            Lihat Semua Ulasan di Google Maps
          </span>
          <svg className="w-4 h-4 text-slate-400 group-hover:text-[#c892ff] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  )
}
