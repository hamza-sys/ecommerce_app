import React, { useState } from "react";

import bag1 from "../photos/bag1.jpg";
import bag2 from "../photos/bag2.jpg";

const cart = [
  {
    id: 1,
    name: "Bag 1",
    href: "#",
    imageSrc: bag1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: bag2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const Cart = () => {
  const [item, setItem] = useState({
    id: 1,
    name: "Bag 1",
    href: "#",
    imageSrc: bag1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  });

  return (
    <div className="px-4 sm:px-12 max-w-[1440px] mx-auto">
      <div className="my-12">
        {/* cart heading */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold">Shopping Cart</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="col-span-1 lg:col-span-3">
            {/* cart and order detail */}
            <div className="mt-6">
              {/* cart items */}
              <div>

                <div className=" mb-2 h-36 grid grid-cols-12 border border-gray-200 rounded overflow-hidden">
                  {/* cart image */}
                  <div className="h-full col-span-4 sm:col-span-3 overflow-hidden">
                    <img
                      src={item.imageSrc}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* cart detail */}
                  <div className="p-3 col-span-7 sm:col-span-8 grid grid-cols-1 sm:grid-cols-2">
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>

                    <div className="text-left sm:text-right">
                      <select className="p-1 border border-gray-300 rounded outline-none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>

                    <div className="flex items-end">
                      <span>In Stock</span>
                    </div>
                  </div>

                  {/* cart remove button */}
                  <div className="text-center p-3">
                    <button className="text-right">x</button>
                  </div>

                </div>

                  <div className="h-36 grid grid-cols-12 border border-gray-200 rounded overflow-hidden">
                  {/* cart image */}
                  <div className="h-full col-span-4 sm:col-span-3 overflow-hidden">
                    <img
                      src={item.imageSrc}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* cart detail */}
                  <div className="p-3 col-span-7 sm:col-span-8 grid grid-cols-1 sm:grid-cols-2">
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>

                    <div className="text-left sm:text-right">
                      <select className="p-1 border border-gray-300 rounded outline-none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>

                    <div className="flex items-end">
                      <span>In Stock</span>
                    </div>
                  </div>

                  {/* cart remove button */}
                  <div className="text-center p-3">
                    <button className="text-right">x</button>
                  </div>

                </div>


              </div>
            </div>
          </div>

          {/* order summary */}
          <div className="p-5 col-span-1 lg:col-span-2 mt-6 w-full h-[270px] bg-gray-100 rounded">
            <div>
              <h1 className="text-xl font-bold">Order summary</h1>
              <div className="flex justify-between py-3 border-b-red-900">
                <span className="text-gray-600">Subtotal</span>
                <span>$99.00</span>
              </div>
              <div className="flex justify-between py-3 border-b-red-900">
                <span className="text-gray-600">Shipping estimate</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between py-3 border-b-red-900">
                <span className="font-bold text-lg">Order total</span>
                <span className="font-bold">$100.00</span>
              </div>

              <div className="mt-2 w-full">
                <button className="block w-full p-3 bg-indigo-600 text-white rounded">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
