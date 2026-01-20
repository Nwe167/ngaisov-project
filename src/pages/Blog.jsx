import React, { useState, useEffect, useContext } from "react";
import { Star, Heart, TrendingUp, Sparkles, Clock, User, ArrowRight, CheckCircle2 } from "lucide-react";
import ThemeContext from "../context/ThemeProvider";

const posts = [
  {
    id: 1,
    title: "How to Build a Simple Skincare Routine",
    excerpt: "Learn the essential steps for a healthy skincare routine suitable for all skin types.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop",
    category: "Routine",
    author: "Beauty Team",
    date: "Dec 10, 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Top 5 Ingredients for Glowing Skin",
    excerpt: "Discover powerful skincare ingredients that really make a difference.",
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=800&h=600&fit=crop",
    category: "Ingredients",
    author: "Dr. Skin",
    date: "Dec 15, 2025",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Morning vs Night Skincare",
    excerpt: "Understand why your AM and PM skincare routines should not be the same.",
    image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?w=800&h=600&fit=crop",
    category: "Tips",
    author: "Skin Care Pro",
    date: "Dec 20, 2025",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "The Science of Anti-Aging Serums",
    excerpt: "Understanding retinol, peptides, and how they transform your skin over time.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=600&fit=crop",
    category: "Science",
    author: "Dr. Beauty",
    date: "Dec 22, 2025",
    readTime: "10 min",
  },
  {
    id: 5,
    title: "Korean Skincare Secrets Revealed",
    excerpt: "Explore the 10-step Korean beauty routine and why it works wonders.",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=800&h=600&fit=crop",
    category: "Trends",
    author: "K-Beauty Expert",
    date: "Dec 25, 2025",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Natural DIY Face Masks at Home",
    excerpt: "Create effective skincare treatments using ingredients from your kitchen.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    category: "DIY",
    author: "Natural Beauty",
    date: "Dec 28, 2025",
    readTime: "5 min",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Skincare Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    text: "This blog transformed my skincare routine! My skin has never looked better.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Beauty Blogger",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    text: "The most comprehensive and trustworthy skincare resource I've found online.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Dermatology Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    text: "Science-backed advice that actually works. Highly recommend to everyone!",
    rating: 5,
  },
];

const Blog = () => {
  const {theme}= useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("All");
  const [liked, setLiked] = useState({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", "Routine", "Ingredients", "Tips", "Science", "Trends", "DIY"];
  const filteredPosts = activeTab === "All" ? posts : posts.filter(p => p.category === activeTab);

  return (
    <div className={`min-h-screen mt-[80px] ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-pink-50 via-white to-purple-50"}`}>
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">  
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-2 rounded-full mb-8 animate-bounce">
            <Sparkles className="w-5 h-5 text-pink-600" />
            <span className="text-pink-600 font-semibold">Welcome to GlowCare</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your Skin
            </span>
            <br />
            <span className="text-gray-800">Deserves the Best</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expert skincare advice, science-backed tips, and personalized routines to help you achieve radiant, healthy skin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Explore Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200">
              Join Community
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { label: "Articles", value: "500+" },
              { label: "Happy Readers", value: "50K+" },
              { label: "Expert Tips", value: "1000+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Article Carousel */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-pink-600" />
            <h2 className="text-4xl font-bold text-gray-800">Trending Now</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop"
                alt="Featured"
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="inline-block bg-pink-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
                <h3 className="text-3xl font-bold mb-3">
                  The Ultimate Guide to Glass Skin
                </h3>
                <p className="text-white/80 mb-4">
                  Achieve the coveted Korean glass skin look with our step-by-step guide.
                </p>
                <button className="flex items-center gap-2 font-semibold group/btn">
                  Read More
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {posts.slice(0, 3).map((post, idx) => (
                <div key={idx} className="group flex gap-4 bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <span className="inline-block text-xs bg-pink-600 text-white px-3 py-1 rounded-full mb-2">
                      {post.category}
                    </span>
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Latest Skincare Articles
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition duration-700"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  {post.category}
                </span>
                <button
                  onClick={() => setLiked(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${liked[post.id] ? "fill-pink-600 text-pink-600" : "text-gray-600"}`}
                  />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {post.readTime}
                  </span>
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Readers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of happy readers transforming their skin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-pink-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skincare Education */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Skincare Education Hub
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔬",
                title: "Know Your Skin Type",
                desc: "Learn how to identify dry, oily, combination, and sensitive skin with our comprehensive guide.",
                color: "from-pink-500 to-purple-500"
              },
              {
                icon: "🧪",
                title: "Safe Ingredients",
                desc: "Avoid harmful chemicals and choose skin-friendly formulas backed by dermatologists.",
                color: "from-purple-500 to-blue-500"
              },
              {
                icon: "✨",
                title: "Daily Skin Habits",
                desc: "Simple, effective habits that keep your skin glowing and healthy every single day.",
                color: "from-blue-500 to-pink-500"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className={`text-5xl mb-6 inline-block p-4 bg-gradient-to-br ${item.color} rounded-2xl`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-2xl mb-4 text-gray-800">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <button className="text-pink-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {[
              {
                q: "How often should I exfoliate my skin?",
                a: "For most skin types, exfoliating 1-2 times per week is ideal. Sensitive skin may benefit from once weekly, while oily skin can handle up to 3 times per week."
              },
              {
                q: "Do I really need sunscreen indoors?",
                a: "Yes! UV rays can penetrate windows, and blue light from screens may contribute to premature aging. Daily SPF is essential regardless of location."
              },
              {
                q: "Can I mix different skincare brands?",
                a: "Absolutely! As long as the ingredients are compatible and don't cause irritation, mixing brands is perfectly fine and often encouraged."
              },
              {
                q: "What's the correct order for skincare products?",
                a: "Generally: cleanser, toner, serum, moisturizer, then sunscreen (AM). At night, replace sunscreen with additional treatments or heavier creams."
              },
              {
                q: "How long before I see results from new products?",
                a: "Most products need 4-6 weeks for visible results. Active ingredients like retinol may take 12 weeks. Be patient and consistent!"
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-pink-100 rounded-2xl p-6 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h3 className="text-5xl font-bold mb-4">Stay Glowing ✨</h3>
          <p className="text-xl mb-10 text-white/90">
            Get exclusive skincare tips, product reviews, and special offers delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Subscribe Now
            </button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Join 50,000+ beauty enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Blog;