import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center fixed top-0 w-full shadow-md z-50">
      <Link to="/" className="text-xl font-bold">🛍️ Aravind's Store</Link>
      <Link to="/cart" className="relative bg-white text-blue-600 px-4 py-2 rounded-lg">
        Cart 🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
