import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './SocialIcons'
import useStore from '../store/useStore'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Programs' },
  { path: '/curriculum', label: 'Curriculum' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/summer-camp', label: 'Summer Camp' },
]

const programs = [
  { path: '/programs', label: 'Daycare & Nursery' },
  { path: '/programs', label: 'Primary Education (P1-P6)' },
  { path: '/programs', label: 'Digital & Tech Education' },
  { path: '/programs', label: 'Robotics & STEM' },
]

export default function Footer() {
  const scrollToTop = useStore((s) => s.scrollToTop)

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C320,100 420,0 720,50 C1020,100 1200,20 1440,60 L1440,0 L0,0 Z" fill="var(--color-primary)" />
        </svg>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <img src="/logo.png" alt="Kids First International Academy logo" className="footer-logo-img" />
              <div>
                <span className="footer-logo-name">Kids First</span>
                <span className="footer-logo-sub">International Academy</span>
              </div>
            </div>
            <p className="footer-desc">
              Delivering exceptional early childhood and primary education with play-based learning and technology integration in Busanza, Kicukiro District.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Our Programs</h4>
            <ul className="footer-links">
              {programs.map((p, i) => (
                <li key={i}><Link to={p.path}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Busanza, Kanombe Sector<br />Kicukiro District, Rwanda</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <div>
                  <a href="tel:+250785246952">+250 785 246 952</a>
                  <a href="tel:+250781994939">+250 781 994 939</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:info@kidsfirstinternational.rw">info@kidsfirstinternational.rw</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Kids First International Academy. All rights reserved.</p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
