import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Baby, BookOpen, Laptop, Bot, ArrowRight,
  Paintbrush, Music, Calculator, Languages, Microscope, Code,
  Puzzle, Smile, Blocks, Gamepad2, GraduationCap, Check
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

const programs = [
  {
    id: 'daycare',
    icon: <Baby size={40} />,
    title: 'Daycare & Nursery',
    subtitle: 'Ages 1-4',
    color: '#EC4899',
    colorLight: '#FDF2F8',
    description: 'Our Daycare and Nursery program provides a warm, nurturing environment where our youngest learners develop foundational skills through carefully designed play-based activities.',
    features: [
      { icon: <Smile size={20} />, text: 'Social-emotional development' },
      { icon: <Paintbrush size={20} />, text: 'Creative arts & expression' },
      { icon: <Puzzle size={20} />, text: 'Sensory play & motor skills' },
      { icon: <Music size={20} />, text: 'Music & movement' },
      { icon: <Blocks size={20} />, text: 'Building & construction play' },
      { icon: <Languages size={20} />, text: 'Complete French immersion' },
    ],
    highlights: [
      'Complete French language immersion during nursery years',
      'Play-based learning methodology throughout',
      'Low teacher-to-student ratios for personalized attention',
      'Safe, stimulating indoor and outdoor environments',
      'Daily creative and sensory activities',
    ]
  },
  {
    id: 'primary-early',
    icon: <BookOpen size={40} />,
    title: 'Primary Education (P1-P2)',
    subtitle: 'Ages 5-7',
    color: '#2563EB',
    colorLight: '#EFF6FF',
    description: 'Our early primary program focuses on building strong literacy and numeracy foundations while continuing French instruction, ensuring a smooth transition from nursery.',
    features: [
      { icon: <BookOpen size={20} />, text: 'Core literacy skills' },
      { icon: <Calculator size={20} />, text: 'Mathematics foundations' },
      { icon: <Languages size={20} />, text: 'Continued French instruction' },
      { icon: <Paintbrush size={20} />, text: 'Creative expression' },
      { icon: <Microscope size={20} />, text: 'Environmental studies' },
      { icon: <Laptop size={20} />, text: 'Basic computer skills' },
    ],
    highlights: [
      'French instruction continues from nursery years',
      'Strong focus on reading, writing, and numeracy',
      'Introduction to basic computer skills',
      'Hands-on science exploration',
      'Character education and values formation',
    ]
  },
  {
    id: 'primary-upper',
    icon: <GraduationCap size={40} />,
    title: 'Upper Primary (P3-P6)',
    subtitle: 'Ages 8-12',
    color: '#10B981',
    colorLight: '#ECFDF5',
    description: 'Our upper primary program transitions to English instruction, deepens academic rigor, and introduces advanced technology skills to prepare students for secondary education.',
    features: [
      { icon: <BookOpen size={20} />, text: 'Advanced literacy & literature' },
      { icon: <Calculator size={20} />, text: 'Advanced mathematics' },
      { icon: <Microscope size={20} />, text: 'Science & critical thinking' },
      { icon: <Laptop size={20} />, text: 'English instruction (P3-P6)' },
      { icon: <Code size={20} />, text: 'Scratch block coding' },
      { icon: <Bot size={20} />, text: 'Robotics & STEM projects' },
    ],
    highlights: [
      'Transition from French to English instruction',
      'Scratch block coding and programming',
      'Typing skills and digital literacy',
      'Advanced problem-solving and critical thinking',
      'Leadership and community service projects',
    ]
  },
  {
    id: 'tech',
    icon: <Laptop size={40} />,
    title: 'Digital & Tech Education',
    subtitle: 'All Ages',
    color: '#8B5CF6',
    colorLight: '#F5F3FF',
    description: 'Technology is woven throughout our curriculum, from basic digital literacy to advanced coding and robotics, preparing students for the digital future.',
    features: [
      { icon: <Code size={20} />, text: 'Scratch block coding' },
      { icon: <Gamepad2 size={20} />, text: 'Interactive typing programs' },
      { icon: <Bot size={20} />, text: 'ZMROBO robotics kits' },
      { icon: <Microscope size={20} />, text: 'STEM assembly projects' },
      { icon: <Laptop size={20} />, text: 'Digital literacy skills' },
      { icon: <Puzzle size={20} />, text: 'Problem-solving through tech' },
    ],
    highlights: [
      'Scratch block coding for creative programming',
      'Hands-on robotics with ZMROBO Defender Wise kits',
      'Structured typing programs for keyboard proficiency',
      'STEM assembly kits for engineering concepts',
      'Age-appropriate technology integration across all subjects',
    ]
  },
]

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState('daycare')
  const active = programs.find(p => p.id === activeProgram)

  return (
    <div className="programs-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">Programs</span>
          <h1>Comprehensive Programs for<br />Every Stage of Growth</h1>
          <p>From daycare through primary, our programs nurture young minds with play-based learning, language immersion, and technology skills.</p>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="program-tabs">
              {programs.map((p) => (
                <button
                  key={p.id}
                  className={`program-tab ${activeProgram === p.id ? 'program-tab-active' : ''}`}
                  onClick={() => setActiveProgram(p.id)}
                  style={activeProgram === p.id ? { borderColor: p.color, color: p.color, backgroundColor: p.colorLight } : {}}
                >
                  <span className="program-tab-icon">{p.icon}</span>
                  <span className="program-tab-text">
                    <strong>{p.title}</strong>
                    <small>{p.subtitle}</small>
                  </span>
                </button>
              ))}
            </div>
          </FadeInSection>

          {active && (
            <div className="program-detail" key={active.id}>
              <div className="program-detail-grid">
                <div className="program-detail-left">
                  <div className="program-detail-badge" style={{ color: active.color, backgroundColor: active.colorLight }}>
                    {active.icon}
                  </div>
                  <h2 style={{ color: active.color }}>{active.title}</h2>
                  <p className="program-detail-desc">{active.description}</p>

                  <h4>Key Features</h4>
                  <div className="program-features-grid">
                    {active.features.map((f, i) => (
                      <div key={i} className="program-feature-item">
                        <span style={{ color: active.color }}>{f.icon}</span>
                        <span>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="program-detail-right">
                  <div className="program-highlights-card" style={{ borderColor: active.color }}>
                    <h3 style={{ color: active.color }}>Program Highlights</h3>
                    <ul>
                      {active.highlights.map((h, i) => (
                        <li key={i}><span className="highlight-check" style={{ color: active.color }}><Check size={16} strokeWidth={3} /></span>{h}</li>
                      ))}
                    </ul>
                    <Link to="/admissions" className="btn btn-primary" style={{ backgroundColor: active.color, marginTop: '1.5rem' }}>
                      Enroll in This Program <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* STEM Showcase */}
      <section className="section section-alt">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">STEM Education</span>
              <h2 className="section-title">Robotics &amp; Technology Showcase</h2>
              <p className="section-desc">Our students engage with cutting-edge technology through hands-on robotics and coding programs</p>
            </div>
          </FadeInSection>
          <div className="stem-grid">
            {[
              { icon: <Code size={36} />, title: 'Scratch Coding', desc: 'Students learn programming concepts through block-based coding, creating their own games, animations, and interactive stories.', color: '#F59E0B', photo: '/student-projects.jpg', alt: 'Students presenting their Scratch coding projects' },
              { icon: <Bot size={36} />, title: 'ZMROBO Robotics', desc: 'Hands-on building and programming with Defender Wise kits, teaching engineering principles and computational thinking.', color: '#8B5CF6', photo: '/project2.jpg', alt: 'Pupils building robots with STEM assembly kits' },
              { icon: <Laptop size={36} />, title: 'Typing Programs', desc: 'Structured typing curricula that build keyboard proficiency and digital literacy skills essential for the modern world.', color: '#2563EB', photo: '/computerlab.jpg', alt: 'Children practicing typing in the computer lab' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="stem-card stem-card-photo">
                  <div className="stem-photo">
                    <img src={item.photo} alt={item.alt} loading="lazy" />
                    <div className="stem-icon stem-icon-overlay" style={{ color: item.color, backgroundColor: `${item.color}F2` }}>
                      {item.icon}
                    	</div>
                  </div>
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
              <h2>Ready to Explore Our Programs?</h2>
              <p>Visit our campus or start the enrollment process today.</p>
              <div className="final-cta-buttons">
                <Link to="/admissions" className="btn btn-white btn-lg">Start Enrollment <ArrowRight size={18} /></Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">Schedule a Visit</Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
