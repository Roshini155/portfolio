import { FiGithub, FiLinkedin, FiGlobe, FiHeart } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/roshini-k-r/', label: 'LinkedIn' },
  { icon: <FiGithub size={18} />, href: 'https://github.com/roshini-kr', label: 'GitHub' },
  { icon: <FiGlobe size={18} />, href: '#', label: 'Portfolio' },
]

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-surface-800/50 transition-colors duration-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold gradient-text mb-3">Roshini K R</p>
            <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed">
              B.Tech IT Student & Full Stack Developer. Building impactful digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-sm text-slate-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-4">Connect</p>
            <div className="flex gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all shadow-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-gray-600">
            © {new Date().getFullYear()} Roshini K R. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-gray-600 flex items-center gap-1.5">
            Designed & Developed by{' '}
            <span className="text-brand-600 dark:text-brand-400 font-medium">Roshini K R</span>
            <FiHeart size={11} className="text-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
