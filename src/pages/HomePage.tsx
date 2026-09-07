import { useTranslation } from 'react-i18next'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'

function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Ative seu Cartão Cripto em Minutos
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Plataforma segura e rápida para ativação de cartões de criptomoedas destinada aos usuários brasileiros.
        </p>
        <button className="btn-primary inline-flex items-center gap-2">
          Começar Agora
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="card text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-primary-600" />
          <h3 className="text-xl font-semibold mb-2">Seguro</h3>
          <p className="text-gray-600">Criptografia de nível bancário para proteger seus dados</p>
        </div>
        <div className="card text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-primary-600" />
          <h3 className="text-xl font-semibold mb-2">Rápido</h3>
          <p className="text-gray-600">Ativação instantânea sem burocracias desnecessárias</p>
        </div>
        <div className="card text-center">
          <Globe className="w-12 h-12 mx-auto mb-4 text-primary-600" />
          <h3 className="text-xl font-semibold mb-2">Global</h3>
          <p className="text-gray-600">Suporte a múltiplas criptomoedas e redes blockchain</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
        <p className="mb-6">Crie sua conta agora e ative seu cartão cripto de forma segura.</p>
        <button className="bg-white text-primary-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
          Registrar-se Agora
        </button>
      </section>
    </div>
  )
}

export default HomePage