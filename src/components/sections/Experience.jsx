import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'i Genuine Technologies',
    period: 'December 2025',
    type: 'Internship',
    highlights: [
      'Developed full-stack applications using MongoDB, Express, React, and Node.js.',
      'Built and documented RESTful APIs for seamless frontend–backend integration.',
      'Integrated dynamic React UIs with Node.js + Express backend services.',
      'Practiced collaborative development workflows using Git and GitHub.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Git', 'GitHub', 'REST APIs'],
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
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-violet-500/20 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-100">{exp.role}</h3>
                  <p className="text-brand-400 text-sm font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                  <FiCalendar size={12} /> {exp.period}
                </span>
                <span className="tag">{exp.type}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-5">
              {exp.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="tag text-xs">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
