import { motion } from 'framer-motion'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
}

export function PhoneMockup({ src, alt, className = '' }: PhoneMockupProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative ${className}`}
    >
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-75" />
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[3px] border-white/10 bg-dark-bg p-1.5 shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="rounded-[2rem] w-full h-auto"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}
