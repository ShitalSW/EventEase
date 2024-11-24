import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import "../Styles/HomePage.css"; // Ensure this CSS file exists
import Card from "../Components/card copy.js";
//import CardData from "./card.json";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useEffect } from "react";
//images
import logo from "../Images/concert.jpg";

const ExploreEvents = () => {
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8080/events", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            "User-ID": sessionStorage.getItem("id"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      <div className="wrapper">
        
        <div className="explore-events p-80">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="main-title">
                  <h3>Explore Events</h3>
                  <div className="date-picker-container">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="d MMM yyyy"
                      customInput={
                        <CustomInput
                          showDatePicker={showDatePicker}
                          setShowDatePicker={setShowDatePicker}
                        />
                      }
                      onClickOutside={() => setShowDatePicker(false)}
                      onCalendarOpen={() => setShowDatePicker(true)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="event-filter-items">
                  <div className="featured-controls">
                    <div className="controls">
                      <button
                        type="button"
                        className="control"
                        data-filter="all"
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".arts"
                      >
                        Arts
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".business"
                      >
                        Business
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".concert"
                      >
                        Concert
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".workshops"
                      >
                        Workshops
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".coaching_consulting"
                      >
                        Coaching and Consulting
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".health_Wellness"
                      >
                        Health and Wellbeing
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".sports"
                      >
                        Sports
                      </button>
                      <button
                        type="button"
                        className="control"
                        data-filter=".free"
                      >
                        Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                {events.map((event, index) => (
                  <Card
                    key={event.id}
                    id={event.id}
                    // image1={service.image1}
                    image1={logo}
                    eventname={event.name}
                    //rating={service.rating}
                    location={event.location}
                    price={event.price}
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

export default ExploreEvents;
