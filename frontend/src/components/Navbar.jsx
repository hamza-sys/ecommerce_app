import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  
  return (
    <div className="flex justify-between items-center px-3 w-full z-10">
      <div>
        <Link to="/">logo</Link>
      </div>
      <ul className="flex">
      {!isAuthenticated && (
      <>
        <li className="mx-1 p-2 px-5 cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
        <li className="mx-1 p-2 px-5 cursor-pointer">
          <Link to="/register">Register</Link>
        </li>
        </>
        )
        }
        {isAuthenticated && (
          <>
            <li className="mx-1 p-2 px-5 cursor-pointer border border-red-500 text-red-500">
              <Link className="bg-red-400" to="/products">Products</Link>
            </li>
            <li className="mx-1 p-2 px-5 cursor-pointer border border-red-500 text-red-500">
              <Link className="bg-red-400" to="/cart">Cart</Link>
            </li>
             <li className="mx-1 p-2 px-5 cursor-pointer border border-red-500 text-red-500">
              <Link className="bg-red-400" to="/cart">Cart</Link>
            </li>
            <li className="mx-1 p-2 px-5 cursor-pointer">
              <Link to="/products">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
