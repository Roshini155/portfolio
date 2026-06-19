import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Bytes',
    period: 'Internship',
    type: 'Internship',
    highlights: [
      'Gained expertise in advanced concepts of the MERN stack, including React hooks, local storage, and MongoDB indexing and aggregation.',
      'Developed Wishlist Storage System, a web application that allows users to add, manage, update, and remove items from their wishlist efficiently.',
      'Implemented secure data storage and dynamic user interaction for a seamless experience.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <SectionWrapper id="experience">
      <SectionHeader title="Experience" subtitle="Professional internship and work experience." />
      <div ref={ref} className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card relative overflow-hidden group"
          >
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-gray-100">{exp.role}</h3>
                  <p className="text-teal-600 dark:text-teal-400 text-sm font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-gray-500 font-mono">
                  <FiCalendar size={12} /> {exp.period}
                </span>
                <span className="tag">{exp.type}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-5">
              {exp.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="tag text-xs bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
