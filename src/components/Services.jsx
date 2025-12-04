import React, { useState } from 'react'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      id: 'talent',
      title: 'Talent & Development',
      subtitle: 'Technology changes the work—and continuous learning is essential.',
      description: 'Talent is the thread that weaves together technology and business strategy. Full value can only be achieved when teams are ready to learn and work with new technologies. Scaling technology adoption means not just learning new skills but creating new mindsets, supporting new ways of working through continuous learning and upskilling, redesigning organizations for agility, and measuring results against value.',
      stats: 'Organizations equipped with continuous learning programs see 3x faster technology adoption rates.',
      howWeDoIt: 'We help clients reorganize with modern technology-powered workforces, drive change programs with impact, identify future skills needs, and upskill workforces at speed. We develop cultures of curiosity, courage and connection through personalized, industry-specific access to continuous learning in technology, data and AI.',
      capabilities: [
        'Javascript Fullstack Development',
        'Mobile Applications (Native & Hybrid)',
        'E-Learning Courseware Development',
        'UI/UX Design & Development',
        'Technology Training & Upskilling',
      ],
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      subtitle: 'Data is the first mile of value—and the foundation for durable growth.',
      description: 'To get the most out of modern systems, data needs to be organized, easy to access and up to date. This means moving information to the cloud, breaking down data silos and setting clear rules for how data is managed and protected. Process reinvention is essential. Teams should be able to use data tools themselves, and companies should bring in people with the right skills to handle and analyze data.',
      stats: 'Organizations redesigning end-to-end processes with modern data approaches see 2x faster results.',
      howWeDoIt: 'Every strategy leads to technology, and every technology starts with data. We help clients modernize their data infrastructure, redesign their processes and move from pilot to scale—across front, middle and back office. We focus on consolidating disparate sources into a governed, secure data core to rapidly scale use cases.',
      capabilities: [
        'Data Acquisition Systems',
        'Data Integration & Migration',
        'Cloud Data Modernization',
        'Real-time Analytics Solutions',
        'Data Governance & Security',
      ],
    },
    {
      id: 'digital-core',
      title: 'Digital Core & Integration',
      subtitle: 'A true digital core is agile, connected and ready for whatever comes next.',
      description: 'Think of it as a living foundation for your business. By architecting systems with adaptability, you empower your organization to flex and grow as new opportunities arise. It\'s how you thrive through change and connect a flexible link between humans and machines—with security embedded by design. Success means thriving in a dynamic ecosystem, where you can plug in next-gen technologies and leverage cloud, data and AI.',
      stats: '85% of organizations plan to increase technology spending—even during economic uncertainty, 49% would accelerate rather than slow down.',
      howWeDoIt: 'We bring depth of industry knowledge, process expertise and global delivery capabilities needed to make technology work across the entire enterprise. We work with clients to modernize infrastructure, move to cloud, and connect data from all parts of the business. Security is built in from the start, and we work with top tech companies to keep improving.',
      capabilities: [
        'System Integration & Engineering',
        'Javascript Framework Development (Node.js, Angular, MEAN)',
        'Legacy System Modernization',
        'AI-Powered Code Generation & Automation',
        'Generative AI Application Development',
        'AI Agent Development & Integration',
      ],
    },
  ]

  return (
    <section id="services" className="py-24 bg-white" aria-label="Our services">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Service Areas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Technology transformation is not plug-and-play. It requires deep operational and cultural transformation. 
            The real unlock happens when companies reinvent how they run, how they compete and how they grow.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We provide end to end system engineering and product development services across three foundational areas:
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 hover:border-black transition-colors"
            >
              <button
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                className="w-full text-left p-8 focus:outline-none"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {service.subtitle}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-black transition-transform flex-shrink-0 ml-4 ${
                      expandedService === service.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {expandedService === service.id && (
                <div className="px-8 pb-8 space-y-6 border-t border-gray-200 pt-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 border-l-4 border-black">
                    <p className="text-sm font-semibold text-black mb-2">Impact</p>
                    <p className="text-gray-700">{service.stats}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">How We Do It</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.howWeDoIt}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Our Capabilities</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="text-black mr-2">•</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

