import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Baby, BookOpen, Laptop, Bot, ArrowRight, Star, Users, GraduationCap,
  Sun, Heart, Calendar, Target, ChevronRight, Play,
  Shield, Globe, Palette
} from 'lucide-react'
import useStore from '../store/useStore'

function AnimatedCounter({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

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

export default function Home() {
  const testimonials = useStore((s) => s.testimonials)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape shape-1" />
          <div className="hero-shape shape-2" />
          <div className="hero-shape shape-3" />
          <div className="hero-shape shape-4" />
          <div className="hero-shape shape-5" />
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Where <span className="text-gradient">Young Minds</span> Grow, Learn &amp; <span className="text-gradient-alt">Shine</span>
          </h1>
          <p className="hero-subtitle">
            Delivering exceptional early childhood and primary education in Busanza, Kicukiro District.
            Play-based learning, French immersion, and technology skills for the leaders of tomorrow.
          </p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-white btn-lg">
              <GraduationCap size={20} /> Enroll Your Child
            </Link>
            <Link to="/about" className="btn btn-outline-white btn-lg">
              <Play size={20} /> Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="section programs-preview">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">What We Offer</span>
              <h2 className="section-title">Our Programs</h2>
              <p className="section-desc">Comprehensive education pathways designed to nurture every child's potential</p>
            </div>
          </FadeInSection>
          <div className="programs-grid">
            {[
              { icon: <Baby size={32} />, title: 'Daycare & Nursery', desc: 'Play-based foundation with complete French language immersion for our youngest learners.', color: 'pink', link: '/programs' },
              { icon: <BookOpen size={32} />, title: 'Primary Education', desc: 'Core literacy and math with French in P1-P2 transitioning to English in P3-P6.', color: 'blue', link: '/programs' },
              { icon: <Laptop size={32} />, title: 'Digital & Tech Skills', desc: 'Scratch coding, typing programs, and hands-on technology integration.', color: 'green', link: '/programs' },
              { icon: <Bot size={32} />, title: 'Robotics & STEM', desc: 'Building with ZMROBO Defender Wise kits and STEM assembly projects.', color: 'purple', link: '/programs' },
            ].map((prog, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <Link to={prog.link} className={`program-card program-card-${prog.color}`}>
                  <div className="program-card-icon">{prog.icon}</div>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                  <span className="program-card-link">Learn More <ChevronRight size={16} /></span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-left">
              <FadeInSection>
                <span className="section-tag">Why Kids First?</span>
                <h2 className="section-title left">The Best Start for Your Child's Future</h2>
                <p className="section-desc left">
                  We combine traditional Rwandan values with modern educational methods to create an
                  enriching environment where every child thrives.
                </p>
              </FadeInSection>
              <div className="why-us-features">
                {[
                  { icon: <Heart size={24} />, title: 'Nurturing Environment', desc: 'Small class sizes ensure every child gets personal attention and care.' },
                  { icon: <Globe size={24} />, title: 'French Immersion', desc: 'Complete French language immersion during nursery and early primary years.' },
                  { icon: <Laptop size={24} />, title: 'Tech Integration', desc: 'Practical technology skills from coding to robotics using STEM kits.' },
                  { icon: <Shield size={24} />, title: 'Safe Campus', desc: 'Secure, child-friendly campus designed for safe exploration and play.' },
                  { icon: <Palette size={24} />, title: 'Play-Based Learning', desc: 'Research-backed play methodology that makes learning engaging and effective.' },
                  { icon: <Target size={24} />, title: 'Strategic Growth', desc: '5-year strategic plan ensuring continuous improvement and expansion.' },
                ].map((feat, i) => (
                  <FadeInSection key={i} delay={i * 80}>
                    <div className="why-us-feature">
                      <div className="why-us-feature-icon">{feat.icon}</div>
                      <div>
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
            <div className="why-us-right">
              <FadeInSection>
                <div className="why-us-visual">
                  <img src="/1.jpg" alt="Students learning together in class" className="visual-photo visual-photo-1" loading="lazy" />
                  <img src="/computerlab.jpg" alt="Children learning typing in the computer lab" className="visual-photo visual-photo-2" loading="lazy" />
                  <img src="/student-projects.jpg" alt="Student project presentation" className="visual-photo visual-photo-3" loading="lazy" />
                  <img src="/project2.jpg" alt="Pupils working on a classroom project" className="visual-photo visual-photo-4" loading="lazy" />
                  <div className="visual-card visual-card-center">
                    <Sun size={48} />
                    <span>Kids First<br />Academy</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: 200, suffix: '+', label: 'Students Enrolled', icon: <Users size={28} /> },
              { value: 15, suffix: '+', label: 'Qualified Teachers', icon: <GraduationCap size={28} /> },
              { value: 6, suffix: '', label: 'Program Levels', icon: <BookOpen size={28} /> },
              { value: 98, suffix: '%', label: 'Parent Satisfaction', icon: <Star size={28} /> },
            ].map((stat, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS */}
      <section className="section curriculum-highlight">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Academic Excellence</span>
              <h2 className="section-title">Our Curriculum Approach</h2>
              <p className="section-desc">A carefully crafted curriculum that balances academics, creativity, and technology</p>
            </div>
          </FadeInSection>
          <div className="curriculum-timeline">
            {[
              { grade: 'Daycare', title: 'Foundation Years', desc: 'Sensory play, motor skills development, and early socialization in a nurturing environment.', color: '#EC4899' },
              { grade: 'Nursery', title: 'French Immersion', desc: 'Complete French language immersion combined with play-based early childhood education.', color: '#8B5CF6' },
              { grade: 'P1 - P2', title: 'Early Primary', desc: 'Core literacy and numeracy skills with continued French instruction.', color: '#2563EB' },
              { grade: 'P3 - P4', title: 'Transition Phase', desc: 'Gradual transition from French to English instruction with growing tech skills.', color: '#10B981' },
              { grade: 'P5 - P6', title: 'Upper Primary', desc: 'Full English instruction, advanced coding, robotics, and leadership development.', color: '#F59E0B' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 120}>
                <div className="timeline-item">
                  <div className="timeline-marker" style={{ backgroundColor: item.color }} />
                  <div className="timeline-content">
                    <span className="timeline-grade" style={{ color: item.color }}>{item.grade}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection>
            <div className="center-cta">
              <Link to="/curriculum" className="btn btn-primary">
                <BookOpen size={18} /> Explore Full Curriculum
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Testimonials</span>
              <h2 className="section-title">What Parents Say</h2>
            </div>
          </FadeInSection>
          <div className="testimonial-carousel">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`testimonial-card ${i === activeTestimonial ? 'testimonial-active' : ''}`}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot ${i === activeTestimonial ? 'dot-active' : ''}`} onClick={() => setActiveTestimonial(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMER CAMP CTA */}
      <section className="section summer-cta">
        <div className="container">
          <FadeInSection>
            <div className="summer-cta-card">
              <div className="summer-cta-content">
                <div className="summer-cta-badge"><Sun size={16} /> Summer 2025</div>
                <h2>Summer Camp Registration Open!</h2>
                <p>Join our exciting summer program combining outdoor play, creative workshops, and interactive tech builds. Don't miss out on the fun!</p>
                <div className="summer-cta-features">
                  <span><Calendar size={16} /> Fun Activities</span>
                  <span><Laptop size={16} /> Tech Workshops</span>
                  <span><Heart size={16} /> Safe Environment</span>
                </div>
                <Link to="/summer-camp" className="btn btn-white btn-lg">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
              <div className="summer-cta-visual">
                <img src="/summercamp.jpg" alt="Children having fun at the Kids First summer camp" className="summer-cta-photo" loading="lazy" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CAMPUS LIFE STRIP */}
      <section className="section campus-life">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Campus Life</span>
              <h2 className="section-title">A Day at Kids First</h2>
              <p className="section-desc">Learning, creating, and playing — every single day on our campus</p>
            </div>
          </FadeInSection>
          <div className="campus-life-grid">
            {[
              { src: '/1.jpg', caption: 'Interactive Lessons' },
              { src: '/2.jpg', caption: 'Hands-On Learning' },
              { src: '/3.jpg', caption: 'Group Activities' },
              { src: '/4.jpg', caption: 'Creative Classrooms' },
              { src: '/5.jpg', caption: 'Student Teamwork' },
            ].map((img, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <figure className="campus-life-item">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <figcaption>{img.caption}</figcaption>
                </figure>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection>
            <div className="center-cta">
              <Link to="/gallery" className="btn btn-outline">View Full Gallery <ArrowRight size={18} /></Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section final-cta">
        <div className="container">
          <FadeInSection>
            <div className="final-cta-content">
              <h2>Ready to Give Your Child the Best Start?</h2>
              <p>Join the Kids First family today and watch your child thrive in a nurturing, technology-rich educational environment.</p>
              <div className="final-cta-buttons">
                <Link to="/admissions" className="btn btn-white btn-lg">Start Enrollment <ArrowRight size={18} /></Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
