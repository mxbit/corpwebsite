import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Approach from './components/Approach'
import Hiring from './components/Hiring'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main role="main" aria-label="Main content">
        <Hero />
        <Hiring />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

