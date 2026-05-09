import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ServiceCards from './components/ServiceCards'
import Mission from './components/Mission'
import Services from './components/Services'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AllServices from './components/AllServices'
import CompanyServices from './components/CompanyServices'
import WhatsAppFloat from './components/WhatsAppFloat'
import VideoFloat from './components/VideoFloat'
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
    window.scrollTo(0, 0)
  }

  if (page === 'company' && selectedCompany) {
    return (
      <>
        <Navbar />
        <CompanyServices companyName={selectedCompany} onBack={goToHome} />
        <Footer />
        <WhatsAppFloat />
        <VideoFloat />
      </>
    )
  }

  if (page === 'services') {
    return (
      <>
        <Navbar />
        <AllServices onBack={goToHome} />
        <Footer />
        <WhatsAppFloat />
        <VideoFloat />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Hero onViewCompany={goToCompany} />
      <ServiceCards />
      <Mission />
      <Services />
      <Marquee />
      <Impact />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
      <WhatsAppFloat />
      <VideoFloat />
    </>
  )
}
