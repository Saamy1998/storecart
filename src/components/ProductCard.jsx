import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src={product.image} alt={product.title} className="w-40 h-40 object-contain mb-2" />
      <h2 className="text-sm font-semibold text-gray-700 text-center">{product.title}</h2>
      <p className="text-lg font-bold text-blue-600">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
