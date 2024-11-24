import React from "react";

import "../Styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar fixed-top justify-content-sm-start pt-0 pb-0">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe_5">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Explore Events
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <a className="dropdown-item"  onClick={() => {
                    navigate("/exploreevents");
                  }}>
                  Explore Events
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="venue_event_detail_view.html"
                >
                  Venue Event Detail View
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="online_event_detail_view.html"
                >
                  Online Event Detail View
                </a>
              </li>
            </ul>
          </li>
          <div>
          <li>
           <button onClick={() => {
                    navigate("/createevent");
                  }}>Create Events</button>
              
            
           
           </li>
          </div>
           
           
                
                
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Help
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <a className="dropdown-item"  onClick={() => {
                    navigate("/FAQ");
                  }} >
                  FAQ
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="help_center.html">
                  Help Center
                </a>
              </li>
              <li>
                <a className="dropdown-item"  onClick={() => {
                    navigate("/About");
                  }}>
                  About Us
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <img src="../Images/img-1.jpg" /> */}
              {/* <a className="dropdown-item" href="contact_us.html">
                My Name
              </a> */}
              My Name
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/userprofile");
                  }}
                >
                  {" "}
                  My Profile
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign Out{" "}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
// export function loadHeader() {
//     document.getElementById('header').innerHTML = Header;
// }
