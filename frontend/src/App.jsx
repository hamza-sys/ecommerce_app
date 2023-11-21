import { useEffect, useState } from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import ForgotPassword from "./components/ForgotPassword";
import VerifyOTP from "./components/VerifyOTP";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Welcome from "./pages/Welcome";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./components/Product";
import Layout from "./components/Layout";
import RestPassword from "./components/RestPassword";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import AddProduct from "./pages/AddProduct";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(token);
  }, []);

  return (
    <>
      {/* <Navbar isAuthenticated={isAuthenticated} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Layout>
                <Welcome />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute>
              <Layout>
                <RestPassword />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Layout>
                <Products />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <ProtectedRoute>
              <Layout>
                <ProductDetail />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
            <Route
          path="/add-product"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Layout>
              <ForgotPassword />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
