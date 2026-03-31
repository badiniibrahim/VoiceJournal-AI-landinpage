import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { PricingSection } from './components/PricingSection'
import { FAQSection } from './components/FAQSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { LegalLayout } from './components/LegalLayout'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { CookiePolicy } from './pages/CookiePolicy'

type Page = 'home' | 'privacy' | 'terms' | 'cookies'

function getPage(): Page {
  const path = window.location.pathname
  if (path === '/privacy-policy') return 'privacy'
  if (path === '/terms-of-service') return 'terms'
  if (path === '/cookie-policy') return 'cookies'
  return 'home'
}

export function navigateTo(path: string) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function App() {
  const [page, setPage] = useState<Page>(getPage)

  useEffect(() => {
    const handleNav = () => {
      const newPage = getPage()
      setPage(newPage)
      if (newPage !== 'home') {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('popstate', handleNav)
    return () => window.removeEventListener('popstate', handleNav)
  }, [])

  if (page === 'privacy') {
    return (
      <LegalLayout>
        <PrivacyPolicy />
      </LegalLayout>
    )
  }

  if (page === 'terms') {
    return (
      <LegalLayout>
        <TermsOfService />
      </LegalLayout>
    )
  }

  if (page === 'cookies') {
    return (
      <LegalLayout>
        <CookiePolicy />
      </LegalLayout>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
