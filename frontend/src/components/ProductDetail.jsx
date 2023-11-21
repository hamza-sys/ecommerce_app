import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import bag1 from "../photos/bag1.jpg";
import bag2 from "../photos/bag2.jpg";

const products2 = [
  {
    id: 1,
    name: "Bag 1",
    href: "#",
    imageSrc: bag1,
    imageAlt: "Front of men's Basic Tee in black.",
    description: "Front of men's Basic Tee in black.",
    price: "$25",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: bag2,
    imageAlt: "Front of men's Basic Tee in black.",
    description: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  console.log(productId);

  useEffect(() => {
    try {
      const product = products2.find((p) => p.id == productId);
      console.log(productId);
      console.log(product);
      setProduct(product);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleQuanityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuanityDecrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
   
  // Get the existing cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the item is already in the cart
  const existingItemIndex = cart.findIndex((cartItem) => Number(cartItem.id) === Number(product.id));

  if (existingItemIndex !== -1) {
    // If item exists, increment its quantity
    cart[existingItemIndex].quantity += quantity;
  } else {
    // If item doesn't exist, add it to the cart
    cart.push({ ...product, quantity: quantity });
  }

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <button
          className="border border-indigo-500 rounded mx-4 sm:mx-6 lg:mx-3 my-4 px-4 py-1 cursor-pointe hover:bg-indigo-500 hover:text-white transition"
          onClick={handleBackClick}
        >
          back
        </button>

        {product && (
          <div className="grid grid-cols-1 lg:grid-cols-5">

            <div className="px-4 sm:px-6 lg:px-3 lg:col-span-3">
              <div className="overflow-hidden w-full h-full">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* product info */}

            <div className="w-full mt-5 lg:mt-0 h-full px-4 sm:px-6 lg:px-12 lg:col-span-2">
              {/* product name */}
              <div className="mb-3">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              {/* product price */}
              <div className="mb-2">
                <p className="text-xl md:text-3xl font-bold text-gray-900">
                  {product.price}
                </p>
              </div>

              {/* product description */}
              <div className="mb-4">
                <p>{product.description}</p>
              </div>

              {/* product quantity */}
              <div>
                <p className="border border-gray-300 rounded inline-block overflow-hidden">
                  <button onClick={handleQuanityDecrement} className="py-2 px-4 text-xl font-bold cursor-pointer  bg-gray-200">
                    &minus;
                  </button>
                  <span className="py-2 px-4">{quantity}</span>
                  <button
                    onClick={handleQuanityIncrement}
                    className="py-2 px-4 text-xl cursor-pointer font-bold bg-gray-200"
                  >
                    +
                  </button>
                </p>
              </div>

            {/* add to cart button */}
              <button
                onClick={addToCart}
                className="mt-4 flex w-full md:w-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
