export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 pb-12 mt-10 relative z-10">
      <div className="reveal delay-100 bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center overflow-hidden">
        
        {/* Brand Logo */}
        <div className="w-full flex justify-center items-center py-10 md:py-16">
          <img
            src="/logo.png"
            alt="PROJASA"
            className="h-28 md:h-36 lg:h-44 w-auto"
            style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5)) drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }}
          />
        </div>
        
        {/* Contact & Maps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Left - Kontak */}
          <div className="flex flex-col justify-center text-left space-y-4">
            <h3 className="text-lg font-semibold text-brand-dark">Kontak Kami</h3>
            
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mt-0.5 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <p className="text-sm text-slate-600 leading-relaxed">
                Jl. Pulau Batanta No.18 B, Dauh Puri Kauh, Kec. Denpasar Bar., Kota Denpasar, Bali 80114
              </p>
            </div>

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:support@projasa.co.id" className="text-sm text-slate-600 hover:text-brand-blue transition-colors">
                support@projasa.co.id
              </a>
            </div>

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="https://wa.me/628125532111" className="text-sm text-slate-600 hover:text-brand-blue transition-colors">
                0812-5532-111
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/projasa.co.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="https://web.facebook.com/projasa.co.id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Right - Maps Card */}
          <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/80 bg-white">
            <iframe
              title="Lokasi PROJASA"
              src="https://www.google.com/maps?q=PT+Projasa+Legal+Insani+Jl.+Pulau+Batanta+No.18+B+Denpasar+Bali&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-8"></div>
        
        {/* Bottom Bar */}
        <div className="w-full flex justify-center items-center px-2 md:px-4">
          <p className="text-[13px] font-medium text-[#8ea5d9]">
            &copy; 2026 Projasa Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
