import React from 'react'

const Approach = () => {
  const approaches = [
    {
      title: 'Concept to Product',
      description: 'We take your ideas from concept to fully realized products, ensuring every step is executed with precision and quality.',
    },
    {
      title: 'End to End Solutions',
      description: 'Complete system engineering and product development services under one roof, from design to deployment.',
    },
    {
      title: 'Quality First',
      description: 'Quality out values Quantity - we focus on delivering exceptional solutions that exceed expectations.',
    },
    {
      title: 'Strategic Integration',
      description: 'We provide optimal solutions with strategic advantage through seamless system integration.',
    },
  ]

  return (
    <section id="approach" className="py-24 bg-gray-50" aria-label="Our approach">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We materialize your idea - and remember that is the starting point of everything we do.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <article
              key={index}
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {approach.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{approach.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach

