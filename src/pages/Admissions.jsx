import { useState, useEffect, useRef } from 'react'
import {
  FileText, CheckCircle, Phone, Mail,
  DollarSign, ClipboardList, User, Baby, GraduationCap,
  Send
} from 'lucide-react'
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

const steps = [
  { num: 1, icon: <FileText size={24} />, title: 'Inquiry', desc: 'Contact us or visit the school to learn about our programs and admission requirements.' },
  { num: 2, icon: <ClipboardList size={24} />, title: 'Application', desc: 'Complete the enrollment application form with required documents and information.' },
  { num: 3, icon: <User size={24} />, title: 'Assessment', desc: 'Age-appropriate assessment session to understand your child\'s current level and needs.' },
  { num: 4, icon: <CheckCircle size={24} />, title: 'Enrollment', desc: 'Receive acceptance, complete fee payment, and welcome to the Kids First family!' },
]

const documents = [
  'Completed enrollment application form',
  'Copy of child\'s birth certificate',
  'Passport-size photographs (4 copies)',
  'Previous school records (if applicable)',
  'Immunization/vaccination records',
  'Parent/Guardian national ID copy',
  'Medical/allergy information form',
  'Emergency contact information',
]

const fees = [
  { level: 'Daycare', tuition: 'Contact School', registration: 'Contact School' },
  { level: 'Nursery', tuition: 'Contact School', registration: 'Contact School' },
  { level: 'P1 - P2', tuition: 'Contact School', registration: 'Contact School' },
  { level: 'P3 - P4', tuition: 'Contact School', registration: 'Contact School' },
  { level: 'P5 - P6', tuition: 'Contact School', registration: 'Contact School' },
]

export default function Admissions() {
  const { enrollmentForm, setEnrollmentForm, resetEnrollmentForm } = useStore()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setEnrollmentForm({ ...enrollmentForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { resetEnrollmentForm(); setSubmitted(false) }, 5000)
  }

  return (
    <div className="admissions-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">Admissions</span>
          <h1>Join the Kids First<br />International Academy</h1>
          <p>Begin your child's journey to excellence. Our streamlined enrollment process makes it easy to join our community.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Enrollment Process</span>
              <h2 className="section-title">How to Enroll</h2>
            </div>
          </FadeInSection>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="step-card">
                  <div className="step-num">{s.num}</div>
                  <div className="step-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Fees */}
      <section className="section section-alt">
        <div className="container">
          <div className="admissions-grid">
            <FadeInSection>
              <div className="documents-card">
                <h3><FileText size={24} /> Required Documents</h3>
                <ul className="documents-list">
                  {documents.map((d, i) => (
                    <li key={i}><CheckCircle size={16} /> {d}</li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={150}>
              <div className="fees-card">
                <h3><DollarSign size={24} /> Fee Structure</h3>
                <p className="fees-note">Contact our admissions office for detailed fee information and available payment plans.</p>
                <table className="fees-table">
                  <thead>
                    <tr><th>Level</th><th>Tuition</th><th>Registration</th></tr>
                  </thead>
                  <tbody>
                    {fees.map((f, i) => (
                      <tr key={i}><td>{f.level}</td><td>{f.tuition}</td><td>{f.registration}</td></tr>
                    ))}
                  </tbody>
                </table>
                <div className="fees-contact">
                  <p><Phone size={16} /> +250 785 246 952</p>
                  <p><Mail size={16} /> info@kidsfirstinternational.rw</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-tag">Online Application</span>
              <h2 className="section-title">Start Enrollment Now</h2>
              <p className="section-desc">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="enrollment-form-container">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon"><CheckCircle size={48} /></div>
                  <h3>Application Received!</h3>
                  <p>Thank you for your interest in Kids First International Academy. We will contact you within 24 hours to discuss the next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enrollment-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label><User size={16} /> Student Full Name *</label>
                      <input type="text" name="studentName" value={enrollmentForm.studentName} onChange={handleChange} required placeholder="Enter student's full name" />
                    </div>
                    <div className="form-group">
                      <label><User size={16} /> Parent/Guardian Name *</label>
                      <input type="text" name="parentName" value={enrollmentForm.parentName} onChange={handleChange} required placeholder="Enter parent/guardian name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label><Baby size={16} /> Child's Age *</label>
                      <input type="number" name="age" value={enrollmentForm.age} onChange={handleChange} required placeholder="Age" min="1" max="12" />
                    </div>
                    <div className="form-group">
                      <label><GraduationCap size={16} /> Grade Level *</label>
                      <select name="grade" value={enrollmentForm.grade} onChange={handleChange} required>
                        <option value="">Select grade</option>
                        <option value="daycare">Daycare</option>
                        <option value="nursery">Nursery</option>
                        <option value="p1">Primary 1 (P1)</option>
                        <option value="p2">Primary 2 (P2)</option>
                        <option value="p3">Primary 3 (P3)</option>
                        <option value="p4">Primary 4 (P4)</option>
                        <option value="p5">Primary 5 (P5)</option>
                        <option value="p6">Primary 6 (P6)</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label><Phone size={16} /> Phone Number *</label>
                      <input type="tel" name="phone" value={enrollmentForm.phone} onChange={handleChange} required placeholder="+250 XXX XXX XXX" />
                    </div>
                    <div className="form-group">
                      <label><Mail size={16} /> Email Address</label>
                      <input type="email" name="email" value={enrollmentForm.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Additional Message</label>
                    <textarea name="message" value={enrollmentForm.message} onChange={handleChange} rows={4} placeholder="Any questions or special requirements..." />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-full">
                    <Send size={18} /> Submit Application
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
