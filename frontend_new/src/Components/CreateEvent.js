  /* import "../Styles/EventCreate.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";

const CreateEventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [eventBanner, setEventBanner] = useState(null);
  const [eventDescription, setEventDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventTickets, setEventTickets] = useState("");

  // States for validation
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

  const handleFileChange = (e) => {
    setEventBanner(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    const { options } = e.target;
    const selectedCategories = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCategories.push(options[i].value);
      }
    }
    setEventCategory(selectedCategories);
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!eventName) {
      errors.eventName = "Event name is required.";
      isValid = false;
    }

    if (eventCategory.length === 0) {
      errors.eventCategory = "At least one category must be selected.";
      isValid = false;
    }

    if (!eventDate) {
      errors.eventDate = "Event date is required.";
      isValid = false;
    }

    if (!eventTime) {
      errors.eventTime = "Event time is required.";
      isValid = false;
    }

    if (!eventDuration) {
      errors.eventDuration = "Event duration is required.";
      isValid = false;
    }

    if (!eventBanner) {
      errors.eventBanner = "Event banner is required.";
      isValid = false;
    }

    if (!eventDescription) {
      errors.eventDescription = "Event description is required.";
      isValid = false;
    }

    if (!eventType) {
      errors.eventType = "Event type is required.";
      isValid = false;
    }

    if (!eventPrice) {
      errors.eventPrice = "Event price is required.";
      isValid = false;
    }

    if (!eventTickets) {
      errors.eventTickets = "Number of tickets is required.";
      isValid = false;
    }

    setFormErrors(errors);
    setIsFormValid(isValid);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted!");
    }
  };

  return (
    <div>
      <Header />
      <div>
        {/* <div className="container mt-5"> }
        <div>
          <div
            className="row justify-content-center"
            style={{ margin: "70px 0" }}
          >
            <div className="col-lg-8">
              <h1 className="text-center mb-4">Create Event</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="eventName" className="form-label">
                    <b>Give your event a name*</b>
                  </label>
                  <input
                    id="eventName"
                    className={`form-control ${
                      formErrors.eventName ? "is-invalid" : ""
                    }`}
                    type="text"
                    placeholder="Enter event name here"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                  {formErrors.eventName && (
                    <div className="invalid-feedback">
                      {formErrors.eventName}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventCategory" className="form-label">
                    <b>Choose a category for your event*</b>
                  </label>
                  <select
                    id="eventCategory"
                    className={`form-select ${
                      formErrors.eventCategory ? "is-invalid" : ""
                    }`}
                    multiple
                    value={eventCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="01">Arts</option>
                    <option value="02">Business</option>
                    <option value="03">Coaching and Consulting</option>
                    <option value="04">Community and Culture</option>
                    <option value="05">Entrepreneurship</option>
                    <option value="06">Education and Training</option>
                    <option value="07">Family and Friends</option>
                    <option value="08">Fashion and Beauty</option>
                    <option value="09">Film and Entertainment</option>
                    <option value="10">Food and Drink</option>
                    <option value="11">Government and Politics</option>
                    <option value="12">Health and Wellbeing</option>
                    <option value="13">Hobbies and Interest</option>
                    <option value="14">Music and Theater</option>
                    <option value="15">Religion and Spirituality</option>
                    <option value="16">Science and Technology</option>
                    <option value="17">Sports and Fitness</option>
                    <option value="18">Travel and Outdoor</option>
                    <option value="19">Visual Arts</option>
                    <option value="20">Others</option>
                  </select>
                  {formErrors.eventCategory && (
                    <div className="invalid-feedback">
                      {formErrors.eventCategory}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventDate" className="form-label">
                    <b>When is your event?*</b>
                  </label>
                  <input
                    id="eventDate"
                    className={`form-control ${
                      formErrors.eventDate ? "is-invalid" : ""
                    }`}
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                  {formErrors.eventDate && (
                    <div className="invalid-feedback">
                      {formErrors.eventDate}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventTime" className="form-label">
                    <b>Time*</b>
                  </label>
                  <input
                    id="eventTime"
                    className={`form-control ${
                      formErrors.eventTime ? "is-invalid" : ""
                    }`}
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                  {formErrors.eventTime && (
                    <div className="invalid-feedback">
                      {formErrors.eventTime}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventDuration" className="form-label">
                    <b>Duration*</b>
                  </label>
                  <input
                    id="eventDuration"
                    className={`form-control ${
                      formErrors.eventDuration ? "is-invalid" : ""
                    }`}
                    type="text"
                    placeholder="HH:MM"
                    value={eventDuration}
                    onChange={(e) => setEventDuration(e.target.value)}
                  />
                  {formErrors.eventDuration && (
                    <div className="invalid-feedback">
                      {formErrors.eventDuration}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventBanner" className="form-label">
                    <b>Add a banner image*</b>
                  </label>
                  <input
                    id="eventBanner"
                    className={`form-control ${
                      formErrors.eventBanner ? "is-invalid" : ""
                    }`}
                    type="file"
                    onChange={handleFileChange}
                  />
                  {formErrors.eventBanner && (
                    <div className="invalid-feedback">
                      {formErrors.eventBanner}
                    </div>
                  )}
                  {eventBanner && (
                    <div className="mt-2">
                      <strong>Selected file: </strong>
                      {eventBanner.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventDescription" className="form-label">
                    <b>Describe your event*</b>
                  </label>
                  <textarea
                    id="eventDescription"
                    className={`form-control ${
                      formErrors.eventDescription ? "is-invalid" : ""
                    }`}
                    rows="5"
                    placeholder="Enter event description here"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                  />
                  {formErrors.eventDescription && (
                    <div className="invalid-feedback">
                      {formErrors.eventDescription}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventType" className="form-label">
                    <b>Event type*</b>
                  </label>
                  <select
                    id="eventType"
                    className={`form-select ${
                      formErrors.eventType ? "is-invalid" : ""
                    }`}
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="">Select event type</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-person</option>
                  </select>
                  {formErrors.eventType && (
                    <div className="invalid-feedback">
                      {formErrors.eventType}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventPrice" className="form-label">
                    <b>Event Price*</b>
                  </label>
                  <input
                    id="eventPrice"
                    className={`form-control ${
                      formErrors.eventPrice ? "is-invalid" : ""
                    }`}
                    type="text"
                    value={eventPrice}
                    onChange={(e) => setEventPrice(e.target.value)}
                  />
                  {formErrors.eventPrice && (
                    <div className="invalid-feedback">
                      {formErrors.eventPrice}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="eventTickets" className="form-label">
                    <b>Number of tickets available*</b>
                  </label>
                  <input
                    id="eventTickets"
                    className={`form-control ${
                      formErrors.eventTickets ? "is-invalid" : ""
                    }`}
                    type="text"
                    value={eventTickets}
                    onChange={(e) => setEventTickets(e.target.value)}
                  />
                  {formErrors.eventTickets && (
                    <div className="invalid-feedback">
                      {formErrors.eventTickets}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-success w-100">
                    <i className="fa-solid fa-circle-check me-2"></i> Save and
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default CreateEventForm;  */
import "../Styles/EventCreate.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const CreateEventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState([]);
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDuration, setEventDuration] = useState("");
 // const [eventBanner, setEventBanner] = useState();
  const [eventDescription, setEventDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventTickets, setEventTickets] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

  // const handleFileChange = (e) => {
  //   setEventBanner(e.target.files[0]);
  // };

  const handleCategoryChange = (e) => {
    const { options } = e.target;
    const selectedCategories = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCategories.push(options[i].value);
      }
    }
    setEventCategory(selectedCategories);
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!eventName) {
      errors.eventName = "Event name is required.";
      isValid = false;
    }
    if (eventCategory.length === 0) {
      errors.eventCategory = "At least one category must be selected.";
      isValid = false;
    }
    if (!eventLocation) {
      errors.eventLocation = "Event location is required.";
      isValid = false;
    }
    if (!eventDate) {
      errors.eventDate = "Event date is required.";
      isValid = false;
    }
    if (!eventTime) {
      errors.eventTime = "Event time is required.";
      isValid = false;
    }
    if (!eventDuration) {
      errors.eventDuration = "Event duration is required.";
      isValid = false;
    }
    // if (!eventBanner) {
    //   errors.eventBanner = "Event banner is required.";
    //   isValid = false;
    // }
    if (!eventDescription) {
      errors.eventDescription = "Event description is required.";
      isValid = false;
    }
    if (!eventType) {
      errors.eventType = "Event type is required.";
      isValid = false;
    }
    if (!eventPrice) {
      errors.eventPrice = "Event price is required.";
      isValid = false;
    }
    if (!eventTickets) {
      errors.eventTickets = "Number of tickets is required.";
      isValid = false;
    }

    setFormErrors(errors);
    setIsFormValid(isValid);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const eventData = new FormData();
      eventData.append("eventDTO", new Blob([JSON.stringify({
          name: eventName,
          category: eventCategory,
          location: eventLocation,
          date: eventDate,
          time: eventTime,
          duration: eventDuration,
          description: eventDescription,
          type: eventType,
          price: eventPrice,
          tickets: eventTickets,
      })], { type: "application/json" }));
      //eventData.append("banner", eventBanner);
      const jwtToken = sessionStorage.getItem("jwt");
      const userId = sessionStorage.getItem("id");

      try {
        const response = await fetch("http://localhost:8080/events", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "User-ID": userId,
          },
          body: eventData,
        });

        if (response.ok) {
          alert("Event created successfully!");
      } else {
          console.error("Error creating event.");
          alert("Failed to create event. Please try again.");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the event. Please try again.");
  }
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="row justify-content-center" style={{ margin: "70px 0" }}>
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Create Event</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="eventName" className="form-label">
                  <b>Give your event a name*</b>
                </label>
                <input
                  id="eventName"
                  className={`form-control ${formErrors.eventName ? "is-invalid" : ""}`}
                  type="text"
                  placeholder="Enter event name here"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
                {formErrors.eventName && (
                  <div className="invalid-feedback">{formErrors.eventName}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventCategory" className="form-label">
                  <b>Choose a category for your event*</b>
                </label>
                <select
                  id="eventCategory"
                  className={`form-select ${formErrors.eventCategory ? "is-invalid" : ""}`}
                  multiple
                  value={eventCategory}
                  onChange={handleCategoryChange}
                >
                  {/* Add your categories here */}
                  <option value="Music">Music</option>
                  <option value="Art">Art</option>
                  <option value="Technology">Technology</option>
                  <option value="Sports">Sports</option>
                 
                    <option value="Business">Business</option>
                    <option value="Coaching and Consulting">Coaching and Consulting</option>
                    
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Education and Training">Education and Training</option>
                   
                    <option value="Fashion and Beauty">Fashion and Beauty</option>
                   
                    <option value="Government and Politics">Government and Politics</option>
                    <option value="Health and Wellbeing">Health and Wellbeing</option>
                    <option value="Hobbies and Interes">Hobbies and Interest</option>
                   
                    <option value="Others">Others</option>
                </select>
                {formErrors.eventCategory && (
                  <div className="invalid-feedback">{formErrors.eventCategory}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventLocation" className="form-label">
                  <b>Location*</b>
                </label>
                <input
                  id="eventLocation"
                  className={`form-control ${formErrors.eventLocation ? "is-invalid" : ""}`}
                  type="text"
                  placeholder="Enter event location"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                />
                {formErrors.eventLocation && (
                  <div className="invalid-feedback">{formErrors.eventLocation}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventDate" className="form-label">
                  <b>Date*</b>
                </label>
                <input
                  id="eventDate"
                  className={`form-control ${formErrors.eventDate ? "is-invalid" : ""}`}
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
                {formErrors.eventDate && (
                  <div className="invalid-feedback">{formErrors.eventDate}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventTime" className="form-label">
                  <b>Time*</b>
                </label>
                <input
                  id="eventTime"
                  className={`form-control ${formErrors.eventTime ? "is-invalid" : ""}`}
                  type="time"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
                {formErrors.eventTime && (
                  <div className="invalid-feedback">{formErrors.eventTime}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventDuration" className="form-label">
                  <b>Duration*</b>
                </label>
                <input
                  id="eventDuration"
                  className={`form-control ${formErrors.eventDuration ? "is-invalid" : ""}`}
                  type="text"
                  placeholder="Enter event duration (e.g., 2 hours)"
                  value={eventDuration}
                  onChange={(e) => setEventDuration(e.target.value)}
                />
                {formErrors.eventDuration && (
                  <div className="invalid-feedback">{formErrors.eventDuration}</div>
                )}
               </div>
               { /*
              <div className="mb-3">
                <label htmlFor="eventBanner" className="form-label">
                  <b>Event Banner*</b>
                </label>
                <input
                  id="eventBanner"
                  className={`form-control ${formErrors.eventBanner ? "is-invalid" : ""}`}
                  type="file"
                  onChange={handleFileChange}
                />
                {formErrors.eventBanner && (
                  <div className="invalid-feedback">{formErrors.eventBanner}</div>
                )}
              </div>  */}
              <div className="mb-3">
                <label htmlFor="eventDescription" className="form-label">
                  <b>Description*</b>
                </label>
                <textarea
                  id="eventDescription"
                  className={`form-control ${formErrors.eventDescription ? "is-invalid" : ""}`}
                  rows="4"
                  placeholder="Enter event description"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                ></textarea>
                {formErrors.eventDescription && (
                  <div className="invalid-feedback">{formErrors.eventDescription}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventType" className="form-label">
                  <b>Event Type*</b>
                </label>
                <select
                  id="eventType"
                  className={`form-select ${formErrors.eventType ? "is-invalid" : ""}`}
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="">Select event type</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                {formErrors.eventType && (
                  <div className="invalid-feedback">{formErrors.eventType}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventPrice" className="form-label">
                  <b>Price*</b>
                </label>
                <input
                  id="eventPrice"
                  className={`form-control ${formErrors.eventPrice ? "is-invalid" : ""}`}
                  type="number"
                  placeholder="Enter event price"
                  value={eventPrice}
                  onChange={(e) => setEventPrice(e.target.value)}
                />
                {formErrors.eventPrice && (
                  <div className="invalid-feedback">{formErrors.eventPrice}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="eventTickets" className="form-label">
                  <b>Number of Tickets*</b>
                </label>
                <input
                  id="eventTickets"
                  className={`form-control ${formErrors.eventTickets ? "is-invalid" : ""}`}
                  type="number"
                  placeholder="Enter number of tickets available"
                  value={eventTickets}
                  onChange={(e) => setEventTickets(e.target.value)}
                />
                {formErrors.eventTickets && (
                  <div className="invalid-feedback">{formErrors.eventTickets}</div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success w-100">
                  <i className="fa-solid fa-circle-check me-2"></i> Save and Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEventForm;
