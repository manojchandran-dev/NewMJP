import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppIcon, MailIcon, PhoneIcon, InstagramIcon } from "./icons";
import { NAV_LINKS, BUSINESS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950 px-4 pt-14 pb-8 sm:px-6">
      <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <Logo theme="dark" className="items-start" />
          <p className="mt-4 max-w-xs text-sm text-white/50">
            Kids inner shorts &amp; bottom wear manufacturer in Tiruppur, Tamil Nadu &mdash; 15+
            years of experience.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={BUSINESS.whatsappHref}
              aria-label="Chat on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              aria-label="Email MJP.Tex"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.telephoneHref}
              aria-label="Call MJP.Tex"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MJP.Tex on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50">
            <li>
              {BUSINESS.addressLocality}, {BUSINESS.addressRegion}
            </li>
            <li>
              <a href={BUSINESS.telephoneHref} className="transition hover:text-white">
                {BUSINESS.telephone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="transition hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
            <li>{BUSINESS.hoursLabel}</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-white/40 sm:text-sm">
          &copy; {new Date().getFullYear()} MJP.Tex &nbsp;|&nbsp; GSTIN: {BUSINESS.gstin}
        </p>
        <p className="mt-2 text-[11px] text-white/25 sm:text-xs">
          All marketplace logos are respective trademarks.
        </p>
      </div>
    </footer>
  );
}
