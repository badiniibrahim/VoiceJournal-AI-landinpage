import { Apple } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface StoreButtonsProps {
  className?: string
}

export function StoreButtons({ className = '' }: StoreButtonsProps) {
  const { t } = useTranslation()

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href="https://apps.apple.com/us/app/voice-journal-ai/id6761409957"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white text-dark-bg font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105"
      >
        <Apple className="w-5 h-5" />
        <div className="text-left">
          <div className="text-[10px] font-normal leading-tight opacity-70">{t('store.appStoreLabel')}</div>
          <div className="text-sm font-semibold leading-tight">{t('store.appStore')}</div>
        </div>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white text-dark-bg font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] font-normal leading-tight opacity-70">{t('store.googlePlayLabel')}</div>
          <div className="text-sm font-semibold leading-tight">{t('store.googlePlay')}</div>
        </div>
      </a>
    </div>
  )
}
