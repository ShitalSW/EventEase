/*import React, { useState } from "react";
import logo from "../Images/eventlogo.png";
import "../Styles/SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/home");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="app-form">
        <div className="app-form-sidebar">
          <div className="sidebar-sign-logo">
            <img src={logo} alt="Sign Logo" />
          </div>
          <div className="sign_sidebar_text">
            <h1>
              The Easiest Way to Create Events and Sell More Tickets Online
            </h1>
          </div>
        </div>
        <div className="app-form-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-10">
                <div className="app-top-items">
                  <a href="index.html">
                    <div className="sign-logo" id="logo">
                      <img src="images/logo.svg" alt="" />
                      <img
                        className="logo-inverse"
                        src="images/dark-logo.svg"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="registration">
                  <form>
                    <h2 className="registration-title">Sign in to EventEase</h2>
                    <div className="form-group mt-1">
                      <label className="form-label">Your Email*</label>
                      <input
                        className={`form-control h_50 ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group mt-1">
                      <div className="field-password">
                        <label className="form-label">Password*</label>
                        <a className="forgot-pass-link" href="ForgotPassword">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="loc-group position-relative">
                        <input
                          className={`form-control h_50 ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="pass-show-eye">
                          <i className="fas fa-eye-slash"></i>
                        </span>
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      className="main-btn btn-hover w-100 mt-1"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Sign In <i className="fas fa-sign-in-alt ms-2"></i>
                    </button>
                  </form>
                  
                  
                  <div className="new-sign-link">
                    New to EventEase?
                    <a className="signup-link" href="/signup">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;*/

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../Images/eventlogo.png";
import "../Styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/users/signin", {
          email,
          password,
        });

        if (response.status === 200) {
          const { jwt, role, id } = response.data;
          sessionStorage.setItem("jwt", jwt);
          sessionStorage.setItem("role", role);
          sessionStorage.setItem("userId", id);

          if (role === "USER") {
            navigate("/home");
          } else if (role === "ADMIN") {
            navigate("/admin");
          }
        }
      } catch (error) {
        console.error("Login failed", error);
        setApiError("Invalid email or password. Please try again.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="app-form">
        <div className="app-form-sidebar">
          <div className="sidebar-sign-logo">
            <img src={logo} alt="Sign Logo" />
          </div>
          <div className="sign_sidebar_text">
            <h1>The Easiest Way to Create Events and Sell More Tickets Online</h1>
          </div>
        </div>
        <div className="app-form-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-10">
                <div className="app-top-items">
                  <a href="/">
                    <div className="sign-logo" id="logo">
                      <img src="images/logo.svg" alt="" />
                      <img className="logo-inverse" src="images/dark-logo.svg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="registration">
                  <form>
                    <h2 className="registration-title">Sign in to EventEase</h2>
                    <div className="form-group mt-1">
                      <label className="form-label">Your Email*</label>
                      <input
                        className={`form-control h_50 ${errors.email ? "is-invalid" : ""}`}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group mt-1">
                      <div className="field-password">
                        <label className="form-label">Password*</label>
                        <a className="forgot-pass-link" href="ForgotPassword">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="loc-group position-relative">
                        <input
                          className={`form-control h_50 ${errors.password ? "is-invalid" : ""}`}
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="pass-show-eye">
                          <i className="fas fa-eye-slash"></i>
                        </span>
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </div>
                    </div>
                    {apiError && (
                      <div className="alert alert-danger mt-2" role="alert">
                        {apiError}
                      </div>
                    )}
                    <button
                      className="main-btn btn-hover w-100 mt-1"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Sign In <i className="fas fa-sign-in-alt ms-2"></i>
                    </button>
                  </form>

                  <div className="new-sign-link">
                    New to EventEase?
                    <a className="signup-link" href="/signup">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

