import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers.js/authReducer";

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  useEffect(() => {
    setIsAuthenticated(token);
  });

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem('token')
      dispatch(logout())
      navigate('/')
    }, 1000)
  }

  return (
    <>
      <div className="flex justify-between items-center px-3 w-full z-10 py-2 bg-gray-100">
        <div>
          <Link to="/">logo</Link>
        </div>
        <ul className="flex">
          {!isAuthenticated && (
            <>
              <li className="mx-1 p-2 px-5 cursor-pointer">
                <NavLink
                  to="/login" style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "indigo" : "",
                  })}
                >
                  Login
                </NavLink>
              </li>
              <li
                className="mx-1 p-2 px-5 cursor-pointer"
              >
                <NavLink to="/register" style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "indigo" : "",
                })}>Register</NavLink>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li className="mx-1 p-2 px-5 cursor-pointer rounded">
                <NavLink
                  to="/products"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "indigo" : "",
                  })}
                >
                  Products
                </NavLink>
              </li>
                  <li className="mx-1 p-2 px-5 cursor-pointer rounded">
                <NavLink
                  to="/cart"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "indigo" : "",
                  })}
                >
                  Cart
                </NavLink>
              </li>
               <li className="mx-1 p-2 px-5 cursor-pointer rounded">
                <NavLink
                  to="/orders"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "indigo" : "",
                  })}
                >
                  Your orders
                </NavLink>
              </li>
              <li className="mx-1 p-2 px-5 cursor-pointer rounded">
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {children}
    </>
  );
};

export default Layout;
