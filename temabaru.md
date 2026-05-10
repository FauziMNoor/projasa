import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  ChevronRight, 
  Menu,
  X,
  Search,
  ChevronDown,
  LayoutDashboard,
  ArrowLeft,
  ArrowRight,
  Plus,
  Linkedin,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [testUrl, setTestUrl] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-purple-200">
      
      {/* Main Content Wrapper for Reveal Footer Effect */}
      {/* Container ini diberi margin-bottom sebesar 75vh agar ada ruang untuk logo di baliknya */}
      <main className="relative z-10 bg-white mb-[60vh] md:mb-[75vh] shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col">

      {/* 1. Header & Navigation (Semrush Clone Style) */}
      <nav className="absolute w-full z-50 top-0 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Logo mimicking Semrush's black icon */}
            <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center -rotate-12">
              <Globe className="text-white w-5 h-5 rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] font-black text-slate-900 tracking-tighter leading-none">BatikAPI</span>
              <span className="text-[11px] font-medium text-slate-700 mt-0.5">An IDN Company</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors flex items-center gap-1">Products <ChevronDown className="w-4 h-4"/></a>
            <a href="#pricing" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors">Pricing</a>
            <a href="#resources" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors flex items-center gap-1">Resources <ChevronDown className="w-4 h-4"/></a>
            <a href="#enterprise" className="text-[15px] font-semibold text-slate-800 hover:text-slate-500 transition-colors flex items-center gap-1">Enterprise <ChevronRight className="w-3 h-3 stroke-[3]"/></a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-[15px] font-semibold text-slate-900 border border-slate-300 hover:bg-slate-50 px-6 py-2.5 rounded-full transition-colors">
              Log In
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* 2. Hero Section (Semrush 2026 Style) */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-b from-[#e1f7f5] via-[#ecf4f8] to-[#f4f0fd]">
        {/* Subtle background lines/texture effect using radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none"></div>

        {/* Efek Garis-garis Vertikal (Semrush Barcode/Equalizer Texture dengan Gradient) */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[75%] pointer-events-none opacity-50"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)'
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400"
            style={{
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)',
              maskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)'
            }}
          ></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center pt-8">
          
          <h1 className="text-[4rem] md:text-[6.5rem] font-black text-slate-900 tracking-tighter mb-6 leading-[1.05]">
            Be found everywhere <br className="hidden md:block"/> search happens
          </h1>
          
          <p className="text-lg md:text-xl text-slate-800 font-medium max-w-2xl mb-12 leading-relaxed">
            Platform terdepan untuk mengembangkan dan mengukur visibilitas data di hampir seluruh channel digital.
          </p>

          {/* Hero Interactive Input (Semrush Exact Pill Style) */}
          <div className="w-full max-w-2xl bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col sm:flex-row gap-0 sm:items-center relative z-20">
            <input 
              type="text" 
              placeholder="Enter your website |"
              className="flex-1 bg-white px-6 py-4 rounded-t-2xl sm:rounded-l-full sm:rounded-r-none border-none text-slate-900 placeholder:text-slate-400 focus:outline-none text-base"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
            />
            <div className="hidden sm:flex h-8 w-px bg-slate-200"></div>
            <div className="bg-white px-4 py-4 sm:rounded-none flex items-center justify-between sm:justify-center text-[15px] font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 transition-colors">
              <span>ID</span>
              <ChevronDown className="w-4 h-4 ml-1 stroke-[3]" />
            </div>
            <button className="bg-[#c892ff] hover:bg-[#b87df8] text-white px-8 py-4 rounded-b-2xl sm:rounded-full text-base font-bold transition-all whitespace-nowrap w-full sm:w-auto">
              Get insights
            </button>
          </div>

          {/* Dashboard Mockup (Floating & Light UI) */}
          <div className="mt-16 w-full max-w-4xl relative z-10 px-4 md:px-0">
            {/* The wrapper with glass effect slightly larger than the app */}
            <div className="bg-white/40 backdrop-blur-xl p-3 rounded-[32px] border border-white/60 shadow-2xl">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-[450px]">
                
                {/* Dashboard App Header */}
                <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center -rotate-12">
                      <Globe className="text-white w-3 h-3 rotate-12" />
                    </div>
                    <span className="text-sm font-medium text-slate-400">batikapi.com</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="hidden md:flex items-center bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100 text-xs text-slate-400 w-48 font-medium">
                      <Search className="w-3 h-3 mr-2" /> Search
                    </div>
                    <span className="text-[13px] font-bold text-slate-600 hidden md:inline cursor-pointer">Pricing</span>
                    <span className="text-[13px] font-bold text-slate-600 hidden md:inline cursor-pointer">More</span>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-orange-400 text-white flex items-center justify-center text-[10px] font-bold">FN</div>
                  </div>
                </div>

                {/* Dashboard App Body */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-56 border-r border-slate-100 bg-white p-3 hidden md:flex flex-col gap-1">
                    <div className="flex items-center gap-3 p-2 text-slate-900 font-bold text-[15px]">
                      <LayoutDashboard className="w-5 h-5 stroke-[2.5]" /> Local
                    </div>
                    <div className="mt-2 flex flex-col gap-1">
                      <div className="flex items-center gap-3 p-2 text-slate-600 font-medium text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer">
                        Local Dashboard
                      </div>
                      <div className="flex items-center gap-3 p-2 text-slate-600 font-medium text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer mt-4">
                        Proxy Optimization
                      </div>
                      <div className="flex items-center gap-3 p-2 text-slate-600 font-medium text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer">
                        Listing Management
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 bg-white p-10 text-left">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-[26px] font-bold text-slate-900">Batik AI Agent</h2>
                      <button className="bg-[#2563eb] text-white px-4 py-2 rounded text-[13px] font-bold">+ Add locations</button>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                       <div className="flex items-center gap-6">
                         <span className="font-bold text-slate-900 text-[15px]">AI Agent</span>
                         <span className="bg-[#dcfce7] text-[#16a34a] px-3 py-1 rounded-full text-[11px] font-bold">Active</span>
                       </div>
                       <div className="flex items-center gap-5">
                         <span className="text-[13px] text-slate-500 font-medium cursor-pointer hover:text-slate-900">Add proxies</span>
                         <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded text-[13px] font-bold transition-colors">Settings</button>
                       </div>
                    </div>

                    <div className="mt-4 border border-slate-200 rounded-xl p-5 flex items-center justify-between opacity-50 hover:opacity-100 hover:shadow-md transition-all">
                       <div className="flex items-center gap-6">
                         <span className="font-bold text-slate-900 text-[15px]">Scraper Bot #2</span>
                         <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[11px] font-bold">Draft</span>
                       </div>
                       <div className="flex items-center gap-5">
                         <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded text-[13px] font-bold transition-colors">Configure</button>
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof (Logos - Marquee & Seamless Background) */}
      <section className="py-12 overflow-hidden bg-[#f4f0fd]">
        {/* CSS Keyframes for Marquee Animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}
        </style>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* Container dengan efek group untuk memantau hover dan mask-image untuk efek fade di kiri-kanan */}
          <div 
            className="flex group overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            
            {/* List Logo Pertama */}
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 gap-16 md:gap-32 pr-16 md:pr-32 items-center">
              <div className="text-2xl font-bold font-serif text-slate-800">DataCorp</div>
              <div className="text-2xl font-black tracking-tighter text-slate-800">Analytix</div>
              <div className="text-2xl font-medium tracking-widest text-slate-800">NEXUS</div>
              <div className="text-2xl font-bold italic text-slate-800">ScrapeIT</div>
              <div className="text-2xl font-bold text-slate-800">TechSolutions</div>
            </div>

            {/* List Logo Kedua (Duplikat untuk ilusi loop tanpa putus) */}
            <div aria-hidden="true" className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 gap-16 md:gap-32 pr-16 md:pr-32 items-center">
              <div className="text-2xl font-bold font-serif text-slate-800">DataCorp</div>
              <div className="text-2xl font-black tracking-tighter text-slate-800">Analytix</div>
              <div className="text-2xl font-medium tracking-widest text-slate-800">NEXUS</div>
              <div className="text-2xl font-bold italic text-slate-800">ScrapeIT</div>
              <div className="text-2xl font-bold text-slate-800">TechSolutions</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Features (Stacking Cards Effect - Semrush Clone) */}
      <section id="features" className="pt-8 pb-32 w-full bg-gradient-to-b from-[#f4f0fd] to-white relative">
        {/* PERBAIKAN: Gap diperbesar menjadi 70vh agar ada delay scroll yang panjang. Di HP, gap normal (gap-16) */}
        <div className="px-6 max-w-7xl mx-auto flex flex-col gap-16 md:gap-[70vh]">
          
          {/* CARD 1: Sticky Container (Light/Purple Mode) */}
          {/* PERBAIKAN: Sticky hanya aktif di md (layar besar), top-20 agar tidak kepotong header */}
          <div className="relative md:sticky md:top-20 z-10 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center p-10 md:p-16 gap-12 bg-gradient-to-br from-[#e1d3fe] to-[#cfa3f7] shadow-lg border border-slate-100">

            {/* Efek Irisan Geometris Diagonal di Latar Belakang (Mint/Green color) */}
            <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[#e6fbf4] origin-top-right rotate-[30deg] translate-x-[-45%] z-0"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#e6fbf4] origin-bottom-left rotate-[45deg] z-0 opacity-80"></div>

            {/* Konten Kiri (Tipografi & Tombol) */}
            <div className="relative z-10 flex-1 w-full max-w-md lg:pr-4">
              <h2 className="text-[3rem] md:text-[4.5rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
                Your edge to win <br/> every search
              </h2>
              <p className="text-slate-800 font-medium text-[15px] mb-8 leading-relaxed max-w-sm">
                BatikAPI unites SEO and AI visibility in one place — built on 17 years of data intelligence.
              </p>
              <button className="border border-slate-900 text-slate-900 bg-transparent px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-slate-900 hover:text-white transition-colors">
                Try for free
              </button>
            </div>

            {/* Konten Kanan (Floating Glass Card dengan Tabel & Venn Diagram) */}
            <div className="relative z-10 flex-1 w-full max-w-[650px]">
              {/* Wrapper luar efek Glassmorphism (Border putih semi transparan) */}
              <div className="p-2 md:p-3 rounded-[20px] bg-white/20 border-2 border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-md">
                 {/* Kartu Putih Solid di Bagian Dalam */}
                 <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-8 md:gap-10 shadow-sm">

                    {/* Kiri: Tabel Data */}
                    <div className="flex-1">
                       <h3 className="font-bold text-slate-900 text-[17px] mb-5 tracking-tight">Top Opportunities</h3>
                       
                       {/* Tombol Toggle Mirip Aslinya */}
                       <div className="flex border border-slate-200 rounded-md w-fit mb-6 overflow-hidden">
                         <button className="bg-[#eef2ff] border-r border-slate-200 text-slate-800 px-6 py-1.5 text-xs font-bold transition-colors">Missing</button>
                         <button className="bg-white text-slate-600 px-6 py-1.5 text-xs font-semibold hover:bg-slate-50 transition-colors">Weak</button>
                       </div>
                       
                       {/* Header Tabel */}
                       <div className="flex justify-between text-[11px] font-bold text-slate-800 mb-3 px-1">
                         <span>Keyword</span><span>Volume</span>
                       </div>
                       
                       {/* Baris Tabel (Menggunakan data asli dari gambar untuk keakuratan) */}
                       <div className="space-y-0">
                         <div className="flex justify-between items-center text-[13px] text-slate-800 border-t border-slate-100 py-3 px-1">
                            <span className="font-medium">prebiotic soda</span><span className="font-black">165K</span>
                         </div>
                         <div className="flex justify-between items-center text-[13px] text-slate-800 border-t border-slate-100 py-3 px-1">
                            <span className="font-medium">sparkling drink</span><span className="font-black">110K</span>
                         </div>
                         <div className="flex justify-between items-center text-[13px] text-slate-800 border-t border-slate-100 py-3 px-1">
                            <span className="font-medium">low sugar soda</span><span className="font-black">74K</span>
                         </div>
                         <div className="flex justify-between items-center text-[13px] text-slate-800 border-t border-slate-100 py-3 px-1 border-b">
                            <span className="font-medium">probiotic drink</span><span className="font-black">72K</span>
                         </div>
                       </div>
                    </div>

                    {/* Kanan: Venn Diagram */}
                    <div className="flex-1">
                       <h3 className="font-bold text-slate-900 text-[17px] mb-6 tracking-tight">Keyword Overlap</h3>
                       
                       {/* Grafis Lingkaran Bertumpuk (Mix-Blend-Multiply untuk efek overlap warna) */}
                       <div className="relative w-[180px] h-[180px] mx-auto mt-2">
                         {/* Lingkaran Ungu Besar (Kiri) */}
                         <div className="absolute top-2 left-0 w-[105px] h-[105px] rounded-full bg-[#d8b4fe] opacity-85 mix-blend-multiply transition-transform hover:scale-105 cursor-pointer"></div>
                         {/* Lingkaran Biru (Atas Kanan) */}
                         <div className="absolute -top-1 right-2 w-[85px] h-[85px] rounded-full bg-[#93c5fd] opacity-85 mix-blend-multiply transition-transform hover:scale-105 cursor-pointer"></div>
                         {/* Lingkaran Hijau (Bawah Kanan) */}
                         <div className="absolute bottom-1 right-8 w-[80px] h-[80px] rounded-full bg-[#6ee7b7] opacity-85 mix-blend-multiply transition-transform hover:scale-105 cursor-pointer"></div>
                         {/* Lingkaran Merah Muda/Pink (Kanan Jauh) */}
                         <div className="absolute top-[35%] -right-2 w-[55px] h-[55px] rounded-full bg-[#fca5a5] opacity-85 mix-blend-multiply transition-transform hover:scale-105 cursor-pointer"></div>
                       </div>

                       {/* Legenda Warna di Bawah */}
                       <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-4">
                          <div className="flex items-center text-[9px] font-bold text-slate-500 gap-1.5 whitespace-nowrap">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#d8b4fe]"></span> culturepop.com <span className="text-slate-900">904.6K</span>
                          </div>
                          <div className="flex items-center text-[9px] font-bold text-slate-500 gap-1.5 whitespace-nowrap">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#93c5fd]"></span> poppi.com <span className="text-slate-900">673.1K</span>
                          </div>
                          <div className="flex items-center text-[9px] font-bold text-slate-500 gap-1.5 whitespace-nowrap">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7b7]"></span> health-ade.com <span className="text-slate-900">900.7K</span>
                          </div>
                          <div className="flex items-center text-[9px] font-bold text-slate-500 gap-1.5 whitespace-nowrap">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]"></span> bellie.com <span className="text-slate-900">151.2K</span>
                          </div>
                       </div>
                    </div>

                 </div>
              </div>
            </div>

          </div>

          {/* CARD 2: Sticky Container (Dark Mode / Enterprise) */}
          {/* PERBAIKAN: z-20 tetap dijaga, md:sticky dan md:top-20 ditambahkan */}
          <div className="relative md:sticky md:top-20 z-20 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center p-10 md:p-16 gap-12 bg-[#0a0a0b] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] border border-slate-800">

            {/* Dark Aurora & Barcode Background Effect */}
            <div 
              className="absolute right-0 top-0 w-2/3 h-full opacity-30 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(to right, #4ade80 0px, #8b5cf6 2px, transparent 2px, transparent 16px)',
                maskImage: 'radial-gradient(ellipse at right, black 10%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at right, black 10%, transparent 80%)'
              }}
            ></div>
            <div className="absolute right-1/4 top-0 w-1/2 h-full opacity-40 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent blur-[100px] pointer-events-none"></div>

            {/* Konten Kiri (Dark Typography) */}
            <div className="relative z-10 flex-1 w-full max-w-md lg:pr-4">
              <h2 className="text-[3rem] md:text-[4.5rem] font-black text-white tracking-tighter leading-[1.05] mb-6">
                Bigger scale.<br/>Bigger advantage.
              </h2>
              <p className="text-slate-300 font-medium text-[15px] mb-8 leading-relaxed max-w-sm">
                BatikAPI for Enterprise means data visibility dominance. Win more customers across markets and domains. Everywhere they search.
              </p>
              <button className="border border-white text-white bg-transparent px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-white hover:text-black transition-colors">
                Book a demo
              </button>
            </div>

            {/* Konten Kanan (Dark Dashboard Mockup) */}
            <div className="relative z-10 flex-1 w-full max-w-[650px] mt-10 lg:mt-0">
              
              {/* Floating Tooltip (Olive/Beige) */}
              <div className="absolute -top-8 left-[-20px] md:-left-12 z-30 bg-[#d5dac3] rounded-xl p-3 flex items-center gap-4 shadow-2xl border border-[#b8be9b] hover:-translate-y-2 transition-transform duration-300">
                 <div className="bg-[#111] text-white rounded-lg p-3 flex flex-col items-center justify-center min-w-[60px]">
                   <Search className="w-6 h-6"/>
                   <span className="text-[10px] mt-1 font-bold">SI</span>
                 </div>
                 <div className="text-slate-900 font-medium text-[18px] md:text-[20px] leading-tight max-w-[180px]">
                   Stay visible and grow with technical SEO
                 </div>
              </div>

              {/* Dashboard Frame */}
              <div className="p-2 md:p-3 rounded-[20px] bg-slate-800/60 border border-slate-700 shadow-2xl backdrop-blur-md">
                 <div className="bg-white rounded-xl flex overflow-hidden shadow-sm h-[320px]">
                   
                   {/* Sidebar (Dark) */}
                   <div className="w-16 bg-[#1a1a1a] flex flex-col items-center py-4 gap-4 shrink-0">
                     <div className="w-8 h-8 bg-slate-800 rounded mb-4 flex items-center justify-center">
                       <Globe className="w-4 h-4 text-white/50" />
                     </div>
                     <div className="w-8 h-8 bg-slate-800/50 rounded hover:bg-slate-700 transition-colors cursor-pointer"></div>
                     <div className="w-8 h-8 bg-slate-800/50 rounded hover:bg-slate-700 transition-colors cursor-pointer"></div>
                     <div className="w-8 h-8 bg-slate-800/50 rounded hover:bg-slate-700 transition-colors cursor-pointer"></div>
                   </div>
                   
                   {/* Main Content (Light) */}
                   <div className="flex-1 p-6 overflow-hidden flex flex-col">
                     {/* Numbers Row */}
                     <div className="flex gap-4 mb-6">
                        <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center">
                          <span className="text-[10px] font-bold text-slate-500 uppercase mb-1">Projects</span>
                          <div className="text-2xl font-black text-slate-800">30</div>
                        </div>
                        <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center">
                          <span className="text-[10px] font-bold text-slate-500 uppercase mb-1">Keywords</span>
                          <div className="text-2xl font-black text-slate-800">11K</div>
                        </div>
                        <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center">
                          <span className="text-[10px] font-bold text-slate-500 uppercase mb-1">Crawlers</span>
                          <div className="text-2xl font-black text-slate-800">2</div>
                        </div>
                     </div>
                     
                     {/* Table Mockup */}
                     <div className="flex-1 flex flex-col gap-3">
                        <h4 className="font-bold text-slate-900 text-[14px] mb-1">Projects & Crawlers</h4>
                        
                        {/* Table Rows */}
                        <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
                           <div className="font-semibold text-slate-800">Core Domain</div>
                           <div className="flex items-center gap-4">
                              <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-green-500 rounded-full"></div></div>
                              <span className="text-slate-500 font-mono">149,186</span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
                           <div className="font-semibold text-slate-800">Blog Subdomain</div>
                           <div className="flex items-center gap-4">
                              <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-yellow-500 rounded-full"></div></div>
                              <span className="text-slate-500 font-mono">74,320</span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100">
                           <div className="font-semibold text-slate-800">Free Tools</div>
                           <div className="flex items-center gap-4">
                              <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[40%] h-full bg-orange-500 rounded-full"></div></div>
                              <span className="text-slate-500 font-mono">38,870</span>
                           </div>
                        </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Solutions Section (Semrush Grid Cards Clone) */}
      <section id="solutions" className="py-24 bg-white overflow-hidden">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="text-[13px] font-bold text-slate-500 tracking-widest mb-4 uppercase">Solutions ( 4 )</p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-black text-slate-900 tracking-tighter uppercase max-w-2xl">
              Get seen. Get cited.<br/>Be the answer.
            </h2>
          </div>
          <div className="hidden md:flex gap-3 pb-2">
            <button className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-50 transition-colors group">
              <ArrowLeft className="w-5 h-5 text-slate-900 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-50 transition-colors group">
              <ArrowRight className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: AI Visibility */}
          <div className="relative bg-[#e6f5f2] rounded-[24px] overflow-hidden flex flex-col h-[420px] group cursor-pointer border border-slate-100 hover:shadow-xl transition-all duration-300">
            {/* Diagonal Pattern */}
            <div 
              className="absolute bottom-0 inset-x-0 h-[50%] opacity-30 pointer-events-none transition-opacity group-hover:opacity-50" 
              style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #a855f7 0px, #a855f7 1px, transparent 1px, transparent 8px, #06b6d4 8px, #06b6d4 9px, transparent 9px, transparent 16px)' }}
            ></div>

            {/* Top Content */}
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">AI Visibility</span>
                <button className="w-7 h-7 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-[1.2] tracking-tight">Get LLMs to<br/>cite your brand</h3>
            </div>

            {/* Mockup Card */}
            <div className="px-5 pb-5 relative z-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white h-44 flex flex-col group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-[11px] font-bold text-slate-800 mb-2">Market Share vs. Sentiment</div>
                <div className="flex gap-3 mb-2">
                  <span className="text-[8px] font-semibold text-slate-500 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"></div> Company 1</span>
                  <span className="text-[8px] font-semibold text-slate-500 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]"></div> Company 2</span>
                </div>
                <div className="flex-1 relative border-l border-b border-slate-100 mt-2">
                  <div className="absolute bottom-2 left-2 w-10 h-10 rounded-full bg-[#8b5cf6] mix-blend-multiply"></div>
                  <div className="absolute top-1 left-8 w-14 h-14 rounded-full bg-[#2dd4bf] mix-blend-multiply"></div>
                  <div className="absolute bottom-5 right-2 w-8 h-8 rounded-full bg-[#3b82f6] mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Traffic and Market */}
          <div className="relative bg-[#e6f5f2] rounded-[24px] overflow-hidden flex flex-col h-[420px] group cursor-pointer border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute bottom-0 inset-x-0 h-[50%] opacity-30 pointer-events-none transition-opacity group-hover:opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #a855f7 0px, #a855f7 1px, transparent 1px, transparent 8px, #06b6d4 8px, #06b6d4 9px, transparent 9px, transparent 16px)' }}></div>
            
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Traffic and Market</span>
                <button className="w-7 h-7 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-[1.2] tracking-tight">Analyze traffic on<br/>any website</h3>
            </div>

            <div className="px-5 pb-5 relative z-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white h-44 flex flex-col group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-[11px] font-bold text-slate-800 mb-4">Traffic Channels</div>
                <div className="flex-1 flex justify-between items-end gap-2 px-2 pb-4 border-b border-slate-100 relative">
                  {/* Bar Group 1 */}
                  <div className="flex items-end gap-0.5 w-full">
                    <div className="w-1/3 bg-[#8b5cf6] h-[60%] rounded-t-sm"></div>
                    <div className="w-1/3 bg-[#2dd4bf] h-[80%] rounded-t-sm"></div>
                    <div className="w-1/3 bg-[#fbbf24] h-[40%] rounded-t-sm"></div>
                  </div>
                  {/* Bar Group 2 */}
                  <div className="flex items-end gap-0.5 w-full">
                    <div className="w-1/3 bg-[#8b5cf6] h-[30%] rounded-t-sm"></div>
                    <div className="w-1/3 bg-[#2dd4bf] h-[90%] rounded-t-sm"></div>
                    <div className="w-1/3 bg-[#fbbf24] h-[50%] rounded-t-sm"></div>
                  </div>
                  {/* Bar Group 3 */}
                  <div className="flex items-end gap-0.5 w-full">
                    <div className="w-1/3 bg-[#8b5cf6] h-[70%] rounded-t-sm"></div>
                    <div className="w-1/3 bg-[#2dd4bf] h-[40%] rounded-t-sm"></div>
                    <div className="w-1/3 bg-[#fbbf24] h-[80%] rounded-t-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 px-1">
                  <span className="text-[7px] text-slate-500 font-bold">Direct</span>
                  <span className="text-[7px] text-slate-500 font-bold">Referral</span>
                  <span className="text-[7px] text-slate-500 font-bold">Search</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Content */}
          <div className="relative bg-[#e6f5f2] rounded-[24px] overflow-hidden flex flex-col h-[420px] group cursor-pointer border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute bottom-0 inset-x-0 h-[50%] opacity-30 pointer-events-none transition-opacity group-hover:opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #a855f7 0px, #a855f7 1px, transparent 1px, transparent 8px, #06b6d4 8px, #06b6d4 9px, transparent 9px, transparent 16px)' }}></div>
            
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Content</span>
                <button className="w-7 h-7 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-[1.2] tracking-tight">Craft SEO and AI-ready<br/>content in minutes</h3>
            </div>

            <div className="px-5 pb-5 relative z-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white h-44 flex flex-col group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-[11px] font-bold text-slate-800 mb-2">Generate article using ideas</div>
                <div className="flex gap-1 mb-3">
                   <span className="bg-slate-800 text-white text-[7px] px-2 py-0.5 rounded-full">Idea #1</span>
                   <span className="bg-slate-100 text-slate-500 border border-slate-200 text-[7px] px-2 py-0.5 rounded-full">Idea #2</span>
                   <span className="bg-slate-100 text-slate-500 border border-slate-200 text-[7px] px-2 py-0.5 rounded-full">Idea #3</span>
                </div>
                <div className="flex-1 border border-slate-100 rounded-lg p-2 flex flex-col gap-1.5 bg-slate-50/50">
                  <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-bold text-slate-800">Healthy Homemade Recipe</span>
                    <ChevronRight className="w-3 h-3 text-slate-400"/>
                  </div>
                  <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-bold text-slate-800">5 Ingredient Vegan Dark</span>
                    <ChevronRight className="w-3 h-3 text-slate-400"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Local */}
          <div className="relative bg-[#e6f5f2] rounded-[24px] overflow-hidden flex flex-col h-[420px] group cursor-pointer border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute bottom-0 inset-x-0 h-[50%] opacity-30 pointer-events-none transition-opacity group-hover:opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #a855f7 0px, #a855f7 1px, transparent 1px, transparent 8px, #06b6d4 8px, #06b6d4 9px, transparent 9px, transparent 16px)' }}></div>
            
            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Local</span>
                <button className="w-7 h-7 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-[1.2] tracking-tight">Own your<br/>local presence</h3>
            </div>

            <div className="px-5 pb-5 relative z-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white h-44 flex flex-col group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[11px] font-bold text-slate-800">Business Profile Perf.</div>
                  <div className="bg-green-50 border border-green-100 text-green-600 text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    145 <span className="text-[6px]">↑</span>
                  </div>
                </div>
                {/* Curve Mockup (SVG) */}
                <div className="h-10 w-full mb-2">
                  <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible preserve-3d" preserveAspectRatio="none">
                    <path d="M0,25 C20,20 30,5 50,15 C70,25 85,5 100,10" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Map Mockup */}
                <div className="mt-auto bg-slate-50 border border-slate-100 rounded-lg p-2 flex gap-2">
                  <div className="w-10 h-10 bg-slate-200 rounded overflow-hidden relative">
                     <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-1">
                    <div className="h-2 bg-slate-200 rounded-full w-[80%]"></div>
                    <div className="h-2 bg-slate-200 rounded-full w-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Unified CTA & Footer Section (Semrush Clone) */}
      <footer className="bg-white pt-24 pb-0 relative">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Area: Giant CTA */}
          <div className="lg:w-[40%] flex flex-col items-start">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.05] font-black text-slate-900 tracking-tighter uppercase mb-5">
              Mulai Dengan<br/>BatikAPI Hari Ini
            </h2>
            <p className="text-[15px] font-medium text-slate-800 mb-8">
              Coba BatikAPI gratis selama tujuh hari. Batalkan kapan saja.
            </p>
            <button className="bg-[#c892ff] hover:bg-[#b87df8] text-white px-8 py-3.5 rounded-full text-[15px] font-bold transition-all shadow-sm">
              Mulai uji coba gratis
            </button>
          </div>

          {/* Right Area: Footer Links Grid */}
          <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">BatikAPI</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">BatikAPI One</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Fitur Utama</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Harga</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Uji Coba Gratis</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Bandingkan Produk</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Kisah Sukses</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Statistik & Fakta</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Program Afiliasi</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Produk Lain</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Enterprise SEO</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Enterprise AIO</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Enterprise SI</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Insights24</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Mfour</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">App Center</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Top Websites</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Free Tools</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Sensor</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Perusahaan</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Berita</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Mitra</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">BatikAPI Select</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Indeks Isu Global</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Jangan Jual Data Saya</a></li>
                <li><a href="#" className="hover:text-[#c892ff] transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Dukungan</h4>
                <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                  <li><a href="#" className="hover:text-[#c892ff] transition-colors">Pusat Pengetahuan</a></li>
                  <li><a href="#" className="hover:text-[#c892ff] transition-colors">Akademi</a></li>
                  <li><a href="#" className="hover:text-[#c892ff] transition-colors">BatikAPI API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 text-[14px]">Komunitas</h4>
                <ul className="space-y-4 text-[13px] font-medium text-slate-700">
                  <li><a href="#" className="hover:text-[#c892ff] transition-colors">Blog BatikAPI</a></li>
                  <li><a href="#" className="hover:text-[#c892ff] transition-colors">Webinar</a></li>
                  <li><a href="#" className="hover:text-[#c892ff] transition-colors">Program Duta</a></li>
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
              <Linkedin className="w-[18px] h-[18px] hover:text-[#c892ff] cursor-pointer transition-colors" />
              <Instagram className="w-[18px] h-[18px] hover:text-[#c892ff] cursor-pointer transition-colors" />
              {/* Custom TikTok SVG */}
              <svg className="w-[18px] h-[18px] hover:text-[#c892ff] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              <Youtube className="w-[18px] h-[18px] hover:text-[#c892ff] cursor-pointer transition-colors" />
              <Facebook className="w-[18px] h-[18px] hover:text-[#c892ff] cursor-pointer transition-colors" />
              {/* Custom X (Twitter) SVG */}
              <svg className="w-[17px] h-[17px] hover:text-[#c892ff] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            
            {/* Copyright & Logo */}
            <div className="flex items-center gap-4">
              <span className="text-red-600 font-black text-xl tracking-tighter">IDN</span>
              <span className="font-medium text-slate-800">© 2026 BatikAPI Holdings. Hak cipta dilindungi.</span>
            </div>
          </div>

          {/* Legal Links & Language */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            <a href="#" className="hover:text-[#c892ff] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#c892ff] transition-colors">Syarat Ketentuan</a>
            <a href="#" className="hover:text-[#c892ff] transition-colors">Pengaturan Cookie</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#c892ff] transition-colors md:ml-4">
               English <ChevronDown className="w-4 h-4 stroke-[3]" />
            </div>
          </div>

        </div>

        {/* The Iconic Bottom Diagonal Stripe Pattern */}
        {/* Dipertebal menjadi h-5 agar batas antara halaman dan logo bawah semakin tegas */}
        <div 
          className="w-full h-5"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 0px, #000 12px, #06b6d4 12px, #06b6d4 24px, #a855f7 24px, #a855f7 36px)' }}
        ></div>
      </footer>
      
      </main> {/* End of Main Content Wrapper */}

      {/* 7. Hidden Curtain Reveal Footer (The Final Surprise) */}
      {/* PERBAIKAN: Mengubah justify-end menjadi justify-center agar tulisan berada tepat di tengah, dan menambahkan padding bawah */}
      <div className="fixed bottom-0 left-0 w-full h-[60vh] md:h-[75vh] z-0 bg-white flex flex-col items-center justify-center overflow-hidden pb-[5vh] md:pb-[10vh]">
        
        {/* Gradient Vertical Lines Background */}
        {/* PERBAIKAN: Mengubah "transparent 4px" menjadi "transparent 8px" agar jarak antar garis sama persis dengan Section 2 */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#f4f0fd] via-[#d8b4fe] to-[#2dd4bf]"
          style={{
            maskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)',
            WebkitMaskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)'
          }}
        ></div>
        
        {/* Top fade out to avoid harsh cut-off */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>

        {/* Giant Logo Text */}
        {/* PERBAIKAN: Menghapus margin negatif (mb-[-1.5vw]), menyesuaikan ukuran teks sedikit (16vw) agar pas, dan merapikan line-height */}
        <h1 className="relative z-10 text-[16vw] font-black text-[#111] tracking-tighter leading-none mt-20">
          BATIKAPI
        </h1>
        
      </div>

    </div>
  );
}