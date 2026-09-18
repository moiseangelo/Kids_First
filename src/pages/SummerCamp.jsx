import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Sun, Calendar, CheckCircle, Palette, Bot,
  TreePine, Music, Laptop, Heart, Star, Users, MapPin
} from 'lucide-react'

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

const activities = [
  { icon: <TreePine size={28} />, title: 'Outdoor Adventure', desc: 'Nature walks, treasure hunts, and outdoor exploration activities that connect children with the natural world.', color: '#10B981' },
  { icon: <Palette size={28} />, title: 'Creative Arts', desc: 'Painting, drawing, sculpture, and craft workshops where children express their creativity freely.', color: '#EC4899' },
  { icon: <Bot size={28} />, title: 'Tech Workshop', desc: 'Introduction to coding, robotics building, and interactive technology projects for all skill levels.', color: '#8B5CF6' },
  { icon: <Music size={28} />, title: 'Music & Dance', desc: 'Rhythm sessions, song writing, instrument exploration, and dance performances.', color: '#F59E0B' },
  { icon: <Laptop size={28} />, title: 'STEM Projects', desc: 'Hands-on science experiments, engineering challenges, and mathematical puzzles.', color: '#2563EB' },
  { icon: <Heart size={28} />, title: 'Team Building', desc: 'Group activities, cooperative games, and leadership challenges that build character.', color: '#10B981' },
]

const schedule = [
  { time: '8:00 AM', activity: 'Drop-off & Welcome Circle', icon: <Sun size={16} /> },
  { time: '8:30 AM', activity: 'Morning Activity Session 1', icon: <Star size={16} /> },
  { time: '10:00 AM', activity: 'Snack Break & Free Play', icon: <Heart size={16} /> },
  { time: '10:30 AM', activity: 'Morning Activity Session 2', icon: <Star size={16} /> },
  { time: '12:00 PM', activity: 'Lunch & Rest Time', icon: <Heart size={16} /> },
  { time: '1:00 PM', activity: 'Afternoon Activity Session', icon: <Star size={16} /> },
  { time: '2:30 PM', activity: 'Free Play & Group Games', icon: <Users size={16} /> },
  { time: '3:00 PM', activity: 'Closing Circle & Pick-up', icon: <Sun size={16} /> },
]

export default function SummerCamp() {
  return (
    <div className="summer-camp-page">
      <section className="page-hero summer-hero">
        <div className="container">
          <div className="summer-hero-badge"><Sun size={16} /> Summer 2025</div>
          <span className="section-tag tag-light">Summer Camp</span>
          <h1>Summer Camp at<br />Kids First Academy</h1>
          <p>An exciting mix of outdoor adventure, creative workshops, and interactive tech builds for children of all ages.</p>
          <div className="summer-hero-info">
            <span><Calendar size={16} /> July 1 - August 15, 2025</span>
            <span><MapPin size={16} /> Busanza, Kicukiro District</span>
            <span><Users size={16} /> Ages 3-12</span>
          </div>
        </div>
      </section>

      {/* Activities */}      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Activities</span>
              <h2 className="section-title">What We Offer</h2>
              <p className="section-desc">A balanced program of physical, creative, and educational activities</p>
            </div>
          </FadeInSection>
          <div className="summer-activities-grid">
            {activities.map((a, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="summer-activity-card">
                  <div className="summer-activity-icon" style={{ color: a.color, backgroundColor: `${a.color}15` }}>
                    {a.icon}
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Moments */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Camp Moments</span>
              <h2 className="section-title">Memories from Past Camps</h2>
              <p className="section-desc">Real moments of joy, discovery, and friendship from our summer programs</p>
            </div>
          </FadeInSection>
          <div className="summer-moments-grid">
            <FadeInSection>
              <figure className="summer-moment summer-moment-tall">
                <img src="/summercamp.jpg" alt="Kids enjoying activities at the Kids First summer camp" loading="lazy" />
                <figcaption>Camp fun in the sun</figcaption>
              </figure>
            </FadeInSection>
            <FadeInSection delay={120}>
              <figure className="summer-moment">
                <img src="/3.jpg" alt="Outdoor games during summer camp" loading="lazy" />
                <figcaption>Outdoor games &amp; adventure</figcaption>
              </figure>
            </FadeInSection>
            <FadeInSection delay={240}>
              <figure className="summer-moment">
                <img src="/computerlab.jpg" alt="Tech workshop at summer camp" loading="lazy" />
                <figcaption>Tech workshops</figcaption>
              </figure>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Daily Schedule</span>
              <h2 className="section-title">A Day at Summer Camp</h2>
            </div>
          </FadeInSection>
          <div className="summer-schedule">
            {schedule.map((s, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="schedule-item">
                  <div className="schedule-time">{s.time}</div>
                  <div className="schedule-marker">{s.icon}</div>
                  <div className="schedule-activity">{s.activity}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Why Choose Our Camp</span>
              <h2 className="section-title">Camp Benefits</h2>
            </div>
          </FadeInSection>
          <div className="summer-benefits-grid">
            {[
              { icon: <CheckCircle size={20} />, text: 'Qualified and caring staff' },
              { icon: <CheckCircle size={20} />, text: 'Small group sizes for personal attention' },
              { icon: <CheckCircle size={20} />, text: 'Safe and secure campus environment' },
              { icon: <CheckCircle size={20} />, text: 'Balanced mix of activities' },
              { icon: <CheckCircle size={20} />, text: 'Technology and STEM integration' },
              { icon: <CheckCircle size={20} />, text: 'Healthy snacks and lunch provided' },
              { icon: <CheckCircle size={20} />, text: 'Creative and educational workshops' },
              { icon: <CheckCircle size={20} />, text: 'End-of-camp showcase for parents' },
            ].map((b, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="benefit-item">
                  <span className="benefit-check">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="summer-pricing-card">
              <h2>Ready to Register?</h2>
              <p>Spaces are limited. Contact us today to secure your child's spot in our exciting summer program!</p>
              <div className="summer-pricing-info">
                <div className="pricing-option">
                  <h3>Half Day</h3>
                  <p>8:00 AM - 12:30 PM</p>
                  <span>Contact for pricing</span>
                </div>
                <div className="pricing-divider">or</div>
                <div className="pricing-option pricing-option-highlight">
                  <h3>Full Day</h3>
                  <p>8:00 AM - 3:00 PM</p>
                  <span>Contact for pricing</span>
                </div>
              </div>
              <div className="summer-pricing-cta">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <Calendar size={18} /> Register Now
                </Link>
                <a href="tel:+250785246952" className="btn btn-outline btn-lg">
                  Call Us
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
