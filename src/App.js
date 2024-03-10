import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Product from "./components/Product";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="login" element={<Login />} />
            {isLoggedIn && <Route path="payment" element={<Payment />} />}
            {isLoggedIn && <Route path="product" element={<Product />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
