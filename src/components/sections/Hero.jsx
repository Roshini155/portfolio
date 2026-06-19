import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi'

const PROFILE_IMG = '/profile.png'

const socials = [
  { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/roshini-k-r/', label: 'LinkedIn' },
  { icon: <FiGithub size={20} />, href: 'https://github.com/roshini-kr', label: 'GitHub' },
  { icon: <FiGlobe size={20} />, href: '#', label: 'Portfolio' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="container-max relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-teal-50 text-teal-600 border border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-slate-900 dark:text-white">
            Hi, I'm{' '}
            <span className="gradient-text">Roshini K R</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium mb-4">
            B.Tech Information Technology Student{' '}
            <span className="text-teal-500">|</span> Full Stack Developer
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-slate-500 dark:text-slate-500 text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            "Building impactful digital solutions through full-stack development and problem solving."
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a href="/resume.pdf" download className="btn-primary">
              <FiDownload size={16} /> Download Resume
            </a>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
              <FiMail size={16} /> Get In Touch
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex items-center gap-3 justify-center lg:justify-start">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-500/40 hover:bg-teal-50 dark:hover:bg-teal-500/5 transition-all duration-300 bg-white dark:bg-transparent"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-teal-500/30"
            />
            {/* Middle glow ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-500/20 to-violet-500/20 blur-xl animate-pulse-slow" />
            {/* Inner gradient border */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-br from-teal-500 via-violet-500 to-teal-400 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={PROFILE_IMG}
                    alt="Roshini K R – Profile"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="text-6xl font-bold gradient-text">RK</div>
                )}
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-8 glass rounded-xl px-3 py-2 text-xs font-semibold text-teal-700 dark:text-teal-300 shadow-lg border border-teal-100"
            >
              🚀 MERN Stack
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-6 bottom-10 glass rounded-xl px-3 py-2 text-xs font-semibold text-violet-700 dark:text-violet-300 shadow-lg border border-violet-100"
            >
              ☕ Java Dev
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-300 dark:border-gray-700 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-teal-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
