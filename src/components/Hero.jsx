import React, { useState, useEffect } from 'react'

const Hero = () => {
  const slides = [
    {
      title: 'System Integration',
      subtitle: 'We provide optimal solutions with strategic advantage through intelligent system integration',
    },
    {
      title: 'We materialize your idea',
      subtitle: 'Transforming your vision into reality—and remember that is the starting point of everything we do',
    },
    {
      title: 'Optimal solutions',
      subtitle: 'We provide spectrum of services: Design, Engineering, and next-generation technologies under one roof',
    },
    {
      title: 'Quality Policy',
      subtitle: 'Quality outvalues quantity—delivering precision, efficiency, and excellence through intelligent processes',
    },
    {
      title: 'End to End solutions',
      subtitle: 'Concept to product realization services—from ideation to intelligent deployment and scaling',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-20" aria-label="Hero section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="min-h-[400px] flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

