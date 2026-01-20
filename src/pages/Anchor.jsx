import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeProvider";

const EnhancedProfilePage = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const btn = document.getElementById("downloadVcardBtn");
    if (!btn) return;

    const vCard = `BEGIN:VCARD
VERSION:3.0
N:Limited;Visernic;;;
FN:Visernic Limited
ORG:Visernic Limited
TEL;TYPE=WORK,VOICE:+447577062211
EMAIL:contact@visernic.com
EMAIL:support@visernic.com
ADR;TYPE=WORK:;;Nazipur;Naogaon;6540;Bangladesh
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    btn.href = URL.createObjectURL(blob);
  }, []);

  return (
    <div className="min-h-screen mt-[80px]  from-slate-950 via-purple-950 to-slate-900 ">
      
      {/* HERO PROFILE SECTION */}
      <section className="relative flex justify-center items-center min-h-screen p-4 overflow-hidden ">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden ">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className={`max-w-md w-full relative transition-all duration-1000 transform bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 rounded-3xl  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Profile Image */}
            <div className="flex justify-center mb- relative z-10 ">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl group-hover/img:blur-2xl transition-all duration-500 animate-pulse"></div>
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover/img:scale-105 group-hover/img:rotate-3 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30"></div>
                  <img 
                    className="w-full h-full object-cover" 
                    src="/public/photo_2025-10-08_12-31-25-removebg-preview.png"
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
            
            {/* Name & Title */}
            <div className="text-center mb-6 relative z-10   ">
              <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Chea Dane
                </span>
              </h2>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-white/10 backdrop-blur-sm">
                <p className="text-lg font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  UI/UX Designer & Developer
                </p>
              </div>
            </div>
            
            {/* Bio */}
            <p className="text-center text-white/70 mb-8 px-4 relative z-10 leading-relaxed">
              Passionate about crafting <span className="text-purple-400 font-semibold">beautiful digital experiences</span> that blend aesthetics with functionality. Let's create something extraordinary together.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8 relative z-10">
              {[
                { icon: "M8.29 20.251c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.35-.012-.524A8.18 8.18 0 0022 5.92a8.273 8.273 0 01-2.357.626 4.077 4.077 0 001.804-2.245 8.198 8.198 0 01-2.605.975 4.106 4.106 0 00-6.993 3.744 11.652 11.652 0 01-8.457-4.287 4.106 4.106 0 001.272 5.482A4.073 4.073 0 012 9.713v.052a4.106 4.106 0 003.292 4.022 4.095 4.095 0 01-1.859.07 4.107 4.107 0 003.834 2.847A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.837", color: "blue" },
                { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.026-3.063-1.866-3.063-1.866 0-2.151 1.456-2.151 2.963v5.704h-3v-10h2.886v1.367h.041c.402-.76 1.386-1.562 2.852-1.562 3.052 0 3.613 2.007 3.613 4.615v5.58z", color: "sky" },
                { icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", color: "purple" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", color: "pink" }
              ].map((social, idx) => (
                <button
                  key={idx}
                  className={`p-4 rounded-xl bg-gradient-to-br from-${social.color}-500/10 to-${social.color}-600/10 backdrop-blur-sm border border-white/5 hover:border-${social.color}-500/50 hover:scale-110 hover:rotate-3 transition-all duration-300 group/social`}
                >
                  <svg className={`w-5 h-5 text-white/70 group-hover/social:text-${social.color}-400 transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </button>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="text-center relative z-10">
              <button className="group/btn relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VISERNIC BUSINESS CARD */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 px-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <img
                    src="/public/photo_2025-12-31_18-22-08.jpg"
                    className="w-28 h-28 rounded-full"
                    alt="Visernic Logo"
                  />
                </div>
                <h1 className="text-5xl font-bold text-white mb-3">ICT Center SkinCare</h1>
                <p className="text-xl text-white/80">
                  Professional Web Development & Tech Solutions 
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contact@visernic.com"
                    className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10">✉️ Email Us</span>
                  </a>

                  <a
                    href="tel:+447577062211"
                    className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10">📞 Call Us</span>
                  </a>

                  <a
                    id="downloadVcardBtn"
                    download="Visernic_Limited.vcf"
                    className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <span className="relative z-10">💾 Save Contact</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card title="About Us" icon="🚀">
                    Visernic Limited is a forward-thinking digital agency delivering
                    innovative and scalable solutions that transform businesses in the digital age.
                  </Card>

                  <Card title="Our Services" icon="⚡">
                    <ul className="space-y-3">
                      {['UI / UX Design', 'Web Development', 'SEO & Marketing', 'Domain & Hosting'].map((service, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card title="Contact" icon="📍">
                    <div className="space-y-3">
                      <p className="flex items-center gap-2 text-white/80">📧 contact@visernic.com</p>
                      <p className="flex items-center gap-2 text-white/80">📞 +44 7577 062211</p>
                      <p className="flex items-center gap-2 text-white/80">🌍 Naogaon, Bangladesh</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-900 to-blue-400 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h2>
            <p className=" text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question or need help — we're here for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center ">
            {/* Form */}
            <div className="bg-white/5 backdrop-blur-xl  p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6">
              <div>
                <label className="block  font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black/5 border border-white/50 rounded-xl p-4  placeholder-black/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block  font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/5 border border-white/50 rounded-xl p-4  placeholder-black/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block  font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full bg-black/5 border border-white/50 rounded-xl p-4  placeholder-black/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
              >
                Send Message ✨
              </button>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop"
                alt="Contact"
                className="rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="backdrop-blur-xl p-6 rounded-3xl  w-full bg-black/5 border border-white/50   placeholder-black/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p>📍 123 Blossom Street, Phnom Penh</p>
                  <p>📧 support@company.com</p>
                  <p>📞 +855 12 345 678</p>
                </div>
                <div className="flex gap-4 mt-6">
                  {['facebook-f', 'instagram', 'twitter'].map((social, idx) => (
                    <button
                      key={idx}
                      className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <i className={`fab fa-${social} text-xl text-white/80`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function Card({ title, icon, children }) {
  return (
    <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02]">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span>
      </h2>
      <div className="text-white/70 leading-relaxed">{children}</div>
    </div>
  );
}

export default EnhancedProfilePage;