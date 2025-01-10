import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice.js";
import { useNavigate } from "react-router-dom";

function Header() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>   
      <div className="navbar navbar-expand-lg" style={{ backgroundColor: "#1E3A8A" }}>
        <div className="container-fluid ">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

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
                  className=" login btn"
                  role="button"
                >
                  Login
                </a>
                </div>
              </>
            ) : (
              <button
                className="btn btn-danger font-bold "
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