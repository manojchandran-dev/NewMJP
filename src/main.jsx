import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import { Header, Footer } from './components'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  const tint = pathname === '/' ? 'bg-sky' : pathname === '/about' ? 'animate-daysky bg-sky' : 'bg-cream border-b border-line'
  return (
    <div className="min-h-screen overflow-hidden bg-cream font-sans text-ink">
      <Header tint={tint} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

// Hash routing only for the single-file preview build (VITE_HASH_ROUTER=1); real deploys use clean URLs.
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Layout />
    </Router>
  </StrictMode>
)
