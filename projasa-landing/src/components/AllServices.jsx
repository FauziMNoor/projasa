import { useState } from 'react'

const servicesData = {
  'PT Projasa Legal Insani': {
    color: 'blue',
    image: '/image/pt/legal_insani.png',
    services: [
      {
        category: 'PERIZINAN',
        name: 'Izin Usaha Mikro',
        description: 'Layanan perizinan usaha mikro dengan proses cepat dan mudah. Kami membantu mengurus semua dokumen yang diperlukan untuk mendapatkan izin usaha mikro Anda.',
        price: 'Rp 1.500.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Usaha+Mikro+dari+PT+Projasa+Legal+Insani.',
        image: '/image/gallerycard/WhatsApp Image 2026-05-09 at 01.18.01.jpeg',
      },
      {
        category: 'PERIZINAN',
        name: 'Izin Usaha Kecil',
        description: 'Izin resmi untuk usaha kecil menengah. Proses lengkap dari awal hingga izin terbit dengan pendampingan penuh.',
        price: 'Rp 3.500.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Usaha+Kecil+dari+PT+Projasa+Legal+Insani.',
        image: '/image/gallerycard/ushkecil.jpeg',
      },
      {
        category: 'PERIZINAN',
        name: 'Izin Reklame',
        description: 'Penerbitan izin pemasangan reklame untuk bisnis Anda. Termasuk survei lokasi dan pengurusan dokumen ke instansi terkait.',
        price: 'Rp 2.500.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Izin+Reklame+dari+PT+Projasa+Legal+Insani.',
        image: '/image/gallerycard/reklame.jpeg',
      },
      {
        category: 'KENDARAAN',
        name: 'SAMSAT',
        description: 'Layanan pengurusan pajak kendaraan bermotor, mutasi, balik nama, dan semua keperluan SAMSAT lainnya.',
        price: 'Rp 500.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+SAMSAT+dari+PT+Projasa+Legal+Insani.',
        image: '/image/gallerycard/samsat.jpeg',
      },
    ],
  },
  'PT Projasa Nusantara Jaya': {
    color: 'green',
    image: '/image/pt/nusantara_jaya.png',
    services: [
      {
        category: 'LINGKUNGAN',
        name: 'UKL - UPL',
        description: 'Penyusunan dokumen Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan sesuai regulasi KLHK.',
        price: 'Rp 15.000.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+UKL+-+UPL+dari+PT+Projasa+Nusantara+Jaya.',
        image: '/image/gallerycard/ukl.jpeg',
      },
      {
        category: 'KONSTRUKSI',
        name: 'Pengetesan Bangunan',
        description: 'Layanan pengetesan struktur bangunan meliputi uji kekuatan beton, keamanan struktur, dan kelayakan bangunan.',
        price: 'Rp 25.000.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Pengetesan+Bangunan+dari+PT+Projasa+Nusantara+Jaya.',
        image: '/image/gallerycard/pembagunan.jpeg',
      },
      {
        category: 'KONSTRUKSI',
        name: 'As Built Drawing',
        description: 'Pembuatan gambar teknis as-built drawing untuk dokumentasi proyek konstruksi yang telah selesai.',
        price: 'Rp 8.000.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+As+Built+Drawing+dari+PT+Projasa+Nusantara+Jaya.',
        image: '/image/gallerycard/draw.jpeg',
      },
      {
        category: 'PERIZINAN',
        name: 'PBG - SLF',
        description: 'Pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) untuk bangunan komersial dan residensial.',
        price: 'Rp 20.000.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+PBG+-+SLF+dari+PT+Projasa+Nusantara+Jaya.',
        image: '/image/gallerycard/pbg.jpeg',
      },
    ],
  },
  'PT Projasa Teknika Studio': {
    color: 'purple',
    image: '/image/pt/teknika_studio.png',
    services: [
      {
        category: 'SDM',
        name: 'Jasa Outsourcing',
        description: 'Layanan penyediaan tenaga kerja outsourcing profesional untuk berbagai posisi seperti admin, customer service, security, cleaning service, dan lainnya.',
        price: 'Rp 5.000.000',
        wa: 'https://wa.me/628125532111?text=Halo+Projasa%2C+saya+ingin+konsultasi+mengenai+layanan+Jasa+Outsourcing+dari+PT+Projasa+Teknika+Studio.',
        image: '/image/gallerycard/outsorching.jpeg',
      },
    ],
  },
}

const categoryColors = {
  'PERIZINAN': 'bg-blue-50 text-blue-600 border-blue-100',
  'KENDARAAN': 'bg-amber-50 text-amber-600 border-amber-100',
  'LINGKUNGAN': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'KONSTRUKSI': 'bg-orange-50 text-orange-600 border-orange-100',
  'SDM': 'bg-violet-50 text-violet-600 border-violet-100',
}

export default function AllServices({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('Semua')

  const allCategories = ['Semua', ...new Set(
    Object.values(servicesData).flatMap(pt => pt.services.map(s => s.category))
  )]

  const filteredServices = Object.entries(servicesData).flatMap(([ptName, ptData]) =>
    ptData.services
      .filter(s => activeFilter === 'Semua' || s.category === activeFilter)
      .map(s => ({ ...s, ptName }))
  )

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-dark hover:text-brand-blue font-bold text-sm transition-colors mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          Kembali ke Beranda
        </button>

        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
          Seluruh Layanan Kami
        </h2>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold border ${categoryColors[service.category] || 'bg-slate-50 text-slate-600 border-slate-100'}`}>
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* PT Name */}
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {service.ptName}
                </p>

                <h3 className="text-xl font-bold text-brand-dark mb-2 tracking-tight">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Mulai dari</span>
                  <span className="text-lg font-extrabold text-brand-dark">{service.price}</span>
                </div>

                {/* CTA */}
                <a
                  href={service.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg font-medium">Tidak ada layanan untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  )
}
