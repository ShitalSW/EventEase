import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import "../Styles/HomePage.css"; // Ensure this CSS file exists
import Card from "../Components/card copy.js";
import CardData from "./card.json";
import Header from "./Header.js";
import Footer from "./Footer.js";
//images
import logo from "../Images/concert.jpg";

const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="hero-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-10">
                <div className="hero-banner-content ">
                  <h2>
                    The Easiest and Most Powerful Online Event Booking and
                    Ticketing System
                  </h2>
                  <p>
                    EventEase is an all-in-one event ticketing platform for
                    event organisers, promoters, and managers. Easily create,
                    promote and manage your events of any type and size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-events p-80">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="event-filter-items">
                  <div className="featured-controls">
                    <div className="controls">
                     <button
                        type="button"
                        className="control"
                        data-filter=".free"
                      >
                        All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                {CardData.map((service, index) => (
                  <Card
                    key={index}
                    // image1={service.image1}
                    image1={logo}
                    servicename={service.servicename}
                    rating={service.rating}
                    location={service.location}
                    price={service.price}
                    // onAddToWishlist={addToWishlist}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CustomInput = ({ value, onClick, showDatePicker, setShowDatePicker }) => (
  <div className="custom-input" onClick={onClick}>
    <input type="text" value={value} readOnly placeholder="Select Date" />
    <FaCalendarAlt className="calendar-icon" />
  </div>
);

export default HomePage;
