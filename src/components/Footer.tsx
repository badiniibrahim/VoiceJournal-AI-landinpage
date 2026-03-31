import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  const productLinks = [
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.download'), href: '#cta' },
  ]

  const legalLinks = [
    { label: t('footer.privacyPolicy'), href: '#/privacy-policy' },
    { label: t('footer.termsOfService'), href: '#/terms-of-service' },
    { label: t('footer.cookiePolicy'), href: '#/cookie-policy' },
  ]

  const contactLinks = [
    { label: t('footer.support'), href: 'mailto:support@voicejournalai.com' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="border-t border-border-subtle py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <img src="/app-icon.png" alt="VoiceJournal AI" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-lg text-text-heading">
                Voice<span className="text-primary">Journal</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-heading transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-heading transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-heading transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-text-muted/60">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
