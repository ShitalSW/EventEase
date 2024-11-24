import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function ManageBookings() {
    return (
      <div className="container my-5">
        <h2 className="mb-4">Manage Bookings</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User</th>
              <th>Event</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Confirmed</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Update</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Confirmed</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Update</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Confirmed</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Update</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Confirmed</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Update</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Music Concert</td>
              <td>2024-09-15</td>
              <td>Confirmed</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Update</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            {/* Repeat rows for all bookings */}
          </tbody>
        </table>
      </div>
    );
  }
  export default ManageBookings;