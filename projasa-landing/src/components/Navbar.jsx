import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 0) {
        setScrolled(false)
      } else if (currentScrollY > 50) {
        setScrolled(currentScrollY > lastScrollY)
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Navbar Wrapper */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-2 flex justify-between items-center curtain-reveal transition-all duration-500 ease-out origin-center ${
            scrolled ? 'max-w-5xl scale-105' : 'max-w-4xl'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 pl-4 md:pl-6">
            <img
              src="/logo.png"
              alt="PROJASA"
              className="h-8 w-auto"
              style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5)) drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }}
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <li><a href="#" className="hover:text-brand-dark transition-colors">Beranda</a></li>
            <li><a href="#layanan" className="hover:text-brand-dark transition-colors">Layanan</a></li>
            <li><a href="#proses" className="hover:text-brand-dark transition-colors">Proses</a></li>
            <li><a href="#kontak" className="hover:text-brand-dark transition-colors">Kontak</a></li>
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/628125532111"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 bg-brand-blue text-white pl-6 pr-2 py-2 rounded-full text-[15px] font-medium hover:bg-brand-hover shadow-md shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Hubungi Kami
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-800 p-2 mr-2 focus:outline-none bg-slate-50 rounded-full shadow-sm border border-slate-100 z-50 transition-transform active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-24 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex flex-col gap-4 md:hidden z-40">
          <a href="#" className="text-brand-blue font-semibold text-lg py-2 border-b border-slate-50">Beranda</a>
          <a href="#layanan" className="text-slate-600 hover:text-brand-blue font-medium text-lg py-2 border-b border-slate-50">Layanan</a>
          <a href="#proses" className="text-slate-600 hover:text-brand-blue font-medium text-lg py-2 border-b border-slate-50">Proses</a>
          <a href="#kontak" className="text-slate-600 hover:text-brand-blue font-medium text-lg py-2 border-b border-slate-50">Kontak</a>
          <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-brand-blue text-white w-full py-4 rounded-full text-base font-semibold">
            Hubungi Kami
          </a>
        </div>
      )}
    </>
  )
}
