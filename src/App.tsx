import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from './i18n/config'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

function App() {
  useEffect(() => {
    i18n.changeLanguage('pt-BR')
  }, [])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App