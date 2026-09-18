import { create } from 'zustand'

const useStore = create((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  activePage: 'home',
  setActivePage: (page) => set({ activePage: page }),

  contactForm: { name: '', email: '', phone: '', subject: '', message: '' },
  setContactForm: (form) => set({ contactForm: form }),
  resetContactForm: () => set({ contactForm: { name: '', email: '', phone: '', subject: '', message: '' } }),

  enrollmentForm: { studentName: '', parentName: '', age: '', grade: '', phone: '', email: '', message: '' },
  setEnrollmentForm: (form) => set({ enrollmentForm: form }),
  resetEnrollmentForm: () => set({ enrollmentForm: { studentName: '', parentName: '', age: '', grade: '', phone: '', email: '', message: '' } }),

  testimonials: [
    { id: 1, name: 'Jean-Pierre Mugabo', role: 'Parent of 2 students', text: 'Kids First has transformed our children\'s learning experience. The French immersion program is exceptional.', rating: 5 },
    { id: 2, name: 'Marie Uwimana', role: 'Parent, P3 Student', text: 'The technology integration is amazing. My daughter learned Scratch coding and now builds her own games!', rating: 5 },
    { id: 3, name: 'David Nshimiyimana', role: 'Parent, Nursery Student', text: 'The play-based learning approach is exactly what our son needed. He loves going to school every day.', rating: 5 },
    { id: 4, name: 'Grace Mukamana', role: 'Parent, P5 Student', text: 'Small class sizes mean each child gets personal attention. The robotics program is truly innovative.', rating: 5 },
  ],

  galleryImages: [
    { id: 1, category: 'classroom', caption: 'Interactive Learning Session' },
    { id: 2, category: 'tech', caption: 'Robotics Workshop' },
    { id: 3, category: 'outdoor', caption: 'Playground Activities' },
    { id: 4, category: 'classroom', caption: 'French Language Class' },
    { id: 5, category: 'events', caption: 'Science Fair 2024' },
    { id: 6, category: 'tech', caption: 'Scratch Coding Lab' },
    { id: 7, category: 'outdoor', caption: 'Sports Day' },
    { id: 8, category: 'events', caption: 'Graduation Ceremony' },
    { id: 9, category: 'classroom', caption: 'Mathematics Workshop' },
  ],

  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
}))

export default useStore
