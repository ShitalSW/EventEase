import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventList = () => {
    const navigate = useNavigate();
   

  const events = [
    { id: 1, name: 'Concert', place: 'New York', date: '2023-09-01', time: '19:00', price: 50 },
    { id: 2, name: 'Art Exhibition', place: 'Paris', date: '2023-10-15', time: '15:00', price: 30 },
    // Add more events here
  ];

  const handleBook = (eventId) => {
    // Store the event ID or event details in a state or context
    navigate('/payment');
  };

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.place} - {event.date} - {event.time} - ${event.price}
            <button onClick={() => handleBook(event.id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
