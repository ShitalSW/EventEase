import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="about_us.html"
                  className="text-light text-decoration-none"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="help_center.html"
                  className="text-light text-decoration-none"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a href="faq.html" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="contact_us.html"
                  className="text-light text-decoration-none"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="create.html"
                  className="text-light text-decoration-none"
                >
                  Create Event
                </a>
              </li>
              <li>
                <a
                  href="sell_tickets_online.html"
                  className="text-light text-decoration-none"
                >
                  Sell Tickets Online
                </a>
              </li>
              <li>
                <a
                  href="privacy_policy.html"
                  className="text-light text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="term_and_conditions.html"
                  className="text-light text-decoration-none"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            {/* <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a
                  href="https://www.instagram.com/yourinstagramprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-instagram me-2"></i>
                  Instagram
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://wa.me/yourwhatsappnumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://twitter.com/yourtwitterprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none d-flex align-items-center"
                >
                  <i className="bi bi-twitter me-2"></i>
                  Twitter
                </a>
              </li>
            </ul> */}
            <h5>Follow Us</h5>
<ul className="list-unstyled">
  <li className="mb-3">
    <a
      href="https://www.instagram.com/yourinstagramprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-light text-decoration-none d-flex align-items-center"
    >
      <i className="bi bi-instagram me-2"></i>
      Instagram
    </a>
  </li>
  <li className="mb-3">
    <a
      href="https://wa.me/yourwhatsappnumber"
      target="_blank"
      rel="noopener noreferrer"
      className="text-light text-decoration-none d-flex align-items-center"
    >
      <i className="bi bi-whatsapp me-2"></i>
      WhatsApp
    </a>
  </li>
  <li className="mb-3">
    <a
      href="https://twitter.com/yourtwitterprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-light text-decoration-none d-flex align-items-center"
    >
      <i className="bi bi-twitter me-2"></i>
      Twitter
    </a>
  </li>
</ul>

          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">
              © 2024, <strong>EventEase</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
