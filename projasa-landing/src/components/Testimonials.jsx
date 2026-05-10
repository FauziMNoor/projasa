import { useEffect, useRef, useState } from 'react'

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
  const trackRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalOriginal = testimonials.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        if (next >= totalOriginal) {
          setTimeout(() => {
            if (trackRef.current) {
              trackRef.current.style.scrollBehavior = 'auto'
              setCurrentIndex(0)
              setTimeout(() => {
                if (trackRef.current) {
                  trackRef.current.style.scrollBehavior = 'smooth'
                }
              }, 50)
            }
          }, 800)
          return next
        }
        return next
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [totalOriginal])

  useEffect(() => {
    if (!trackRef.current) return
    const cards = trackRef.current.querySelectorAll('.testi-card')
    const index = Math.min(currentIndex, cards.length - 1)
    if (index < 0 || !cards[index]) return

    const containerWidth = trackRef.current.parentElement.offsetWidth
    const scrollPos = cards[index].offsetLeft - (containerWidth / 2) + (cards[index].offsetWidth / 2)
    trackRef.current.scrollTo({ left: scrollPos, behavior: trackRef.current.style.scrollBehavior || 'smooth' })
  }, [currentIndex])

  return (
    <section id="testimonials" className="w-full py-12 relative z-10 bg-transparent overflow-hidden">
      {/* Header */}
      <div className="reveal flex flex-col items-center text-center mb-16 px-6">
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-dark tracking-tight mb-4">
          Apa Kata Klien Kami
        </h2>
        

      </div>

      {/* Slider — same layout as before */}
      <div className="reveal delay-200 relative w-full overflow-hidden flex flex-col items-center">
        <div ref={trackRef} className="flex gap-4 md:gap-8 overflow-x-hidden w-full no-scrollbar items-stretch pb-8" style={{ scrollBehavior: 'smooth' }}>
          
          {/* Spacer Start */}
          <div className="shrink-0 w-[calc(50vw-45vw)] md:w-[calc(50vw-400px)]"></div>

          {/* Cards */}
          {[...testimonials, testimonials[0]].map((t, i) => (
            <div key={i} className="testi-card shrink-0 w-[90vw] md:w-[800px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden snap-center" aria-hidden={i === totalOriginal ? 'true' : undefined}>
              {/* Text Content */}
              <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                {/* Google badge */}
                <div className="flex items-center gap-2 mb-5">
                  <GoogleIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold text-slate-400">Google Review</span>
                </div>

                <StarRating rating={t.rating} />

                <h3 className="text-2xl md:text-[1.75rem] font-bold text-brand-dark mt-4 mb-4 leading-tight">{t.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-1 font-medium">"{t.text}"</p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">Klien Projasa</p>
                  </div>
                </div>
              </div>

              {/* Right side — illustration */}
              <div className="w-full md:w-[40%] h-64 md:h-auto bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-contain p-6 md:p-8"
                />
              </div>
            </div>
          ))}

          {/* Spacer End */}
          <div className="shrink-0 w-[calc(50vw-45vw)] md:w-[calc(50vw-400px)]"></div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex % totalOriginal ? 'w-8 bg-brand-blue' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA: Lihat Semua Ulasan */}
      <div className="reveal delay-300 flex justify-center mt-12 px-6">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-7 py-4 bg-white border-2 border-slate-200 rounded-full shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300"
        >
          <GoogleIcon />
          <span className="font-semibold text-brand-dark text-sm md:text-base">
            Lihat Semua Ulasan di Google Maps
          </span>
          <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  )
}
