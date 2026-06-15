import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const achievements = [
  {
    title: 'Career Academy India 2025',
    detail: 'Finalist',
    emoji: '🏆',
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
  },
  {
    title: 'NXP Women in Tech Program',
    detail: 'Selected – 2025',
    emoji: '💡',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    text: 'text-pink-400',
  },
  {
    title: 'Oracle Java Batch',
    detail: 'Certified',
    emoji: '☕',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
  },
  {
    title: 'HackerRank Certificate',
    detail: 'Software Engineer Intern',
    emoji: '✅',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
    text: 'text-green-400',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="achievements" className="bg-surface-800/30">
      <SectionHeader title="Achievements" subtitle="Recognition and milestones along the way." />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass border ${item.border} rounded-2xl p-6 flex flex-col items-center text-center gap-3 group hover:scale-105 transition-transform duration-300`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl border ${item.border}`}>
              {item.emoji}
            </div>
            <h3 className="text-sm font-bold text-gray-100 leading-tight">{item.title}</h3>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border ${item.border} ${item.text}`}>
              {item.detail}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
