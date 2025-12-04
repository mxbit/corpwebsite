import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`} role="banner">
      <nav className="container mx-auto px-6 lg:px-8 py-6" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold tracking-tight text-black" aria-label="MXBIT Technology Innovations Home">
              MXBIT<sup className="text-xs">®</sup>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-sm font-medium text-gray-900 hover:text-black transition-colors">
              MXBIT<sup className="text-xs">®</sup>
            </a>
            <a href="#about" className="text-sm font-medium text-gray-900 hover:text-black transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-gray-900 hover:text-black transition-colors">
              Services
            </a>
            <a href="#approach" className="text-sm font-medium text-gray-900 hover:text-black transition-colors">
              Approach
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-900 hover:text-black transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 bg-white">
            <a href="#home" className="block text-sm font-medium text-gray-900 hover:text-black py-2">
              MXBIT<sup className="text-xs">®</sup>
            </a>
            <a href="#about" className="block text-sm font-medium text-gray-900 hover:text-black py-2">
              About
            </a>
            <a href="#services" className="block text-sm font-medium text-gray-900 hover:text-black py-2">
              Services
            </a>
            <a href="#approach" className="block text-sm font-medium text-gray-900 hover:text-black py-2">
              Approach
            </a>
            <a href="#contact" className="block text-sm font-medium text-gray-900 hover:text-black py-2">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

