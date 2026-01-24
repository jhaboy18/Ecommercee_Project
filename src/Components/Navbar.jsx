import React, { useState, useContext } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaTimes, FaStore } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Datacontext from "../Context/DataContext"; // ✅ Import your context

const Navbar = () => {
  const navigate = useNavigate();
  const [searchterm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const { Cart } = useContext(Datacontext); // ✅ Get cart from context
  const categories = ["Mobiles", "Laptops", "Tablets", "Watches"];

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchterm}`);
    setSearchTerm('');
  };

  return (
    <nav className="bg-gray-900/50 text-white sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap lg:flex-nowrap items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <FaStore className="text-info text-2xl text-blue-400" />
          <span className="text-2xl font-bold tracking-wide" style={{ textDecoration: 'none' }}>ECommercee</span>
        </Link>

        {/* Desktop Search */}
        <form className="hidden lg:flex flex-1 max-w-xl mx-4" onSubmit={handlesubmit}>
          <input
            value={searchterm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search Products"
            className="flex-1 px-3 py-2 border border-gray-600 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400
            bg-gray-600 placeholder:text-black"
          />
          <button className="bg-blue-500 text-gray-900 font-semibold px-4 py-2 rounded-r-md hover:bg-yellow-400 transition">
            <FaSearch />
          </button>
        </form>

        {/* Desktop Categories */}
        <ul className="hidden lg:flex items-center gap-6">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/product/category/${cat}`}
                className="no-underline hover:text-yellow-400 transition font-medium"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger + Cart */}
        <div className="flex lg:hidden items-center gap-3 ms-auto">
          <button className="text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Cart */}
          <Link
            to="/cart"
            className="relative bg-blue-500 px-3 py-2 rounded-md flex items-center text-gray-900 font-semibold"
          >
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full">
              {Cart.length} {/* ✅ Dynamic number */}
            </span>
          </Link>
        </div>

        {/* Desktop Cart */}
        <Link
          to="/cart"
          className="hidden lg:flex relative bg-yellow-500 px-3 py-2 rounded-md items-center text-gray-900 font-semibold"
        >
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full">
            {Cart.length} {/* ✅ Dynamic number */}
          </span>
        </Link>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden w-full mt-3 px-2 pb-4 space-y-3 bg-gray-800 rounded-md">
            {/* Mobile Search */}
            <form className="flex w-full" onSubmit={handlesubmit}>
              <input
                value={searchterm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Search Products"
                className="flex-1 px-3 py-2 border border-gray-600 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400
                bg-gray-700/60 placeholder:text-black"
              />
              <button className="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-r-md hover:bg-yellow-400 transition">
                <FaSearch />
              </button>
            </form>

            {/* Mobile Categories */}
            <ul className="flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/product/category/${cat}`}
                    className="block px-3 py-2 rounded-md hover:bg-gray-700 no-underline transition text-black font-bold"
                    onClick={() => setOpen(false)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
