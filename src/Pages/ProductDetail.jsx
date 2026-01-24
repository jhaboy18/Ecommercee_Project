import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../Context/data";
import Products from "../Components/Products";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate=useNavigate()
  const { id } = useParams();

  const product = items.find((p) => p.title == id);

  if (!product) {
    return (
      <div className="text-center text-white mt-10">
        Product not found
      </div>
    );
  }

  const relatedProducts = items.filter(
    (p) =>
      p.category.toLowerCase() === product.category.toLowerCase() &&
      p.id !== product.id
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900 p-6 rounded-xl shadow-lg">
        
        {/* Image */}
        <div className="flex justify-center items-center bg-gray-800 rounded-lg p-4">
          <img
            src={product.imgSrc}
            alt={product.title}
            className="max-h-[350px] object-contain"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-yellow-400 text-2xl font-semibold">
            ₹ {product.price}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {product.description || "High quality product with best performance."}
          </p>

          <button className="mt-4 bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-14 mb-6">
            Related Products
          </h2>

          <Products prdct={relatedProducts} />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
