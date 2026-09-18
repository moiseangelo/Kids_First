import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import useStore from '../store/useStore'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/curriculum', label: 'Curriculum' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/summer-camp', label: 'Summer Camp' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/strategic-plan', label: 'Strategic Plan' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileMenuOpen(false) }, [location.pathname, setMobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setMobileMenuOpen])

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-contact">
            <a href="tel:+250785246952"><Phone size={14} /> +250 785 246 952</a>
            <a href="mailto:info@kidsfirstinternational.rw"><Mail size={14} /> info@kidsfirstinternational.rw</a>
          </div>
          <div className="top-bar-info">
            <span>Busanza, Kanombe Sector, Kicukiro District</span>
          </div>
        </div>
      </div>

      <nav ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <img src="/logo.png" alt="Kids First International Academy logo" />
            </div>
            <div className="logo-text">
              <span className="logo-name">Kids First</span>
              <span className="logo-sub">International Academy</span>
            </div>
          </Link>

          <div className={`navbar-links ${mobileMenuOpen ? 'navbar-links-open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admissions" className="btn btn-primary btn-nav-cta">Enroll Now</Link>
          </div>

          <button className="navbar-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />}
    </>
  )
}
