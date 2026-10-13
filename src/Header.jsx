'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo, navLinks, MEESHO } from './components'

export default function Header() {
  const pathname = usePathname()
  const tint = pathname === '/' ? 'bg-sky' : pathname === '/about' ? 'animate-daysky bg-sky' : 'bg-cream border-b border-line'
  return (
    <header className={tint}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 p-5">
        <Link href="/" aria-label="MJP.Tex home"><Logo /></Link>
        <nav className="hidden gap-8 md:flex">
          {navLinks.map(([to, label]) => (
            <Link key={to} href={to}
              className={`relative py-1.5 text-[15px] font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100 ${pathname === to ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
              {label}
            </Link>
          ))}
        </nav>
        <a href={MEESHO} className="rounded-[10px] bg-ink px-5 py-3 text-[15px] font-bold text-white transition hover:-translate-y-0.5">Buy on Meesho</a>
      </div>
      {/* mobile nav */}
      <nav className="flex justify-center gap-6 pb-4 text-sm font-semibold md:hidden">
        {navLinks.map(([to, label]) => (
          <Link key={to} href={to} className={pathname === to ? 'underline underline-offset-4' : ''}>{label}</Link>
        ))}
      </nav>
    </header>
  )
}
