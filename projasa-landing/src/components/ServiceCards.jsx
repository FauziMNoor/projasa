const companies = [
  {
    name: 'PT Projasa Legal Insani',
    shortName: 'Legal Insani',
    description: 'Konsultan perizinan dan legalitas usaha terpercaya dengan pengalaman lebih dari 10 tahun.',
    tagline: 'Perizinan & Legalitas',
    image: '/image/pt/legal_insani.png',
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-100',
    services: ['Izin Usaha', 'Legalitas PT/CV', 'SAMSAT', 'Izin Reklame'],
  },
  {
    name: 'PT Projasa Nusantara Jaya',
    shortName: 'Nusantara Jaya',
    description: 'Konsultan teknik bangunan dan lingkungan dengan standar profesional tinggi.',
    tagline: 'Konstruksi & Lingkungan',
    image: '/image/pt/nusantara_jaya.png',
    color: 'from-emerald-500 to-emerald-600',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    services: ['UKL-UPL', 'PBG & SLF', 'Pengetesan Bangunan', 'As Built Drawing'],
  },
  {
    name: 'PT Projasa Teknika Studio',
    shortName: 'Teknika Studio',
    description: 'Penyedia jasa outsourcing tenaga kerja profesional untuk berbagai industri.',
    tagline: 'Outsourcing & SDM',
    image: '/image/pt/teknika_studio.png',
    color: 'from-violet-500 to-violet-600',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-100',
    services: ['Outsourcing', 'Rekrutmen', 'Manajemen SDM', 'Tenaga Profesional'],
  },
]

export default function ServiceCards({ onViewCompany, onViewServices }) {
  return (
    <section id="layanan" className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
      {/* Header */}
      <div className="reveal flex flex-col items-center text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
          Layanan Projasa
        </h2>
      </div>

      {/* Company Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {companies.map((company) => (
          <button
            key={company.name}
            onClick={() => onViewCompany(company.name)}
            className="group rounded-[2rem] border-8 border-white bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-500 overflow-hidden text-left cursor-pointer flex flex-col"
          >
            {/* Image full-width */}
            <div className="w-full h-48 overflow-hidden relative">
              <img src={company.image} alt={company.shortName} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>

            <div className="p-7 flex flex-col flex-1">
              {/* Name */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {company.tagline}
                </p>
                <h3 className="text-xl font-bold text-brand-dark tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                  PT {company.shortName}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {company.description}
              </p>

              {/* CTA */}
              <div className="mt-auto flex items-center gap-2 text-brand-blue font-bold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Lihat Layanan</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={onViewServices}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-bold text-base hover:bg-brand-hover hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          Lihat Layanan
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
        <a
          href="https://wa.me/628125532111"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Konsultasi Sekarang
        </a>
      </div>
    </section>
  )
}
