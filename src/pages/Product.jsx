import React, { useState, useEffect, useContext } from "react";
import { ShoppingCart, Search, X, Menu, Moon, Sun, Filter, ChevronDown, Star, Heart, TrendingUp } from "lucide-react";
import ProductContext from "../context/ProductContext";

const products = [
  { id: 1, name: "Hydrating Serum", brand: "GlowLab", category: "Serums", rating: 5, reviews: 234, price: 29.99, originalPrice: 39.99, discount: 25, description: "Deeply hydrates your skin for a radiant glow.", bestseller: true, new: false, image: "https://img.gcimagazine.com/files/base/allured/all/image/2024/04/1109_image_skincare_product2013_Edit.662c1fa5a88fc.png" },
  { id: 2, name: "Vitamin C Cream", brand: "PureGlow", category: "Moisturizers", rating: 5, reviews: 189, price: 39.99, originalPrice: 49.99, discount: 20, description: "Brightens your skin and reduces dark spots.", bestseller: true, new: false, image: "https://imageskincare.com.au/cdn/shop/files/ISC-website-banner3_600x600_crop_center.jpg" },
  { id: 3, name: "Retinol Night Cream", brand: "DermaLux", category: "Moisturizers", rating: 4, reviews: 156, price: 44.99, originalPrice: 54.99, discount: 18, description: "Anti-aging formula for overnight skin renewal.", bestseller: false, new: true, image: "https://img.gcimagazine.com/files/base/allured/all/image/2024/04/1109_image_skincare_product2013_Edit.662c1fa5a88fc.png" },
  { id: 4, name: "Gentle Cleanser", brand: "GlowLab", category: "Cleansers", rating: 5, reviews: 312, price: 24.99, originalPrice: 29.99, discount: 17, description: "Removes impurities without stripping moisture.", bestseller: true, new: false, image: "https://imageskincare.com.au/cdn/shop/files/ISC-website-banner3_600x600_crop_center.jpg" },
  { id: 5, name: "Niacinamide Serum", brand: "PureGlow", category: "Serums", rating: 5, reviews: 278, price: 34.99, originalPrice: 44.99, discount: 22, description: "Minimizes pores and evens skin tone.", bestseller: false, new: true, image: "https://img.gcimagazine.com/files/base/allured/all/image/2024/04/1109_image_skincare_product2013_Edit.662c1fa5a88fc.png" },
  { id: 6, name: "SPF 50 Sunscreen", brand: "SunShield", category: "Suncare", rating: 5, reviews: 421, price: 27.99, originalPrice: 32.99, discount: 15, description: "Broad spectrum protection for all skin types.", bestseller: true, new: false, image: "https://imageskincare.com.au/cdn/shop/files/ISC-website-banner3_600x600_crop_center.jpg" },
  { id: 7, name: "Eye Cream", brand: "DermaLux", category: "Eye Care", rating: 4, reviews: 167, price: 49.99, originalPrice: 64.99, discount: 23, description: "Reduces dark circles and fine lines.", bestseller: false, new: false, image: "https://img.gcimagazine.com/files/base/allured/all/image/2024/04/1109_image_skincare_product2013_Edit.662c1fa5a88fc.png" },
  { id: 8, name: "Hyaluronic Acid Gel", brand: "GlowLab", category: "Serums", rating: 5, reviews: 298, price: 32.99, originalPrice: 39.99, discount: 18, description: "Intense hydration with plumping effect.", bestseller: true, new: true, image: "https://imageskincare.com.au/cdn/shop/files/ISC-website-banner3_600x600_crop_center.jpg" },
];

const categories = ["All", "Serums", "Moisturizers", "Cleansers", "Suncare", "Eye Care"];
const brands = ["All Brands", "GlowLab", "PureGlow", "DermaLux", "SunShield"];

const SkincareProductPage = () => {
  // Use context instead of local state for cart
  const { addToCart } = useContext(ProductContext);
  
  const [wishlist, setWishlist] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortBy, setSortBy] = useState("Featured");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  // Modified addToCart function to use context
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "All Brands" || product.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  if (sortBy === "Price: Low to High") filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  if (sortBy === "Price: High to Low") filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);

  return (
    <div className={`min-h-screen    from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${theme === "dark" ? "bg-white" : ""}`}>

      <div className="pt-20">
        {/* HERO BANNER */}
        <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 text-white py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Perfect Glow</h2>
            <p className="text-lg md:text-xl mb-8">Premium skincare products for radiant, healthy skin</p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all">Shop Now →</button>
          </div>
        </section>

        {/* FEATURES */}
        <section className={`py-12   `}>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "Orders over $50" },
              { icon: "💯", title: "100% Authentic", desc: "Original products" },
              { icon: "🔄", title: "Easy Returns", desc: "30-day guarantee" },
              { icon: "💳", title: "Secure Payment", desc: "Safe checkout" }
            ].map((f, i) => (
              <div key={i} className={`text-center p-4 hover:shadow-lg rounded-xl transition-all dark:hover:bg-gray-700 ${theme === "dark" ? "bg-white" : "bg-pink-400"}`}>
                <div className="text-4xl mb-2">{f.icon}</div>
                <h3 className="font-semibold mb-1 dark:text-gray-100">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRENDING BRANDS */}
        <section className="py-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-8  flex items-center justify-center gap-3 ${theme === "dark" ? "bg-white" : "text-gray-800  "} `}><TrendingUp className="text-pink-500" /> Trending Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brands.slice(1).map((brand, i) => (
                <button key={i} onClick={() => setSelectedBrand(brand)} className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all ${selectedBrand === brand ? 'ring-4 ring-pink-500' : ''}`}>
                  <div className="text-5xl mb-3">✨</div>
                  <h3 className="font-bold text-lg dark:text-gray-100">{brand}</h3>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH & FILTERS */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto relative mb-6">
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-6 py-4 pl-12 rounded-2xl border-2 focus:outline-none focus:border-pink-500 dark:bg-gray-700 dark:text-white" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full whitespace-nowrap ${selectedCategory === cat ? "bg-pink-500 text-white shadow-lg" : "bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-pink-100"}`}>{cat}</button>
                ))}
              </div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-6 py-3 rounded-xl bg-white dark:bg-gray-800 dark:text-gray-200 border-2 focus:outline-none">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="flex gap-2 mt-4">
              {selectedCategory !== "All" && <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-4 py-2 rounded-full text-sm flex items-center gap-2">{selectedCategory}<button onClick={() => setSelectedCategory("All")}><X size={16} /></button></span>}
              {selectedBrand !== "All Brands" && <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-4 py-2 rounded-full text-sm flex items-center gap-2">{selectedBrand}<button onClick={() => setSelectedBrand("All Brands")}><X size={16} /></button></span>}
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 dark:text-gray-100">{filteredProducts.length} Products Found</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img src={product.image} className="h-56 w-full object-cover" alt={product.name} />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.bestseller && <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">⭐ Bestseller</span>}
                    {product.new && <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">🆕 New</span>}
                    {product.discount > 0 && <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">-{product.discount}%</span>}
                  </div>
                  <button onClick={() => toggleWishlist(product)} className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-all">
                    <Heart size={20} className={isInWishlist(product.id) ? "fill-pink-500 text-pink-500" : "text-gray-600"} />
                  </button>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <button onClick={() => { setSelectedProduct(product); setShowModal(true); }} className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold">Quick View</button>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-pink-500 font-semibold mb-1">{product.brand}</p>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{product.name}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />)}</div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-pink-600">${product.price}</span>
                    {product.originalPrice > product.price && <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>}
                  </div>
                  <button onClick={() => handleAddToCart(product)} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:shadow-lg transition-all font-semibold">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20  from-purple-50 to-pink-50 ">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 dark:text-gray-100">Why Choose BeautyShop?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🌟", title: "Expert Curation", desc: "Every product carefully selected by skincare professionals." },
                { icon: "🧪", title: "Science-Backed", desc: "Formulas backed by research and tested for safety." },
                { icon: "🌱", title: "Clean Beauty", desc: "Natural, cruelty-free ingredients for you and the planet." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Get 15% Off Your First Order!</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive deals and beauty tips</p>
          <div className="flex justify-center gap-4 max-w-md mx-auto px-4">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-full text-black" />
            <button className="bg-black px-8 py-3 rounded-full font-semibold hover:bg-gray-900">Subscribe</button>
          </div>
        </section>
      </div>

      {/* MODAL */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white d rounded-2xl p-6 max-w-2xl w-full relative">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3"><X className="text-gray-600 dark:text-gray-200"/></button>
            <div className="grid md:grid-cols-2 gap-6">
              <img src={selectedProduct.image} className="rounded-xl" alt={selectedProduct.name} />
              <div>
                <p className="text-pink-500 font-semibold mb-2">{selectedProduct.brand}</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">{selectedProduct.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < selectedProduct.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />)}</div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">({selectedProduct.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProduct.description}</p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-pink-600">${selectedProduct.price}</span>
                  {selectedProduct.originalPrice > selectedProduct.price && <span className="text-lg text-gray-400 line-through">${selectedProduct.originalPrice}</span>}
                  {selectedProduct.discount > 0 && <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Save {selectedProduct.discount}%</span>}
                </div>
                <button onClick={() => { handleAddToCart(selectedProduct); setShowModal(false); }} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl hover:shadow-lg transition-all font-semibold">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkincareProductPage;