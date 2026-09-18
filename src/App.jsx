import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Curriculum from './pages/Curriculum'
import Admissions from './pages/Admissions'
import StrategicPlan from './pages/StrategicPlan'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SummerCamp from './pages/SummerCamp'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/strategic-plan" element={<StrategicPlan />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/summer-camp" element={<SummerCamp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
