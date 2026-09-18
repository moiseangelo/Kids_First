import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, Languages, ArrowRight, Star, CheckCircle, Clock, Target
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

const gradeLevels = [
  {
    level: 'Daycare',
    age: '1-2 years',
    color: '#EC4899',
    subjects: ['Sensory Play', 'Motor Skills Development', 'Music & Movement', 'French Exposure', 'Social Skills'],
    description: 'Gentle introduction to structured learning through sensory exploration and guided play.',
    hours: '8:00 AM - 2:00 PM',
  },
  {
    level: 'Nursery',
    age: '3-4 years',
    color: '#8B5CF6',
    subjects: ['Full French Immersion', 'Pre-literacy Skills', 'Number Concepts', 'Creative Arts', 'Physical Play'],
    description: 'Complete French language immersion with play-based early childhood curriculum.',
    hours: '8:00 AM - 2:30 PM',
  },
  {
    level: 'P1',
    age: '5-6 years',
    color: '#2563EB',
    subjects: ['French Literacy', 'Basic Numeracy', 'Environmental Studies', 'Creative Arts', 'Physical Education'],
    description: 'Building foundational literacy and numeracy with continued French instruction.',
    hours: '8:00 AM - 3:00 PM',
  },
  {
    level: 'P2',
    age: '6-7 years',
    color: '#2563EB',
    subjects: ['Advanced French', 'Mathematics', 'Science Basics', 'Art & Craft', 'Basic Computing'],
    description: 'Strengthening French language skills while introducing computing basics.',
    hours: '8:00 AM - 3:00 PM',
  },
  {
    level: 'P3',
    age: '7-8 years',
    color: '#10B981',
    subjects: ['English Literacy', 'Mathematics', 'Science', 'Social Studies', 'Scratch Coding'],
    description: 'Transition to English instruction with introduction to block-based coding.',
    hours: '8:00 AM - 3:00 PM',
  },
  {
    level: 'P4',
    age: '8-9 years',
    color: '#10B981',
    subjects: ['English', 'Mathematics', 'Integrated Science', 'Geography', 'Typing Skills'],
    description: 'Expanding English proficiency and developing typing proficiency.',
    hours: '8:00 AM - 3:00 PM',
  },
  {
    level: 'P5',
    age: '9-10 years',
    color: '#F59E0B',
    subjects: ['English', 'Mathematics', 'Science & Technology', 'Rwandan Studies', 'Robotics'],
    description: 'Advanced academics with hands-on robotics and STEM projects.',
    hours: '8:00 AM - 3:30 PM',
  },
  {
    level: 'P6',
    age: '10-12 years',
    color: '#F59E0B',
    subjects: ['English', 'Mathematics', 'Science', 'ICT', 'Leadership Skills'],
    description: 'Capstone year preparing students for secondary education with leadership development.',
    hours: '8:00 AM - 3:30 PM',
  },
]

export default function Curriculum() {
  const [activeGrade, setActiveGrade] = useState(0)

  return (
    <div className="curriculum-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">Curriculum</span>
          <h1>A Curriculum Designed for<br />Excellence &amp; Innovation</h1>
          <p>Our carefully crafted curriculum balances academics, languages, creativity, and technology across every grade level.</p>
        </div>
      </section>

      {/* Language Pathway */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Bilingual Excellence</span>
              <h2 className="section-title">Language Instruction Pathway</h2>
              <p className="section-desc">A seamless transition from French immersion to English instruction</p>
            </div>
          </FadeInSection>
          <div className="language-pathway">
            <div className="pathway-track">
              {[
                { phase: 'Nursery', lang: '100% French', width: '100%', color: '#8B5CF6' },
                { phase: 'P1-P2', lang: '100% French', width: '100%', color: '#2563EB' },
                { phase: 'P3', lang: 'French + English', width: '60%', color: '#10B981' },
                { phase: 'P4', lang: 'English + French', width: '40%', color: '#10B981' },
                { phase: 'P5-P6', lang: '100% English', width: '20%', color: '#F59E0B' },
              ].map((item, i) => (
                <div key={i} className="pathway-item">
                  <div className="pathway-label">
                    <strong>{item.phase}</strong>
                    <span>{item.lang}</span>
                  </div>
                  <div className="pathway-bar">
                    <div className="pathway-fill" style={{ width: item.width, backgroundColor: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selector */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">By Grade Level</span>
              <h2 className="section-title">Subject Breakdown</h2>
            </div>
          </FadeInSection>

          <div className="grade-selector">
            {gradeLevels.map((g, i) => (
              <button
                key={i}
                className={`grade-btn ${activeGrade === i ? 'grade-btn-active' : ''}`}
                onClick={() => setActiveGrade(i)}
                style={activeGrade === i ? { backgroundColor: g.color, borderColor: g.color } : {}}
              >
                {g.level}
              </button>
            ))}
          </div>

          <div className="grade-detail-card" key={activeGrade}>
            <div className="grade-detail-header" style={{ backgroundColor: gradeLevels[activeGrade].color }}>
              <div>
                <h2>{gradeLevels[activeGrade].level}</h2>
                <span>Age: {gradeLevels[activeGrade].age}</span>
              </div>
              <div className="grade-detail-meta">
                <span><Clock size={16} /> {gradeLevels[activeGrade].hours}</span>
              </div>
            </div>
            <div className="grade-detail-body">
              <p className="grade-detail-desc">{gradeLevels[activeGrade].description}</p>
              <h4>Subjects &amp; Activities</h4>
              <div className="grade-subjects">
                {gradeLevels[activeGrade].subjects.map((s, i) => (
                  <div key={i} className="grade-subject-tag" style={{ borderColor: gradeLevels[activeGrade].color, color: gradeLevels[activeGrade].color }}>
                    <CheckCircle size={14} /> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Assessment</span>
              <h2 className="section-title">How We Track Progress</h2>
            </div>
          </FadeInSection>
          <div className="assessment-grid">
            {[
              { icon: <BookOpen size={28} />, title: 'Continuous Assessment', desc: 'Ongoing formative assessments through observation, classwork, and projects throughout each term.' },
              { icon: <Target size={28} />, title: 'Term Examinations', desc: 'Structured end-of-term examinations to measure learning outcomes and identify areas for improvement.' },
              { icon: <Star size={28} />, title: 'Portfolio Review', desc: 'Student portfolios showcasing work samples, projects, and creative achievements over time.' },
              { icon: <Languages size={28} />, title: 'Parent-Teacher Conferences', desc: 'Regular meetings with parents to discuss progress, set goals, and collaborate on each child\'s development.' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="assessment-card">
                  <div className="assessment-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <FadeInSection>
            <div className="final-cta-content">
              <h2>See Our Curriculum in Action</h2>
              <p>Schedule a campus visit to experience our teaching methods firsthand.</p>
              <div className="final-cta-buttons">
                <Link to="/contact" className="btn btn-white btn-lg">Schedule a Visit <ArrowRight size={18} /></Link>
                <Link to="/admissions" className="btn btn-outline-white btn-lg">Start Enrollment</Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
