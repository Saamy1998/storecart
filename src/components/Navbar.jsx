import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">Fake Store</Link>
      <Link to="/cart" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
        Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
