// src/components/Layout.js
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../App.css";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="Layout">
        <div className="header">
          <div>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <button>About</button>
            </Link>
          </div>
          <div>
            <Link to="/contactus">
              <button>ContactUs</button>
            </Link>
          </div>
          {!localStorage.getItem("token") ? (
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          ) : (
            <>
              <div>
                <Link to="/payment">
                  <button>Payment</button>
                </Link>
              </div>
              <div>
                <Link to="/product">
                  <button>Product</button>
                </Link>
              </div>
              <div>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
