'use client'
import { useState } from 'react'
import { MaskHeadline, Eyebrow, Shorts, SHADES, MEESHO, WHATSAPP, btnDark, btnLight } from '../../components'

const SIZES = [['S', 18, 20], ['M', 19, 23], ['L', 20, 26], ['XL', 23, 31]]

const specs = [
  ['AGE RANGE', '1–12 years'], ['SIZES', 'S, M, L, XL'], ['FABRIC', 'Soft cotton blend'],
  ['FIT', 'Regular & comfortable'], ['PACK SIZE', '12 pieces'], ['COLOURS', '5 shades'],
]

const quality = [
  ['bg-rose', 'Soft, wash after wash', 'Skin-friendly cotton blend that stays soft after repeated washes.'],
  ['bg-mist', 'Reinforced seams', 'Strong stitching built to last through active days.'],
  ['bg-sage', 'Checked before packing', 'Every pack is quality-tested before it leaves our unit.'],
]

export default function Products() {
  const [shade, setShade] = useState(2)
  const [unit, setUnit] = useState('cm')
  const [size, setSize] = useState('M')
  const fmt = (cm) => (unit === 'cm' ? `${cm} cm` : `${(cm / 2.54).toFixed(2)}″`)
  const chip = (on) => `min-h-11 rounded-[9px] px-[18px] text-sm font-bold transition ${on ? 'bg-ink text-white' : 'text-ink'}`

  return (
    <>
      {/* PRODUCT HERO */}
      <section className="px-5 pt-16 pb-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px] bg-sky">
            <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute w-[86%] animate-ring-text opacity-55">
              <defs><path id="ring" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" /></defs>
              <text fontSize="9" letterSpacing="4.2" fontWeight="700" fill="#4A5675"><textPath href="#ring">SOFT COTTON BLEND · REINFORCED SEAMS · AGE 1–12 · TIRUPPUR · </textPath></text>
            </svg>
            <svg viewBox="0 0 400 40" aria-hidden="true" className="absolute top-[16%] w-full"><path d="M0 6 Q200 34 400 6" stroke="#14213D" strokeWidth="1.2" fill="none" /></svg>
            <div className="relative -mt-2.5 flex origin-top animate-sway flex-col items-center">
              <div className="h-6 w-3 rounded-[3px] bg-[#C9A27A]" />
              <Shorts color={SHADES[shade].hex} label={`${SHADES[shade].name} kids inner shorts`} className="-mt-1.5 w-[200px] md:w-[260px]" />
            </div>
            <div className="absolute bottom-5 left-5 rounded-full bg-white px-3.5 py-2 text-[13px] font-bold">Pack of 12</div>
          </div>

          <div className="flex flex-col gap-6">
            <Eyebrow className="animate-fade text-coral">BEST SELLER</Eyebrow>
            <MaskHeadline className="text-[44px] leading-[1.04] font-extrabold tracking-[-2px] md:text-[62px]" lines={[[['Kids'], ['Inner'], ['Shorts']]]} />
            <p className="animate-fade text-lg leading-relaxed text-muted [animation-delay:.4s]">Soft cotton-blend inner shorts for boys &amp; girls, age 1–12. A regular, comfortable fit made for all-day wear.</p>
            <div className="animate-fade [animation-delay:.5s]">
              <div className="mb-3 text-sm font-bold">Shade: <span className="font-medium text-muted">{SHADES[shade].name}</span></div>
              <div className="flex flex-wrap gap-3">
                {SHADES.map((s, i) => (
                  <button key={s.name} onClick={() => setShade(i)} aria-label={s.name} aria-pressed={shade === i}
                    className={`size-11 cursor-pointer rounded-full border-[3px] border-cream transition-shadow ${shade === i ? 'ring-2 ring-ink' : 'ring-2 ring-line'}`}
                    style={{ background: s.hex }} />
                ))}
              </div>
              <div className="mt-2.5 text-[12.5px] text-muted">Colours may vary based on availability.</div>
            </div>
            <div className="flex animate-fade flex-wrap gap-3 [animation-delay:.6s]">
              <a href={MEESHO} className={btnDark}>Buy on Meesho</a>
              <a href={WHATSAPP} className={btnLight}>Bulk enquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="px-5 pb-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <h2 className="reveal text-[40px] font-extrabold tracking-tight">Specifications</h2>
          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-6">
            {specs.map(([k, v]) => (
              <div key={k} className="lift reveal rounded-2xl border border-line bg-white p-[22px]">
                <div className="text-[12.5px] font-bold tracking-[1.5px] text-muted">{k}</div>
                <div className="mt-2.5 text-xl font-bold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIZE GUIDE */}
      <section className="border-y border-line bg-white px-5 py-24">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-7">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="reveal">
              <h2 className="text-[40px] font-extrabold tracking-tight">Size guide</h2>
              <p className="mt-2 text-muted">Tap a size to highlight it.</p>
            </div>
            <div role="group" aria-label="Units" className="flex rounded-xl bg-[#F1EEE8] p-1">
              <button onClick={() => setUnit('cm')} className={chip(unit === 'cm')}>cm</button>
              <button onClick={() => setUnit('in')} className={chip(unit === 'in')}>inches</button>
            </div>
          </div>
          <div className="overflow-x-auto rounded-[18px] border border-line">
            <table className="w-full min-w-[460px] border-collapse text-[17px]">
              <thead>
                <tr className="bg-[#F7F5F1] text-left text-[13px] tracking-[1.5px]">
                  <th className="px-6 py-[18px]">SIZE</th><th className="px-6 py-[18px]">HIP WIDTH</th><th className="px-6 py-[18px]">TOTAL LENGTH</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map(([s, hip, len]) => (
                  <tr key={s} onClick={() => setSize(s)} className={`cursor-pointer border-t border-line transition-colors duration-300 ${size === s ? 'bg-ink text-white' : 'bg-white hover:bg-cream'}`}>
                    <td className="px-6 py-[18px]"><button onClick={() => setSize(s)} className="cursor-pointer font-extrabold">{s}</button></td>
                    <td className="px-6 py-[18px]">{fmt(hip)}</td>
                    <td className="px-6 py-[18px]">{fmt(len)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-[18px] md:grid-cols-3">
          {quality.map(([bg, t, d]) => (
            <div key={t} className={`lift reveal rounded-[22px] p-9 ${bg}`}>
              <div className="text-[22px] font-extrabold">{t}</div>
              <p className="mt-2.5 leading-relaxed text-sub">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="px-5 pb-32">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <h2 className="reveal text-[40px] font-extrabold tracking-tight">Two ways to buy</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <a href={MEESHO} className="lift reveal flex flex-col gap-3 rounded-3xl border border-line bg-white p-10">
              <Eyebrow className="text-muted">RETAIL</Eyebrow>
              <div className="text-[28px] font-extrabold">Buy on Meesho</div>
              <p className="leading-relaxed text-muted">For families and small orders, shipped across India.</p>
              <span className="mt-2.5 font-bold">Open store →</span>
            </a>
            <a href={WHATSAPP} className="lift reveal flex flex-col gap-3 rounded-3xl bg-ink p-10 text-white">
              <Eyebrow className="text-dim">WHOLESALE</Eyebrow>
              <div className="text-[28px] font-extrabold">Direct from our unit</div>
              <p className="leading-relaxed text-pale">Retailers, wholesalers &amp; distributors. Chat with us for bulk pricing.</p>
              <span className="mt-2.5 font-bold text-sun">Chat on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
