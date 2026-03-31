import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PhoneMockup } from './PhoneMockup'
import { StoreButtons } from './StoreButtons'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary-light border border-primary/20 mb-6">
              {t('hero.badge')}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading leading-tight mb-6">
              {t('hero.title')}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg text-text-muted max-w-xl mb-8 mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <StoreButtons className="justify-center lg:justify-start" />

            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {['#6C5CE7', '#A29BFE', '#00D2D3', '#FF6B6B'].map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border-2 border-dark-bg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-muted">{t('hero.users')}</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-text-muted ml-1">{t('hero.rating')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <PhoneMockup
              src="/screenshots/01_accueil.png"
              alt="VoiceJournal AI Home Screen"
              className="w-64 sm:w-72 lg:w-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
