import React, { useContext } from "react";
import Datacontext from "../Context/DataContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { Cart, setCart } = useContext(Datacontext);

  const removeFromCart = (id) => {
    const updatedCart = Cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const totalPrice = Cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-[1200px] mx-auto my-14 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Your Cart</h1>
      {Cart.length === 0 ? (
        <p className="text-center text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {Cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#111] text-white p-4 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imgsrc}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-yellow-400 font-bold">₹ {item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition text-xl"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="text-right text-white mt-4 text-xl font-semibold">
            Total: ₹ {totalPrice} Rs
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
