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
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
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

// Dummy data klien untuk simulasi pengecekan
const dummyClientData = {
  'SRV-2025-000123': {
    nama: 'PT Maju Bersama',
    layanan: 'Pengurusan Izin Usaha (NIB)',
    status: 'Sedang Diproses',
    tahap: 'Verifikasi Dokumen',
    tanggalMasuk: '2 Mei 2025',
    estimasiSelesai: '16 Mei 2025',
    pic: 'Ahmad Fauzi',
    progress: 60,
  },
  'SRV-2025-000456': {
    nama: 'CV Karya Mandiri',
    layanan: 'Pembuatan PT Baru',
    status: 'Sedang Diproses',
    tahap: 'Pengesahan Kemenkumham',
    tanggalMasuk: '28 April 2025',
    estimasiSelesai: '20 Mei 2025',
    pic: 'Dewi Sartika',
    progress: 75,
  },
  'SRV-2025-000789': {
    nama: 'Toko Sejahtera',
    layanan: 'SLF (Sertifikat Laik Fungsi)',
    status: 'Menunggu Tanda Tangan',
    tahap: 'Dokumen Siap',
    tanggalMasuk: '20 April 2025',
    estimasiSelesai: '12 Mei 2025',
    pic: 'Budi Santoso',
    progress: 90,
  },
}

function StatusBadge({ status }) {
  const colors = {
    'Sedang Diproses': 'bg-yellow-100 text-yellow-700',
    'Menunggu Tanda Tangan': 'bg-blue-100 text-blue-700',
    'Selesai': 'bg-green-100 text-green-700',
  }
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors[status] || 'bg-slate-100 text-slate-600'}`}>
      {status}
    </span>
  )
}

function ClientDataModal({ data, nomorLayanan, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div 
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md p-5 sm:p-8 animate-[curtainReveal_0.4s_ease-out] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status Layanan</p>
            <p className="text-sm font-bold text-brand-purple mt-0.5">{nomorLayanan}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Client Info */}
        <div className="mb-5">
          <h3 className="text-xl font-black text-slate-900">{data.nama}</h3>
          <p className="text-sm text-slate-500 mt-1">{data.layanan}</p>
        </div>

        {/* Status Badge */}
        <div className="mb-5">
          <StatusBadge status={data.status} />
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-slate-500">Progress</span>
            <span className="text-xs font-bold text-brand-purple">{data.progress}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#c892ff] to-[#9333ea] rounded-full transition-all duration-700"
              style={{ width: `${data.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Detail Info */}
        <div className="space-y-3 bg-slate-50 rounded-2xl p-5">
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Tahap Saat Ini</span>
            <span className="text-sm font-semibold text-slate-800">{data.tahap}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Tanggal Masuk</span>
            <span className="text-sm font-semibold text-slate-800">{data.tanggalMasuk}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Estimasi Selesai</span>
            <span className="text-sm font-semibold text-slate-800">{data.estimasiSelesai}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">PIC</span>
            <span className="text-sm font-semibold text-slate-800">{data.pic}</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-400 text-center mt-5">
          Ada pertanyaan? <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-semibold hover:underline">Hubungi kami via WhatsApp</a>
        </p>
      </div>
    </div>
  )
}

export default function Hero({ onViewServices }) {
  const typedText = useTypingEffect(typingTexts)
  const [trackingCode, setTrackingCode] = useState('')
  const [clientData, setClientData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleCekData = () => {
    const code = trackingCode.trim().toUpperCase()
    if (!code) return
    
    if (dummyClientData[code]) {
      setClientData(dummyClientData[code])
      setShowModal(true)
      setNotFound(false)
    } else {
      setNotFound(true)
      setClientData(null)
      setTimeout(() => setNotFound(false), 3000)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCekData()
  }

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

      {/* Modal Cek Data */}
      {showModal && clientData && (
        <ClientDataModal 
          data={clientData} 
          nomorLayanan={trackingCode.trim().toUpperCase()} 
          onClose={() => setShowModal(false)} 
        />
      )}

      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center pt-8">
        
        {/* Typing effect */}
        <div className="mb-4">
          <span className="text-lg md:text-xl font-semibold text-slate-700">
            {typedText}
            <span className="inline-block w-[2px] h-[1em] bg-brand-purple ml-1 animate-pulse align-middle"></span>
          </span>
        </div>

        <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-4 sm:mb-6 leading-[1.05]">
          Solusi Legalitas <br className="hidden md:block"/> Bisnis Terpercaya
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          Urus izin usaha, legalitas, dan dokumen teknis tanpa ribet. Cukup konsultasi, kami yang handle semuanya.
        </p>

        {/* Bar Pengecekan Data Klien */}
        <div className="w-full max-w-2xl relative z-20">
          <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-3xl sm:rounded-full border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col sm:flex-row gap-0 sm:items-center">
            <div className="flex-1 flex items-center bg-white px-4 sm:px-6 py-3.5 sm:py-4 rounded-t-2xl sm:rounded-l-full sm:rounded-r-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mr-2 sm:mr-3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input 
                type="text" 
                placeholder="Cth: SRV-2025-000123"
                className="flex-1 bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-none text-sm sm:text-base"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button 
              onClick={handleCekData}
              className="bg-[#c892ff] hover:bg-[#b87df8] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-b-2xl sm:rounded-full text-sm sm:text-base font-bold transition-all whitespace-nowrap w-full sm:w-auto text-center cursor-pointer"
            >
              Cek Data
            </button>
          </div>
          
          {/* Not Found Message */}
          {notFound && (
            <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-sm font-medium px-4 py-2.5 rounded-xl animate-[curtainReveal_0.3s_ease-out]">
              Nomor layanan tidak ditemukan. Pastikan format benar (cth: SRV-2025-000123)
            </div>
          )}
        </div>



        {/* Hero Image — Split Layout: Gambar + Stats */}
        <div className="mt-12 sm:mt-16 w-full max-w-5xl relative z-10 px-0 md:px-0">
          <div className="bg-white/40 backdrop-blur-xl p-2 sm:p-3 rounded-[24px] sm:rounded-[32px] border border-white/60 shadow-2xl">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden flex flex-col-reverse md:flex-row md:h-[450px]">
              
              {/* Kiri: Stats & Info */}
              <div className="w-full md:w-[320px] p-4 sm:p-8 flex flex-col justify-center gap-4 sm:gap-6 bg-white">
                <div className="hidden md:block">
                  <h3 className="text-[22px] font-black text-slate-900 tracking-tight mb-2">Kenapa Projasa?</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">Solusi legalitas bisnis terlengkap di Bali dengan pengalaman lebih dari 10 tahun.</p>
                </div>

                {/* Mobile: 3 stats horizontal dalam 1 baris */}
                <div className="grid grid-cols-3 gap-2 md:hidden">
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <p className="text-[16px] font-black text-slate-900 leading-tight">500+</p>
                    <p className="text-[9px] font-semibold text-slate-500 mt-0.5">Klien Terlayani</p>
                  </div>

                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <p className="text-[16px] font-black text-slate-900 leading-tight">10+</p>
                    <p className="text-[9px] font-semibold text-slate-500 mt-0.5">Tahun Pengalaman</p>
                  </div>

                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <p className="text-[16px] font-black text-slate-900 leading-tight">3 PT</p>
                    <p className="text-[9px] font-semibold text-slate-500 mt-0.5">Resmi & Terpercaya</p>
                  </div>
                </div>

                {/* Desktop: Stats vertikal (original) */}
                <div className="hidden md:flex flex-col gap-4">
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
              <div className="flex-1 relative overflow-hidden h-[160px] md:h-auto">
                <img 
                  src="/image/hero.png" 
                  alt="Projasa Hero" 
                  className="w-full h-full object-cover md:object-cover"
                  style={{ objectPosition: '50% 30%' }}
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
