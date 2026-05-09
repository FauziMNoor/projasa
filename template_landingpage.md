<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Build - Agensi Digital</title>
    <!-- Font Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            blue: '#2563EB',
                            hover: '#1D4ED8',
                            dark: '#0F172A',
                            gray: '#64748B',
                            light: '#F8FAFC'
                        }
                    },
                    animation: {
                        'scroll': 'scroll 25s linear infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 3s infinite',
                    },
                    keyframes: {
                        scroll: {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Gradasi latar belakang yang halus meniru desain asli */
        body {
            background: linear-gradient(140deg, #ffffff 0%, #f4f7fb 35%, #e2ebf7 70%, #d0def3 100%);
            background-attachment: fixed;
            min-height: 100vh;
        }
        
        /* Efek fade/blur di sisi kiri dan kanan marquee yang lebih intens */
        /* Transisi ditingkatkan ke 25% agar 'batasan' terlihat lebih dramatis */
        .mask-fade {
            -webkit-mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);
            mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);
        }

        /* Glassmorphism utilities */
        .glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        /* Sembunyikan Scrollbar untuk Slider */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }

        /* Animasi Buka Tirai untuk Navbar */
        @keyframes curtainReveal {
            0% { 
                clip-path: inset(0 50% 0 50% round 9999px); 
                opacity: 0; 
                transform: translateY(-20px); 
            }
            100% { 
                clip-path: inset(0 0 0 0 round 9999px); 
                opacity: 1; 
                transform: translateY(0); 
            }
        }
        .curtain-reveal {
            animation: curtainReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* --- KELAS ANIMASI REVEAL SAAT SCROLL --- */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        /* Reveal khusus opacity (untuk element sticky agar posisinya tidak rusak) */
        .reveal-fade {
            opacity: 0;
            transition: opacity 0.8s ease-out;
        }
        .reveal-fade.active {
            opacity: 1;
        }
        /* Efek Tunda (Stagger) */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
    </style>
</head>
<body class="antialiased text-slate-800 overflow-x-hidden flex flex-col min-h-screen selection:bg-brand-blue selection:text-white">

    <!-- Wrapper Fixed Navbar -->
    <div class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <!-- Navbar berbentuk Pill -->
        <nav id="floating-navbar" class="pointer-events-auto w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-2 flex justify-between items-center curtain-reveal transition-all duration-500 ease-out origin-center">
            
            <!-- Logo -->
            <a href="#" class="flex items-center gap-2 pl-6 text-lg font-bold text-brand-dark tracking-tight">
                Web Build
            </a>

            <!-- Menu Navigasi Desktop -->
            <ul class="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
                <li><a href="#" class="hover:text-brand-dark transition-colors">Beranda</a></li>
                <li><a href="#layanan" class="hover:text-brand-dark transition-colors">Layanan</a></li>
                <li><a href="#" class="hover:text-brand-dark transition-colors">Karya</a></li>
                <li><a href="#" class="hover:text-brand-dark transition-colors">Kontak</a></li>
            </ul>

            <!-- Tombol CTA Navigasi -->
            <a href="#" class="hidden md:flex items-center gap-3 bg-brand-blue text-white pl-6 pr-2 py-2 rounded-full text-[15px] font-medium hover:bg-brand-hover shadow-md shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.02]">
                Hubungi Kami
                <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-blue"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
            </a>

            <!-- Hamburger Menu Button (Mobile) -->
            <button id="mobile-menu-btn" class="md:hidden text-slate-800 p-2 mr-2 focus:outline-none bg-slate-50 rounded-full shadow-sm border border-slate-100 z-50 transition-transform active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
        </nav>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div id="mobile-menu" class="hidden fixed top-24 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex-col gap-4 md:hidden origin-top animate-[fadeIn_0.2s_ease-out] z-40">
        <a href="#" class="text-brand-blue font-semibold text-lg py-2 border-b border-slate-50">Beranda</a>
        <a href="#layanan" class="text-slate-600 hover:text-brand-blue font-medium text-lg py-2 border-b border-slate-50">Layanan</a>
        <a href="#" class="text-slate-600 hover:text-brand-blue font-medium text-lg py-2 border-b border-slate-50">Karya</a>
        <a href="#" class="text-slate-600 hover:text-brand-blue font-medium text-lg py-2 border-b border-slate-50">Kontak</a>
        <a href="#" class="mt-4 flex items-center justify-center gap-2 bg-brand-blue text-white w-full py-4 rounded-full text-base font-semibold">
            Hubungi Kami
        </a>
    </div>

    <!-- Hero Section Wrapper dengan Background Gambar -->
    <div class="relative w-full bg-cover bg-center bg-no-repeat" style="background-image: url('https://i.pinimg.com/736x/27/c5/d1/27c5d192d0a032a0d43fa043e748a8a1.jpg');">
        
        <!-- Efek Transisi Blur Halus pada Batas Bawah Hero -->
        <div class="absolute bottom-0 left-0 w-full h-32 backdrop-blur-md bg-[#f4f7fb]/20 pointer-events-none z-0" style="-webkit-mask-image: linear-gradient(to top, black 5%, transparent 100%); mask-image: linear-gradient(to top, black 5%, transparent 100%);"></div>

        <!-- Hero Section -->
        <main class="w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-12 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <!-- Kolom Kiri -->
            <div class="lg:col-span-6 flex flex-col items-start z-20">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm mb-8 animate-[fadeInDown_0.5s_ease-out]">
                    <span class="text-base">✨</span>
                    <span class="text-sm font-bold text-slate-700">Agensi Digital Premium</span>
                </div>
                
                <h1 class="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-6">
                    Kami Membangun<br />
                    <span class="text-brand-dark">Pengalaman Digital</span>
                </h1>
                
                <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
                    Transformasikan merek Anda dengan desain dan pengembangan web mutakhir. Kami menciptakan situs web menawan yang mengubah pengunjung menjadi pelanggan.
                </p>
                
                <div class="flex flex-wrap items-center gap-4 mb-14">
                    <a href="#" class="flex items-center gap-2 bg-brand-blue text-white px-7 py-4 rounded-full text-base font-bold hover:bg-brand-hover hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
                        Mulai Proyek
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="bg-white/20 rounded-full p-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a href="#" class="flex items-center gap-2 glass text-slate-800 px-7 py-4 rounded-full text-base font-bold hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                        Lihat Karya
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-blue"><path d="M2 12h20"/><path d="m14 5 7 7-7 7"/></svg>
                    </a>
                </div>
                
                <div class="flex items-center gap-5">
                    <div class="flex -space-x-4">
                        <img src="https://i.pravatar.cc/100?img=1" alt="User" class="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover">
                        <img src="https://i.pravatar.cc/100?img=2" alt="User" class="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover">
                        <img src="https://i.pravatar.cc/100?img=3" alt="User" class="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover">
                        <div class="w-12 h-12 rounded-full border-2 border-white shadow-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+1k</div>
                    </div>
                    <p class="text-sm font-semibold text-slate-600 max-w-[200px] leading-snug">Dipercaya oleh startup & perusahaan Fortune 500</p>
                </div>
            </div>

            <!-- Kolom Kanan (Visual Hero) -->
            <div class="lg:col-span-6 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
                <div class="relative w-full max-w-[500px]">
                    
                    <!-- Main Visual Container dengan Gambar -->
                    <div class="w-full aspect-[4/4.5] rounded-[2.5rem] bg-slate-100 shadow-2xl relative z-10 overflow-hidden border-8 border-white group">
                        <!-- Gambar Hero -->
                        <img src="https://i.pinimg.com/control1/1200x/b1/4c/c1/b14cc161cce4383a47cfaebca0af04cb.jpg" alt="Hero Agensi Digital" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        
                        <!-- Overlay Tipis (Opsional, untuk kontras lencana melayang) -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>

                    <!-- Floating Badges -->
                    <div class="absolute -left-4 md:-left-12 top-10 glass p-5 rounded-2xl shadow-xl z-20 animate-float">
                        <div class="flex items-center gap-3 mb-1">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h3 class="text-3xl font-extrabold text-brand-dark">150+</h3>
                        </div>
                        <p class="text-sm font-semibold text-slate-500 ml-11">Proyek Selesai</p>
                    </div>
                    
                    <div class="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 glass p-5 rounded-2xl shadow-xl z-20 animate-float-delayed">
                        <h3 class="text-3xl font-extrabold text-brand-dark mb-1 flex items-center gap-1">
                            98% 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </h3>
                        <p class="text-sm font-semibold text-slate-500">Kepuasan Klien</p>
                    </div>
                    
                    <div class="absolute -left-2 md:-left-8 bottom-10 glass p-5 rounded-2xl shadow-xl z-20 animate-float">
                        <h3 class="text-3xl font-extrabold text-brand-dark mb-1">12+</h3>
                        <p class="text-sm font-semibold text-slate-500">Tahun Pengalaman</p>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Marquee Logo Bottom -->
    <div class="w-full pb-6 pt-10 overflow-hidden border-y border-slate-200/60 mask-fade">
        <div class="flex w-[200%] animate-scroll">
            <!-- Set 1 -->
            <div class="flex items-center justify-around w-1/2 gap-8 px-4">
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
            </div>
            <!-- Set 2 (Duplikasi untuk efek seamless) -->
            <div class="flex items-center justify-around w-1/2 gap-8 px-4">
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
                <h4 class="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark">Web<span class="relative inline-block">ı<span class="absolute w-[0.22em] h-[0.22em] rounded-full bg-gradient-to-b from-[#60A5FA] to-[#2563EB] left-1/2 -translate-x-1/2 -top-[0.05em] shadow-[0_2px_4px_rgba(37,99,235,0.4)]"></span></span>ld</h4>
            </div>
        </div>
    </div>

    <!-- Section Pernyataan Misi -->
    <section class="w-full max-w-7xl mx-auto px-6 py-24 text-center flex flex-col items-center relative z-10">
        <h2 class="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-[1.2] mb-10 max-w-[1000px] tracking-tight">
            Kami merancang pengalaman digital yang memikat audiens dan <span class="text-brand-dark">memberikan hasil bermakna</span> bagi merek ambisius di seluruh dunia.
        </h2>
        <div class="reveal delay-200 flex flex-wrap items-center justify-center gap-4">
            <a href="#" class="flex items-center gap-2.5 bg-brand-dark text-white px-7 py-4 rounded-full text-base font-bold hover:bg-slate-800 hover:shadow-xl transition-all duration-300">
                Proses Kami
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="bg-white/20 rounded-full p-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#" class="flex items-center gap-2.5 bg-white text-brand-dark border border-slate-200 px-7 py-4 rounded-full text-base font-bold hover:bg-slate-50 transition-all duration-300 shadow-sm">
                Temui Tim Kami
            </a>
        </div>
    </section>

    <!-- SECTION KEDUA: LAYANAN KAMI -->
    <section id="layanan" class="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        <!-- Header Section -->
        <div class="reveal flex flex-col items-center text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-blue"><rect width="8" height="8" x="3" y="3" rx="2"/><rect width="8" height="8" x="13" y="13" rx="2"/><rect width="8" height="8" x="13" y="3" rx="2"/><rect width="8" height="8" x="3" y="13" rx="2"/></svg>
                <span class="text-xs font-bold text-slate-700 tracking-wider uppercase">Apa yang Kami Kerjakan</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight mb-6">
                Layanan Kami
            </h2>
            
            <p class="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
                Metodologi teruji yang memberikan hasil konsisten dan terukur di setiap proyek yang kami tangani.
            </p>
        </div>

        <!-- Wadah Kartu Layanan (Stacking Cards Wrapper) -->
        <div class="flex flex-col gap-12 md:gap-32 relative w-full pb-20">

            <!-- KARTU 01: Pengembangan Web -->
            <div class="reveal-fade sticky top-6 md:top-24 z-10 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08),0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row items-stretch min-h-[500px] gap-12 lg:gap-20 transition-all">
                
                <!-- Faint Number Background -->
                <span class="absolute top-6 right-10 md:right-16 text-[8rem] md:text-[14rem] font-bold text-slate-100 select-none pointer-events-none tracking-tighter leading-none z-0">01</span>

                <!-- Konten (Kiri) -->
                <div class="flex flex-col items-start lg:w-1/2 relative z-10 h-full">
                    <div class="w-full">
                        <div class="inline-flex px-5 py-2 rounded-full bg-slate-50 shadow-sm border border-slate-200 text-xs font-bold text-brand-dark mb-6 tracking-wide uppercase">
                            Service 01
                        </div>
                        <h3 class="text-6xl md:text-8xl font-medium text-brand-dark mb-8 lg:mb-0 leading-none tracking-tight">01</h3>
                    </div>

                    <div class="mt-auto pt-16">
                        <h4 class="text-3xl md:text-4xl font-semibold text-brand-dark mb-5 tracking-tight">Pengembangan Web</h4>
                        <p class="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            Situs web Anda harus lebih dari sekadar fungsional—ia harus beresonansi. Kami merancang pengalaman digital khusus yang memadukan inovasi dengan kreativitas, menghadirkan platform yang intuitif dan menawan.
                        </p>
                    </div>
                </div>

                <!-- Gambar/Placeholder (Kanan) -->
                <div class="lg:w-1/2 w-full relative z-10 flex items-center justify-center">
                    <div class="w-full aspect-[4/4] md:aspect-[4/5] lg:aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden shadow-2xl border-4 border-white relative group">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process1.webp" alt="Layanan Pengembangan Web" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <!-- KARTU 02: Marketing -->
            <div class="reveal-fade sticky top-10 md:top-32 z-20 bg-[#F8FAFC] rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.1),0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row items-stretch min-h-[500px] gap-12 lg:gap-20 transition-all">
                
                <span class="absolute top-6 right-10 md:right-16 text-[8rem] md:text-[14rem] font-bold text-blue-100/50 select-none pointer-events-none tracking-tighter leading-none z-0">02</span>

                <div class="flex flex-col items-start lg:w-1/2 relative z-10 h-full">
                    <div class="w-full">
                        <div class="inline-flex px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-bold text-brand-dark mb-6 tracking-wide uppercase">
                            Service 02
                        </div>
                        <h3 class="text-6xl md:text-8xl font-medium text-brand-dark mb-8 lg:mb-0 leading-none tracking-tight">02</h3>
                    </div>

                    <div class="mt-auto pt-16">
                        <h4 class="text-3xl md:text-4xl font-semibold text-brand-dark mb-5 tracking-tight">Marketing</h4>
                        <p class="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            Impactful marketing goes beyond visibility—it creates connections. We fuse creativity with analytics to craft adaptive strategies that engage your audience authentically, keeping your brand relevant and resonant while delivering measurable results in an ever-evolving digital world.
                        </p>
                    </div>
                </div>

                <div class="lg:w-1/2 w-full relative z-10 flex items-center justify-center">
                    <div class="w-full aspect-[4/4] md:aspect-[4/5] lg:aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden shadow-2xl border-4 border-white relative group flex items-center justify-center">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process2.webp" alt="Layanan Marketing" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <!-- KARTU 03: Desain UI/UX -->
            <div class="reveal-fade sticky top-14 md:top-40 z-30 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08),0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row items-stretch min-h-[500px] gap-12 lg:gap-20 transition-all">
                
                <span class="absolute top-6 right-10 md:right-16 text-[8rem] md:text-[14rem] font-bold text-slate-100 select-none pointer-events-none tracking-tighter leading-none z-0">03</span>

                <div class="flex flex-col items-start lg:w-1/2 relative z-10 h-full">
                    <div class="w-full">
                        <div class="inline-flex px-5 py-2 rounded-full bg-slate-50 shadow-sm border border-slate-200 text-xs font-bold text-brand-dark mb-6 tracking-wide uppercase">
                            Service 03
                        </div>
                        <h3 class="text-6xl md:text-8xl font-medium text-brand-dark mb-8 lg:mb-0 leading-none tracking-tight">03</h3>
                    </div>

                    <div class="mt-auto pt-16">
                        <h4 class="text-3xl md:text-4xl font-semibold text-brand-dark mb-5 tracking-tight">Desain UI/UX</h4>
                        <p class="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            Kami menciptakan antarmuka yang intuitif dan menarik secara visual. Fungsionalitas dipadukan dengan estetika untuk memastikan setiap interaksi pengguna berjalan mulus, bermakna, dan meninggalkan kesan mendalam.
                        </p>
                    </div>
                </div>

                <div class="lg:w-1/2 w-full relative z-10 flex items-center justify-center">
                    <div class="w-full aspect-[4/4] md:aspect-[4/5] lg:aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden shadow-2xl border-4 border-white relative group">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process3.webp" alt="Layanan Desain UI/UX" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <!-- KARTU 04: Optimasi SEO -->
            <div class="reveal-fade sticky top-18 md:top-48 z-40 bg-[#F8FAFC] rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.1),0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row items-stretch min-h-[500px] gap-12 lg:gap-20 transition-all">
                
                <span class="absolute top-6 right-10 md:right-16 text-[8rem] md:text-[14rem] font-bold text-blue-100/50 select-none pointer-events-none tracking-tighter leading-none z-0">04</span>

                <div class="flex flex-col items-start lg:w-1/2 relative z-10 h-full">
                    <div class="w-full">
                        <div class="inline-flex px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-bold text-brand-dark mb-6 tracking-wide uppercase">
                            Service 04
                        </div>
                        <h3 class="text-6xl md:text-8xl font-medium text-brand-dark mb-8 lg:mb-0 leading-none tracking-tight">04</h3>
                    </div>

                    <div class="mt-auto pt-16">
                        <h4 class="text-3xl md:text-4xl font-semibold text-brand-dark mb-5 tracking-tight">Optimasi SEO</h4>
                        <p class="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            Meningkatkan visibilitas merek Anda di mesin pencari dengan strategi berbasis data. Kami membantu Anda mencapai peringkat lebih tinggi, menonjol dari kompetitor, dan menarik lalu lintas organik yang berkualitas tinggi.
                        </p>
                    </div>
                </div>

                <div class="lg:w-1/2 w-full relative z-10 flex items-center justify-center">
                    <div class="w-full aspect-[4/4] md:aspect-[4/5] lg:aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden shadow-2xl border-4 border-white relative group">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process4.webp" alt="Layanan Optimasi SEO" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- SECTION KETIGA: Our Impact -->
    <section class="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <!-- Header Section -->
        <div class="reveal flex flex-col items-center text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <!-- Sparkle Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                <span class="text-xs font-semibold text-slate-700 tracking-wide">Dampak Kami</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-brand-dark tracking-tight mb-4">
                Hasil yang Membuktikan
            </h2>
            
            <p class="text-lg text-slate-600 max-w-2xl font-medium">
                Rekam jejak kami dalam memberikan solusi digital luar biasa untuk klien di berbagai industri.
            </p>
        </div>

        <!-- Wadah Kartu Stats (3D Tilt Effect) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[2000px]">
            
            <!-- Kartu 1: 200+ Happy Clients -->
            <div class="reveal delay-100">
                <div class="tilt-card bg-white rounded-[2rem] pt-24 pb-14 px-8 relative overflow-hidden h-[400px] flex flex-col items-center justify-end shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 will-change-transform transition-transform duration-300 ease-out">
                    <!-- Faded Background Number via Masking -->
                    <div class="absolute top-16 inset-x-0 w-full flex justify-center overflow-hidden pointer-events-none" style="-webkit-mask-image: linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%); mask-image: linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%);">
                        <span class="text-[5rem] sm:text-[6rem] lg:text-[8rem] whitespace-nowrap font-medium text-brand-dark tracking-tighter leading-none select-none">200+</span>
                    </div>
                    
                    <!-- Foreground Text -->
                    <div class="relative z-10 text-center flex flex-col items-center mt-auto">
                        <h3 class="text-3xl lg:text-4xl font-semibold text-brand-dark mb-3 tracking-tight">Klien Puas</h3>
                        <p class="text-slate-600 font-medium text-base leading-relaxed max-w-[240px]">Bisnis yang bertransformasi melalui solusi digital kami</p>
                    </div>

                    <!-- Icon Bottom Left -->
                    <div class="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                </div>
            </div>

            <!-- Kartu 2: 500+ Projects -->
            <div class="reveal delay-200">
                <div class="tilt-card bg-white rounded-[2rem] pt-24 pb-14 px-8 relative overflow-hidden h-[400px] flex flex-col items-center justify-end shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 will-change-transform transition-transform duration-300 ease-out">
                    <div class="absolute top-16 inset-x-0 w-full flex justify-center overflow-hidden pointer-events-none" style="-webkit-mask-image: linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%); mask-image: linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%);">
                        <span class="text-[5rem] sm:text-[6rem] lg:text-[8rem] whitespace-nowrap font-medium text-brand-dark tracking-tighter leading-none select-none">500+</span>
                    </div>
                    
                    <div class="relative z-10 text-center flex flex-col items-center mt-auto">
                        <h3 class="text-3xl lg:text-4xl font-semibold text-brand-dark mb-3 tracking-tight">Proyek</h3>
                        <p class="text-slate-600 font-medium text-base leading-relaxed max-w-[240px]">Situs web dan aplikasi yang diluncurkan di seluruh dunia</p>
                    </div>

                    <div class="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                    </div>
                </div>
            </div>

            <!-- Kartu 3: 99% Uptime -->
            <div class="reveal delay-300">
                <div class="tilt-card bg-white rounded-[2rem] pt-24 pb-14 px-8 relative overflow-hidden h-[400px] flex flex-col items-center justify-end shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 will-change-transform transition-transform duration-300 ease-out">
                    <div class="absolute top-16 inset-x-0 w-full flex justify-center overflow-hidden pointer-events-none" style="-webkit-mask-image: linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%); mask-image: linear-gradient(to bottom, rgba(15,23,42,1) 35%, rgba(15,23,42,0) 80%);">
                        <span class="text-[5rem] sm:text-[6rem] lg:text-[8rem] whitespace-nowrap font-medium text-brand-dark tracking-tighter leading-none select-none">99%</span>
                    </div>
                    
                    <div class="relative z-10 text-center flex flex-col items-center mt-auto">
                        <h3 class="text-3xl lg:text-4xl font-semibold text-brand-dark mb-3 tracking-tight">Uptime Server</h3>
                        <p class="text-slate-600 font-medium text-base leading-relaxed max-w-[240px]">Performa yang andal dan stabil untuk semua proyek kami</p>
                    </div>

                    <div class="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- SECTION KEEMPAT: Testimonials (Sesuai Referensi Gambar) -->
    <section class="w-full py-24 relative z-10 bg-transparent overflow-hidden">
        
        <!-- Header Section Testimoni -->
        <div class="reveal flex flex-col items-center text-center mb-16 px-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <!-- Star Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span class="text-xs font-semibold text-slate-700 tracking-wide">Testimoni</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-dark tracking-tight mb-4">
                Apa Kata Klien Kami
            </h2>
            
            <p class="text-lg text-slate-600 max-w-2xl font-medium">
                Dengarkan langsung dari merek-merek yang telah kami bantu transformasikan melalui solusi digital inovatif.
            </p>
        </div>

        <!-- Slider Wrapper -->
        <div class="reveal delay-200 relative w-full overflow-hidden flex flex-col items-center">
            <!-- Track Slider (scroll-smooth dihapus agar dapat dikontrol via JS) -->
            <div id="testimonial-track" class="flex gap-4 md:gap-8 overflow-x-hidden w-full no-scrollbar items-stretch pb-8">
                
                <!-- Spacer Start (Penting untuk centering kartu pertama secara otomatis) -->
                <div class="shrink-0 w-[calc(50vw-45vw)] md:w-[calc(50vw-400px)]"></div>

                <!-- Kartu Testimoni 1 -->
                <div class="testi-card shrink-0 w-[90vw] md:w-[800px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden snap-center">
                    <!-- Left: Text -->
                    <div class="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                        <span class="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-500 w-max mb-6">Pengembangan Web</span>
                        <h3 class="text-2xl md:text-[1.75rem] font-bold text-brand-dark mb-4 leading-tight">Mentransformasi Kehadiran Digital Kami</h3>
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-1 font-medium">Bekerja sama dengan tim ini adalah pengubah permainan bagi startup kami. Mereka memberikan situs web yang tidak hanya terlihat menawan tetapi juga mengubah pengunjung menjadi pelanggan dua kali lipat dari sebelumnya.</p>
                        <div class="flex items-center gap-3 mt-auto">
                            <div class="w-10 h-10 rounded-full bg-[#e2e8f0]"></div> <!-- Empty Avatar Placeholder -->
                            <div>
                                <h4 class="font-bold text-brand-dark text-sm">Sarah Johnson</h4>
                                <p class="text-xs text-slate-500 font-medium">CEO, TechStart</p>
                            </div>
                        </div>
                    </div>
                    <!-- Right: Image 1 -->
                    <div class="w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-slate-100">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp" alt="Proyek Pengembangan Web" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    </div>
                </div>

                <!-- Kartu Testimoni 2 -->
                <div class="testi-card shrink-0 w-[90vw] md:w-[800px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden snap-center">
                    <!-- Left: Text -->
                    <div class="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                        <span class="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-500 w-max mb-6">Desain Merek</span>
                        <h3 class="text-2xl md:text-[1.75rem] font-bold text-brand-dark mb-4 leading-tight">Melampaui Segala Ekspektasi</h3>
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-1 font-medium">Perhatian tim terhadap detail berhasil menghidupkan merek kami dengan cara yang tidak pernah kami bayangkan. Kami menerima umpan balik yang luar biasa dari pengguna kami.</p>
                        <div class="flex items-center gap-3 mt-auto">
                            <div class="w-10 h-10 rounded-full bg-[#e2e8f0]"></div> <!-- Empty Avatar Placeholder -->
                            <div>
                                <h4 class="font-bold text-brand-dark text-sm">Michael Chen</h4>
                                <p class="text-xs text-slate-500 font-medium">Pendiri, GrowthLabs</p>
                            </div>
                        </div>
                    </div>
                    <!-- Right: Image 2 -->
                    <div class="w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-slate-100">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero5.webp" alt="Proyek Desain Merek" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    </div>
                </div>

                <!-- Kartu Testimoni 3 -->
                <div class="testi-card shrink-0 w-[90vw] md:w-[800px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden snap-center">
                    <!-- Left: Text -->
                    <div class="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                        <span class="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-500 w-max mb-6">Desain UI/UX</span>
                        <h3 class="text-2xl md:text-[1.75rem] font-bold text-brand-dark mb-4 leading-tight">Pengalaman Pengguna yang Luar Biasa</h3>
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-1 font-medium">Mereka merombak total antarmuka aplikasi kami. Skor metrik kegunaan (usability) kami melonjak drastis, dan tingkat retensi pelanggan kami belum pernah setinggi ini.</p>
                        <div class="flex items-center gap-3 mt-auto">
                            <div class="w-10 h-10 rounded-full bg-[#e2e8f0]"></div> <!-- Empty Avatar Placeholder -->
                            <div>
                                <h4 class="font-bold text-brand-dark text-sm">Emily Davis</h4>
                                <p class="text-xs text-slate-500 font-medium">Manajer Produk, InnovateInc</p>
                            </div>
                        </div>
                    </div>
                    <!-- Right: Image 3 -->
                    <div class="w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-slate-100">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp" alt="Proyek Desain UI/UX" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    </div>
                </div>

                <!-- Kartu Testimoni 4 -->
                <div class="testi-card shrink-0 w-[90vw] md:w-[800px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden snap-center">
                    <!-- Left: Text -->
                    <div class="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                        <span class="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-500 w-max mb-6">Pemasaran Digital</span>
                        <h3 class="text-2xl md:text-[1.75rem] font-bold text-brand-dark mb-4 leading-tight">ROI dan Pertumbuhan Luar Biasa</h3>
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-1 font-medium">Strategi SEO dan pemasaran dari mereka benar-benar membuat kami dikenal di industri. Kami telah melihat peningkatan 300% pada lalu lintas organik hanya dalam waktu enam bulan.</p>
                        <div class="flex items-center gap-3 mt-auto">
                            <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp" alt="Foto David Wilson" class="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-100">
                            <div>
                                <h4 class="font-bold text-brand-dark text-sm">David Wilson</h4>
                                <p class="text-xs text-slate-500 font-medium">CMO, NextGen Solutions</p>
                            </div>
                        </div>
                    </div>
                    <!-- Right: Image 4 -->
                    <div class="w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-slate-100">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp" alt="Proyek Pemasaran Digital" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    </div>
                </div>

                <!-- Kartu Testimoni 1 (Clone untuk Loop Seamless) -->
                <div class="testi-card shrink-0 w-[90vw] md:w-[800px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row overflow-hidden snap-center" aria-hidden="true">
                    <!-- Left: Text -->
                    <div class="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white z-10">
                        <span class="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-500 w-max mb-6">Pengembangan Web</span>
                        <h3 class="text-2xl md:text-[1.75rem] font-bold text-brand-dark mb-4 leading-tight">Mentransformasi Kehadiran Digital Kami</h3>
                        <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-10 flex-1 font-medium">Bekerja sama dengan tim ini adalah pengubah permainan bagi startup kami. Mereka memberikan situs web yang tidak hanya terlihat menawan tetapi juga mengubah pengunjung menjadi pelanggan dua kali lipat dari sebelumnya.</p>
                        <div class="flex items-center gap-3 mt-auto">
                            <div class="w-10 h-10 rounded-full bg-[#e2e8f0]"></div> <!-- Empty Avatar Placeholder -->
                            <div>
                                <h4 class="font-bold text-brand-dark text-sm">Sarah Johnson</h4>
                                <p class="text-xs text-slate-500 font-medium">CEO, TechStart</p>
                            </div>
                        </div>
                    </div>
                    <!-- Right: Image 1 Clone (Wajib sama dengan Kartu 1 asli) -->
                    <div class="w-full md:w-[45%] h-64 md:h-auto overflow-hidden bg-slate-100">
                        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp" alt="Proyek Pengembangan Web" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    </div>
                </div>

                <!-- Spacer End (Penting untuk centering kartu terakhir secara otomatis) -->
                <div class="shrink-0 w-[calc(50vw-45vw)] md:w-[calc(50vw-400px)]"></div>

            </div>

            <!-- Pagination Dots (Indicator) -->
            <div class="flex justify-center gap-2 mt-4" id="testimonial-dots">
                <div class="w-8 h-1.5 bg-brand-blue rounded-full transition-all duration-300"></div>
                <div class="w-2 h-1.5 bg-slate-200 rounded-full transition-all duration-300"></div>
                <div class="w-2 h-1.5 bg-slate-200 rounded-full transition-all duration-300"></div>
                <div class="w-2 h-1.5 bg-slate-200 rounded-full transition-all duration-300"></div>
            </div>

        </div>
    </section>

    <!-- SECTION KELIMA: Our Process (Sesuai Referensi) -->
    <section class="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        <!-- Header Section -->
        <div class="reveal flex flex-col items-center text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>
                <span class="text-xs font-semibold text-slate-700 tracking-wide">Cara Kami Bekerja</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-brand-dark tracking-tight mb-4">
                Proses Kami
            </h2>
            
            <p class="text-lg text-slate-600 max-w-2xl font-medium">
                Pendekatan terstruktur yang mengubah visi Anda menjadi hasil nyata, di setiap langkahnya.
            </p>
        </div>

        <!-- Timeline Container -->
        <div class="relative bg-white rounded-[3rem] p-8 md:p-12 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            
            <!-- Central Vertical Line (Hanya muncul di Desktop) -->
            <div class="hidden md:block absolute left-1/2 top-24 bottom-24 w-px bg-slate-300 -translate-x-1/2 z-0"></div>

            <div class="flex flex-col gap-20 md:gap-32">
                
                <!-- STEP 1: Discovery & Strategy -->
                <div class="reveal relative flex flex-col md:flex-row items-center gap-10 lg:gap-24 z-10">
                    <!-- Number Node (Tengah) -->
                    <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-blue text-white items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/40 ring-8 ring-white z-20">1</div>
                    
                    <!-- Kiri: Gambar -->
                    <div class="w-full md:w-1/2">
                        <div class="w-full aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                            <!-- Placeholder Gambar Tim/Meeting -->
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Penemuan & Strategi" class="w-full h-full object-cover">
                        </div>
                    </div>
                    
                    <!-- Kanan: Teks -->
                    <div class="w-full md:w-1/2 md:pl-4 lg:pl-10">
                        <h3 class="text-3xl font-semibold text-brand-dark mb-4 tracking-tight">Penemuan & Strategi</h3>
                        <p class="text-slate-600 font-medium leading-relaxed mb-8">Kami mulai dengan memahami tujuan, audiens, dan pasar Anda untuk membangun peta jalan yang sepenuhnya disesuaikan dengan bisnis Anda.</p>
                        
                        <ul class="space-y-5">
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                </div>
                                Riset dan audit mendalam
                            </li>
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                                </div>
                                Definisi tujuan dan metrik KPI yang jelas
                            </li>
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                Peta jalan proyek khusus
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- STEP 2: Design & Prototyping -->
                <div class="reveal relative flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-24 z-10">
                    <!-- Number Node (Tengah) -->
                    <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-blue text-white items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/40 ring-8 ring-white z-20">2</div>
                    
                    <!-- Kiri: Teks -->
                    <div class="w-full md:w-1/2 md:pr-4 lg:pr-10">
                        <h3 class="text-3xl font-semibold text-brand-dark mb-4 tracking-tight">Desain & Prototipe</h3>
                        <p class="text-slate-600 font-medium leading-relaxed mb-8">Kami menerjemahkan strategi ke dalam konsep visual, melakukan iterasi bersama Anda hingga setiap detail fungsional dan desain terasa pas.</p>
                        
                        <ul class="space-y-5">
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                                </div>
                                Wireframe dan mockup
                            </li>
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>
                                </div>
                                Prototipe UI interaktif
                            </li>
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                Siklus umpan balik klien
                            </li>
                        </ul>
                    </div>

                    <!-- Kanan: Gambar -->
                    <div class="w-full md:w-1/2">
                        <div class="w-full aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                            <!-- Placeholder Gambar Desain/Kolaborasi -->
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" alt="Desain & Prototipe" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>

                <!-- STEP 3: Build & Launch -->
                <div class="reveal relative flex flex-col md:flex-row items-center gap-10 lg:gap-24 z-10">
                    <!-- Number Node (Tengah) -->
                    <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-blue text-white items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/40 ring-8 ring-white z-20">3</div>
                    
                    <!-- Kiri: Gambar -->
                    <div class="w-full md:w-1/2">
                        <div class="w-full aspect-[4/3] lg:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                            <!-- Placeholder Gambar Salaman/Deal -->
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Pengembangan & Peluncuran" class="w-full h-full object-cover">
                        </div>
                    </div>
                    
                    <!-- Kanan: Teks -->
                    <div class="w-full md:w-1/2 md:pl-4 lg:pl-10">
                        <h3 class="text-3xl font-semibold text-brand-dark mb-4 tracking-tight">Pengembangan & Peluncuran</h3>
                        <p class="text-slate-600 font-medium leading-relaxed mb-8">Kami mengembangkan, menguji, dan menerapkan proyek Anda dengan presisi, memastikan peluncuran yang lancar dan dampak yang terukur.</p>
                        
                        <ul class="space-y-5">
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                                </div>
                                Sprint pengembangan (Agile)
                            </li>
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                </div>
                                Pengujian QA dan optimasi
                            </li>
                            <li class="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                Dukungan peluncuran dan analitik
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION KEENAM: CTA (Call to Action) Sesuai Referensi -->
    <section class="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div class="reveal relative rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden group">
            
            <!-- Latar Belakang Gambar Murni tanpa Overlay Gelap -->
            <div class="absolute inset-0 z-0">
                <img src="https://i.pinimg.com/736x/17/43/21/174321b860839f260a096c0dd2e3ffaf.jpg" alt="Background CTA" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out">
            </div>

            <!-- Content -->
            <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-brand-dark tracking-tight leading-[1.3] mb-10 max-w-3xl mx-auto">
                    Siap untuk mentransformasi kehadiran digital Anda? <br class="hidden md:block"/> Mari ciptakan sesuatu yang luar biasa bersama-sama.
                </h2>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <!-- Button 1: Start a Project -->
                    <a href="#" class="group flex items-center gap-3 bg-brand-blue text-white pl-6 pr-2 py-2 rounded-full text-[15px] font-semibold shadow-lg shadow-blue-500/25 hover:bg-brand-hover hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
                        Mulai Proyek
                        <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-blue"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </a>

                    <!-- Button 2: Schedule a Call (Efek Glassmorphism Terang) -->
                    <a href="#" class="group flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/50 text-brand-dark pl-6 pr-2 py-2 rounded-full text-[15px] font-semibold hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm">
                        Jadwalkan Panggilan
                        <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-dark"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    </section>

    <!-- SECTION KETUJUH: Footer Grand Sesuai Referensi -->
    <footer class="w-full max-w-7xl mx-auto px-6 pb-12 mt-10 relative z-10">
        <div class="reveal delay-100 bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center overflow-hidden">
            
            <!-- Giant Brand Text -->
            <div class="w-full flex justify-center items-center py-10 md:py-16">
                <h2 class="text-[17vw] md:text-[14vw] lg:text-[14.5vw] font-medium text-[#0A0F1C] tracking-tighter leading-none select-none">
                    Webuild
                </h2>
            </div>
            
            <!-- Divider -->
            <div class="w-full h-px bg-slate-100 mb-8"></div>
            
            <!-- Bottom Footer Bar -->
            <div class="w-full flex flex-col md:flex-row justify-between items-center gap-6 px-2 md:px-4">
                <p class="text-[13px] font-medium text-[#8ea5d9]">
                    &copy; 2026 Webuild. All rights reserved.
                </p>
                <div class="flex items-center gap-3">
                    <a href="#" aria-label="Twitter" class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="#" aria-label="Instagram" class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                </div>
            </div>
            
        </div>
    </footer>

    <!-- Script Utama (Menu, Animasi Tilt, dan Auto-scroll Slider) -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // --- MENU SELULER ---
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // --- EFEK 3D TILT HORIZONTAL (OUR IMPACT) ---
            const tiltCards = document.querySelectorAll('.tilt-card');
            let currentMouseX = window.innerWidth / 2; 

            function applyGlobalTilt() {
                const windowCenterX = window.innerWidth / 2;
                tiltCards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    if(rect.top <= window.innerHeight && rect.bottom >= 0) {
                        let normalizedX = (currentMouseX - windowCenterX) / windowCenterX;
                        const rotateY = normalizedX * -15; 
                        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    }
                });
            }

            document.addEventListener('mousemove', (e) => {
                currentMouseX = e.clientX;
                requestAnimationFrame(applyGlobalTilt);
            });

            document.addEventListener('scroll', () => {
                requestAnimationFrame(applyGlobalTilt);
            });
            applyGlobalTilt();

            // --- AUTO-SCROLL SLIDER TESTIMONI (Setiap ~2 Detik & Seamless Loop) ---
            const testiTrack = document.getElementById('testimonial-track');
            const testiCards = document.querySelectorAll('.testi-card'); // Sekarang berjumlah 5 dengan clone
            const testiDots = document.getElementById('testimonial-dots').children;
            let currentTestiIndex = 0;
            const totalOriginal = 4; // Jumlah kartu testimoni asli

            function slideTestimonial(index, isSmooth = true) {
                if (!testiTrack || testiCards.length === 0) return;
                
                // [PERBAIKAN] Validasi agar index tidak melebihi jumlah kartu untuk mencegah error 'undefined'
                if (index >= testiCards.length || index < 0) {
                    index = 0;
                    currentTestiIndex = 0;
                }
                
                const card = testiCards[index];
                if (!card) return; // Pemeriksaan keamanan ganda
                
                const containerWidth = testiTrack.parentElement.offsetWidth;
                
                // Kalkulasi agar kartu yang aktif berada pas di tengah layar
                const scrollPos = card.offsetLeft - (containerWidth / 2) + (card.offsetWidth / 2);
                
                testiTrack.scrollTo({
                    left: scrollPos,
                    behavior: isSmooth ? 'smooth' : 'auto' // 'auto' digunakan untuk lompat instan tanpa animasi
                });

                // Memperbarui indikator titik (pagination dots)
                const dotIndex = index % totalOriginal;
                Array.from(testiDots).forEach((dot, i) => {
                    if (i === dotIndex) {
                        dot.className = 'w-8 h-1.5 bg-brand-blue rounded-full transition-all duration-300';
                    } else {
                        dot.className = 'w-2 h-1.5 bg-slate-200 rounded-full transition-all duration-300';
                    }
                });
            }

            // Interval untuk bergeser sekitar 2 detik (2500 ms agar jeda baca nyaman)
            setInterval(() => {
                currentTestiIndex++;
                
                // [PERBAIKAN] Proteksi tambahan jika interval bertumpuk karena tab berjalan di background
                if (currentTestiIndex > totalOriginal) {
                    currentTestiIndex = 0;
                }
                
                if (currentTestiIndex === totalOriginal) {
                    // Geser mulus ke kartu tiruan (clone) di akhir
                    slideTestimonial(currentTestiIndex, true);
                    
                    // Tunggu animasi scroll selesai, lalu lompat instan secara rahasia ke kartu 1 yang asli
                    setTimeout(() => {
                        // Cek lagi untuk menghindari balapan eksekusi (race condition)
                        if (currentTestiIndex === totalOriginal) {
                            currentTestiIndex = 0;
                            slideTestimonial(currentTestiIndex, false);
                        }
                    }, 800); 
                } else {
                    slideTestimonial(currentTestiIndex, true);
                }
            }, 2500);

            // Perbarui posisi tengah jika ukuran layar berubah
            window.addEventListener('resize', () => slideTestimonial(currentTestiIndex, false));
            
            // Inisialisasi posisi awal saat dimuat
            setTimeout(() => slideTestimonial(0, true), 100);

            // --- ANIMASI SCROLL NAVBAR (MEMBESAR SAAT SCROLL BAWAH, MENGECIL SAAT SCROLL ATAS) ---
            const navbar = document.getElementById('floating-navbar');
            let lastScrollY = window.scrollY;

            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                
                // Menghindari error efek memantul (overscroll) di Mac/iOS
                if (currentScrollY <= 0) {
                    navbar.classList.remove('scale-105', 'max-w-5xl');
                    navbar.classList.add('max-w-4xl');
                    lastScrollY = currentScrollY;
                    return;
                }

                if (currentScrollY > 50) {
                    if (currentScrollY > lastScrollY) {
                        // Scroll ke bawah: Navbar membesar (lebar dan skala bertambah)
                        navbar.classList.add('scale-105', 'max-w-5xl');
                        navbar.classList.remove('max-w-4xl');
                    } else {
                        // Scroll ke atas: Navbar mengecil (kembali ke ukuran asal)
                        navbar.classList.remove('scale-105', 'max-w-5xl');
                        navbar.classList.add('max-w-4xl');
                    }
                }
                
                lastScrollY = currentScrollY;
            });

            // --- INTERSECTION OBSERVER UNTUK EFEK MUNCUL SAAT SCROLL (REVEAL) ---
            const revealOptions = {
                root: null,
                // Trigger sedikit lebih masuk ke dalam layar agar animasi lebih terasa
                rootMargin: '0px 0px -50px 0px', 
                threshold: 0.15 // Animasi mulai saat 15% dari elemen terlihat
            };

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Elemen masuk viewport -> Tampilkan
                        entry.target.classList.add('active');
                    } else {
                        // Elemen keluar viewport -> Sembunyikan kembali
                        // Ini membuat animasi berulang terus-menerus saat scroll naik/turun
                        entry.target.classList.remove('active');
                    }
                });
            }, revealOptions);

            // Terapkan deteksi scroll pada semua elemen yang memiliki class .reveal dan .reveal-fade
            document.querySelectorAll('.reveal, .reveal-fade').forEach(el => {
                revealObserver.observe(el);
            });
        });
    </script>
</body>
</html>