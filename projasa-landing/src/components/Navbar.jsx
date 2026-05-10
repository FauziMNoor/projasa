import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="absolute w-full z-50 top-0 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <img src="/logo.png" alt="PROJASA" className="h-9 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors flex items-center gap-1">
              Layanan <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#harga" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors">
              Harga
            </a>
            <a href="#testimonials" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors">
              Testimoni
            </a>
            <a href="#proses" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors">
              Proses
            </a>
            <a href="#kontak" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors">
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
          <button className="md:hidden text-slate-900" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-24 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex flex-col gap-4 md:hidden z-40">
          <a href="#layanan" onClick={() => setMobileOpen(false)} className="text-slate-800 font-semibold text-lg py-2 border-b border-slate-50">Layanan</a>
          <a href="#harga" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-lg py-2 border-b border-slate-50">Harga</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-lg py-2 border-b border-slate-50">Testimoni</a>
          <a href="#proses" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-lg py-2 border-b border-slate-50">Proses</a>
          <a href="#kontak" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-slate-900 font-medium text-lg py-2 border-b border-slate-50">Kontak</a>
          <a href="https://wa.me/628125532111" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white w-full py-4 rounded-full text-base font-semibold">
            Hubungi Kami
          </a>
        </div>
      )}
    </>
  )
}
