import React from "react";
import Banner from "../components/Banner";

const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    price: "$29.99",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Vitamin C Cream",
    price: "$39.99",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
  },
  {
    id: 3,
    name: "Sunscreen SPF 50",
    price: "$19.99",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
  },
  {
    id: 4,
    name: "Night Repair Cream",
    price: "$49.99",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
  },
];

const SkincarePage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-pink-100 flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-20 py-20 gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Glow With Confidence
          </h1>
          <p className="text-gray-600 mb-6">
            Discover our premium skincare products designed to keep your skin
            healthy and radiant.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors">
            Shop Now
          </button>
        </div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
          alt="Skincare Hero"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </section>
      <Banner />

      {/* Featured Products */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 mt-1">{product.price}</p>
              <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-5 bg-white rounded-2xl shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">
              We use only the highest quality natural ingredients for healthy skin.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Dermatologist Tested</h3>
            <p className="text-gray-600">
              All our products are tested by skincare experts for safety and effectiveness.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Packaging</h3>
            <p className="text-gray-600">
              We care for the planet with sustainable and recyclable packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-5 md:px-20 text-center bg-pink-500 text-white rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your Skin?
        </h2>
        <p className="mb-6">
          Start your skincare journey today and glow like never before.
        </p>
        <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-5 md:px-20 text-center">
        &copy; {new Date().getFullYear()} Glow Skincare. All rights reserved.
      </footer>
    </div>
  );
};

export default SkincarePage;
