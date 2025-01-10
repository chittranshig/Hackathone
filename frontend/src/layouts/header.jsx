import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice.js";

function Header() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar navbar-expand-lg" style={{ backgroundColor: "#1E3A8A" }}>
        <div className="container-fluid ">
          {/* Brand */}
          <a
            className="navbar-brand fs-1 "
            href="/"
            style={{
              color:"#FBBF24",
              fontWeight: "700",
              fontSize: "30px",
              
              fontFamily: "'DM Serif Text', serif",
            }}
          >
            Lendify
          </a>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-warning text-white">

              {isAuthenticated && user?.role === "Borrower" && (
                <li className="nav-item">
                  <a className="nav-link g" href="/loan-form">
                    Loan Form
                  </a>
                </li>
              )}
           {isAuthenticated && (
              <li className="nav-item">
                <a className="nav-link g" href="/me">
                  Profile
                </a>
              </li>
           )}
            </ul>

            {/* Authentication Buttons */}
            {!isAuthenticated ? (
              <>
              <div className="button w">
                <a
                  href="/sign-up"
                  className="btn signup"
                  role="button"
                >
                  Sign up
                </a>
                <a
                  href="/login"
                  className="btn login "
                  role="button"
                >
                  Login
                </a>
                </div>
              </>
            ) : (
              <button
                className="btn btn-danger font-bold w"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;