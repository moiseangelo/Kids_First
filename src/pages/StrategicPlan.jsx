import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp, Building2, Award, Globe,
  ChevronRight, ArrowRight, CheckCircle, Rocket,
  Star
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

const years = [
  {
    year: 'Year 1',
    phase: 'Establish Roots',
    color: '#2563EB',
    icon: <Building2 size={28} />,
    goals: [
      'Build out dedicated learning spaces for each program level',
      'Establish a core team of qualified teaching staff',
      'Set up foundational technology infrastructure',
      'Develop and finalize curriculum frameworks',
      'Build brand recognition in the local community',
    ],
    milestones: ['Fully staffed teaching team', 'Technology labs operational', 'Curriculum finalized'],
  },
  {
    year: 'Year 2',
    phase: 'Grow & Strengthen',
    color: '#10B981',
    icon: <TrendingUp size={28} />,
    goals: [
      'Consolidate academic programs across all grade levels',
      'Enhance classroom resources and learning materials',
      'Expand technology integration in daily lessons',
      'Strengthen parent engagement programs',
      'Introduce structured assessment frameworks',
    ],
    milestones: ['All programs fully operational', 'Assessment system in place', 'Parent community engaged'],
  },
  {
    year: 'Year 3',
    phase: 'Build a Legacy',
    color: '#8B5CF6',
    icon: <Award size={28} />,
    goals: [
      'Deepen partnerships with local and international organizations',
      'Launch long-term educational initiatives and research',
      'Establish alumni network foundations',
      'Introduce advanced STEM and robotics programs',
      'Develop community outreach and service programs',
    ],
    milestones: ['Strategic partnerships formed', 'STEM program launched', 'Community programs active'],
  },
  {
    year: 'Year 4',
    phase: 'Enhance Quality',
    color: '#F59E0B',
    icon: <Star size={28} />,
    goals: [
      'Upgrade educational technology to latest standards',
      'Expand and improve campus facilities',
      'Implement advanced teacher training programs',
      'Achieve national quality certifications',
      'Launch specialized enrichment programs',
    ],
    milestones: ['Quality certifications achieved', 'Facility upgrades completed', 'Advanced teacher training'],
  },
  {
    year: 'Year 5',
    phase: 'Broaden Horizons',
    color: '#EC4899',
    icon: <Globe size={28} />,
    goals: [
      'Scale successful programs to serve more students',
      'Expand campus infrastructure for growth',
      'Establish satellite programs or partnerships',
      'Achieve recognition as a model school in Rwanda',
      'Plan next 5-year strategic cycle',
    ],
    milestones: ['Programs scaled successfully', 'Model school status', 'Next strategic cycle planned'],
  },
]

export default function StrategicPlan() {
  const [activeYear, setActiveYear] = useState(0)

  return (
    <div className="strategic-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">Strategic Plan</span>
          <h1>5-Year Strategic Plan<br />2024 - 2029</h1>
          <p>Our roadmap for becoming Rwanda's leading early childhood and primary education institution.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Our Vision</span>
              <h2 className="section-title">A Five-Year Journey of Growth</h2>
              <p className="section-desc">Each year builds upon the last, creating sustainable growth and lasting impact for our students and community.</p>
            </div>
          </FadeInSection>

          {/* Timeline */}
          <div className="strategy-timeline">
            {years.map((y, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div
                  className={`strategy-timeline-item ${activeYear === i ? 'strategy-active' : ''}`}
                  onClick={() => setActiveYear(i)}
                >
                  <div className="strategy-timeline-marker" style={{ backgroundColor: y.color }}>
                    {y.icon}
                  </div>
                  <div className="strategy-timeline-content">
                    <span className="strategy-year-badge" style={{ color: y.color }}>{y.year}</span>
                    <h3 style={{ color: y.color }}>{y.phase}</h3>
                  </div>
                  <ChevronRight size={20} className={`strategy-chevron ${activeYear === i ? 'strategy-chevron-active' : ''}`} />
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Detail Card */}
          <FadeInSection>
            <div className="strategy-detail" key={activeYear}>
              <div className="strategy-detail-header" style={{ backgroundColor: years[activeYear].color }}>
                <div className="strategy-detail-icon">{years[activeYear].icon}</div>
                <div>
                  <span className="strategy-detail-year">{years[activeYear].year}</span>
                  <h2>{years[activeYear].phase}</h2>
                </div>
              </div>
              <div className="strategy-detail-body">
                <div className="strategy-goals">
                  <h4>Key Objectives</h4>
                  <ul>
                    {years[activeYear].goals.map((g, i) => (
                      <li key={i}><CheckCircle size={16} style={{ color: years[activeYear].color }} /> {g}</li>
                    ))}
                  </ul>
                </div>
                <div className="strategy-milestones">
                  <h4>Key Milestones</h4>
                  <div className="milestones-list">
                    {years[activeYear].milestones.map((m, i) => (
                      <div key={i} className="milestone-tag" style={{ borderColor: years[activeYear].color, color: years[activeYear].color }}>
                        <Rocket size={14} /> {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Progress Tracker</span>
              <h2 className="section-title">Strategic Growth Overview</h2>
            </div>
          </FadeInSection>
          <div className="strategy-progress-grid">
            {years.map((y, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="progress-card">
                  <div className="progress-card-header" style={{ borderBottomColor: y.color }}>
                    <span className="progress-year" style={{ color: y.color }}>{y.year}</span>
                    <span className="progress-phase">{y.phase}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${((i + 1) / 5) * 100}%`, backgroundColor: y.color }} />
                  </div>
                  <span className="progress-percent" style={{ color: y.color }}>{((i + 1) / 5) * 100}%</span>
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
              <h2>Be Part of Our Growth Story</h2>
              <p>Join us as we build the future of education in Rwanda.</p>
              <div className="final-cta-buttons">
                <Link to="/admissions" className="btn btn-white btn-lg">Enroll Today <ArrowRight size={18} /></Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
