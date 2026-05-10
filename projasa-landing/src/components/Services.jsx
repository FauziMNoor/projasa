import { useState } from 'react'

const layananData = [
  {
    category: 'PERIZINAN',
    name: 'Izin Usaha Mikro',
    description: 'Layanan perizinan usaha mikro dengan proses cepat dan mudah.',
    price: 'Rp 1.500.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Usaha+Mikro.',
    image: '/image/gallerycard/WhatsApp Image 2026-05-09 at 01.18.01.jpeg',
    ptName: 'PT Projasa Legal Insani',
  },
  {
    category: 'PERIZINAN',
    name: 'Izin Usaha Kecil',
    description: 'Izin resmi untuk usaha kecil menengah dengan pendampingan penuh.',
    price: 'Rp 3.500.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Usaha+Kecil.',
    image: '/image/gallerycard/ushkecil.jpeg',
    ptName: 'PT Projasa Legal Insani',
  },
  {
    category: 'PERIZINAN',
    name: 'Izin Reklame',
    description: 'Penerbitan izin pemasangan reklame untuk bisnis Anda.',
    price: 'Rp 2.500.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Reklame.',
    image: '/image/gallerycard/reklame.jpeg',
    ptName: 'PT Projasa Legal Insani',
  },
  {
    category: 'KENDARAAN',
    name: 'SAMSAT',
    description: 'Pengurusan pajak kendaraan, mutasi, balik nama, dan lainnya.',
    price: 'Rp 500.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+SAMSAT.',
    image: '/image/gallerycard/samsat.jpeg',
    ptName: 'PT Projasa Legal Insani',
  },
  {
    category: 'LINGKUNGAN',
    name: 'UKL - UPL',
    description: 'Penyusunan dokumen pengelolaan dan pemantauan lingkungan.',
    price: 'Rp 15.000.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+UKL+-+UPL.',
    image: '/image/gallerycard/ukl.jpeg',
    ptName: 'PT Projasa Nusantara Jaya',
  },
  {
    category: 'KONSTRUKSI',
    name: 'Pengetesan Bangunan',
    description: 'Uji kekuatan beton, keamanan struktur, dan kelayakan bangunan.',
    price: 'Rp 25.000.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Pengetesan+Bangunan.',
    image: '/image/gallerycard/pembagunan.jpeg',
    ptName: 'PT Projasa Nusantara Jaya',
  },
  {
    category: 'KONSTRUKSI',
    name: 'As Built Drawing',
    description: 'Gambar teknis as-built drawing untuk dokumentasi proyek konstruksi.',
    price: 'Rp 8.000.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+As+Built+Drawing.',
    image: '/image/gallerycard/draw.jpeg',
    ptName: 'PT Projasa Nusantara Jaya',
  },
  {
    category: 'PERIZINAN',
    name: 'PBG - SLF',
    description: 'Persetujuan Bangunan Gedung dan Sertifikat Laik Fungsi.',
    price: 'Rp 20.000.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+PBG+-+SLF.',
    image: '/image/gallerycard/pbg.jpeg',
    ptName: 'PT Projasa Nusantara Jaya',
  },
  {
    category: 'SDM',
    name: 'Jasa Outsourcing',
    description: 'Penyediaan tenaga kerja outsourcing profesional untuk berbagai posisi.',
    price: 'Rp 5.000.000',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Jasa+Outsourcing.',
    image: '/image/gallerycard/outsorching.jpeg',
    ptName: 'PT Projasa Teknika Studio',
  },
]

const categoryColors = {
  'PERIZINAN': 'bg-blue-50 text-blue-600 border-blue-200',
  'KENDARAAN': 'bg-amber-50 text-amber-600 border-amber-200',
  'LINGKUNGAN': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'KONSTRUKSI': 'bg-orange-50 text-orange-600 border-orange-200',
  'SDM': 'bg-violet-50 text-violet-600 border-violet-200',
}

const allCategories = ['Semua', ...new Set(layananData.map(s => s.category))]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('Semua')

  const filteredLayanan = activeFilter === 'Semua'
    ? layananData
    : layananData.filter(item => item.category === activeFilter)

  return (
    <section id="harga" className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-white via-[#ecf4f8] to-[#f4f0fd]">
      {/* Background texture — same as Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none"></div>
      <div 
        className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none opacity-30"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">

          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-black text-slate-900 tracking-tighter">
            Layanan Kami
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white/70 text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredLayanan.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/50 backdrop-blur-md rounded-[16px] sm:rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-28 sm:h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold border ${categoryColors[item.category] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6">
                {/* PT Name */}
                <p className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                  {item.ptName}
                </p>

                <h3 className="text-sm sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tight leading-tight">
                  {item.name}
                </h3>

                <p className="hidden sm:block text-sm text-slate-500 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mb-2 sm:mb-5 pb-2 sm:pb-4 border-b border-slate-100">
                  <span className="text-[8px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Mulai dari</span>
                  <span className="text-xs sm:text-lg font-extrabold text-slate-900">{item.price}</span>
                </div>

                {/* CTA */}
                <a
                  href={item.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 sm:px-5 py-2 sm:py-3 rounded-full text-[10px] sm:text-sm font-bold transition-all duration-300 shadow-sm w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredLayanan.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg font-medium">Tidak ada layanan untuk kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  )
}
