import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface-900"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative">
          <div className="loader-ring" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold gradient-text">A</span>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm tracking-widest uppercase font-mono"
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
