import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-sm'
          : 'bg-transparent'
      }`}
      style={!darkMode && scrolled ? { backgroundColor: 'rgba(255,255,255,0.85)' } : {}}
    >
      <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleNav('#hero') }}
          className="text-xl font-bold gradient-text"
        >
          Roshini<span className="text-slate-900 dark:text-white"> K R</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === href.slice(1)
                  ? 'text-brand-600 bg-brand-50 dark:text-brand-400 dark:bg-brand-500/10'
                  : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 dark:border-white/5 bg-white dark:bg-surface-800/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active === href.slice(1)
                      ? 'text-brand-600 bg-brand-50 dark:text-brand-400 dark:bg-brand-500/10'
                      : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
