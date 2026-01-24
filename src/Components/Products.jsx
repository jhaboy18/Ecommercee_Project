import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ShopBycateogry from "./ShopBycateogry";
import Datacontext from "../Context/DataContext";
import { ToastContainer } from "react-toastify";

const Products = ({ prdct }) => {
  const { addTocart } = useContext(Datacontext);
  const { pathname } = useLocation();

  return (
    <div className="max-w-[1400px] mx-auto my-14 px-4">
      <ToastContainer />
      {pathname === "/" && <ShopBycateogry />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {prdct &&
          prdct.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <Link
                to={`/product/${item.title}`}
                className="bg-[#1a1a1a] h-64 flex items-center justify-center p-6"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className="text-lg font-semibold text-center leading-snug">
                  {item.title}
                </h2>

                <p className="text-yellow-400 text-xl font-bold text-center">
                  ₹ {item.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    addTocart(item.id, item.title, item.price, item.imgSrc);
                  }}
                  className="mt-auto w-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition rounded-lg py-2 flex items-center justify-center gap-2 font-medium"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
