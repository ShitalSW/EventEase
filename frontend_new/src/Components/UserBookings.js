import React from 'react';

const UserBookings = () => {
  const bookings = [
    { id: 1, event: 'Concert', date: '2023-09-01', time: '19:00', price: 50 },
    { id: 2, event: 'Art Exhibition', date: '2023-10-15', time: '15:00', price: 30 },
    // Add more bookings here
  ];

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.event} - {booking.date} - {booking.time} - ${booking.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBookings;
