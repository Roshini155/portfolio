import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
    skills: ['C', 'C++', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    skills: ['React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/20',
    text: 'text-green-400',
    skills: ['Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    category: 'Database',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    color: 'from-brand-500/20 to-indigo-500/20',
    border: 'border-brand-500/20',
    text: 'text-brand-400',
    skills: ['Git', 'GitHub', 'Postman', 'AWS', 'VS Code', 'MySQL Workbench'],
  },
  {
    category: 'Core Concepts',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    text: 'text-pink-400',
    skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks'],
  },
]

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="skills">
      <SectionHeader title="Tech Stack" subtitle="Technologies and tools I work with." />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border bg-gradient-to-br ${group.color} ${group.border} ${group.text} hover:scale-105 transition-transform cursor-default`}
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
