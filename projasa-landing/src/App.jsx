import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceCards'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Footer from './components/Footer'
import AllServices from './components/AllServices'
import CompanyServices from './components/CompanyServices'
import WhatsAppFloat from './components/WhatsAppFloat'
import VideoFloat from './components/VideoFloat'
import ProjasAIWidget from './components/ProjasAIWidget'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  const [page, setPage] = useState('home')
  const [selectedCompany, setSelectedCompany] = useState(null)

  const goToServices = () => {
    setPage('services')
    window.scrollTo(0, 0)
  }

  const goToCompany = (companyName) => {
    setSelectedCompany(companyName)
    setPage('company')
    window.scrollTo(0, 0)
  }

  const goToHome = () => {
    setPage('home')
    setSelectedCompany(null)
  }

  if (page === 'company' && selectedCompany) {
    return (
      <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-purple-200">
        <main className="relative z-10 bg-white mb-[60vh] md:mb-[75vh] shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col">
          <Navbar />
          <div className="pt-24">
            <CompanyServices companyName={selectedCompany} onBack={goToHome} />
          </div>
          <Footer />
        </main>
        <RevealFooter />
        <WhatsAppFloat />
        <VideoFloat />
      </div>
    )
  }

  if (page === 'services') {
    return (
      <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-purple-200">
        <main className="relative z-10 bg-white mb-[60vh] md:mb-[75vh] shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col">
          <Navbar />
          <div className="pt-24">
            <AllServices onBack={goToHome} />
          </div>
          <Footer />
        </main>
        <RevealFooter />
        <WhatsAppFloat />
        <VideoFloat />
        <ProjasAIWidget />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-purple-200">
      {/* Main Content Wrapper for Reveal Footer Effect */}
      <main className="relative z-10 bg-white mb-[60vh] md:mb-[75vh] shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col">
        <Navbar />
        <Hero onViewServices={goToServices} />
        <ServiceCards onViewCompany={goToCompany} onViewServices={goToServices} />
        <Services />
        <Testimonials />
        <Process />
        <Footer />
      </main>

      {/* Hidden Curtain Reveal Footer */}
      <RevealFooter />
      <WhatsAppFloat />
      <VideoFloat />
      <ProjasAIWidget />
    </div>
  )
}

function RevealFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[60vh] md:h-[75vh] z-0 bg-white flex flex-col items-center justify-center overflow-hidden pb-[5vh] md:pb-[10vh]">
      {/* Gradient Vertical Lines Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#f4f0fd] via-[#d8b4fe] to-[#2dd4bf]"
        style={{
          maskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)',
          WebkitMaskImage: 'repeating-linear-gradient(to right, black 0px, black 1px, transparent 1px, transparent 8px)'
        }}
      ></div>
      
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>

      {/* Giant Logo */}
      <div className="relative z-10 flex flex-col items-center mt-20">
        <h1 className="text-[14vw] md:text-[12vw] font-black text-[#111] tracking-tighter leading-none">
          PROJASA
        </h1>
        <p className="text-sm md:text-base font-medium text-slate-600 mt-4">
          The Most Trusted Legal Company in Bali
        </p>
      </div>
    </div>
  )
}
