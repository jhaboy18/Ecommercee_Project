import React, { useContext, useState } from "react";
import Datacontext from "../Context/DataContext";
import { items } from "../Context/data";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaThLarge,
  FaRupeeSign
} from "react-icons/fa";

const categories = [
  { name: "ALL Products", icon: <FaThLarge /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Tablets", icon: <FaTabletAlt /> },
  { name: "Watches", icon: <FaClock /> },
];

const pricerange = [30000, 40000, 50000, 60000, 70000, 80000];

const ShopBycateogry = () => {
  const { setProducts } = useContext(Datacontext);
  const [selectedPrice, setSelectedPrice] = useState(80000);

  const filterbycategorry = (cat) => {
    if (cat === "ALL Products") {
      setProducts(items);
      return;
    }
    setProducts(
      items.filter((product) => product.category.toLowerCase() === cat.toLowerCase())
    );
  };

  const filterbyprice = (price) => {
    setSelectedPrice(price);
    setProducts(items.filter((product) => product.price <= price));
  };

  return (
    <div className="bg-gray-900 m-4 p-5 rounded-xl text-white shadow-lg">

      {/* Heading */}
      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 tracking-wide">
        Filter Products
      </h3>

      {/* Category Section */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
              bg-amber-300 text-black font-semibold
              cursor-pointer hover:bg-amber-400
              transition-all duration-300 shadow-md
              flex-shrink-0"
            onClick={() => filterbycategorry(item.name)}
          >
            {item.icon}
            <span className="text-sm sm:text-base">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mt-4">
        <h4 className="text-center text-sm sm:text-base text-gray-300 mb-3">
          Filter by Price
        </h4>

        <div className="flex justify-center flex-wrap gap-3">
          {pricerange.map((price, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 px-4 py-2 rounded-full
                border transition-all duration-300 cursor-pointer
                flex-shrink-0
                ${selectedPrice === price
                  ? "bg-amber-400 text-black border-amber-400 shadow-lg"
                  : "bg-gray-800 border-gray-600 hover:bg-amber-400 hover:text-black hover:shadow-amber-500/40"}`}
              onClick={() => filterbyprice(price)}
            >
              <FaRupeeSign className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base font-medium">
                Under {price}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ShopBycateogry;
