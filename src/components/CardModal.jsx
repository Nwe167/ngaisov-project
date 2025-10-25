import React from "react";
import { IoClose } from "react-icons/io5"; // ✅ import icon

const CardModal = ({
  showCart,
  setShowCart,
  cart,
  decreaseQty,
  increaseQty,
  totalPrice,
  showModal,
  selectedProduct,
  closeModal,
  addToCart,
}) => {
  return (
    <div>
      {/* Cart Modal */}
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
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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

export default CardModal;
