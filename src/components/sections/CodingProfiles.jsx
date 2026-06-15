import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const profiles = [
  {
    platform: 'LeetCode',
    emoji: '🧩',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
    link: 'https://leetcode.com',
    stats: [
      { label: 'Rating', value: 1432, suffix: '' },
      { label: 'Solved', value: 192, suffix: '+' },
    ],
  },
  {
    platform: 'Skillrack',
    emoji: '⚡',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    link: 'https://skillrack.com',
    stats: [
      { label: 'Problems', value: 162, suffix: '+' },
    ],
  },
  {
    platform: 'CodeChef',
    emoji: '👨‍🍳',
    color: 'from-amber-500/20 to-brown-500/20',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    link: 'https://codechef.com',
    stats: [
      { label: 'Global Rank', value: 91047, suffix: '' },
    ],
    badge: '🥉 Bronze Badge',
  },
]

export default function CodingProfiles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <SectionWrapper id="coding">
      <SectionHeader title="Coding Profiles" subtitle="Competitive programming and problem solving." />
      <div ref={ref} className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl border ${p.border}`}>
                {p.emoji}
              </div>
              <div>
                <h3 className={`text-sm font-bold ${p.text}`}>{p.platform}</h3>
                {p.badge && <p className="text-xs text-gray-500">{p.badge}</p>}
              </div>
            </div>
            <div className="grid gap-2">
              {p.stats.map(stat => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{stat.label}</span>
                  <span className={`text-lg font-bold font-mono ${p.text}`}>
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
