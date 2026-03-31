import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

const testimonialsMeta = [
  { initials: 'SM', color: '#6C5CE7' },
  { initials: 'TL', color: '#A29BFE' },
  { initials: 'CR', color: '#00D2D3' },
  { initials: 'MD', color: '#FF6B6B' },
]

export function TestimonialsSection() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true }) as { name: string; role: string; text: string }[]

  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            badge={t('testimonials.badge')}
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const meta = testimonialsMeta[i]
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-text-main text-sm leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: meta.color }}
                    >
                      {meta.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-heading">{item.name}</div>
                      <div className="text-xs text-text-muted">{item.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
