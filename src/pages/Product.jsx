import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Slider from "../components/Slider";

const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    price: 29.99,
    description: "Deeply hydrates your skin for a radiant glow.",
    image:
      "https://img.gcimagazine.com/files/base/allured/all/image/2024/04/1109_image_skincare_product2013_Edit.662c1fa5a88fc.png?auto=format%2Ccompress&q=70&w=700",
  },
  {
    id: 2,
    name: "Vitamin C Cream",
    price: 39.99,
    description: "Brightens your skin and reduces dark spots.",
    image:
      "https://imageskincare.com.au/cdn/shop/files/ISC-website-banner3_600x600_crop_center.jpg?v=1614289181",
  },
  {
    id: 3,
    name: "Sunscreen SPF 50",
    price: 19.99,
    description: "Protects your skin from harmful UV rays.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRDqxvpraQtTDRE7h5IwA2qmfjRL3myQYdc6GHpxGUe8OhdLVfcRQkr_p4tZrbrqjuVfXTCzXY0gbGaFvYQNETJYPr3cJNfGtcfNaP1tkRi6k76Kj5c4UCu7T97C-geQCDJRe3oc46rIk/w1200-h630-p-k-no-nu/IMAGE_Skincare_Product_Range.jpg",
  },
  {
    id: 4,
    name: "Night Repair Cream",
    price: 49.99,
    description: "Nourishes and repairs skin while you sleep.",
    image:
      "https://skinmart.com.au/cdn/shop/articles/unnamed_fd0f9526-a674-47d2-9025-59094958c7ce_1000x.jpg?v=1632105902",
  },
    {
    id: 5,
    name: "Hydrating Serum",
    price: 29.99,
    description: "Deeply hydrates your skin for a radiant glow.",
    image:
      "https://www.studiotineke.nl/wp-content/uploads/2022/09/Droge-huid-en-hydratatie-set-IMAGE-skincare-Studio-Tineke.webp",
  },
  {
    id: 6,
    name: "Vitamin C Cream",
    price: 39.99,
    description: "Brightens your skin and reduces dark spots.",
    image:
      "https://www.studiotineke.nl/wp-content/uploads/2022/09/Roodheid-Gevoeligheid-Set-IMAGE-skincare-Studiot-Tineke.webp",
  },
  {
    id: 7,
    name: "Sunscreen SPF 50",
    price: 19.99,
    description: "Protects your skin from harmful UV rays.",
    image:
      "https://imageskincare.com/cdn/shop/files/OILY-SKIN-SET-PDP-R01A.jpg?v=1712756753&width=2048",
  },
  {
    id: 8,
    name: "Night Repair Cream",
    price: 49.99,
    description: "Nourishes and repairs skin while you sleep.",
    image:
      "https://images.squarespace-cdn.com/content/v1/59c3e9ca29f1875bc1f2274a/1506112570674-W85EVPQ6VBVFOZJNIBWN/The+Max+Image+Skin+Care.jpg",
  },
];

const SkincareProductPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Open modal for a product
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-b from-pink-200 to-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gradient-to-b from-pink-200 to-whiteshadow-md sticky top-3 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 md:px-20">
          <h1 className="text-2xl font-bold text-pink-500">Glow Skincare</h1>
          <div className="flex items-center space-x-6">
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            >
              <FaShoppingCart className="text-2xl text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

  

      <Slider />

      {/* Product Grid */}
      <section className="py-10 px-5 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  
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
            <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
            <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                Buy
              </button>
              <button
                onClick={() => openModal(product)}
                className="border border-pink-400 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-50 transition-colors"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-5 overflow-y-auto flex flex-col">
          <button
            onClick={() => setShowCart(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <IoClose size={28} />
          </button>

          <h2 className="text-2xl font-bold mb-5">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="flex-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <IoClose size={28} />
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-48 h-48 object-cover mx-auto rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 mb-3">{selectedProduct.description}</p>
            <p className="text-lg font-semibold text-pink-500 mb-4">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <button
              onClick={() => {
                addToCart(selectedProduct);
                closeModal();
              }}
              className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkincareProductPage;
