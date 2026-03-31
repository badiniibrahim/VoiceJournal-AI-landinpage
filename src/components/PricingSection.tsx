import { Check, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

export function PricingSection() {
  const { t } = useTranslation()
  const freeFeatures = t('pricing.free.features', { returnObjects: true }) as string[]
  const proFeatures = t('pricing.pro.features', { returnObjects: true }) as string[]

  const plans = [
    {
      name: t('pricing.free.name'),
      price: t('pricing.free.price'),
      period: '',
      description: t('pricing.free.description'),
      features: freeFeatures,
      cta: t('pricing.free.cta'),
      highlight: false,
    },
    {
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      period: t('pricing.pro.period'),
      annualPrice: t('pricing.pro.annualPrice'),
      annualSaving: t('pricing.pro.annualSaving'),
      description: t('pricing.pro.description'),
      features: proFeatures,
      cta: t('pricing.pro.cta'),
      highlight: true,
    },
  ]

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/8 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            badge={t('pricing.badge')}
            title={t('pricing.title')}
            subtitle={t('pricing.subtitle')}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.15}>
              <div
                className={`rounded-2xl p-8 h-full relative ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary/40 glow-primary'
                    : 'glass'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      {t('pricing.pro.popular')}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-text-heading mb-2">{plan.name}</h3>
                  <p className="text-text-muted text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-text-heading">{plan.price}€</span>
                    {plan.period && (
                      <span className="text-text-muted text-sm">{plan.period}</span>
                    )}
                  </div>
                  {plan.annualPrice && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-text-muted text-sm">{plan.annualPrice}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-accent/15 text-accent">
                        {plan.annualSaving}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-main">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`block text-center py-3 rounded-xl font-medium text-sm transition-all ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                      : 'bg-surface text-text-heading border border-border-glass hover:bg-card-hover'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
