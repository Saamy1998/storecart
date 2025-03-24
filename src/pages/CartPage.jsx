import React from "react";
import { motion } from "framer-motion";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-20 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-blue-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded-md">
                      ➖
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded-md">
                      ➕
                    </button>
                  </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-lg font-semibold">Total: <span className="text-green-600">${totalPrice}</span></p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartPage;
