import { Link, NavLink } from 'react-router-dom'

export const MEESHO = 'https://www.meesho.com/MJPTex?_ms=3.0.1'
export const WHATSAPP = 'https://wa.me/916380699014'
export const PHONE = '+91 81900 98951'
export const EMAIL = 'mjptexapparels@gmail.com'
export const HOURS = 'Mon – Sat, 9:00 AM – 8:30 PM'

export const SHADES = [
  { name: 'Yellow', hex: '#F4CF5E' },
  { name: 'Pink', hex: '#F2A7BE' },
  { name: 'Light Blue', hex: '#9CC5EE' },
  { name: 'Green', hex: '#8CCB9E' },
  { name: 'Red', hex: '#E0695A' },
]

export const btnDark = 'inline-flex items-center rounded-xl bg-ink px-7 py-4 font-bold text-white transition hover:-translate-y-0.5'
export const btnLight = 'inline-flex items-center rounded-xl border border-edge bg-white px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5'

const navLinks = [['/', 'Home'], ['/products', 'Products'], ['/about', 'About'], ['/contact', 'Contact']]

export function Logo({ dark }) {
  return (
    <span className={`text-[23px] font-extrabold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
      MJP<span className={dark ? 'text-sun' : 'text-coral'}>.</span>Tex
    </span>
  )
}

export function Header({ tint }) {
  return (
    <header className={tint}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 p-5">
        <Link to="/" aria-label="MJP.Tex home"><Logo /></Link>
        <nav className="hidden gap-8 md:flex">
          {navLinks.map(([to, label]) => (
            <NavLink key={to} to={to} end
              className={({ isActive }) => `relative py-1.5 text-[15px] font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <a href={MEESHO} className="rounded-[10px] bg-ink px-5 py-3 text-[15px] font-bold text-white transition hover:-translate-y-0.5">Buy on Meesho</a>
      </div>
      {/* mobile nav */}
      <nav className="flex justify-center gap-6 pb-4 text-sm font-semibold md:hidden">
        {navLinks.map(([to, label]) => (
          <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? 'underline underline-offset-4' : '')}>{label}</NavLink>
        ))}
      </nav>
    </header>
  )
}

export function Footer() {
  const a = 'text-pale hover:text-white'
  return (
    <footer className="bg-ink text-pale">
      <div className="mx-auto grid max-w-[1200px] gap-9 px-5 pt-16 pb-10 text-[15px] sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Logo dark />
          <p className="leading-relaxed">Kids inner shorts &amp; bottom wear manufacturer in Tiruppur, Tamil Nadu.</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="font-bold text-white">Company</div>
          {navLinks.slice(1).map(([to, label]) => <Link key={to} to={to} className={a}>{label}</Link>)}
          <a href="https://www.instagram.com/mjptex" className={a}>Instagram</a>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="font-bold text-white">Contact</div>
          <a href="tel:+918190098951" className={a}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`} className={a}>{EMAIL}</a>
          <span>{HOURS}</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] border-t border-nightline px-5 pt-5 pb-8 text-[13px] text-dim">© {new Date().getFullYear()} MJP.Tex · GSTIN: 33BOZPP8039Q1ZO</div>
    </footer>
  )
}

/** Headline where each word slides up out of a mask. */
export function MaskHeadline({ lines, className = '' }) {
  let i = 0
  return (
    <h1 className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map(([word, accent]) => {
            const d = 0.1 + i++ * 0.1
            return (
              <span key={word + d} className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <span className={`inline-block animate-up ${accent ? 'text-coral' : ''}`} style={{ animationDelay: `${d}s` }}>{word}</span>
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export function Eyebrow({ children, className = 'text-coral' }) {
  return <div className={`text-[13px] font-bold tracking-[2.5px] ${className}`}>{children}</div>
}

export function Shorts({ color, className = '', label }) {
  return (
    <svg viewBox="0 0 200 170" className={className} role="img" aria-label={label}>
      <path d="M28 30 H172 L188 150 Q160 160 120 152 L100 92 L80 152 Q40 160 12 150 Z" fill={color} style={{ transition: 'fill .6s ease' }} />
      <rect x="28" y="18" width="144" height="18" rx="5" fill="#fff" opacity=".75" />
      <path d="M34 46 H166 M18 140 Q45 148 76 142 M124 142 Q155 148 182 140" stroke="#fff" strokeWidth="1.6" strokeDasharray="5 4" fill="none" opacity=".8" />
    </svg>
  )
}

export function Clouds({ items }) {
  return items.map(([top, width, dur, delay], i) => (
    <svg key={i} viewBox="0 0 120 60" aria-hidden="true" className="absolute animate-drift"
      style={{ top, width, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
      <path d="M20 50a18 18 0 0 1 4-34 24 24 0 0 1 44-6 18 18 0 0 1 30 14 14 14 0 0 1 2 26z" fill="#fff" stroke="#C9DCEB" strokeWidth="1.5" />
    </svg>
  ))
}

export function Stars({ count = 26 }) {
  return Array.from({ length: count }, (_, i) => {
    const s = 2 + ((i * 3) % 3)
    return (
      <span key={i} aria-hidden="true" className="absolute animate-twinkle rounded-full bg-[#F4E3A7]"
        style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 95}%`, width: s, height: s, animationDuration: `${3 + (i % 4)}s`, animationDelay: `${(i % 6) * 0.5}s` }} />
    )
  })
}

export function Pin() {
  return (
    <span className="absolute size-5 -translate-x-1/2 -translate-y-1/2">
      <span className="absolute inset-0 animate-pin rounded-full bg-coral" />
      <span className="absolute inset-0 rounded-full border-[3px] border-white bg-coral" />
    </span>
  )
}
