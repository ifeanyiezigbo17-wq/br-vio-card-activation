function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8 text-center">
        <p>&copy; {currentYear} Brívio Chain Trades. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Plataforma profissional de ativação de cartões cripto para usuários brasileiros</p>
      </div>
    </footer>
  )
}

export default Footer