import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Waste Management System',
    subtitle: 'Reducing Food Waste, Fighting Hunger',
    description: 'A platform that bridges food donors with orphanages, assigning nearest delivery agents and sending partner delivery notifications to minimize food waste.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    features: [
      'Bridges food donors with orphanages',
      'Partner delivery notifications',
      'Assigns nearest delivery agents',
      'Reduces food waste effectively',
    ],
    emoji: '♻️',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
    accent: 'text-green-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Quiz Application',
    subtitle: 'Interactive Learning Platform',
    description: 'An interactive quiz platform with predefined question banks, instant feedback, and performance tracking to enhance learning outcomes.',
    tech: ['Java', 'HTML', 'CSS', 'MySQL'],
    features: [
      'Predefined question banks',
      'Instant feedback system',
      'Performance tracking dashboard',
    ],
    emoji: '🧠',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Event Reminder System',
    subtitle: 'Email Notification Application',
    description: 'An automated scheduling system that sends email reminders for upcoming events and deadlines using JavaMail API integration.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JavaMail API'],
    features: [
      'Schedule event reminders',
      'Automated email notifications',
      'Deadline tracking & alerts',
    ],
    emoji: '📅',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/20',
    accent: 'text-violet-400',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="projects" className="bg-surface-800/30">
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
            <div className={`p-6 pb-4 bg-gradient-to-br ${p.color}`}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{p.emoji}</span>
                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    title="View on GitHub">
                    <FiGithub size={16} />
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    title="Live Demo">
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-100 leading-tight">{p.title}</h3>
              <p className={`text-xs font-medium mt-0.5 ${p.accent}`}>{p.subtitle}</p>
            </div>

            {/* Body */}
            <div className="p-6 pt-4 flex-1 flex flex-col gap-4">
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>

              {/* Features */}
              <ul className="space-y-1.5">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent.replace('text-', 'bg-')}`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.tech.map(t => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
