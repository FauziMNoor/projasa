export default function Footer() {
  return (
    <footer id="kontak" className="bg-white pt-24 pb-0 relative">
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
          <div className="flex flex-col gap-10">
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
      </div>

      {/* Bottom Social & Copyright Area */}
      <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-[13px] font-semibold text-slate-800">
        
        <div className="flex flex-col gap-6">
          {/* Social Icons Bar */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a href="https://www.instagram.com/projasa.co.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#c892ff] cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-[#c892ff] cursor-pointer transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            {/* Facebook */}
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


    </footer>
  )
}
