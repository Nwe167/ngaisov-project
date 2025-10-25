import React from 'react'

const Anchor = () => {
  return (
    <div>
   <section className="bg-gradient-to-b from-pink-200 to-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our skincare products, 
            need help with your order, or just want to say hello — we’re here to help.
          </p>
        </div>

        {/* CONTACT WRAPPER */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* CONTACT FORM */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO / IMAGE */}
          <div className="text-center md:text-left space-y-5">
            <img
              src="https://img.freepik.com/free-vector/skin-care-products-ad_52683-61046.jpg?t=st=1729613586~exp=1729617186~hmac=51c55a174ba448db0a26b5cd5067c25d4f62472cf41e87998b24bfe0d91c4b67&w=996"
              alt="Skincare contact banner"
              className="rounded-2xl shadow-lg mb-5"
            />
            <h3 className="text-2xl font-bold text-gray-800">SkinGlow Beauty</h3>
            <p className="text-gray-600">
              123 Blossom Street, Phnom Penh, Cambodia
            </p>
            <p className="text-gray-600">Email: support@skinglow.com</p>
            <p className="text-gray-600">Phone: +855 12 345 678</p>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Anchor
