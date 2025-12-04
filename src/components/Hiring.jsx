import React from 'react'

const Hiring = () => {
  return (
    <section className="py-16 bg-black text-white" aria-label="Career opportunities">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <strong>HIRING</strong>
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            We are seeking aspiring engineers who are passionate about AI-driven development and want to build the future of intelligent systems.
          </p>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            We free you to do the best work of your life. Whether you are experienced or fresh out of college, if you are passionate about AI development and machine learning algorithms, understand neural networks and data structures, excel at system design, and are proficient in programming languages like Python for machine learning, Java for enterprise AI systems, JavaScript for AI web applications, R for statistical computing, C++ for performance-critical AI, or Scala for big data pipelines, we want to hear from you.
          </p>
          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            Join a smart place where passionate and dedicated professionals gather to build next-generation AI solutions. We appreciate how good you are and provide opportunities to work on cutting-edge AI projects, from generative AI applications to intelligent automation systems.
          </p>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Send us your best "Why you're good" to{' '}
            <a href="mailto:jobs@mxbit.co.in" className="text-white underline hover:text-gray-300">
              jobs@mxbit.co.in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hiring

