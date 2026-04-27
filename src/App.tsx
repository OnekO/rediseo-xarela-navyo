import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { LaborSocialPage } from '@/pages/LaborSocialPage'
import { NovasPage } from '@/pages/NovasPage'
import { QuePodesPage } from '@/pages/QuePodesPage'
import { AgradecementosPage } from '@/pages/AgradecementosPage'
import { ContactoPage } from '@/pages/ContactoPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Toaster position="top-right" />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labor-social" element={<LaborSocialPage />} />
            <Route path="/novas" element={<NovasPage />} />
            <Route path="/que-podes-facer" element={<QuePodesPage />} />
            <Route path="/agradecementos" element={<AgradecementosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App