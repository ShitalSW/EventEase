import React from 'react';
import logo from '../Images/eventlogo.png';
import '../Styles/ForgotP.css'; // Import the CSS file for this component

const ForgotPassword = () => {
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
                  <a href="index.html">
                    <div className="sign-logo" id="logo">
                      <img src="images/logo.svg" alt="Logo" />
                      <img className="logo-inverse" src="images/dark-logo.svg" alt="Dark Logo" />
                    </div>
                  </a>
                  {/* <div className="app-top-right-link">
                    <a className="sidebar-register-link" href="/login">
                      <i className="fa-regular fa-circle-left me-2"></i>Back to sign in
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="registration">
                  <form>
                    <h2 className="registration-title">Forgot Password</h2>
                    <div className="form-group mt-5">
                      <label className="form-label">Your Email*</label>
                      <input
                        className="form-control h_50"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button className="main-btn btn-hover w-100 mt-4" type="submit">
                      Reset Password
                    </button>
                  </form>
                  <div className="new-sign-link">
                    <a className="signup-link" href="/login">
                      <i className="fa-regular fa-circle-left me-2"></i>Back to sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-footer">
            © 2024, EventEase.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
