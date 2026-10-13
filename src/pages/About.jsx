import { Link } from 'react-router-dom'
import { MaskHeadline, Eyebrow, Clouds, Pin, WHATSAPP, btnDark } from '../components'

const pillars = [
  {
    t: 'Comfort-first fabric',
    d: 'Soft, breathable cotton blend chosen for all-day comfort on young, active skin.',
    art: <path d="M5 35 Q30 5 60 25 T115 15" stroke="#F2A7BE" strokeWidth="10" strokeLinecap="round" fill="none" />,
  },
  {
    t: 'Careful stitching',
    d: 'Reinforced seams and consistent finishing, checked before every pack leaves our unit.',
    art: (
      <>
        <path d="M5 12 H115 M5 38 H115" stroke="#9CC5EE" strokeWidth="2" />
        <path d="M5 25 H115" stroke="#14213D" strokeWidth="3" strokeDasharray="10 8" strokeLinecap="round" className="animate-stitch" />
      </>
    ),
  },
  {
    t: 'Inclusive sizing',
    d: 'Sizes S to XL for boys and girls, across ages 1 to 12.',
    art: [[4, 30, 18, 16], [30, 22, 20, 24], [58, 13, 22, 33], [88, 4, 26, 42]].map(([x, y, w, h]) => (
      <rect key={x} x={x} y={y} width={w} height={h} rx="3" fill="#8CCB9E" />
    )),
  },
]

const stats = [['15+', 'Years in kids wear'], ['1–12', 'Age range served'], ['30+', 'Regular wholesale partners']]

export default function About() {
  return (
    <>
      {/* HERO — the sun's day arc */}
      <section className="relative animate-daysky overflow-hidden bg-sky px-5 pt-16">
        <Clouds items={[[30, 100, 55, 0], [130, 70, 70, -30]]} />
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center">
          <Eyebrow className="animate-fade text-muted">ABOUT MJP.TEX</Eyebrow>
          <MaskHeadline className="text-[44px] leading-[1.04] font-extrabold tracking-[-2px] md:text-[72px]"
            lines={[[['Made'], ['for'], ['morning']], [['to'], ['night.', true]]]} />
          <p className="max-w-[620px] animate-fade text-lg leading-relaxed text-muted [animation-delay:.6s]">
            MJP.Tex began with a straightforward mission: everyday inner and bottom wear that children can wear in comfort, all day long. For 15+ years, that hasn’t changed.
          </p>
        </div>
        <div className="relative mx-auto mt-8 hidden h-[320px] max-w-[1040px] md:block">
          <svg viewBox="0 0 1040 320" aria-hidden="true" className="absolute inset-0 size-full">
            <path d="M 40 300 Q 520 -120 1000 300" stroke="#14213D" strokeWidth="1" strokeDasharray="4 7" fill="none" />
            <line x1="0" y1="300" x2="1040" y2="300" stroke="#14213D" strokeWidth="1" />
          </svg>
          {/* offset-path coords match the 1040px-wide box */}
          <div className="sun-orb absolute top-0 left-0 size-0">
            <div className="-mt-7 -ml-7 size-14 rounded-full bg-sun shadow-[0_0_0_12px_rgb(244_207_94/.25)]" />
          </div>
          <div className="absolute inset-x-0 top-[312px] flex justify-between text-xs font-bold tracking-[2px] text-muted">
            <span>MORNING</span><span>PLAYTIME</span><span>BEDTIME</span>
          </div>
        </div>
        <div className="h-16" />
      </section>

      {/* PILLARS */}
      <section className="px-5 py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="reveal max-w-[640px]">
            <Eyebrow>WHAT GUIDES US</Eyebrow>
            <h2 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight md:text-[44px]">Three pillars behind every pack.</h2>
          </div>
          <div className="grid gap-[18px] md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.t} className="lift reveal flex flex-col gap-6 rounded-[22px] border border-line bg-white p-9">
                <svg viewBox="0 0 120 50" aria-hidden="true" className="w-[120px]">{p.art}</svg>
                <div>
                  <div className="text-[22px] font-extrabold">{p.t}</div>
                  <p className="mt-2.5 leading-relaxed text-muted">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIRUPPUR */}
      <section className="bg-ink px-5 py-28 text-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div className="reveal">
            <Eyebrow className="text-sun">ROOTED IN TIRUPPUR</Eyebrow>
            <h2 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight md:text-[44px]">From India’s knitwear capital.</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-pale">Our unit is based in Tiruppur, Tamil Nadu, one of India’s largest knitwear manufacturing hubs. We sell retail through Meesho and supply bulk orders to retailers, wholesalers and distributors.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-night">
            <svg viewBox="0 0 400 300" aria-hidden="true" className="absolute inset-0 size-full">
              <path d="M0 50H400M0 100H400M0 150H400M0 200H400M0 250H400M50 0V300M100 0V300M150 0V300M200 0V300M250 0V300M300 0V300M350 0V300" stroke="#2C3A5C" />
              <path d="M30 260 C 90 180, 160 220, 210 150 S 330 90, 380 40" stroke="#F4CF5E" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            </svg>
            <div className="absolute top-1/2 left-[52%]"><Pin /></div>
            <div className="absolute top-1/2 left-[52%] mt-5 -translate-x-1/2 text-sm font-bold">Tiruppur, TN</div>
          </div>
        </div>
      </section>

      {/* STATS + CTA */}
      <section className="px-5 pt-28 pb-32">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
          <div className="grid gap-[18px] sm:grid-cols-3">
            {stats.map(([n, l]) => (
              <div key={n} className="reveal border-t-2 border-ink pt-5">
                <div className="text-[54px] font-extrabold tracking-[-2px]">{n}</div>
                <div className="font-semibold text-muted">{l}</div>
              </div>
            ))}
          </div>
          <div className="reveal flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-butter px-11 py-14">
            <h2 className="max-w-[600px] text-[36px] font-extrabold tracking-tight">Ready to stock MJP.Tex in your store?</h2>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP} className={btnDark}>Chat on WhatsApp</a>
              <Link to="/products" className="inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold transition hover:-translate-y-0.5">See products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
