import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-slate-100/50' 
          : 'bg-transparent'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <img src="/logo.png" alt="PROJASA" className={`w-auto transition-all duration-300 ${scrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'}`} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-[15px] font-semibold text-slate-800 hover:text-[#c892ff] transition-colors flex items-center gap-1">
              Layanan <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#harga" className="text-[15px] font-semibold text-slate-800 hover:text-[#c892ff] transition-colors">
              Harga
            </a>
            <a href="#testimonials" className="text-[15px] font-semibold text-slate-800 hover:text-[#c892ff] transition-colors">
              Testimoni
            </a>
            <a href="#proses" className="text-[15px] font-semibold text-slate-800 hover:text-[#c892ff] transition-colors">
              Proses
            </a>
            <a href="#kontak" className="text-[15px] font-semibold text-slate-800 hover:text-[#c892ff] transition-colors">
              Kontak
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/628125532111"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900 w-9 h-9 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`fixed left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-5 flex flex-col gap-3 md:hidden z-40 transition-all ${
          scrolled ? 'top-[72px]' : 'top-[86px]'
        }`}>
          <a href="#layanan" onClick={() => setMobileOpen(false)} className="text-slate-800 font-semibold text-base py-2 border-b border-slate-50">Layanan</a>
          <a href="#harga" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-base py-2 border-b border-slate-50">Harga</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-base py-2 border-b border-slate-50">Testimoni</a>
          <a href="#proses" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-base py-2 border-b border-slate-50">Proses</a>
          <a href="#kontak" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-base py-2 border-b border-slate-50">Kontak</a>
          <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 bg-slate-900 text-white w-full py-3.5 rounded-full text-sm font-semibold">
            Hubungi Kami
          </a>
        </div>
      )}
    </>
  )
}
