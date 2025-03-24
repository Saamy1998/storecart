import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ products, addToCart }) => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
