import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description.substring(0, 50)}...</p>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
