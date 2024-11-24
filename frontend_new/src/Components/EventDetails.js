import React, { useState, useEffect } from 'react';
import '../Styles/EventDetails.css'; // Assuming you have a CSS file for the styles
import eventimage from '../Images/big-2.jpg';
import Header from './Header';
import Footer from './Footer';
import { Link, useLocation, useParams ,useNavigate} from 'react-router-dom';
{ /* import React, { useState } from 'react';
import '../Styles/EventDetails.css'// Assuming you have a CSS file for the styles
import eventimage from '../Images/big-2.jpg'
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation,useParams } from 'react-router-dom';

const EventDetails = () => {
  const [ticketCount, setTicketCount] = useState(0);

  const increaseCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decreaseCount = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };
  
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);
    const id= searchParams.get("id");
    const { id: eventId } = useParams();
    console.log(eventId)
    const [eventDetails, setEventDetails] = useState();
  
    useEffect(() => {
      const fetchEventDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/events/${eventId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
              "User-ID": sessionStorage.getItem("id"),
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log(data); 
            setEventDetails(data);
          } else {
            console.error("Failed to fetch event details");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      fetchEventDetails();
    }, [eventId]);

  return (
    
  <div>
    <Header/>

    <div className="event-dt-block p-80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="event-top-dts">
              <div className="event-top-date">
                
               <span className="event-date">{eventDetails?.date}</span> 
              </div>
              <div className="event-top-dt">
                <h3 className="event-main-title">{eventDetails?.name} on {eventDetails?.date}  at {eventDetails?.time}</h3>
                <div className="event-top-info-status">
                  <span className="event-type-name">
                    <i className="fa-solid fa-location-dot"></i>{eventDetails?.eventType} Event
                  </span>
                  <span className="event-type-name details-hr">
                    Starts on <span className="ev-event-date"> {eventDetails?.date} {eventDetails?.time}</span>
                  </span>
                  <span className="event-type-name details-hr">{eventDetails?.duration}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="main-event-dt">
              <div className="event-img">
                <img src={eventimage} alt="" />
              </div>
              <div className="share-save-btns dropdown">
                <button className="sv-btn me-2">
                   Save 
                </button>
              </div>
              <div className="main-event-content">
                <h4>About This Event</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor justo, sodales mattis orci et, mattis faucibus est. Nulla semper consectetur sapien a tempor. Ut vel lacus lorem. Nulla mauris massa, pharetra a mi ut, mattis euismod libero. Ut pretium bibendum urna nec egestas. Etiam tempor vehicula libero. Aenean cursus venenatis orci, ac porttitor leo porta sit amet. Nulla eleifend mollis enim sed rutrum. Nunc cursus ex a ligula consequat aliquet. Donec semper tellus ac ante vestibulum, vitae varius leo mattis. In vestibulum blandit tempus. Etiam elit turpis, volutpat hendrerit varius ut, posuere a sapien. Maecenas molestie bibendum finibus. Nulla euismod neque vel sem hendrerit faucibus. Nam sit amet metus sollicitudin, luctus eros at, consectetur libero.
                </p>
                <p>
                  In malesuada luctus libero sed gravida. Suspendisse nunc est, maximus vel viverra nec, suscipit non massa. Maecenas efficitur vestibulum pellentesque. Ut finibus ullamcorper congue. Sed ut libero sit amet lorem venenatis facilisis. Mauris egestas tortor vel massa auctor, eget gravida mauris cursus. Etiam elementum semper fermentum. Suspendisse potenti. Morbi lobortis leo urna, non laoreet enim ultricies id. Integer id felis nec sapien consectetur porttitor. Proin tempor mauris in odio iaculis semper. Cras ultricies nulla et dui viverra, eu convallis orci fermentum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-12">
            <div className="main-card event-right-dt">
              <div className="bp-title">
                <h4>Event Details</h4>
              </div>
              
             
              <div className="event-dt-right-group">
                <div className="event-dt-right-icon">
                  <i className="fa-solid fa-calendar-day"></i>
                </div>
                <div className="event-dt-right-content">
                  <h4>on {eventDetails?.date}</h4>
                  <h5>at {eventDetails?.time}</h5>
                </div>
              </div>
              <div className="event-dt-right-group">
                <div className="event-dt-right-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="event-dt-right-content">
                  <h4>Location</h4>
                  <h5 className="mb-0">{eventDetails?.location}</h5>
                
                </div>
              </div>
              <div className="select-tickets-block">
                <h6>Select Tickets</h6>
                <div className="select-ticket-action">
                  <div className="ticket-price">{eventDetails?.price}</div>
                  <div className="quantity">
                    <div className="counter">
                      <span className="down" onClick={decreaseCount}>
                        -
                      </span>
                      <input type="text" value={ticketCount} readOnly />
                      <span className="up" onClick={increaseCount}>
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <p>
                  2 x pair hand painted leather earrings 1 x glass of bubbles / or coffee Individual grazing box / fruit cup
                </p>
                <div className="xtotel-tickets-count">
                  <div className="x-title">1x Ticket(s)</div>
                  <h4>
                    AUD <span>{(ticketCount *eventDetails?.price).toFixed(2)}</span>
                  </h4>
                </div>
              </div>
              <div className="booking-btn">
                <a href="/payment" className="main-btn btn-hover w-100">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
 </div>
  );
};

export default EventDetails; */}




const EventDetails = () => {
  const navigate = useNavigate();
  const [ticketCount, setTicketCount] = useState(0);
  const [eventDetails, setEventDetails] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { id: eventId } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            "User-ID": sessionStorage.getItem("id"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setEventDetails(data);
        } else {
          console.error("Failed to fetch event details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const increaseCount = () => setTicketCount(ticketCount + 1);
  const decreaseCount = () => {
    if (ticketCount > 0) setTicketCount(ticketCount - 1);
  };

  const handleBooking = async () => {
    const bookingData = {
      attendeeId: sessionStorage.getItem("userId"),
      eventId: eventDetails?.id,
      numberOfTickets: ticketCount,
      totalAmount: ticketCount * eventDetails?.price,
      bookingDate: eventDetails?.date,
      bookingtime: eventDetails?.time,
      location: eventDetails?.location,
      eventname: eventDetails?.name

    };

    try {
      const response = await fetch('http://localhost:8080/bookings', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("jwt")}`
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        //alert("Booking successful!");
        // Redirect or handle successful booking
        const bookingId = await response.json(); // Assuming the response contains the booking ID

        // Redirect to the payment page with both eventId and bookingId as query parameters
        navigate(`/payment?eventId=${eventDetails?.id}&bookingId=${bookingId}`);
      
      } else {
        console.error("Failed to book event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header/>

      <div className="event-dt-block p-80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="event-top-dts">
                <div className="event-top-date">
                  <span className="event-date">{eventDetails?.date}</span>
                </div>
                <div className="event-top-dt">
                  <h3 className="event-main-title">{eventDetails?.name} on {eventDetails?.date} at {eventDetails?.time}</h3>
                  <div className="event-top-info-status">
                    <span className="event-type-name">
                      <i className="fa-solid fa-location-dot"></i>{eventDetails?.eventType} Event
                    </span>
                    <span className="event-type-name details-hr">
                      Starts on <span className="ev-event-date"> {eventDetails?.date} {eventDetails?.time}</span>
                    </span>
                    <span className="event-type-name details-hr">{eventDetails?.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="main-event-dt">
                <div className="event-img">
                  <img src={eventimage} alt="" />
                </div>
                <div className="share-save-btns dropdown">
                  <button className="sv-btn me-2">
                    Save
                  </button>
                </div>
                <div className="main-event-content">
                  <h4>About This Event</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor justo, sodales mattis orci et, mattis faucibus est. Nulla semper consectetur sapien a tempor. Ut vel lacus lorem. Nulla mauris massa, pharetra a mi ut, mattis euismod libero. Ut pretium bibendum urna nec egestas. Etiam tempor vehicula libero. Aenean cursus venenatis orci, ac porttitor leo porta sit amet. Nulla eleifend mollis enim sed rutrum. Nunc cursus ex a ligula consequat aliquet. Donec semper tellus ac ante vestibulum, vitae varius leo mattis. In vestibulum blandit tempus. Etiam elit turpis, volutpat hendrerit varius ut, posuere a sapien. Maecenas molestie bibendum finibus. Nulla euismod neque vel sem hendrerit faucibus. Nam sit amet metus sollicitudin, luctus eros at, consectetur libero.
                  </p>
                  <p>
                    In malesuada luctus libero sed gravida. Suspendisse nunc est, maximus vel viverra nec, suscipit non massa. Maecenas efficitur vestibulum pellentesque. Ut finibus ullamcorper congue. Sed ut libero sit amet lorem venenatis facilisis. Mauris egestas tortor vel massa auctor, eget gravida mauris cursus. Etiam elementum semper fermentum. Suspendisse potenti. Morbi lobortis leo urna, non laoreet enim ultricies id. Integer id felis nec sapien consectetur porttitor. Proin tempor mauris in odio iaculis semper. Cras ultricies nulla et dui viverra, eu convallis orci fermentum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="main-card event-right-dt">
                <div className="bp-title">
                  <h4>Event Details</h4>
                </div>
                <div className="event-dt-right-group">
                  <div className="event-dt-right-icon">
                    <i className="fa-solid fa-calendar-day"></i>
                  </div>
                  <div className="event-dt-right-content">
                    <h4>on {eventDetails?.date}</h4>
                    <h5>at {eventDetails?.time}</h5>
                  </div>
                </div>
                <div className="event-dt-right-group">
                  <div className="event-dt-right-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="event-dt-right-content">
                    <h4>Location</h4>
                    <h5 className="mb-0">{eventDetails?.location}</h5>
                  </div>
                </div>
                <div className="select-tickets-block">
                  <h6>Select Tickets</h6>
                  <div className="select-ticket-action">
                    <div className="ticket-price">{eventDetails?.price}</div>
                    <div className="quantity">
                      <div className="counter">
                        <span className="down" onClick={decreaseCount}>
                          -
                        </span>
                        <input type="text" value={ticketCount} readOnly />
                        <span className="up" onClick={increaseCount}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    2 x pair hand painted leather earrings 1 x glass of bubbles / or coffee Individual grazing box / fruit cup
                  </p>
                  <div className="xtotel-tickets-count">
                    <div className="x-title">1x Ticket(s)</div>
                    <h4>
                      AUD <span>{(ticketCount * eventDetails?.price).toFixed(2)}</span>
                    </h4>
                  </div>
                </div>
                <div className="booking-btn">
                  <button onClick={handleBooking} className="main-btn btn-hover w-100">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventDetails;

