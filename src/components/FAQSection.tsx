import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

export function FAQSection() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[]

  return (
    <section id="faq" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            badge={t('faq.badge')}
            title={t('faq.title')}
            subtitle={t('faq.subtitle')}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion className="space-y-3">
            {items.map((faq, i) => (
              <AccordionItem
                key={i}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-text-heading text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
