import React, { useContext } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import ThemeContext from "../context/ThemeProvider";

const CartContect = () => {
  const {theme} = useContext(ThemeContext);
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useContext(ProductContext);

  if (cart.length === 0) {
    return (
      <div className={`min-h-screen  from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-24 px-4 ${theme === "dark" ? "bg-white" : ""}`}>
        <div className="max-w-4xl mx-auto text-center py-16">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added any products yet.
          </p>
          <Link
            to="/product"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Shopping Cart ({totalItems} items)
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white text-black dark:bg-gray-800 rounded-2xl shadow-md p-6 flex gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-pink-600 font-bold text-lg mb-4">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-semibold dark:text-gray-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-3 flex justify-between text-xl font-bold text-gray-800 dark:text-gray-100">
                  <span>Total</span>
                  <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-pink-700 transition mb-3"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/product"
                className="block w-full border border-pink-600 text-pink-600 text-center py-3 rounded-xl font-semibold hover:bg-pink-50 dark:hover:bg-gray-700 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContect;