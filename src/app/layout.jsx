import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '../Header'
import { Footer } from '../components'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-jakarta' })

export const metadata = {
  title: 'MJP.Tex – Kids Innerwear & Bottom Wear | Tiruppur',
  description: 'MJP.Tex is a kids innerwear and bottom wear manufacturer from Tiruppur, Tamil Nadu. Quality kids inner shorts for boys & girls, age 1–12.',
}

export const viewport = { themeColor: '#14213D' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-cream">
        <div className="min-h-screen overflow-hidden bg-cream font-sans text-ink">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
