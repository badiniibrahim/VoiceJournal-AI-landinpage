import { useTranslation } from 'react-i18next'
import { AnimatedSection } from './AnimatedSection'
import { StoreButtons } from './StoreButtons'

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section id="cta" className="py-24 md:py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              {t('cta.title')}
              <span className="gradient-text">{t('cta.titleHighlight')}</span>
              {' ?'}
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <StoreButtons className="justify-center" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
