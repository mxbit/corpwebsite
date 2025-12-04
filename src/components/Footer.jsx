import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Work with MXBIT</h3>
            <p className="text-sm leading-relaxed mb-4">
              We free you to do the best work of your life. If you are experienced or fresh out of college and obsessed with OOPS concepts, data structure, system design and coding in Java, PHP, Python?
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Wanted to join in a smart place where passionate and dedicated professionals gather and appreciate how good you are, send us your best "Why you're good" to{' '}
              <a href="mailto:jobs@mxbit.co.in" className="text-white hover:underline">
                jobs@mxbit.co.in
              </a>
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Phone:</strong> +91 8078 1560 42 | +91 9611 1419 24
              </p>
              <p className="text-sm text-gray-300">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@mxbit.co.in" className="text-white hover:underline">
                  info@mxbit.co.in
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a href="https://www.facebook.com/mxbit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="http://twitter.com/mxbit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://plus.google.com/u/0/102727787023830544637/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Google+
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/mxbit-technology-innovations-pvt-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
            </ul>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#approach" className="hover:text-white transition">Approach</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} MXBIT Technology Innovations Pvt Ltd</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


