/*import React, { useState } from "react";
import "../Styles/SignUp.css";
import logo from "../Images/eventlogo.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      // Submit form or perform further actions here
    } else {
      setIsSubmitted(false);
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
                      <img src={logo} alt="Logo" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="registration">
                  <form onSubmit={handleSubmit}>
                    <h2 className="registration-title">Sign up to EventEase</h2>
                    <div className="row mt-3">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-1">
                          <label className="form-label">First Name*</label>
                          <input
                            className={`form-control h_50 ${
                              formErrors.firstName ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                          />
                          {formErrors.firstName && (
                            <div className="invalid-feedback">
                              {formErrors.firstName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-1">
                          <label className="form-label">Last Name*</label>
                          <input
                            className={`form-control h_50 ${
                              formErrors.lastName ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                          />
                          {formErrors.lastName && (
                            <div className="invalid-feedback">
                              {formErrors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-1">
                          <label className="form-label">Your Email*</label>
                          <input
                            className={`form-control h_50 ${
                              formErrors.email ? "is-invalid" : ""
                            }`}
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">
                              {formErrors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-1">
                          <div className="field-password">
                            <label className="form-label">Password*</label>
                          </div>
                          <div className="loc-group position-relative">
                            <input
                              className={`form-control h_50 ${
                                formErrors.password ? "is-invalid" : ""
                              }`}
                              type="password"
                              name="password"
                              value={formValues.password}
                              onChange={handleChange}
                            />
                            <span className="pass-show-eye">
                              <i className="fas fa-eye-slash"></i>
                            </span>
                            {formErrors.password && (
                              <div className="invalid-feedback">
                                {formErrors.password}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button
                          className="main-btn btn-hover w-100 mt-1"
                          type="submit"
                          onClick={() => {
                            navigate("/login");
                          }}>
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="new-sign-link">
                    Already have an account?
                    <a className="signup-link" href="{`\login`}">
                      Log In
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
}

export default SignUp;
*/

import React, { useState } from "react";
import axios from "axios";  // Import Axios
import "../Styles/SignUp.css";
import logo from "../Images/eventlogo.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      
      // Send a POST request to the backend API
      axios.post("http://localhost:8080/users/register", formValues)
        .then((response) => {
          console.log(response.data);
          if (response.status === 201) {
            alert('Successfully registered! please continue with login');
            navigate('/login');
          }
        })
        .catch((error) => {
          console.error("There was an error registering the user!", error);
        });
    } else {
      setIsSubmitted(false);
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
                      <img src={logo} alt="Logo" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="registration">
                  <form onSubmit={handleSubmit}>
                    <h2 className="registration-title">Sign up to EventEase</h2>
                    <div className="row mt-3">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-1">
                          <label className="form-label">First Name*</label>
                          <input
                            className={`form-control h_50 ${
                              formErrors.firstName ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                          />
                          {formErrors.firstName && (
                            <div className="invalid-feedback">
                              {formErrors.firstName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-1">
                          <label className="form-label">Last Name*</label>
                          <input
                            className={`form-control h_50 ${
                              formErrors.lastName ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                          />
                          {formErrors.lastName && (
                            <div className="invalid-feedback">
                              {formErrors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-1">
                          <label className="form-label">Your Email*</label>
                          <input
                            className={`form-control h_50 ${
                              formErrors.email ? "is-invalid" : ""
                            }`}
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">
                              {formErrors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-1">
                          <div className="field-password">
                            <label className="form-label">Password*</label>
                          </div>
                          <div className="loc-group position-relative">
                            <input
                              className={`form-control h_50 ${
                                formErrors.password ? "is-invalid" : ""
                              }`}
                              type="password"
                              name="password"
                              value={formValues.password}
                              onChange={handleChange}
                            />
                            <span className="pass-show-eye">
                              <i className="fas fa-eye-slash"></i>
                            </span>
                            {formErrors.password && (
                              <div className="invalid-feedback">
                                {formErrors.password}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button
                          className="main-btn btn-hover w-100 mt-1"
                          type="submit">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="new-sign-link">
                    Already have an account?
                    <a className="signup-link" href="/login">
                      Log In
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
}

export default SignUp;

