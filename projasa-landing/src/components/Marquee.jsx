export default function Marquee() {
  const brandLogos = [
    'armour.png', 'azarine.png', 'blibli.png', 'bocahindo.png', 'canon.png',
    'elemis.png', 'ellips.png', 'fujifilm.png', 'glints.png', 'grab.png',
    'hokben.png', 'idemitsu.png', 'itb.png', 'lotte.png', 'lps.png',
    'mondemart.png', 'nars.png', 'nissin.png', 'pegadaian.png', 'polytron.png',
    'raksa.png', 'ricola.png', 'rohto.png', 'sekai.png', 'senka.png',
    'shopee.png', 'toyota.png', 'ugm.png', 'usm.png'
  ]

  return (
    <section className="py-12 overflow-hidden bg-[#f4f0fd]">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="flex group overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* First set */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 gap-12 md:gap-20 pr-12 md:pr-20 items-center">
            {brandLogos.map((logo, i) => (
              <div key={i} className="shrink-0">
                <img
                  src={`/image/logobrand_project/${logo}`}
                  alt="brand"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div aria-hidden="true" className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 gap-12 md:gap-20 pr-12 md:pr-20 items-center">
            {brandLogos.map((logo, i) => (
              <div key={i} className="shrink-0">
                <img
                  src={`/image/logobrand_project/${logo}`}
                  alt="brand"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
