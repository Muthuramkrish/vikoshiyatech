import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import WebDevelopment from './pages/WebDevelopment'
import QualityAssurance from './pages/QualityAssurance'

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
      </Routes>
    </div>
  )
}

export default App 