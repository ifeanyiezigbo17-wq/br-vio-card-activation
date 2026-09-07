import { useTranslation } from 'react-i18next'
import { CreditCard } from 'lucide-react'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="bg-primary-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="w-8 h-8" />
          <h1 className="text-2xl font-bold">{t('app.title')}</h1>
        </div>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-primary-300 transition">{t('nav.home')}</a></li>
          <li><a href="/activate" className="hover:text-primary-300 transition">{t('nav.activate')}</a></li>
          <li><a href="/status" className="hover:text-primary-300 transition">{t('nav.status')}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header