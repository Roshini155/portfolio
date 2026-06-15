import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiAward } from 'react-icons/fi'

const certs = [
  {
    title: 'Oracle Java Batch',
    issuer: 'Oracle',
    emoji: '☕',
    color: 'from-red-500/20 to-orange-500/20',
    border: 'border-red-500/20',
    text: 'text-red-400',
  },
  {
    title: 'SQL for Beginners',
    issuer: 'Udemy',
    emoji: '🗄️',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    title: 'Complete Java Programmer',
    issuer: 'Udemy',
    emoji: '💻',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    emoji: '🏅',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
    text: 'text-green-400',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="certifications" className="bg-surface-800/30">
      <SectionHeader title="Certifications" subtitle="Verified skills and completed courses." />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass border ${cert.border} rounded-2xl p-6 group hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-4`}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl border ${cert.border}`}>
              {cert.emoji}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-100 leading-snug">{cert.title}</h3>
              <p className={`text-xs font-medium mt-1 ${cert.text}`}>{cert.issuer}</p>
            </div>
            <div className="flex items-center gap-1.5 mt-auto">
              <FiAward size={12} className={cert.text} />
              <span className="text-xs text-gray-500">Certified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
