import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiAward } from 'react-icons/fi'

const certs = [
  {
    title: 'Java Programming',
    issuer: 'Oracle',
    emoji: '☕',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
  },
  {
    title: 'Fundamentals of Python',
    issuer: 'Infosys',
    emoji: '🐍',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    title: 'Data Analytics',
    issuer: 'Novitech',
    emoji: '📊',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
  {
    title: 'Java for Beginners',
    issuer: 'Udemy',
    emoji: '💻',
    color: 'from-red-500/20 to-rose-500/20',
    border: 'border-red-500/20',
    text: 'text-red-400',
  },
  {
    title: 'C Intermediate',
    issuer: 'Sololearn',
    emoji: '©️',
    color: 'from-gray-500/20 to-slate-500/20',
    border: 'border-gray-500/20',
    text: 'text-gray-400',
  },
  {
    title: 'C++ Intermediate',
    issuer: 'Sololearn',
    emoji: '➕',
    color: 'from-blue-600/20 to-indigo-600/20',
    border: 'border-blue-500/20',
    text: 'text-blue-500',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="certifications" className="bg-slate-100/50 dark:bg-slate-900/30">
      <SectionHeader title="Certifications" subtitle="Verified skills and completed courses." />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass border-white dark:border-slate-800 rounded-2xl p-6 group hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-4 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md`}
          >
            <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl border border-slate-100 dark:border-slate-700`}>
              {cert.emoji}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-gray-100 leading-snug">{cert.title}</h3>
              <p className={`text-xs font-medium mt-1 text-teal-600 dark:text-teal-400`}>{cert.issuer}</p>
            </div>
            <div className="flex items-center gap-1.5 mt-auto">
              <FiAward size={12} className="text-teal-500" />
              <span className="text-xs text-slate-400 dark:text-gray-500">Certified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
