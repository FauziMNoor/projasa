const companies = [
  {
    name: 'PT Projasa Legal Insani',
    shortName: 'PT Legal Insani',
    description: 'Perizinan & Legalitas',
    image: '/image/pt/legal_insani.png',
    serviceCount: 4,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'group-hover:shadow-blue-500/25',
  },
  {
    name: 'PT Projasa Nusantara Jaya',
    shortName: 'PT Nusantara Jaya',
    description: 'Konstruksi & Lingkungan',
    image: '/image/pt/nusantara_jaya.png',
    serviceCount: 4,
    color: 'from-emerald-500 to-emerald-600',
    hoverColor: 'group-hover:shadow-emerald-500/25',
  },
  {
    name: 'PT Projasa Teknika Studio',
    shortName: 'PT Teknika Studio',
    description: 'Outsourcing & SDM',
    image: '/image/pt/teknika_studio.png',
    serviceCount: 1,
    color: 'from-violet-500 to-violet-600',
    hoverColor: 'group-hover:shadow-violet-500/25',
  },
]

export default function CompanyButtons({ onViewCompany }) {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {companies.map((company, i) => (
          <button
            key={company.name}
            onClick={() => onViewCompany(company.name)}
            className={`reveal delay-${(i + 1) * 100} group relative bg-white rounded-2xl border border-slate-100 p-6 flex items-center gap-4 text-left hover:-translate-y-1 hover:shadow-xl ${company.hoverColor} transition-all duration-300 cursor-pointer`}
          >
            {/* Company Logo */}
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
              <img
                src={company.image}
                alt={company.shortName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-brand-dark truncate group-hover:text-brand-blue transition-colors duration-300">
                {company.shortName}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {company.description}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${company.color}`}></span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {company.serviceCount} Layanan
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-50 group-hover:bg-brand-blue flex items-center justify-center transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors duration-300">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
