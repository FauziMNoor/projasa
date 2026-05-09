import { useState } from 'react'

// Data semua layanan (flat)
const allServices = [
  {
    category: 'PERIZINAN',
    name: 'Izin Usaha Mikro',
    description: 'Layanan perizinan usaha mikro dengan proses cepat dan mudah.',
    price: 'Rp 1.500.000',
    pt: 'PT Projasa Legal Insani',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Usaha+Mikro+dari+PT+Projasa+Legal+Insani.',
    image: '/image/gallerycard/WhatsApp Image 2026-05-09 at 01.18.01.jpeg',
  },
  {
    category: 'PERIZINAN',
    name: 'Izin Usaha Kecil',
    description: 'Izin resmi untuk usaha kecil menengah dengan pendampingan penuh.',
    price: 'Rp 3.500.000',
    pt: 'PT Projasa Legal Insani',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Usaha+Kecil+dari+PT+Projasa+Legal+Insani.',
    image: '/image/gallerycard/ushkecil.jpeg',
  },
  {
    category: 'PERIZINAN',
    name: 'Izin Reklame',
    description: 'Penerbitan izin pemasangan reklame termasuk survei lokasi.',
    price: 'Rp 2.500.000',
    pt: 'PT Projasa Legal Insani',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Reklame+dari+PT+Projasa+Legal+Insani.',
    image: '/image/gallerycard/reklame.jpeg',
  },
  {
    category: 'KENDARAAN',
    name: 'SAMSAT',
    description: 'Pengurusan pajak kendaraan, mutasi, balik nama, dan lainnya.',
    price: 'Rp 500.000',
    pt: 'PT Projasa Legal Insani',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+SAMSAT+dari+PT+Projasa+Legal+Insani.',
    image: '/image/gallerycard/samsat.jpeg',
  },
  {
    category: 'LINGKUNGAN',
    name: 'UKL - UPL',
    description: 'Penyusunan dokumen lingkungan sesuai regulasi KLHK.',
    price: 'Rp 15.000.000',
    pt: 'PT Projasa Nusantara Jaya',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+UKL+-+UPL+dari+PT+Projasa+Nusantara+Jaya.',
    image: '/image/gallerycard/ukl.jpeg',
  },
  {
    category: 'KONSTRUKSI',
    name: 'Pengetesan Bangunan',
    description: 'Uji kekuatan beton, keamanan struktur, dan kelayakan bangunan.',
    price: 'Rp 25.000.000',
    pt: 'PT Projasa Nusantara Jaya',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Pengetesan+Bangunan+dari+PT+Projasa+Nusantara+Jaya.',
    image: '/image/gallerycard/pembagunan.jpeg',
  },
  {
    category: 'KONSTRUKSI',
    name: 'As Built Drawing',
    description: 'Gambar teknis as-built drawing untuk dokumentasi proyek konstruksi.',
    price: 'Rp 8.000.000',
    pt: 'PT Projasa Nusantara Jaya',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+As+Built+Drawing+dari+PT+Projasa+Nusantara+Jaya.',
    image: '/image/gallerycard/draw.jpeg',
  },
  {
    category: 'PERIZINAN',
    name: 'PBG - SLF',
    description: 'Pengurusan Persetujuan Bangunan Gedung dan Sertifikat Laik Fungsi.',
    price: 'Rp 20.000.000',
    pt: 'PT Projasa Nusantara Jaya',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+PBG+-+SLF+dari+PT+Projasa+Nusantara+Jaya.',
    image: '/image/gallerycard/pbg.jpeg',
  },
  {
    category: 'SDM',
    name: 'Jasa Outsourcing',
    description: 'Penyediaan tenaga kerja profesional untuk berbagai posisi.',
    price: 'Rp 5.000.000',
    pt: 'PT Projasa Teknika Studio',
    wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Jasa+Outsourcing+dari+PT+Projasa+Teknika+Studio.',
    image: '/image/gallerycard/outsorching.jpeg',
  },
]

const categories = ['Semua', 'PERIZINAN', 'KONSTRUKSI', 'LINGKUNGAN', 'KENDARAAN', 'SDM']

const categoryColors = {
  'PERIZINAN': 'bg-blue-50 text-blue-600 border-blue-200',
  'KENDARAAN': 'bg-amber-50 text-amber-600 border-amber-200',
  'LINGKUNGAN': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  'KONSTRUKSI': 'bg-orange-50 text-orange-600 border-orange-200',
  'SDM': 'bg-violet-50 text-violet-600 border-violet-200',
}

const categoryIcons = {
  'Semua': (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
  ),
  'PERIZINAN': (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  ),
  'KONSTRUKSI': (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/></svg>
  ),
  'LINGKUNGAN': (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  'KENDARAAN': (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14v-5H5z"/><path d="M2 12l3-6h14l3 6"/><circle cx="7.5" cy="17" r="2.5"/><circle cx="16.5" cy="17" r="2.5"/></svg>
  ),
  'SDM': (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
}

export default function ServiceCards() {
  const [activeFilter, setActiveFilter] = useState('Semua')

  const filtered = activeFilter === 'Semua'
    ? allServices
    : allServices.filter(s => s.category === activeFilter)

  return (
    <section id="layanan" className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
      {/* Header */}
      <div className="reveal flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
            <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
          <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Layanan Kami</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
          Solusi Lengkap untuk Bisnis Anda
        </h2>
      </div>

      {/* Category Filter */}
      <div className="reveal delay-100 flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-blue hover:text-brand-blue hover:shadow-sm'
            }`}
          >
            <span className={activeFilter === cat ? 'text-white' : 'text-slate-400'}>{categoryIcons[cat]}</span>
            {cat === 'Semua' ? 'Semua' : cat.charAt(0) + cat.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service, idx) => (
          <div
            key={service.name}
            className={`reveal delay-${Math.min((idx % 3 + 1) * 100, 300)} group bg-white rounded-[2rem] border-8 border-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col`}
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Category badge */}
              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold border backdrop-blur-sm ${categoryColors[service.category]}`}>
                {service.category}
              </span>
              {/* Price badge */}
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 text-brand-dark border border-white/50 backdrop-blur-sm shadow-sm">
                {service.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* PT Name */}
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                {service.pt}
              </p>

              {/* Service Name */}
              <h3 className="text-lg font-bold text-brand-dark mb-2 tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              {/* CTA Button */}
              <a
                href={service.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eba59] text-white px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-green-500/20 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Konsultasi Gratis
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg font-medium">Tidak ada layanan untuk kategori ini.</p>
        </div>
      )}
    </section>
  )
}
