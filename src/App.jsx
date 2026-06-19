import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import TechStack from './components/sections/TechStack'
import Achievements from './components/sections/Achievements'
import CodingProfiles from './components/sections/CodingProfiles'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import Loader from './components/ui/Loader'
import ScrollProgress from './components/ui/ScrollProgress'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false) // Default to light mode

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
      html.classList.remove('light')
      document.body.style.backgroundColor = '#020617'
      document.body.style.color = '#f1f5f9'
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
      document.body.style.backgroundColor = '#f8fafc'
      document.body.style.color = '#0f172a'
    }
  }, [darkMode])

  if (loading) return <Loader />

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <CodingProfiles />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
