import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-white" aria-label="About MXBIT">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <article>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                WE ARE
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  We provide end to end system engineering and product development services.
                </p>
                <p>
                  MXBIT Technology Innovations Pvt Ltd specializes in delivering comprehensive 
                  technology solutions. We combine design and engineering expertise to create 
                  optimal solutions that provide strategic advantages for our clients.
                </p>
                <p>
                  Our commitment to quality ensures that we deliver exceptional results, 
                  focusing on quality over quantity in everything we do.
                </p>
              </div>
            </article>
            <aside className="lg:pl-8">
              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-black mb-6">Our Expertise</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>System Integration & Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Product Development & Realization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Web & Mobile Platform Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Data Acquisition Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>E-Learning Solutions</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

