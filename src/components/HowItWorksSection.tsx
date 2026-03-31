import { Mic, Brain, BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

const stepsMeta = [
  { icon: Mic, number: '01', screenshot: '/screenshots/02_enregistrement.png', color: '#6C5CE7' },
  { icon: Brain, number: '02', screenshot: '/screenshots/01_accueil.png', color: '#A29BFE' },
  { icon: BarChart3, number: '03', screenshot: '/screenshots/03_dashboard.png', color: '#00D2D3' },
]

export function HowItWorksSection() {
  const { t } = useTranslation()
  const steps = t('howItWorks.steps', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            badge={t('howItWorks.badge')}
            title={t('howItWorks.title')}
            subtitle={t('howItWorks.subtitle')}
          />
        </AnimatedSection>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, i) => {
            const meta = stepsMeta[i]
            return (
              <AnimatedSection key={meta.number} delay={0.1}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-12 md:gap-16`}
                >
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${meta.color}15` }}
                      >
                        <meta.icon className="w-7 h-7" style={{ color: meta.color }} />
                      </div>
                      <span
                        className="text-5xl font-bold opacity-20"
                        style={{ color: meta.color }}
                      >
                        {meta.number}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Screenshot */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative w-56 sm:w-64">
                      <div
                        className="absolute inset-0 rounded-full blur-[60px] scale-75 opacity-30"
                        style={{ backgroundColor: meta.color }}
                      />
                      <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-dark-bg p-1.5 shadow-2xl">
                        <img
                          src={meta.screenshot}
                          alt={step.title}
                          className="rounded-[1.5rem] w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Connection line (desktop) */}
        <div className="hidden md:block absolute top-48 left-1/2 w-px h-[calc(100%-12rem)] bg-gradient-to-b from-primary/30 via-secondary/20 to-accent/30 -translate-x-1/2 -z-10" />
      </div>
    </section>
  )
}
