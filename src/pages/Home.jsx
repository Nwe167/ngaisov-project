import React, { useContext, useState } from "react";
import { ShoppingBag, Sparkles, TrendingUp, Award, Heart, Star } from "lucide-react";
import ThemeContext from "../context/ThemeProvider";

const Home = () => {
  const {theme}= useContext(ThemeContext);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { name: "Serums", icon: "💧", color: "from-blue-400 to-cyan-400" },
    { name: "Moisturizers", icon: "✨", color: "from-pink-400 to-rose-400" },
    { name: "Sunscreen", icon: "☀️", color: "from-orange-400 to-amber-400" },
    { name: "Masks", icon: "🌸", color: "from-purple-400 to-indigo-400" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Glow Vitamin C Serum",
      price: 45.99,
      rating: 4.9,
      image: "https://discoverpilgrim.com/cdn/shop/files/The-Red-Stiletto-Liquid-Lipstick-Listing-Images-1080x1080-1_fd962098-08d1-4a5f-af3e-8fa661f59b3e.jpg?v=1750911358&width=1080",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Hydra Boost Cream",
      price: 39.99,
      rating: 4.8,
      image: "https://assets.ajio.com/medias/sys_master/root/20250129/XGY0/6799fa8bbc78b543a9066d86/-473Wx593H-4945174370-sirenred-MODEL.jpg",
      badge: "New"
    },
    {
      id: 3,
      name: "Youth Restore Night Cream",
      price: 52.99,
      rating: 5.0,
      image: "https://marscosmetics.in/cdn/shop/files/10.1jpg_75f3e174-de3f-4ace-8061-b78b6ef5e992.jpg?v=1757947988&width=2000",
      badge: "Premium"
    }
  ];

  return (
    <div className={`min-h-screen  from-pink-50 via-white to-purple-50 ${theme === "dark" ? "" : ""}`}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden from-pink-100 via-purple-100 to-blue-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
          <div className="absolute -bottom-20 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-semibold text-gray-700">Premium Skincare Collection</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Glow Like
                </span>
                <br />
                <span className="text-gray-900">Never Before</span>
              </h1>
              
              <p className="text-xl  leading-relaxed">
                Discover scientifically-proven skincare that transforms your skin from within. 
                Premium ingredients, visible results.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Shop Collection
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-smmt-1">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm  mt-1">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm mt-1">Natural</div>
                </div>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* Main Product Image */}
                <div className="relative z-10 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img
                    src="https://image.similarpng.com/file/similarpng/original-picture/2021/05/Skin-care-cosmetic-bottle-on-transparent-background-PNG.png"
                    alt="Featured Product"
                    className="relative w-[500px] h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div className="text-xs font-bold mt-1">Award Winner</div>
                </div>

                <div className="absolute bottom-32 left-10 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
                  <Heart className="w-8 h-8 text-pink-500 fill-current" />
                  <div className="text-xs font-bold mt-1">Fan Favorite</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className=" text-lg">Find your perfect skincare solution</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm  mt-2">Explore collection →</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Trending Now</h2>
            <p className=" text-lg">Our most-loved products this month</p>
          </div>
          <button className="hidden md:block px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                <Heart className={`w-5 h-5 ${hoveredCard === product.id ? 'text-pink-500 fill-current' : 'text-gray-400'} transition-colors`} />
              </button>

              {/* Product Image */}
              <div className="relative h-80 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-64 h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">(2.3k reviews)</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
              <p className="text-white/90">Clinically tested formulas that deliver visible results in weeks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Ingredients</h3>
              <p className="text-white/90">100% natural, cruelty-free, and sustainably sourced</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Award Winning</h3>
              <p className="text-white/90">Recognized globally for excellence in skincare innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 p-12 lg:p-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjItMnptLTItMmgyLTJ6bTAtMmgyLTJ6bS0yLTJoMi0yem0wLTJoMi0yem0tMi0yaDItMnptMC0yaDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Join 50,000+ Happy Customers
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get exclusive access to new products, special offers, and skincare tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>

            <p className="text-sm text-white/60 mt-4">🎁 Get 15% off your first order when you subscribe</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;