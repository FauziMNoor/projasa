export default function Marquee() {
  const brandLogosRow1 = [
    'armour.png',
    'azarine.png',
    'blibli.png',
    'bocahindo.png',
    'canon.png',
    'elemis.png',
    'ellips.png',
    'fujifilm.png',
    'glints.png',
    'grab.png',
    'hokben.png',
    'idemitsu.png',
    'itb.png',
    'lotte.png',
    'lps.png'
  ]

  const brandLogosRow2 = [
    'mondemart.png',
    'nars.png',
    'nissin.png',
    'pegadaian.png',
    'polytron.png',
    'raksa.png',
    'ricola.png',
    'rohto.png',
    'sekai.png',
    'senka.png',
    'shopee.png',
    'toyota.png',
    'ugm.png',
    'usm.png'
  ]

  return (
    <div className="w-full py-8 border-y border-slate-200/60 bg-white/50 overflow-hidden">
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="overflow-hidden mask-fade">
          <div
            className="flex items-center"
            style={{
              animation: 'marquee-left 30s linear infinite',
              width: 'max-content'
            }}
          >
            {[...brandLogosRow1, ...brandLogosRow1].map((logo, i) => (
              <div
                key={i}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                style={{ marginRight: '3rem', flexShrink: 0 }}
              >
                <img
                  src={`/image/logobrand_project/${logo}`}
                  alt="brand"
                  style={{ height: '48px', width: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mask-fade">
          <div
            className="flex items-center"
            style={{
              animation: 'marquee-right 30s linear infinite',
              width: 'max-content'
            }}
          >
            {[...brandLogosRow2, ...brandLogosRow2].map((logo, i) => (
              <div
                key={i}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                style={{ marginRight: '3rem', flexShrink: 0 }}
              >
                <img
                  src={`/image/logobrand_project/${logo}`}
                  alt="brand"
                  style={{ height: '48px', width: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
