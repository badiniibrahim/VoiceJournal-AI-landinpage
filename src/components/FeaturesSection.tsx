import {
  Mic,
  Brain,
  LineChart,
  Sparkles,
  Trophy,
  MessageCircleQuestion,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

const featuresMeta = [
  { icon: Mic, color: '#6C5CE7' },
  { icon: Brain, color: '#A29BFE' },
  { icon: LineChart, color: '#00D2D3' },
  { icon: Sparkles, color: '#FF6B6B', tag: 'Pro' },
  { icon: Trophy, color: '#FBBF24' },
  { icon: MessageCircleQuestion, color: '#34D399' },
]

export function FeaturesSection() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="features" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            badge={t('features.badge')}
            title={t('features.title')}
            subtitle={t('features.subtitle')}
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const meta = featuresMeta[i]
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full hover:bg-card-hover transition-all duration-300 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${meta.color}15` }}
                  >
                    <meta.icon className="w-6 h-6" style={{ color: meta.color }} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-text-heading">{item.title}</h3>
                    {meta.tag && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary-light">
                        {meta.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
