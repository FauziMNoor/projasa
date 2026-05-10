import { Plus, ArrowRight } from 'lucide-react'

const companies = [
  {
    name: 'PT Projasa Legal Insani',
    shortName: 'Legal Insani',
    description: 'Konsultan perizinan dan legalitas usaha terpercaya dengan pengalaman lebih dari 10 tahun.',
    tagline: 'Perizinan & Legalitas',
    image: '/image/pt/legal_insani.png',
    services: ['Izin Usaha', 'Legalitas PT/CV', 'SAMSAT', 'Izin Reklame'],
    bgGradient: 'bg-gradient-to-br from-[#e1d3fe] to-[#cfa3f7]',
    geometricColor: 'bg-[#e6fbf4]',
  },
  {
    name: 'PT Projasa Nusantara Jaya',
    shortName: 'Nusantara Jaya',
    description: 'Konsultan teknik bangunan dan lingkungan dengan standar profesional tinggi.',
    tagline: 'Konstruksi & Lingkungan',
    image: '/image/pt/nusantara_jaya.png',
    services: ['UKL-UPL', 'PBG & SLF', 'Pengetesan Bangunan', 'As Built Drawing'],
    bgGradient: 'bg-[#0a0a0b]',
    dark: true,
  },
  {
    name: 'PT Projasa Teknika Studio',
    shortName: 'Teknika Studio',
    description: 'Penyedia jasa outsourcing tenaga kerja profesional untuk berbagai industri.',
    tagline: 'Outsourcing & SDM',
    image: '/image/pt/teknika_studio.png',
    services: ['Outsourcing', 'Rekrutmen', 'Manajemen SDM', 'Tenaga Profesional'],
    bgGradient: 'bg-gradient-to-br from-[#dbeafe] to-[#93c5fd]',
    geometricColor: 'bg-[#f0fdf4]',
  },
]

export default function ServiceCards({ onViewCompany, onViewServices }) {
  return (
    <section id="layanan" className="pt-8 pb-32 w-full bg-gradient-to-b from-[#f4f0fd] to-white relative">
      <div className="px-6 max-w-7xl mx-auto flex flex-col gap-16 md:gap-[50vh]">
        
        {companies.map((company, index) => (
          <div 
            key={company.name}
            className={`relative md:sticky md:top-20 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center p-10 md:p-16 gap-12 shadow-lg border ${
              company.dark 
                ? 'bg-[#0a0a0b] border-slate-800 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]' 
                : `${company.bgGradient} border-slate-100`
            }`}
            style={{ zIndex: (index + 1) * 10 }}
          >
            {/* Background effects */}
            {!company.dark && company.geometricColor && (
              <>
                <div className={`absolute top-0 right-0 w-[150%] h-[150%] ${company.geometricColor} origin-top-right rotate-[30deg] translate-x-[-45%] z-0`}></div>
                <div className={`absolute bottom-0 left-1/4 w-[500px] h-[500px] ${company.geometricColor} origin-bottom-left rotate-[45deg] z-0 opacity-80`}></div>
              </>
            )}

            {company.dark && (
              <>
                <div 
                  className="absolute right-0 top-0 w-2/3 h-full opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to right, #4ade80 0px, #8b5cf6 2px, transparent 2px, transparent 16px)',
                    maskImage: 'radial-gradient(ellipse at right, black 10%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at right, black 10%, transparent 80%)'
                  }}
                ></div>
                <div className="absolute right-1/4 top-0 w-1/2 h-full opacity-40 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent blur-[100px] pointer-events-none"></div>
              </>
            )}

            {/* Left Content */}
            <div className="relative z-10 flex-1 w-full max-w-md lg:pr-4">
              <p className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${company.dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {company.tagline}
              </p>
              <h2 className={`text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter leading-[1.05] mb-4 ${company.dark ? 'text-white' : 'text-slate-900'}`}>
                PT {company.shortName}
              </h2>
              <p className={`font-medium text-[15px] mb-6 leading-relaxed max-w-sm ${company.dark ? 'text-slate-300' : 'text-slate-800'}`}>
                {company.description}
              </p>

              {/* Services list */}
              <div className="flex flex-wrap gap-2 mb-8">
                {company.services.map((service) => (
                  <span 
                    key={service} 
                    className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                      company.dark 
                        ? 'bg-white/10 text-white/80 border border-white/10' 
                        : 'bg-white/60 text-slate-700 border border-white/80'
                    }`}
                  >
                    {service}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => onViewCompany(company.name)}
                className={`px-8 py-3 rounded-full text-[15px] font-semibold transition-colors cursor-pointer ${
                  company.dark 
                    ? 'border border-white text-white bg-transparent hover:bg-white hover:text-black' 
                    : 'border border-slate-900 text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white'
                }`}
              >
                Lihat Layanan
              </button>
            </div>

            {/* Right Content - Image */}
            <div className="relative z-10 flex-1 w-full max-w-[500px]">
              <div className={`p-2 md:p-3 rounded-[20px] backdrop-blur-md ${
                company.dark 
                  ? 'bg-slate-800/60 border border-slate-700 shadow-2xl' 
                  : 'bg-white/20 border-2 border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
              }`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={company.image} 
                    alt={company.shortName} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="flex flex-wrap justify-center gap-4 mt-20 px-6">
        <button
          onClick={onViewServices}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c892ff] hover:bg-[#b87df8] text-white font-bold text-base transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-lg"
        >
          Lihat Semua Layanan
          <ArrowRight className="w-4 h-4" />
        </button>
        <a
          href="https://wa.me/628125532111"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#20BA5A] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
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
