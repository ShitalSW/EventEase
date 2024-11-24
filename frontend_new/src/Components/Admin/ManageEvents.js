
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Events() {
    return (
      <div className="container my-5">
        <h2 className="mb-4">Manage Events</h2>
        <Link to="/add-event" className="btn btn-success mb-3">Add New Event</Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td>1</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Mumbai</td>
              <td>
                <Link to="/edit-event/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Mumbai</td>
              <td>
                <Link to="/edit-event/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Mumbai</td>
              <td>
                <Link to="/edit-event/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Mumbai</td>
              <td>
                <Link to="/edit-event/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Mumbai</td>
              <td>
                <Link to="/edit-event/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  export default Events;