import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const currentLang = i18n.language?.startsWith('fr') ? 'fr' : 'en'
  const toggleLang = () => i18n.changeLanguage(currentLang === 'fr' ? 'en' : 'fr')

  const navLinks = [
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.faq'), href: '#faq' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-subtle shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/app-icon.png" alt="VoiceJournal AI" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-lg text-text-heading">
            Voice<span className="text-primary">Journal</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-heading transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-text-muted hover:text-text-heading hover:bg-white/5 transition-all"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{currentLang.toUpperCase()}</span>
          </button>

          <a
            href="#cta"
            className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            {t('nav.download')}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-subtle overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-muted hover:text-text-heading transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile language toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-text-muted hover:text-text-heading transition-colors py-2"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang === 'fr' ? 'English' : 'Français'}</span>
              </button>

              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium text-center hover:bg-primary/90 transition-all"
              >
                {t('nav.download')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
