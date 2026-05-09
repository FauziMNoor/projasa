export default function Hero() {
  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.pinimg.com/736x/27/c5/d1/27c5d192d0a032a0d43fa043e748a8a1.jpg')" }}>
      
      {/* Bottom blur transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 backdrop-blur-md bg-[#f4f7fb]/20 pointer-events-none z-0" style={{ WebkitMaskImage: 'linear-gradient(to top, black 5%, transparent 100%)', maskImage: 'linear-gradient(to top, black 5%, transparent 100%)' }}></div>

      <main className="w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-12 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm mb-8 animate-[fadeInDown_0.5s_ease-out]">
            <span className="text-base">✨</span>
            <span className="text-sm font-bold text-slate-700">Konsultan Legal & Perizinan Terpercaya</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-6">
            Solusi Lengkap<br />
            <span className="text-brand-dark">Perizinan & Legal</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
            PT Projasa Legal Insani, PT Projasa Nusantara Jaya, dan PT Projasa Teknika Studio siap membantu kebutuhan legal, perizinan, teknik, dan lingkungan bisnis Anda.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-blue text-white px-7 py-4 rounded-full text-base font-bold hover:bg-brand-hover hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
              Konsultasi Gratis
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bg-white/20 rounded-full p-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#layanan" className="flex items-center gap-2 glass text-slate-800 px-7 py-4 rounded-full text-base font-bold hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              Lihat Layanan
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><path d="M2 12h20"/><path d="m14 5 7 7-7 7"/></svg>
            </a>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="flex -space-x-4">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" />
              <div className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+1k</div>
            </div>
            <p className="text-sm font-semibold text-slate-600 max-w-[200px] leading-snug">Dipercaya oleh startup & perusahaan di seluruh Indonesia</p>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-[500px]">
            
            {/* Main Visual */}
            <div className="w-full aspect-[4/4.5] rounded-[2.5rem] bg-slate-100 shadow-2xl relative z-10 overflow-hidden border-8 border-white group">
              <img src="/image/hero.png" alt="PROJASA Digital" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -left-4 md:-left-12 top-10 glass p-5 rounded-2xl shadow-xl z-20 animate-float">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-brand-dark">150+</h3>
              </div>
              <p className="text-sm font-semibold text-slate-500 ml-11">Proyek Selesai</p>
            </div>
            
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 glass p-5 rounded-2xl shadow-xl z-20 animate-float-delayed">
              <h3 className="text-3xl font-extrabold text-brand-dark mb-1 flex items-center gap-1">
                98% 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </h3>
              <p className="text-sm font-semibold text-slate-500">Kepuasan Klien</p>
            </div>
            
            <div className="absolute -left-2 md:-left-8 bottom-10 glass p-5 rounded-2xl shadow-xl z-20 animate-float">
              <h3 className="text-3xl font-extrabold text-brand-dark mb-1">12+</h3>
              <p className="text-sm font-semibold text-slate-500">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
