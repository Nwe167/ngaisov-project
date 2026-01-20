import React, { useState } from "react";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="mt-[80px] bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 px-4">
            Have questions about our products or need support? We're here to help 24/7.
          </p>
          <div className="flex justify-center gap-4 flex-wrap px-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              💬 Chat Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all">
              📞 Call Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "50K+", label: "Happy Customers", icon: "👥" },
            { num: "10K+", label: "Products Sold", icon: "📦" },
            { num: "24/7", label: "Customer Support", icon: "💬" },
            { num: "98%", label: "Satisfaction Rate", icon: "⭐" }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="text-3xl md:text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">{stat.num}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Why Choose Our Store?</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            We are a customer-focused tech store providing high-quality products
            and reliable support. Our mission is to deliver the best digital
            experience with fast service and friendly support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: "🚀", title: "Fast Delivery", desc: "Quick shipping within 2-5 business days across Cambodia" },
            { icon: "🔒", title: "Secure Payment", desc: "Safe and encrypted payment methods for your security" },
            { icon: "💎", title: "Premium Quality", desc: "Only authentic products from trusted brands" }
          ].map((feature, i) => (
            <div key={i} className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-2xl transition-all">
              <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="bg-gradient-to-br from-purple-100 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Multiple Ways to Reach Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "📧", title: "Email", detail: "support@techshop.com", subtitle: "Response in 2 hours" },
              { icon: "📱", title: "Phone", detail: "+855 123 456 789", subtitle: "Mon-Sun 8AM-8PM" },
              { icon: "💬", title: "Live Chat", detail: "Chat with us now", subtitle: "Available 24/7" },
              { icon: "📍", title: "Visit Us", detail: "Phnom Penh", subtitle: "See our showroom" }
            ].map((method, i) => (
              <div key={i} className="bg-white p-5 md:p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-4xl md:text-5xl mb-4">{method.icon}</div>
                <h3 className="font-bold text-base md:text-lg mb-2">{method.title}</h3>
                <p className="text-xs md:text-sm text-purple-600 font-semibold mb-1">{method.detail}</p>
                <p className="text-xs text-gray-500">{method.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Send us a Message</h2>
          <p className="text-gray-600 mb-8">Fill out the form and we'll respond within 24 hours</p>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b overflow-x-auto">
            {["general", "support", "sales"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-3 font-semibold capitalize transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border-2 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
              />
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Send Message ✉️
            </button>
          </div>
        </div>

        {/* Contact Info & Hours */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl rounded-2xl p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="opacity-90 text-sm md:text-base">123 Tech Street, Phnom Penh, Cambodia</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="opacity-90 text-sm md:text-base">+855 123 456 789</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="opacity-90 text-sm md:text-base">support@techshop.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Opening Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="font-semibold text-sm md:text-base">Monday - Friday</span>
                <span className="text-purple-600 text-sm md:text-base">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="font-semibold text-sm md:text-base">Saturday</span>
                <span className="text-purple-600 text-sm md:text-base">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm md:text-base">Sunday</span>
                <span className="text-purple-600 text-sm md:text-base">9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Follow Us</h2>
            <div className="flex gap-4">
              {["📘", "📷", "🐦", "💼"].map((icon, i) => (
                <button
                  key={i}
                  className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-xl md:text-2xl flex items-center justify-center hover:shadow-xl transition-all transform hover:scale-110"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-16">Real feedback from real customers</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sophia Chen", rating: 5, review: "Amazing service! My laptop arrived in perfect condition and the team answered all my questions promptly. Highly recommend!", avatar: "👩" },
              { name: "David Kim", rating: 5, review: "Best tech store in Phnom Penh! Great prices, authentic products, and super helpful staff. Will shop here again!", avatar: "👨" },
              { name: "Maria Santos", rating: 5, review: "Fast delivery and excellent customer support. They went above and beyond to help me choose the right phone.", avatar: "👩‍💼" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl md:text-4xl">{review.avatar}</div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base">{review.name}</h3>
                    <div className="text-yellow-400 text-sm">{"⭐".repeat(review.rating)}</div>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-16">Find answers to common questions</p>
          
          <div className="space-y-6">
            {[
              { q: "How long does delivery take?", a: "Delivery usually takes 2–5 business days within Phnom Penh and surrounding areas. Express delivery available for urgent orders." },
              { q: "Do you offer refunds?", a: "Yes! We offer a 7-day money-back guarantee on all products. Items must be in original condition with all accessories included." },
              { q: "Is customer support available 24/7?", a: "Our live chat is available 24/7. Phone and email support are available during business hours: Mon-Fri 8AM-6PM, Sat-Sun 9AM-4PM." },
              { q: "Do you provide warranty on products?", a: "All products come with manufacturer warranty. We also offer extended warranty options for added peace of mind." },
              { q: "Can I track my order?", a: "Absolutely! Once your order ships, you'll receive a tracking number via email to monitor your delivery in real-time." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, mobile payments (ABA, Wing), and cash on delivery for your convenience." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-5 md:p-6 rounded-xl hover:shadow-lg transition-all">
                <h3 className="font-bold text-base md:text-lg mb-3 text-purple-600">❓ {faq.q}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-16">Dedicated professionals ready to help you</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Alex Johnson", role: "Customer Support Lead", emoji: "👨‍💼" },
            { name: "Sokha Phan", role: "Technical Specialist", emoji: "👨‍💻" },
            { name: "Linda Chen", role: "Sales Manager", emoji: "👩‍💼" },
            { name: "Kimly Vong", role: "Product Expert", emoji: "👩‍🔧" }
          ].map((member, i) => (
            <div key={i} className="bg-white p-5 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl md:text-5xl">
                {member.emoji}
              </div>
              <h3 className="font-bold text-sm md:text-lg mb-1">{member.name}</h3>
              <p className="text-xs md:text-base text-gray-500 mb-3 md:mb-4">{member.role}</p>
              <button className="text-xs md:text-base text-purple-600 font-semibold hover:underline">Contact →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Location Map Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Visit Our Showroom</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-64 md:h-96 rounded-2xl flex items-center justify-center text-white text-5xl md:text-6xl shadow-2xl">
              🗺️
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">Come See Our Products</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                Visit our modern showroom in the heart of Phnom Penh to experience our products firsthand. 
                Our friendly staff will guide you through our entire collection and help you find exactly what you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">🚗</span>
                  <span className="text-sm md:text-base text-gray-700">Free parking available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">☕</span>
                  <span className="text-sm md:text-base text-gray-700">Complimentary refreshments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">🎮</span>
                  <span className="text-sm md:text-base text-gray-700">Try before you buy</span>
                </div>
              </div>
              <button className="mt-8 bg-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all text-sm md:text-base">
                Get Directions 🧭
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-base md:text-xl mb-8">Subscribe to get exclusive deals, new product launches, and tech tips delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-full text-black w-full sm:flex-1 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button 
              onClick={() => {
                if (email) {
                  alert("Thank you for subscribing!");
                  setEmail("");
                }
              }}
              className="bg-black px-8 md:px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 whitespace-nowrap"
            >
              Subscribe 📧
            </button>
          </div>
          <p className="text-xs md:text-sm mt-6 opacity-80">🎁 Get 10% off your first order when you subscribe!</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
            {["🔒 SSL Secure", "✅ Verified Store", "⚡ Fast Shipping", "💳 Secure Payment", "🏆 Best Rated", "♻️ Eco Friendly"].map((badge, i) => (
              <div key={i} className="text-gray-600 font-semibold text-sm md:text-lg">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Profile;