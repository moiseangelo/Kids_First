import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Target, Eye, Heart, Users, Award, Globe,
  Shield, Lightbulb, GraduationCap, ArrowRight,
  Handshake, Baby, Laptop
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

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">About Us</span>
          <h1>Building Tomorrow's Leaders<br />Through Play &amp; Technology</h1>
          <p>Discover the story behind Kids First International Academy and our commitment to nurturing every child's unique potential.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <FadeInSection>
              <figure className="about-story-photo">
                <img src="/staffmember5.jpg" alt="Students of Kids First International Academy" loading="lazy" />
                <figcaption>Our pupils during morning assembly</figcaption>
              </figure>
            </FadeInSection>
            <FadeInSection delay={150}>
              <div className="about-story-content">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title left">A Legacy of Nurturing Excellence</h2>
                <p>Kids First International Academy, located in the heart of Busanza (Kanombe Sector, Kicukiro District), was founded with a vision to provide world-class early childhood and primary education to the children of Rwanda.</p>
                <p>From humble beginnings, we have grown into a recognized institution that combines the warmth of Rwandan hospitality with modern educational practices. Our approach centers on play-based learning, French language immersion, and technology integration - preparing children for a globalized world.</p>
                <p>Today, we serve over 200 students from daycare through P6, guided by a dedicated team of educators who believe every child deserves the best possible start in life.</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="about-story-cards">
                <div className="about-info-card">
                  <GraduationCap size={32} />
                  <h3>100%</h3>
                  <p>Qualified Teaching Staff</p>
                </div>
                <div className="about-info-card about-info-card-accent">
                  <Users size={32} />
                  <h3>200+</h3>
                  <p>Students Enrolled</p>
                </div>
                <div className="about-info-card">
                  <Award size={32} />
                  <h3>8+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="about-info-card about-info-card-accent">
                  <Globe size={32} />
                  <h3>2</h3>
                  <p>Languages Taught</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Our Team</span>
              <h2 className="section-title">School Leadership</h2>
              <p className="section-desc">The dedicated leaders guiding Kids First International Academy every day</p>
            </div>
          </FadeInSection>
          <div className="leadership-grid">
            {[
              { photo: '/diane-ruhogo.jpg', name: 'Diane RUHOGO', role: 'Principal', motto: 'Passionate about Kids & Education' },
              { photo: '/manasseh-sebega.jpg', name: 'Manasseh SEBEGA', role: 'Headmaster', motto: 'Empowering Students, Supporting Teachers & Building Success' },
              { photo: '/peninnah-kayitesi.jpg', name: 'Peninnah KAYITESI', role: 'Accountant', motto: 'Finance-focused · Committed to Accuracy & Integrity' },
            ].map((member, i) => (
              <FadeInSection key={i} delay={i * 120}>
                <div className="leader-card">
                  <div className="leader-photo">
                    <img src={member.photo} alt={`${member.name} — ${member.role} at Kids First International Academy`} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <p>{member.motto}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Teachers */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Our Educators</span>
              <h2 className="section-title">Meet Our Teachers</h2>
              <p className="section-desc">Dedicated educators who make every classroom a place of discovery and growth</p>
            </div>
          </FadeInSection>
          <div className="teachers-grid">
            {[
              { photo: '/teacher-brian.jpg', name: 'Brian RUGIRA', role: 'Teacher', bio: 'Dedicated English and literature educator, with years of classroom teaching experience' },
              { photo: '/teacher-alvine.jpg', name: 'Alvine INARUKUNDO', role: 'Enseignante', bio: 'Spécialiste en Crèche et en Maternelle' },
              { photo: '/teacher-leoncie.jpg', name: 'Leoncie UWIMANA', role: 'Teacher', bio: 'Social and Creative Arts specialist' },
              { photo: '/teacher-marlene.jpg', name: 'Marlène YANDEREYE', role: 'Teacher', bio: 'Pre-primary and primary education specialist' },
              { photo: '/teacher-brigias.jpg', name: 'Brigias SSEMATA', role: 'Teacher', bio: 'Professional at SRS English and Physical Education, dedicated to helping learners grow in confidence, discipline, and knowledge.' },
              { photo: '/teacher-odette.jpg', name: 'Odette NIRAGIRA', role: 'Enseignante', bio: 'Spécialiste en Maternelle et Primaire' },
            ].map((t, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="teacher-card">
                  <div className="teacher-photo">
                    <img src={t.photo} alt={`${t.name} — ${t.role} at Kids First International Academy`} loading="lazy" />
                  </div>
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                  <p>{t.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Our Foundation</span>
              <h2 className="section-title">Mission, Vision &amp; Values</h2>
            </div>
          </FadeInSection>
          <div className="mvv-grid">
            {[
              { icon: <Target size={36} />, title: 'Our Mission', color: 'blue', content: 'To provide exceptional early childhood and primary education that nurtures each child\'s unique talents through play-based learning, French immersion, and technology integration, preparing them to become confident, creative, and compassionate global citizens.' },
              { icon: <Eye size={36} />, title: 'Our Vision', color: 'green', content: 'To be Rwanda\'s leading early childhood and primary education institution, recognized for academic excellence, innovative technology integration, and nurturing a generation of bilingual leaders who contribute meaningfully to their communities and the world.' },
              { icon: <Heart size={36} />, title: 'Our Values', color: 'pink', content: 'Excellence in everything we do. Integrity and honesty in all relationships. Innovation in teaching and learning. Inclusivity and respect for diversity. Collaboration with families and community. Joy in the learning process.' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className={`mvv-card mvv-card-${item.color}`}>
                  <div className="mvv-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Core Strengths</span>
              <h2 className="section-title">What Makes Us Different</h2>
            </div>
          </FadeInSection>
          <div className="strengths-grid">
            {[
              { icon: <Baby size={28} />, title: 'Play-Based Foundation', desc: 'Research-backed play methodology that makes early learning engaging, effective, and developmentally appropriate.' },
              { icon: <Globe size={28} />, title: 'French Language Immersion', desc: 'Complete French immersion during nursery years, transitioning to English in upper primary for bilingual excellence.' },
              { icon: <Laptop size={28} />, title: 'Technology Integration', desc: 'Practical technology skills including Scratch coding, typing programs, and hands-on robotics with STEM kits.' },
              { icon: <Shield size={28} />, title: 'Safe Learning Environment', desc: 'A secure, child-friendly campus with small class sizes ensuring personalized attention for every student.' },
              { icon: <Lightbulb size={28} />, title: 'Innovative Curriculum', desc: 'A carefully designed curriculum balancing academics, creativity, technology, and character development.' },
              { icon: <Handshake size={28} />, title: 'Community Partnership', desc: 'Strong partnerships with parents and the local community to support each child\'s holistic development.' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="strength-card">
                  <div className="strength-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section final-cta">
        <div className="container">
          <FadeInSection>
            <div className="final-cta-content">
              <h2>Want to Be Part of Our Story?</h2>
              <p>Join the Kids First family and give your child the education they deserve.</p>
              <div className="final-cta-buttons">
                <Link to="/admissions" className="btn btn-white btn-lg">Start Enrollment <ArrowRight size={18} /></Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">Get In Touch</Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
