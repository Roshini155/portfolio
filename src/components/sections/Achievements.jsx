import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const achievements = [
  {
    title: 'Astronova 2k25',
    detail: '4th Place – CIT Coimbatore',
    emoji: '🚀',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
  {
    title: 'Fiestaa 2k25',
    detail: 'Paper Presentation – KPRIET',
    emoji: '📄',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
  {
    title: 'SelfiE Hackathon',
    detail: 'Top 50 Finalist',
    emoji: '🤳',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    text: 'text-pink-400',
  },
  {
    title: 'Smart Motion Hackathon 2.0',
    detail: 'Participant – CIT Chennai',
    emoji: '🤖',
    color: 'from-brand-500/20 to-amber-500/20',
    border: 'border-brand-500/20',
    text: 'text-brand-400',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="achievements" className="bg-slate-100/50 dark:bg-slate-900/30">
      <SectionHeader title="Achievements" subtitle="Recognition and milestones along the way." />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass border-white dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center gap-3 group hover:scale-105 transition-transform duration-300 bg-white dark:bg-slate-900 shadow-sm`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl border border-slate-100 dark:border-slate-700`}>
              {item.emoji}
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-gray-100 leading-tight">{item.title}</h3>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 text-teal-600 dark:text-teal-400`}>
              {item.detail}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
