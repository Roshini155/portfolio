import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const skillGroups = [
  {
    category: 'Programming Languages',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
    skills: ['C', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Web Technologies',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    category: 'Tools',
    color: 'from-brand-500/20 to-indigo-500/20',
    border: 'border-brand-500/20',
    text: 'text-brand-400',
    skills: ['VS Code', 'Canva', 'MySQL', 'Postman', 'Excel'],
  },
  {
    category: 'Tech Stack / Concepts',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    text: 'text-pink-400',
    skills: ['OOPS', 'DAA', 'DSA', 'DBMS'],
  },
]

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="skills">
      <SectionHeader title="Tech Stack" subtitle="Technologies and tools I work with." />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className={`glass border ${group.border} rounded-2xl p-5`}
          >
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${group.text}`}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border bg-white dark:bg-slate-800 border-slate-200 dark:border-brand-800 text-slate-700 dark:text-brand-300 shadow-sm hover:scale-105 transition-transform cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
