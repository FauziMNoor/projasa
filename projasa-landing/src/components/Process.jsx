const steps = [
  {
    num: 1,
    title: 'Konsultasi & Analisis',
    description: 'Kami mulai dengan memahami kebutuhan bisnis Anda, menganalisis dokumen yang diperlukan, dan menyusun rencana kerja yang jelas.',
    items: ['Konsultasi gratis via WhatsApp', 'Analisis kebutuhan dokumen', 'Penyusunan timeline & quotation'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: 2,
    title: 'Pengerjaan & Pengurusan',
    description: 'Tim kami mengurus seluruh proses perizinan dan dokumen legal, berkoordinasi dengan instansi terkait untuk memastikan kelancaran.',
    items: ['Penyusunan dokumen lengkap', 'Koordinasi dengan instansi', 'Update progress real-time'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: 3,
    title: 'Selesai & Serah Terima',
    description: 'Dokumen selesai, izin terbit, dan kami serahkan seluruh hasil kerja kepada Anda dengan penjelasan lengkap.',
    items: ['Dokumen final terverifikasi', 'Serah terima resmi', 'Dukungan pasca-penyelesaian'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Process() {
  return (
    <section id="proses" className="w-full py-24 bg-gradient-to-b from-white to-[#f4f0fd] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[13px] font-bold text-slate-500 tracking-widest mb-4 uppercase">Proses Kerja</p>
          <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-black text-slate-900 tracking-tighter">
            Cara Kami Bekerja
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Image */}
              <div className="w-full h-48 overflow-hidden relative">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#c892ff] text-white flex items-center justify-center text-sm font-black shadow-lg">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 font-medium">{step.description}</p>
                
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 text-[13px] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#e6f5f2] flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
