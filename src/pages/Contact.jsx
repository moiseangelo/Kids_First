import { useState, useEffect, useRef } from 'react'
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  CheckCircle, ArrowRight
} from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '../components/SocialIcons'
import useStore from '../store/useStore'

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`fade-in-section ${visible ? 'fade-in-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Contact() {
  const { contactForm, setContactForm, resetContactForm } = useStore()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { resetContactForm(); setSubmitted(false) }, 5000)
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">Contact Us</span>
          <h1>Get In Touch With<br />Kids First Academy</h1>
          <p>We'd love to hear from you. Reach out with questions, schedule a visit, or start the enrollment process.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-col">
              <FadeInSection>
                <h2>Contact Information</h2>
                <p className="contact-info-desc">Have questions? We're here to help. Reach out through any of these channels.</p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><MapPin size={22} /></div>
                    <div>
                      <h4>Our Location</h4>
                      <p>Busanza, Kanombe Sector<br />Kicukiro District, Rwanda</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Phone size={22} /></div>
                    <div>
                      <h4>Phone Numbers</h4>
                      <a href="tel:+250785246952">+250 785 246 952</a>
                      <a href="tel:+250781994939">+250 781 994 939</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Mail size={22} /></div>
                    <div>
                      <h4>Email Address</h4>
                      <a href="mailto:info@kidsfirstinternational.rw">info@kidsfirstinternational.rw</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><Clock size={22} /></div>
                    <div>
                      <h4>School Hours</h4>
                      <p>Monday - Friday: 7:30 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <div className="contact-social-links">
                    <a href="#" aria-label="Facebook"><FacebookIcon size={20} /></a>
                    <a href="#" aria-label="Twitter"><TwitterIcon size={20} /></a>
                    <a href="#" aria-label="Instagram"><InstagramIcon size={20} /></a>
                    <a href="#" aria-label="YouTube"><YoutubeIcon size={20} /></a>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              <FadeInSection delay={100}>
                <div className="contact-form-card">
                  <div className="contact-form-header">
                    <MessageSquare size={24} />
                    <h3>Send Us a Message</h3>
                    <p>We'll get back to you within 24 hours</p>
                  </div>

                  {submitted ? (
                    <div className="form-success">
                      <CheckCircle size={48} />
                      <h3>Message Sent!</h3>
                      <p>Thank you for contacting Kids First International Academy. We'll respond to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Your Name *</label>
                          <input type="text" name="name" value={contactForm.name} onChange={handleChange} required placeholder="Full name" />
                        </div>
                        <div className="form-group">
                          <label>Email *</label>
                          <input type="email" name="email" value={contactForm.email} onChange={handleChange} required placeholder="your@email.com" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="tel" name="phone" value={contactForm.phone} onChange={handleChange} placeholder="+250 XXX XXX XXX" />
                        </div>
                        <div className="form-group">
                          <label>Subject *</label>
                          <select name="subject" value={contactForm.subject} onChange={handleChange} required>
                            <option value="">Select subject</option>
                            <option value="admissions">Admissions Inquiry</option>
                            <option value="programs">Program Information</option>
                            <option value="visit">Schedule a Visit</option>
                            <option value="fees">Fee Information</option>
                            <option value="summer-camp">Summer Camp</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Message *</label>
                        <textarea name="message" value={contactForm.message} onChange={handleChange} required rows={5} placeholder="How can we help you?" />
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg btn-full">
                        <Send size={18} /> Send Message
                      </button>
                    </form>
                  )}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Find Us</span>
              <h2 className="section-title">Our Location</h2>
            </div>
          </FadeInSection>
          <div className="map-container">
            <img src="/campus-assembly.jpg" alt="Kids First International Academy campus during morning assembly" className="map-photo" loading="lazy" />
            <div className="map-overlay">
              <div className="map-overlay-card">
                <MapPin size={36} />
                <h3>Kids First International Academy</h3>
                <p>Busanza, Kanombe Sector, Kicukiro District, Rwanda</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Open in Google Maps <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
