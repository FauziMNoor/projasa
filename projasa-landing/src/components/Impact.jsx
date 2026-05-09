import { useEffect } from 'react'

const stats = [
  {
    number: '200+',
    title: 'Klien Puas',
    description: 'Bisnis yang bertransformasi melalui solusi legal kami',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  {
    number: '500+',
    title: 'Proyek',
    description: 'Perizinan dan dokumen legal yang berhasil diselesaikan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
    ),
  },
  {
    number: '99%',
    title: 'Tingkat Keberhasilan',
    description: 'Permohonan izin yang disetujui tepat waktu',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
]

export default function Impact() {
  useEffect(() => {
    let currentMouseX = window.innerWidth / 2

    function applyGlobalTilt() {
      const windowCenterX = window.innerWidth / 2
      const tiltCards = document.querySelectorAll('.tilt-card')
      tiltCards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const normalizedX = (currentMouseX - windowCenterX) / windowCenterX
          const rotateY = normalizedX * -15
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }
      })
    }

    const handleMouseMove = (e) => {
      currentMouseX = e.clientX
      requestAnimationFrame(applyGlobalTilt)
    }

    const handleScroll = () => {
      requestAnimationFrame(applyGlobalTilt)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('scroll', handleScroll)
    applyGlobalTilt()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      {/* Header */}
      <div className="reveal flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <span className="text-xs font-semibold text-slate-700 tracking-wide">Dampak Kami</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-brand-dark tracking-tight mb-4">
          Hasil yang Membuktikan
        </h2>
        
        <p className="text-lg text-slate-600 max-w-2xl font-medium">
          Rekam jejak kami dalam memberikan solusi legal dan perizinan untuk klien di berbagai industri.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: '2000px' }}>
        {stats.map((stat, index) => (
          <div key={stat.title} className={`reveal delay-${(index + 1) * 100}`}>
            <div className="tilt-card bg-white rounded-[2rem] pt-24 pb-14 px-8 relative overflow-hidden h-[400px] flex flex-col items-center justify-end shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 will-change-transform transition-transform duration-300 ease-out">
              {/* Faded Number */}
              <div className="absolute top-16 inset-x-0 w-full flex justify-center overflow-hidden pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%)', maskImage: 'linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%)' }}>
                <span className="text-[5rem] sm:text-[6rem] lg:text-[8rem] whitespace-nowrap font-medium text-brand-dark tracking-tighter leading-none select-none">{stat.number}</span>
              </div>
              
              {/* Text */}
              <div className="relative z-10 text-center flex flex-col items-center mt-auto">
                <h3 className="text-3xl lg:text-4xl font-semibold text-brand-dark mb-3 tracking-tight">{stat.title}</h3>
                <p className="text-slate-600 font-medium text-base leading-relaxed max-w-[240px]">{stat.description}</p>
              </div>

              {/* Icon */}
              <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
