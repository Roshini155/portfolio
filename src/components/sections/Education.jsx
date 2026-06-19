import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiBookOpen } from 'react-icons/fi'

const timeline = [
  {
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.Tech – Information Technology',
    score: 'CGPA: 8.65 (upto 3rd sem)',
    period: '2024 – 2028',
    current: true,
  },
  {
    institution: 'Gokilambal Matric Hr.Sec.School',
    degree: 'HSC (Class XII)',
    score: '96.3%',
    period: '2023 – 2024',
    current: false,
  },
  {
    institution: 'Gokilambal Matric Hr.Sec.School',
    degree: 'SSLC (Class X)',
    score: '96.2%',
    period: '2021 – 2022',
    current: false,
  },
]

function TimelineItem({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
    >
      {/* Dot */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 ${
          item.current
            ? 'border-brand-400 bg-brand-500/20 text-brand-400'
            : 'border-gray-700 bg-surface-700 text-gray-400'
        }`}>
          <FiBookOpen size={18} />
        </div>
        {index < timeline.length - 1 && (
          <div className="absolute top-12 w-0.5 h-16 bg-gradient-to-b from-brand-500/40 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-12">
        <div className={`card relative overflow-hidden bg-white dark:bg-slate-900 border-white dark:border-slate-800 shadow-sm ${item.current ? 'border-teal-500/30' : ''}`}>
          {item.current && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-violet-500" />
          )}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-gray-100">{item.institution}</h3>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mt-0.5">{item.degree}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                item.current
                  ? 'bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20'
                  : 'bg-slate-100 text-slate-500 border border-slate-200 dark:bg-white/5 dark:text-gray-400 dark:border-white/10'
              }`}>
                {item.period}
              </span>
            </div>
          </div>
          <div className="mt-3">
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 text-sm font-semibold">
              {item.score}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="education" className="bg-slate-100/50 dark:bg-slate-900/30">
      <SectionHeader title="Education" subtitle="My academic journey and milestones." />
      <div ref={ref} className="max-w-2xl mx-auto">
        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} inView={inView} />
        ))}
      </div>
    </SectionWrapper>
  )
}
