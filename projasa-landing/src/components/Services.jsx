const services = [
  {
    num: '01',
    title: 'Konsultan Legal & Perizinan',
    description: 'Pendirian PT/CV, pengurusan NIB, izin usaha, KBLI, PKP, dan seluruh dokumen legalitas perusahaan Anda. Kami memastikan bisnis Anda berjalan sesuai regulasi yang berlaku.',
    image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process1.webp',
    bg: 'bg-white',
    numColor: 'text-slate-100',
    sticky: 'top-6 md:top-24',
    z: 'z-10',
  },
  {
    num: '02',
    title: 'Konsultan Teknik & Lingkungan',
    description: 'Penyusunan dokumen AMDAL, UKL-UPL, SPPL, serta konsultasi teknik untuk proyek konstruksi dan infrastruktur. Solusi lengkap untuk kepatuhan lingkungan.',
    image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process2.webp',
    bg: 'bg-[#F8FAFC]',
    numColor: 'text-blue-100/50',
    sticky: 'top-10 md:top-32',
    z: 'z-20',
  },
  {
    num: '03',
    title: 'Outsourcing Tenaga Kerja',
    description: 'Penyediaan tenaga kerja profesional dan terlatih untuk berbagai sektor industri. Kami menangani rekrutmen, pelatihan, dan manajemen SDM untuk efisiensi bisnis Anda.',
    image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process3.webp',
    bg: 'bg-white',
    numColor: 'text-slate-100',
    sticky: 'top-14 md:top-40',
    z: 'z-30',
  },
  {
    num: '04',
    title: 'Pengurusan Izin Khusus',
    description: 'Izin lingkungan, izin konstruksi (SLF/PBG), izin operasional, dan perizinan khusus lainnya. Kami memiliki jaringan luas untuk mempercepat proses perizinan Anda.',
    image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process4.webp',
    bg: 'bg-[#F8FAFC]',
    numColor: 'text-blue-100/50',
    sticky: 'top-18 md:top-48',
    z: 'z-40',
  },
]

export default function Services() {
  return (
    <section id="layanan" className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
      {/* Header */}
      <div className="reveal flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><rect width="8" height="8" x="3" y="3" rx="2"/><rect width="8" height="8" x="13" y="13" rx="2"/><rect width="8" height="8" x="13" y="3" rx="2"/><rect width="8" height="8" x="3" y="13" rx="2"/></svg>
          <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Apa yang Kami Kerjakan</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight mb-6">
          Layanan Kami
        </h2>
      </div>

      {/* Stacking Cards */}
      <div className="flex flex-col gap-12 md:gap-32 relative w-full pb-20">
        {services.map((service) => (
          <div
            key={service.num}
            className={`reveal-fade sticky ${service.sticky} ${service.z} ${service.bg} rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08),0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row items-stretch min-h-[500px] gap-12 lg:gap-20 transition-all`}
          >
            {/* Faint Number */}
            <span className={`absolute top-6 right-10 md:right-16 text-[8rem] md:text-[14rem] font-bold ${service.numColor} select-none pointer-events-none tracking-tighter leading-none z-0`}>
              {service.num}
            </span>

            {/* Content */}
            <div className="flex flex-col items-start lg:w-1/2 relative z-10 h-full">
              <div className="w-full">
                <div className="inline-flex px-5 py-2 rounded-full bg-slate-50 shadow-sm border border-slate-200 text-xs font-bold text-brand-dark mb-6 tracking-wide uppercase">
                  Service {service.num}
                </div>
                <h3 className="text-6xl md:text-8xl font-medium text-brand-dark mb-8 lg:mb-0 leading-none tracking-tight">{service.num}</h3>
              </div>

              <div className="mt-auto pt-16">
                <h4 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-5 tracking-tight">{service.title}</h4>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full relative z-10 flex items-center justify-center">
              <div className="w-full aspect-[4/4] md:aspect-[4/5] lg:aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden shadow-2xl border-4 border-white relative group">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
