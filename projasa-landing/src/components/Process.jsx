const steps = [
  {
    num: 1,
    title: 'Konsultasi & Analisis',
    description: 'Kami mulai dengan memahami kebutuhan bisnis Anda, menganalisis dokumen yang diperlukan, dan menyusun rencana kerja yang jelas.',
    items: ['Konsultasi gratis via WhatsApp', 'Analisis kebutuhan dokumen', 'Penyusunan timeline & quotation'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
  {
    num: 2,
    title: 'Pengerjaan & Pengurusan',
    description: 'Tim kami mengurus seluruh proses perizinan dan dokumen legal, berkoordinasi dengan instansi terkait untuk memastikan kelancaran.',
    items: ['Penyusunan dokumen lengkap', 'Koordinasi dengan instansi', 'Update progress real-time'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    reverse: true,
  },
  {
    num: 3,
    title: 'Selesai & Serah Terima',
    description: 'Dokumen selesai, izin terbit, dan kami serahkan seluruh hasil kerja kepada Anda dengan penjelasan lengkap.',
    items: ['Dokumen final terverifikasi', 'Serah terima resmi', 'Dukungan pasca-penyelesaian'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
]

export default function Process() {
  return (
    <section id="proses" className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
      {/* Header */}
      <div className="reveal flex flex-col items-center text-center mb-16">
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-brand-dark tracking-tight mb-4">
          Proses Kami
        </h2>
        
      </div>

      {/* Timeline */}
      <div className="relative bg-white rounded-[3rem] p-8 md:p-12 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        {/* Central Line */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-px bg-slate-300 -translate-x-1/2 z-0"></div>

        <div className="flex flex-col gap-20 md:gap-32">
          {steps.map((step) => (
            <div key={step.num} className={`reveal relative flex ${step.reverse ? 'flex-col-reverse md:flex-row' : 'flex-col md:flex-row'} items-center gap-10 lg:gap-24 z-10`}>
              {/* Number Node */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-blue text-white items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/40 ring-8 ring-white z-20">
                {step.num}
              </div>
              
              {/* Image (left for normal, right for reverse) */}
              {!step.reverse && (
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
              
              {/* Text */}
              <div className={`w-full md:w-1/2 ${step.reverse ? 'md:pr-4 lg:pr-10' : 'md:pl-4 lg:pl-10'}`}>
                <h3 className="text-3xl font-semibold text-brand-dark mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">{step.description}</p>
                
                <ul className="space-y-5">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (right for reverse) */}
              {step.reverse && (
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
