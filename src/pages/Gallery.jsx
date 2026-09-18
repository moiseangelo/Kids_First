import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Camera, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

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

const categories = ['All', 'Classroom', 'Technology', 'Outdoor', 'Events']

const galleryItems = [
  { id: 1, category: 'Classroom', caption: 'Interactive Learning Session', src: '/1.jpg' },
  { id: 2, category: 'Technology', caption: 'Computer Lab Practice', src: '/computerlab.jpg' },
  { id: 3, category: 'Outdoor', caption: 'Playground Activities', src: '/3.jpg' },
  { id: 4, category: 'Classroom', caption: 'French Language Class', src: '/4.jpg' },
  { id: 5, category: 'Events', caption: 'Student Project Fair', src: '/student-projects.jpg' },
  { id: 6, category: 'Technology', caption: 'Digital Skills Workshop', src: '/2.jpg' },
  { id: 7, category: 'Outdoor', caption: 'Group Activities in the Courtyard', src: '/5.jpg' },
  { id: 8, category: 'Events', caption: 'STEM Assembly Projects', src: '/project2.jpg' },
  { id: 9, category: 'Classroom', caption: 'Collaborative Learning', src: '/staffmember1.jpg' },
  { id: 10, category: 'Classroom', caption: 'Guided Practice Session', src: '/staffmember2.jpg' },
  { id: 11, category: 'Events', caption: 'Summer Camp Adventures', src: '/summercamp.jpg' },
  { id: 12, category: 'Classroom', caption: 'Classroom Moments', src: '/staffmember4.jpg' },
  { id: 13, category: 'Events', caption: 'Graduation Ceremony', src: '/graduation.jpg' },
  { id: 14, category: 'Events', caption: 'P6 Class Graduands', src: '/p6-graduands.jpg' },
  { id: 15, category: 'Events', caption: 'Christmas Celebration 2025', src: '/christmas-2025.jpg' },
  { id: 16, category: 'Technology', caption: 'ZMROBO Remote Driving Car', src: '/zmrobo-car.jpg' },
  { id: 17, category: 'Technology', caption: 'Defender Wise Robot Kit', src: '/defender-wisekit.jpg' },
  { id: 18, category: 'Technology', caption: 'Alpha Set Robot Build', src: '/alpha-pulback.jpg' },
  { id: 19, category: 'Technology', caption: 'Robotics Club Session', src: '/alpha-club.jpg' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  // Reset the selected image whenever the active category changes so the
  // lightbox never points at an item hidden by the current filter.
  useEffect(() => {
    setSelectedImage(null)
  }, [activeCategory])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowRight') navigateImage('next')
      if (e.key === 'ArrowLeft') navigateImage('prev')
    }
    if (selectedImage) {
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  })

  const navigateImage = (direction) => {
    if (selectedImage === null) return
    const currentIndex = filtered.findIndex(item => item.id === selectedImage.id)
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % filtered.length
      : (currentIndex - 1 + filtered.length) % filtered.length
    setSelectedImage(filtered[nextIndex])
  }

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag tag-light">Gallery</span>
          <h1>Capturing Moments of<br />Learning &amp; Joy</h1>
          <p>A glimpse into the vibrant daily life at Kids First International Academy.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? 'gallery-filter-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <FadeInSection key={item.id} delay={i * 60}>
                <div
                  className="gallery-item"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.src} alt={item.caption} className="gallery-item-img" loading="lazy" />
                  <div className="gallery-item-overlay">
                    <Camera size={24} />
                    <span>{item.caption}</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}><X size={24} /></button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage('prev')}><ChevronLeft size={24} /></button>
            <div className="lightbox-body">
              <img src={selectedImage.src} alt={selectedImage.caption} className="lightbox-img" />
              <div className="lightbox-caption">
                <h3>{selectedImage.caption}</h3>
                <span className="lightbox-category">{selectedImage.category}</span>
              </div>
            </div>
            <button className="lightbox-nav lightbox-next" onClick={() => navigateImage('next')}><ChevronRight size={24} /></button>
          </div>
        </div>
      )}

      <section className="section final-cta">
        <div className="container">
          <FadeInSection>
            <div className="final-cta-content">
              <h2>Experience Our Campus in Person</h2>
              <p>Schedule a visit to see our facilities and meet our dedicated staff.</p>
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
