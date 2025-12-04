import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', comment: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white" aria-label="Contact information">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Get in touch with us for your system engineering and product development needs.
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <address className="not-italic">
              <h3 className="text-xl font-semibold text-black mb-6">Address</h3>
              <div className="space-y-6">
                <div itemScope itemType="https://schema.org/PostalAddress">
                  <h4 className="font-semibold text-black mb-2">Bengaluru</h4>
                  <div className="text-gray-600 leading-relaxed">
                    <span itemProp="streetAddress"># 2310, 16th Cross Road,<br />
                    27th Main, Sector I,<br />
                    HSR Layout</span><br />
                    <span itemProp="addressLocality">Bangalore</span> <span itemProp="postalCode">560102</span><br />
                    <span itemProp="addressCountry">India</span>
                  </div>
                </div>
                <div itemScope itemType="https://schema.org/PostalAddress">
                  <h4 className="font-semibold text-black mb-2">Thiruvananthapuram</h4>
                  <div className="text-gray-600 leading-relaxed">
                    <span itemProp="streetAddress">I Floor, VN24, Vidya Nagar,<br />
                    Thycaud PO</span><br />
                    <span itemProp="addressLocality">Thiruvananthapuram</span>, <span itemProp="addressRegion">Kerala</span> <span itemProp="postalCode">695002</span><br />
                    <span itemProp="addressCountry">India</span>
                  </div>
                </div>
              </div>
            </address>
            
            <div>
              <h3 className="text-xl font-semibold text-black mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black mb-2">Telephone</h4>
                  <a href="tel:+919611141924" className="text-gray-600 hover:text-black transition" aria-label="Call MXBIT Bengaluru office">
                    +91 9611 1419 24
                  </a>
                  <br />
                  <a href="tel:+918078156042" className="text-gray-600 hover:text-black transition" aria-label="Call MXBIT alternate number">
                    +91 8078 1560 42
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">E-mail</h4>
                  <a href="mailto:info@mxbit.co.in" className="text-gray-600 hover:text-black transition" aria-label="Email MXBIT">
                    info@mxbit.co.in
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter name"
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email"
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-black mb-2">
                  Comments <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Enter your message…"
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3 text-base font-medium hover:bg-gray-900 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

