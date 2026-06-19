import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const profiles = [
  {
    platform: 'Skillrack',
    emoji: '⚡',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    link: '#', // Link from resume
    stats: [
      { label: 'Solved', value: 950, suffix: '+' },
    ],
  },
  {
    platform: 'LeetCode',
    emoji: '🧩',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
    link: '#', // Link from resume: roshini kr
    stats: [
      { label: 'Rating', value: 0, suffix: '' }, // Not mentioned, keeping 0 or removing
      { label: 'Solved', value: 0, suffix: '+' }, // Not mentioned
    ],
    badge: 'roshini kr',
  },
]

export default function CodingProfiles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <SectionWrapper id="coding">
      <SectionHeader title="Coding Profiles" subtitle="Competitive programming and problem solving." />
      <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {profiles.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`glass border ${p.border} rounded-2xl p-6 flex flex-col gap-4 group hover:scale-105 hover:shadow-glow transition-all duration-300`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-2xl border border-slate-200 dark:border-slate-700 shadow-sm`}>
                {p.emoji}
              </div>
              <div>
                <h3 className={`text-sm font-bold text-slate-800 dark:text-white`}>{p.platform}</h3>
                {p.badge && <p className="text-xs text-slate-400 dark:text-gray-500">{p.badge}</p>}
              </div>
            </div>
            <div className="grid gap-2">
              {p.stats.map(stat => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 dark:text-gray-500">{stat.label}</span>
                  <span className={`text-lg font-bold font-mono text-teal-600 dark:text-teal-400`}>
                    {inView ? (
                      <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} />
                    ) : '0'}
                  </span>
                </div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}
