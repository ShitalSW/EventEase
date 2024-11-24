import "../Styles/UserProfile.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import React, { useState } from "react";

const UserProfile = ({ user }) => {
  const [savedEvents, setSavedEvents] = useState(user.savedEvents);
  const [bookedEvents, setBookedEvents] = useState(user.bookedEvents);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleCancelBooking = (eventIndex) => {
    // Logic to cancel booking (e.g., API call)
    // For now, just remove from the local state
    setBookedEvents((prevEvents) =>
      prevEvents.filter((_, index) => index !== eventIndex)
    );
  };

  const handleRemoveFromSaved = (eventIndex) => {
    // Logic to remove from saved events (e.g., API call)
    // For now, just remove from the local state
    setSavedEvents((prevEvents) =>
      prevEvents.filter((_, index) => index !== eventIndex)
    );
  };

  const handleSaveChanges = () => {
    // Logic to save the changes (e.g., API call)
    console.log("Saved changes:", { firstName, lastName });
  };
  const [userDetails, setUserDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...user, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="user-profile">
          {/* <div className="container mt-4"> */}
          <div className="card" style={{ margin: "70px 0 20px 0" }}>
            <div className="card-header">
              <h4>User Profile</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={userDetails.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    disabled
                  />
                </div>
                <button
                  type="button"
                  className={`btn ${isEditing ? "btn-success" : "btn-primary"}`}
                  onClick={toggleEdit}
                >
                  {isEditing ? "Save" : "Edit"}
                </button>
              </form>
            </div>
            {/* </div> */}
          </div>
          <div className="events-section">
            <h3>Events Booked</h3>
            <ul>
              {bookedEvents.map((event, index) => (
                <li key={index}>
                  <h4>{event.name}</h4>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                  <button onClick={() => handleCancelBooking(index)}>
                    Cancel Booking
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {user.role === "eventOrganizer" && (
            <div className="events-section">
              <h3>Events Created</h3>
              <ul>
                {user.createdEvents.map((event, index) => (
                  <li key={index}>
                    <h4>{event.name}</h4>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="events-section">
            <h3>Saved Events</h3>
            <ul>
              {savedEvents.map((event, index) => (
                <li key={index}>
                  <h4>{event.name}</h4>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                  <button onClick={() => handleRemoveFromSaved(index)}>
                    Remove from Saved
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
