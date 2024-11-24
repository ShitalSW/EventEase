import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/booking_confirmed.css'; // Import CSS
import booking from '../Images/book.jpg'; // Booking image
import book from '../Images/img-7.jpg'; // Event image


/*
import React from 'react';
import '../Styles/booking_confirmed.css'; // Import any specific CSS for this component
import booking from '../Images/book.jpg';
import book from '../Images/img-7.jpg';

const Booking = () => {
  return (
    <center>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-10">
              <div className="booking-confirmed-content">
                <div className="main-card">
                  <div className="booking-confirmed-top text-center p_30">
                    <div className="booking-confirmed-img mt-4">
                      <img src={booking} alt="Booking Confirmed" />
                    </div>
                    <h4>Booking Confirmed</h4>
                    <p className="ps-lg-4 pe-lg-4">
                      We are pleased to inform you that your reservation request has been received and confirmed.
                    </p>
                  </div>
                  <div className="booking-confirmed-bottom">
                    <div className="booking-confirmed-bottom-bg p_30">
                      <div className="event-order-dt">
                        <div className="event-thumbnail-img">
                          <img src={book} alt="Event Thumbnail" />
                        </div>
                        <div className="event-order-dt-content">
                          <h6>Tutorial on Canvas Painting for Beginners</h6>
                          <span>Wed, Jun 01, 2022 5:30 AM. Duration 1h</span>
                          <div className="buyer-name">John Doe</div>
                          <div className="booking-total-tickets">
                            <i className="fa-solid fa-ticket rotate-icon"></i>
                            <span className="booking-count-tickets mx-2">1</span>x Ticket
                          </div>
                          <div className="booking-total-grand">
                            Total : <span>$75.00</span>
                          </div>
                        </div>
                      </div>
                      <a href="/invoice" className="main-btn btn-hover h_50 w-100 mt-5">
                        <i className="fa-solid fa-ticket rotate-icon me-3"></i>View Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
    </center>
  );
};

export default Booking; */



const Booking = () => {
  const [bookingData, setBookingData] = useState(null);
  const { id } = useParams(); // Extract bookingId from URL

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/bookings/${id}`);
        setBookingData(response.data);
      } catch (error) {
        console.error('Failed to fetch booking details:', error);
      }
    };

    fetchBookingDetails();
  }, [id]);

  if (!bookingData) {
    return <p>Loading...</p>; // Show a loading message or spinner while data is being fetched
  }

  return (
    <center>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7 col-md-10">
            <div className="booking-confirmed-content">
              <div className="main-card">
                <div className="booking-confirmed-top text-center p_30">
                  <div className="booking-confirmed-img mt-4">
                    <img src={booking} alt="Booking Confirmed" />
                  </div>
                  <h4>Booking Confirmed</h4>
                  <p className="ps-lg-4 pe-lg-4">
                    We are pleased to inform you that your reservation request has been received and confirmed.
                  </p>
                </div>
                <div className="booking-confirmed-bottom">
                  <div className="booking-confirmed-bottom-bg p_30">
                    <div className="event-order-dt">
                      <div className="event-thumbnail-img">
                        <img src={book} alt="Event Thumbnail" />
                      </div>
                      <div className="event-order-dt-content">
                        <h6>Event Name: {bookingData?.eventname}</h6>
                        <span>Date :{bookingData?.bookingDate}</span>
                        <div className="buyer-name">Time :{bookingData?.bookingtime}</div>
                        <div className="buyer-name">Location:{bookingData?.location}</div>
                        <div className="booking-total-tickets">
                          <i className="fa-solid fa-ticket rotate-icon"></i>
                          <span className="booking-count-tickets mx-2">{bookingData?.numberOfTickets}</span>x Ticket
                        </div>
                        <div className="booking-total-grand">
                          Total : <span>${bookingData?.totalAmount.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <a href="/invoice" className="main-btn btn-hover h_50 w-100 mt-5">
                      <i className="fa-solid fa-ticket rotate-icon me-3"></i>View Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Booking;

