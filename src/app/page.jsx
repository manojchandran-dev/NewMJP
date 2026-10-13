import Link from 'next/link'
import { MaskHeadline, Eyebrow, Shorts, Clouds, Stars, SHADES, MEESHO, WHATSAPP, btnDark, btnLight } from '../components'

const balloons = [
  { num: '15+', label: 'Years of manufacturing', bg: 'bg-rose' },
  { num: '1–12', label: 'Age range covered', bg: 'bg-butter' },
  { num: '30+', label: 'Wholesale partners', bg: 'bg-mist' },
]

const features = [
  { l: 'S', bg: 'bg-rose', t: 'Skin-friendly fabric', d: 'Cotton blend that stays soft after repeated washes.' },
  { l: 'C', bg: 'bg-butter', t: 'Daily wear comfort', d: 'Regular, comfortable fit for active days.' },
  { l: 'R', bg: 'bg-mist', t: 'Reinforced seams', d: 'Strong stitching, checked before every pack.' },
  { l: 'B', bg: 'bg-sage', t: 'For boys & girls', d: 'Sizes S to XL across ages 1–12.' },
  { l: 'W', bg: 'bg-lilac', t: 'Retail & bulk', d: 'On Meesho, or direct from our unit.' },
]

const sag = [4, 20, 28, 20, 4]

export default function Home() {
  return (
    <>
      {/* HERO — morning sky */}
      <section className="relative overflow-hidden bg-sky px-5 pt-14">
        <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute top-8 right-[8%] w-[200px] animate-sun opacity-90">
          <path d="M100 14v20M100 166v20M14 100h20M166 100h20M39 39l14 14M147 147l14 14M39 161l14-14M147 53l14-14" stroke="#E9B949" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="100" r="42" fill="none" stroke="#E9B949" strokeWidth="2" />
          <circle cx="100" cy="100" r="30" fill="#F4CF5E" opacity=".35" />
        </svg>
        <Clouds items={[[40, 110, 48, 0], [150, 80, 60, -20], [90, 140, 70, -40]]} />

        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
          <Eyebrow className="animate-fade text-muted">KIDS INNERWEAR MANUFACTURER · TIRUPPUR</Eyebrow>
          <MaskHeadline
            className="max-w-[900px] text-[44px] leading-[1.04] font-extrabold tracking-[-2px] md:text-[76px]"
            lines={[[['Comfort,'], ['crafted']], [['for'], ['growing', true], ['kids.']]]}
          />
          <p className="max-w-[580px] animate-fade text-lg leading-relaxed text-muted [animation-delay:.6s] md:text-[19px]">
            Soft cotton-blend inner shorts for boys &amp; girls, age 1–12. Made in Tiruppur for retailers, wholesalers and families for over 15 years.
          </p>
          <div className="flex animate-fade flex-wrap justify-center gap-3 [animation-delay:.75s]">
            <a href={MEESHO} className={btnDark}>Shop on Meesho</a>
            <a href={WHATSAPP} className={btnLight}>Wholesale enquiry</a>
          </div>
        </div>

        {/* clothesline */}
        <div className="relative mx-auto mt-14 h-[250px] max-w-[1000px] animate-fade [animation-delay:.9s]">
          <svg viewBox="0 0 1000 70" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 top-0 h-[70px] w-full">
            <path d="M0 4 Q500 60 1000 4" stroke="#14213D" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="relative flex justify-around gap-2">
            {SHADES.map((s, i) => (
              <div key={s.name} className={`origin-top animate-sway flex-col items-center ${i % 2 && i !== 2 ? 'hidden sm:flex' : 'flex'}`}
                style={{ marginTop: sag[i], animationDelay: `${i * 0.4}s` }}>
                <div className="h-[18px] w-[9px] rounded-sm bg-[#C9A27A]" />
                <Shorts color={s.hex} label={`${s.name} inner shorts`} className="-mt-1 w-[110px] md:w-32" />
                <div className="mt-2 text-xs font-semibold text-muted">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — balloons */}
      <section className="px-5 pt-28 pb-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 md:grid-cols-2">
          <div className="reveal">
            <Eyebrow>BY THE NUMBERS</Eyebrow>
            <h2 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight md:text-[44px]">A decade and a half of everyday comfort.</h2>
          </div>
          <div className="flex flex-wrap justify-around gap-6">
            {balloons.map((b, i) => (
              <div key={b.num} className="flex animate-float flex-col items-center" style={{ animationDelay: `${i * 0.8}s` }}>
                <div className={`flex h-[152px] w-[132px] flex-col items-center justify-center rounded-[50%_50%_47%_47%] ${b.bg}`}>
                  <div className="text-[38px] font-extrabold tracking-tight">{b.num}</div>
                  <div className="px-3.5 text-center text-[12.5px] font-bold">{b.label}</div>
                </div>
                <svg viewBox="0 0 20 80" aria-hidden="true" className="h-[70px] w-3.5"><path d="M10 0 Q2 20 10 40 T10 80" stroke="#8D96AB" strokeWidth="1.2" fill="none" /></svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="reveal text-4xl font-extrabold tracking-tight md:text-[44px]">Why retailers &amp; parents choose us</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f) => (
              <div key={f.l} className="lift reveal flex min-h-[200px] flex-col gap-10 rounded-[18px] border border-line bg-white p-7">
                <div className={`flex size-12 items-center justify-center rounded-xl text-xl font-extrabold ${f.bg}`}>{f.l}</div>
                <div>
                  <div className="text-lg font-bold">{f.t}</div>
                  <div className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="px-5 pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">
          <Link href="/products" className="lift reveal flex min-h-[300px] flex-col gap-3.5 rounded-3xl bg-butter p-11">
            <Eyebrow className="text-ink">THE PRODUCT</Eyebrow>
            <h3 className="text-[34px] font-extrabold tracking-tight">Kids Inner Shorts</h3>
            <p className="max-w-[420px] text-[16.5px] leading-relaxed text-sub">Sizes S to XL, five shades, packs of 12. Full specifications and size guide.</p>
            <span className="mt-auto font-bold">View specifications →</span>
          </Link>
          <Link href="/about" className="lift reveal flex min-h-[300px] flex-col gap-3.5 rounded-3xl bg-sage p-11">
            <Eyebrow className="text-ink">OUR STORY</Eyebrow>
            <h3 className="text-[34px] font-extrabold tracking-tight">15+ years in Tiruppur</h3>
            <p className="max-w-[420px] text-[16.5px] leading-relaxed text-sub">Built in one of India’s largest knitwear hubs, on one simple mission.</p>
            <span className="mt-auto font-bold">About MJP.Tex →</span>
          </Link>
        </div>
      </section>

      {/* NIGHT */}
      <section className="relative overflow-hidden bg-ink px-5 py-32 text-white">
        <Stars />
        <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-6 text-center">
          <svg viewBox="0 0 80 80" aria-hidden="true" className="w-16 animate-float"><path d="M52 10a30 30 0 1 0 18 46A26 26 0 0 1 52 10z" fill="none" stroke="#F4E3A7" strokeWidth="2" /></svg>
          <p className="reveal text-[28px] leading-snug font-bold tracking-tight md:text-[38px]">“Everyday inner and bottom wear that children can wear in comfort, from morning to night.”</p>
          <div className="text-sm font-semibold tracking-[2px] text-dim">OUR MISSION SINCE DAY ONE</div>
        </div>
      </section>

      {/* WHOLESALE + truck */}
      <section className="overflow-hidden px-5 pt-24">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-7">
          <div className="reveal max-w-[640px]">
            <Eyebrow>WHOLESALE</Eyebrow>
            <h2 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight md:text-[44px]">Supplying retailers, wholesalers &amp; distributors.</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">Trusted by 30+ regular wholesale partners in Andhra Pradesh. Message us for bulk pricing.</p>
          </div>
          <a href={WHATSAPP} className={btnDark}>Chat on WhatsApp</a>
        </div>
        <div className="relative mt-10 h-[150px]">
          <svg viewBox="0 0 260 110" aria-hidden="true" className="absolute bottom-2.5 w-60 animate-drive">
            <g fill="none" stroke="#14213D" strokeWidth="2" strokeLinejoin="round">
              <rect x="6" y="14" width="160" height="70" rx="6" fill="#fff" />
              <path d="M166 34h44l32 28v22h-76z" fill="#F7E7C1" />
              <path d="M178 44h28l18 18h-46z" fill="#E8F1F8" />
            </g>
            <text x="86" y="56" textAnchor="middle" fontWeight="800" fontSize="20" fill="#14213D">MJP.Tex</text>
            {[50, 208].map((cx) => (
              <circle key={cx} cx={cx} cy="88" r="13" fill="#fff" stroke="#14213D" strokeWidth="2" strokeDasharray="6 4"
                className="animate-wheel" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
            ))}
          </svg>
          <div className="road absolute inset-x-0 bottom-1.5" />
        </div>
      </section>
    </>
  )
}
