import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. <Link to="/" className="text-blue-600">Go shopping</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.title} - ${item.price}</span>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    className="bg-gray-300 px-2 py-1 rounded"
                  >-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                    className="bg-gray-300 px-2 py-1 rounded"
                  >+</button>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="bg-red-500 text-white px-3 py-1 rounded-lg ml-4"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <p className="text-green-600 font-bold">Final Price (10% Discount): ${finalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
