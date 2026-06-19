import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'IoT Device Management System',
    subtitle: 'Full-stack IoT Monitoring',
    description: 'A secure platform for device registration, authentication, and centralized monitoring with real-time sensor data streaming.',
    tech: ['React', 'Spring Boot', 'MySQL', 'WebSocket', 'JWT'],
    features: [
      'Real-time sensor data streaming via WebSocket',
      'Interactive dashboard with graphical visualization',
      'Threshold-based alert notifications',
      'JWT-based authentication & RBAC',
    ],
    emoji: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Peer Tutor Marketplace',
    subtitle: 'Collaborative Learning Platform',
    description: 'A peer-to-peer learning platform connecting students with tutors, featuring session booking and rating systems.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Spring Security', 'JPA'],
    features: [
      'Role-based access (Student/Tutor/Admin)',
      'Tutor profiles & subject listings',
      'Session booking & ratings system',
      'Architecture ready for payment integration',
    ],
    emoji: '🤝',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20',
    accent: 'text-amber-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Fraud Detection System',
    subtitle: 'Banking Transaction Monitoring',
    description: 'A machine learning system identifying suspicious banking activities in real time using classification models.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'Logistic Regression'],
    features: [
      'Real-time suspicious activity identification',
      'Feature engineering for model accuracy',
      'Dashboard for visualizing risk scores',
      'Proactive fraud prevention analytics',
    ],
    emoji: '🛡️',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
    accent: 'text-green-400',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="projects" className="bg-slate-100/50 dark:bg-slate-900/30">
      <SectionHeader title="Projects" subtitle="Things I've built that solve real-world problems." />
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`glass rounded-2xl overflow-hidden border ${p.border} group hover:shadow-glow transition-all duration-300 flex flex-col`}
          >
            {/* Header */}
            <div className={`p-6 pb-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800`}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{p.emoji}</span>
                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-all shadow-sm"
                    title="View on GitHub">
                    <FiGithub size={16} />
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 dark:text-gray-400 hover:text-brand-600 dark:hover:text-white transition-all shadow-sm"
                    title="Live Demo">
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100 leading-tight">{p.title}</h3>
              <p className={`text-xs font-medium mt-0.5 text-teal-600 dark:text-teal-400`}>{p.subtitle}</p>
            </div>

            {/* Body */}
            <div className="p-6 pt-4 flex-1 flex flex-col gap-4 bg-white dark:bg-slate-950">
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{p.description}</p>

              {/* Features */}
              <ul className="space-y-1.5">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-500 dark:text-gray-400">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-teal-500`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.tech.map(t => (
                  <span key={t} className="tag text-[10px] py-0.5">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
