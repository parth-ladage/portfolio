import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Navbar({ darkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      
      if (location.pathname !== '/') return
      
      const sections = ['home', 'skills', 'about', 'projects', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    
    onScroll()
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const currentActive = location.pathname.startsWith('/projects') ? 'projects' : (location.pathname === '/' ? activeSection : '')

  const links = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'skills', label: 'Skills', href: '/#skills' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'contact', label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="/#home" className="nav-logo">Parth Ladage</a>
        <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <a
                href={l.href}
                className={`nav-link${currentActive === l.id ? ' active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button
            className={`mobile-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
