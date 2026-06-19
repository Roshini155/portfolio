import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { FiCode, FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi'

const highlights = [
  { icon: <FiCode size={20} />, label: 'Full Stack', desc: 'MERN & Spring Boot' },
  { icon: <FiCpu size={20} />, label: 'Problem Solver', desc: '950+ Skillrack problems' },
  { icon: <FiDatabase size={20} />, label: 'Backend', desc: 'REST APIs & Databases' },
  { icon: <FiGlobe size={20} />, label: 'Open Source', desc: 'Git & GitHub' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <SectionWrapper id="about">
      <SectionHeader title="About Me" subtitle="A passionate engineer solving real-world problems." />
      <div ref={ref} className="grid lg:grid-cols-5 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-3 space-y-5"
        >
          <p className="text-slate-700 dark:text-gray-300 text-base leading-relaxed">
            I'm <span className="text-brand-600 dark:text-brand-400 font-semibold">Roshini K R</span>, a B.Tech Information Technology student at Sri Eshwar College of Engineering, deeply passionate about engineering products that create real impact. I specialize in the <span className="text-brand-600 dark:text-brand-400 font-semibold">MERN Stack</span> and Java-based backend development.
          </p>
          <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
            My journey in software engineering is driven by curiosity — whether it's architecting scalable REST APIs, designing intuitive frontend experiences, or diving deep into algorithms and data structures. I thrive at the intersection of creative thinking and technical rigor.
          </p>
          <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
            I'm particularly excited about <span className="text-secondary-600 dark:text-secondary-400 font-medium">IoT Systems</span>, <span className="text-secondary-600 dark:text-secondary-400 font-medium">Machine Learning</span>, and building solutions that directly address real-world challenges — from secure device management to fraud detection in banking.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {['MERN Stack', 'Spring Boot', 'Java', 'Python', 'IoT', 'Machine Learning', 'MySQL'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {highlights.map(({ icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="card flex flex-col gap-3 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                {icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-200">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
