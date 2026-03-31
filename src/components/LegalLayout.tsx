import { ArrowLeft, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { navigateTo } from '../App'

function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        navigateTo(href)
      }}
      className="hover:text-text-heading transition-colors"
    >
      {children}
    </a>
  )
}

export function LegalLayout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigateTo('/')
              window.scrollTo(0, 0)
            }}
            className="flex items-center gap-2 text-text-muted hover:text-text-heading transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <img src="/app-icon.png" alt="VoiceJournal AI" className="w-6 h-6 rounded-md" />
            <span className="font-semibold text-sm">VoiceJournal AI</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-text-muted hover:text-text-heading hover:bg-surface transition-all"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <article className="prose prose-invert prose-sm max-w-none
          [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-text-heading [&_h1]:mb-2
          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-heading [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-text-heading [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:text-text-muted [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:pl-6
          [&_ol]:text-text-muted [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:pl-6
          [&_li]:leading-relaxed
          [&_a]:text-primary-light [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary
          [&_strong]:text-text-heading [&_strong]:font-semibold
          [&_table]:w-full [&_table]:mb-4 [&_table]:text-sm
          [&_th]:text-left [&_th]:text-text-heading [&_th]:font-semibold [&_th]:py-2 [&_th]:px-3 [&_th]:border-b [&_th]:border-border-subtle
          [&_td]:text-text-muted [&_td]:py-2 [&_td]:px-3 [&_td]:border-b [&_td]:border-border-subtle/50
        ">
          {children}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">{t('footer.copyright')}</p>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <LegalLink href="/privacy-policy">{t('footer.privacyPolicy')}</LegalLink>
            <LegalLink href="/terms-of-service">{t('footer.termsOfService')}</LegalLink>
            <LegalLink href="/cookie-policy">{t('footer.cookiePolicy')}</LegalLink>
          </div>
        </div>
      </footer>
    </div>
  )
}
