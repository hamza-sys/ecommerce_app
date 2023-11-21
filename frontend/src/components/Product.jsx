import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
  return (
    <div className="relative">
      {/* <Link to={`${product.id}`}> */}
        <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative group">
          <div className="absolute w-full h-full rounded-md bg-gray-100 opacity-0 group-hover:opacity-80 transition grid place-items-center">
            <Link to={`${product.id}`} className="bg-violet-900 p-3 text-white">View Detail</Link>
          </div>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-contain object-center lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span className="text-lg font-bold">{product.name}</span>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
       {/* </Link> */}
    </div>
  );
};

export default Product;
