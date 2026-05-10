export default function Footer() {
  return (
    <footer id="kontak" className="bg-white pt-16 sm:pt-24 pb-0 relative">
      
      {/* === MOBILE FOOTER: Compact — hanya kontak + sosmed === */}
      <div className="md:hidden px-4 pb-8">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center text-center mb-6">
          <img src="/logo.png" alt="PROJASA" className="h-8 w-auto mb-3" />
          <p className="text-[13px] font-medium text-slate-500">Solusi Legalitas Bisnis Terpercaya</p>
        </div>

        {/* Kontak Info */}
        <div className="bg-slate-50 rounded-2xl p-5 mb-5">
          <h4 className="font-bold text-slate-900 text-[13px] mb-3">Kontak</h4>
          <ul className="space-y-2.5 text-[12px] font-medium text-slate-600">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-slate-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Jl. Pulau Batanta No.18 B, Denpasar, Bali
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="https://wa.me/628125532111" className="text-slate-700">0812-5532-111</a>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:support@projasa.co.id" className="text-slate-700">support@projasa.co.id</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-5 mb-5">
          <a href="https://www.instagram.com/projasa.co.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#c892ff] hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.tiktok.com/@projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#c892ff] hover:text-white transition-all">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
          <a href="https://web.facebook.com/projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#c892ff] hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#25D366] hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-[11px] font-medium text-slate-400">
          © 2026 Projasa Group. Hak cipta dilindungi.
        </p>
      </div>

      {/* === DESKTOP FOOTER: Full layout === */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Area: Giant CTA */}
          <div className="lg:w-[40%] flex flex-col items-start">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.05] font-black text-slate-900 tracking-tighter uppercase mb-5">
              Mulai Dengan<br/>Projasa Hari Ini
            </h2>
            <p className="text-[15px] font-medium text-slate-800 mb-8">
              Konsultasi gratis, tanpa biaya tersembunyi. Hubungi kami sekarang.
            </p>
            <a 
              href="https://wa.me/628125532111"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c892ff] hover:bg-[#b87df8] text-white px-8 py-3.5 rounded-full text-[15px] font-bold transition-all shadow-sm"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Right Area: Footer Links Grid */}
          <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Projasa</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li><a href="#layanan" className="hover:text-[#c892ff] transition-colors">Izin Usaha</a></li>
                <li><a href="#layanan" className="hover:text-[#c892ff] transition-colors">Legalitas PT/CV</a></li>
                <li><a href="#layanan" className="hover:text-[#c892ff] transition-colors">PBG & SLF</a></li>
                <li><a href="#layanan" className="hover:text-[#c892ff] transition-colors">UKL-UPL</a></li>
                <li><a href="#layanan" className="hover:text-[#c892ff] transition-colors">SAMSAT</a></li>
                <li><a href="#layanan" className="hover:text-[#c892ff] transition-colors">Outsourcing</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Perusahaan</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">PT Legal Insani</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">PT Nusantara Jaya</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">PT Teknika Studio</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Dukungan</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li><a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="hover:text-[#c892ff] transition-colors">WhatsApp</a></li>
                <li><a href="mailto:support@projasa.co.id" className="hover:text-[#c892ff] transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Kontak</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li>Jl. Pulau Batanta No.18 B, Denpasar, Bali 80114</li>
                <li><a href="mailto:support@projasa.co.id" className="hover:text-[#c892ff] transition-colors">support@projasa.co.id</a></li>
                <li><a href="https://wa.me/628125532111" className="hover:text-[#c892ff] transition-colors">0812-5532-111</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Social & Copyright Area */}
        <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-[13px] font-semibold text-slate-800">
          
          <div className="flex flex-col gap-6">
            {/* Social Icons Bar */}
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/projasa.co.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#c892ff] cursor-pointer transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-[#c892ff] cursor-pointer transition-colors">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://web.facebook.com/projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#c892ff] cursor-pointer transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
            
            {/* Copyright & Logo */}
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="PROJASA" className="h-6 w-auto" />
              <span className="font-medium text-slate-800">© 2026 Projasa Group. Hak cipta dilindungi.</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            <a href="#" className="hover:text-[#c892ff] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#c892ff] transition-colors">Syarat Ketentuan</a>
          </div>

        </div>
      </div>

    </footer>
  )
}
