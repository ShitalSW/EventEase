import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Pay.css';
import Footer from './Footer';
{/* import React, { useState } from 'react';
import '../Styles/Pay.css'
import Footer from './Footer';
const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Payment successful!');
  };

  return (
    <div>
      
    
    <div className="col-xl-5 col-lg-6 col-md-7">
    <div className="regist">
        <form onSubmit={handlePayment}>
            <h2 className="registration-title">Pay to EventEase</h2>
            <div className="form-group mt-1">
                <label className="form-label">Card Number*</label>
                <input  className="form-control h_50" type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

            </div>
            <div className="form-group mt-1">
                <div className="field-password">
                    <label className="form-label">Expiry Date*</label>
                    <input  className="form-control h_50"  type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                </div>
                </div>
                <div className="form-group mt-1">
                <div className="field-password">
                    <label className="form-label">CVV*</label>
                    <input  className="form-control h_50"  type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                    </div>
                </div>

            <button className="main-btn btn-hover w-100 mt-1" type="button" onClick={() => window.location.href = '/'}>
                <a href={`/booking`} style={{ textDecoration: "none" }} >Pay</a> <i className="fas fa-sign-in-alt ms-2"></i>
            </button>
        </form>
      </div>
      
</div>

</div>
  );
};

export default Payment; */}



const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [eventId, setEventId] = useState(null);
  const [bookingId, setBookingId] = useState(null);

  const location = useLocation();
  const navigate=useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setEventId(queryParams.get('eventId'));
    setBookingId(queryParams.get('bookingId'));
  }, [location]);

  const handlePayment = async (e) => {
    e.preventDefault();
    
    try {
      const userId = sessionStorage.getItem('userId');
      const response = await axios.post('http://localhost:8080/payments', {
        eventId,
        bookingId,
        // cardNumber,
        // expiryDate,
        // cvv,
        userId
      });
      
      if (response.status === 200) {
        alert('Payment successful!');
        const paymentData = response.data;
        const id= paymentData.bookingId; 
        navigate(`/bookings/${id}`)
        
      }
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed! Please try again.');
    }
  };

  return (
    <div>
      <div className="col-xl-5 col-lg-6 col-md-7">
        <div className="regist">
          <form onSubmit={handlePayment}>
            <h2 className="registration-title">Pay to EventEase</h2>
            <div className="form-group mt-1">
              <label className="form-label">Card Number*</label>
              <input 
                className="form-control h_50" 
                type="text" 
                value={cardNumber} 
                onChange={(e) => setCardNumber(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group mt-1">
              <div className="field-password">
                <label className="form-label">Expiry Date*</label>
                <input 
                  className="form-control h_50"  
                  type="text" 
                  value={expiryDate} 
                  onChange={(e) => setExpiryDate(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="form-group mt-1">
              <div className="field-password">
                <label className="form-label">CVV*</label>
                <input  
                  className="form-control h_50"  
                  type="text" 
                  value={cvv} 
                  onChange={(e) => setCvv(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <button 
              className="main-btn btn-hover w-100 mt-1" 
              type="submit" 
            >
              Pay <i className="fas fa-sign-in-alt ms-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;

