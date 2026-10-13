'use client'
import { useState } from 'react'
import { MaskHeadline, Eyebrow, WHATSAPP, PHONE, EMAIL, HOURS } from '../../components'

const ALL_SIZES = ['S', 'M', 'L', 'XL']
const TYPES = ['Retailer', 'Wholesaler', 'Distributor']

const icon = { fill: 'none', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', width: 30, height: 30, viewBox: '0 0 24 24', 'aria-hidden': true }

const cards = [
  { href: WHATSAPP, label: 'WhatsApp', value: '+91 63806 99014', dark: true,
    svg: <svg {...icon} stroke="#F4CF5E" className="animate-nudge"><path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.2-4.6A9 9 0 1 1 21 12z" /></svg> },
  { href: 'tel:+918190098951', label: 'Call', value: PHONE,
    svg: <svg {...icon} stroke="#D9634A" className="animate-ring"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg> },
  { href: `mailto:${EMAIL}`, label: 'Email', value: EMAIL, small: true,
    svg: <svg {...icon} stroke="#D9634A" className="animate-nudge"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> },
  { href: 'https://www.instagram.com/mjptex', label: 'Instagram', value: '@mjptex',
    svg: <svg {...icon} stroke="#D9634A"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="#D9634A" /></svg> },
]

export default function Contact() {
  const [type, setType] = useState('Retailer')
  const [sizes, setSizes] = useState(['M', 'L'])
  const [packs, setPacks] = useState(5)

  const toggle = (s) => setSizes((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]))
  const sizeText = sizes.length ? ALL_SIZES.filter((s) => sizes.includes(s)).join(', ') : 'any size'
  const message = `Hi MJP.Tex, I am a ${type.toLowerCase()} interested in kids inner shorts — sizes ${sizeText}, about ${packs} pack${packs === 1 ? '' : 's'} of 12. Please share pricing.`
  const chip = (on) => `min-h-11 cursor-pointer rounded-[10px] border px-[18px] text-sm font-bold transition ${on ? 'border-ink bg-ink text-white' : 'border-edge bg-white text-ink'}`

  return (
    <>
      <section className="px-5 pt-20 pb-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
          <Eyebrow className="animate-fade text-coral">CONTACT</Eyebrow>
          <MaskHeadline className="text-[44px] leading-[1.04] font-extrabold tracking-[-2px] md:text-[68px]" lines={[[['Let’s'], ['talk'], ['shorts.']]]} />
          <p className="max-w-[560px] animate-fade text-lg leading-relaxed text-muted [animation-delay:.4s]">Retail or wholesale, we reply fastest on WhatsApp. {HOURS}.</p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <a key={c.label} href={c.href} style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              className={`lift flex animate-fade flex-col gap-6 rounded-[20px] p-7 ${c.dark ? 'bg-ink text-white' : 'border border-line bg-white'}`}>
              {c.svg}
              <div>
                <div className={`text-[13px] font-semibold ${c.dark ? 'text-dim' : 'text-muted'}`}>{c.label}</div>
                <div className={`mt-1 font-extrabold break-all ${c.small ? 'text-[17px]' : 'text-xl'}`}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ENQUIRY + MAP */}
      <section className="px-5 pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-8 md:p-10">
            <div>
              <h2 className="text-[30px] font-extrabold tracking-tight">Quick enquiry</h2>
              <p className="mt-2 leading-relaxed text-muted">Pick what you need and we’ll open WhatsApp with your message ready.</p>
            </div>
            <fieldset>
              <legend className="mb-2.5 text-[13px] font-bold tracking-[1.5px]">I AM A</legend>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => <button key={t} onClick={() => setType(t)} aria-pressed={type === t} className={chip(type === t)}>{t}</button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2.5 text-[13px] font-bold tracking-[1.5px]">SIZES</legend>
              <div className="flex flex-wrap gap-2">
                {ALL_SIZES.map((s) => <button key={s} onClick={() => toggle(s)} aria-pressed={sizes.includes(s)} className={chip(sizes.includes(s))}>{s}</button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2.5 text-[13px] font-bold tracking-[1.5px]">PACKS OF 12</legend>
              <div className="inline-flex items-center rounded-xl border border-edge">
                <button onClick={() => setPacks((p) => Math.max(1, p - 1))} aria-label="Fewer packs" className="size-12 cursor-pointer text-[22px]">−</button>
                <span className="min-w-12 text-center text-lg font-extrabold" aria-live="polite">{packs}</span>
                <button onClick={() => setPacks((p) => Math.min(999, p + 1))} aria-label="More packs" className="size-12 cursor-pointer text-[22px]">+</button>
              </div>
            </fieldset>
            <div className="rounded-[14px] bg-[#F7F5F1] px-[18px] py-4 text-[14.5px] leading-relaxed text-sub">{message}</div>
            <a href={`${WHATSAPP}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer"
              className="self-start rounded-xl bg-ink px-7 py-4 font-bold text-white transition hover:-translate-y-0.5">Send on WhatsApp →</a>
          </div>

          <div className="lift relative min-h-[420px] overflow-hidden rounded-3xl bg-sky">
            <iframe title="mjptex on Google Maps" src="https://www.google.com/maps?q=mjptex,+Tiruppur&output=embed"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0" />
            <a href="https://share.google/oPok7tGWYKuhwTEfE" target="_blank" rel="noreferrer"
              className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl bg-white px-[22px] py-5 shadow-lg">
              <div>
                <div className="text-lg font-extrabold">Tiruppur, Tamil Nadu</div>
                <div className="mt-0.5 text-sm text-muted">{HOURS}</div>
              </div>
              <span className="font-bold whitespace-nowrap">Open map →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
