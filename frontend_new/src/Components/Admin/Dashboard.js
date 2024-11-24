import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Dashboard() {
    return (
      <div className="container my-5">
        <h2 className="mb-4">Admin Dashboard</h2>
        <div className="row">
          {/* Total Events Card */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Events</h5>
                <p className="card-text">42</p>
                <Link to="/manageevents" className="btn btn-primary">Manage Events</Link>
              </div>
            </div>
          </div>
          {/* Total Bookings Card */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Bookings</h5>
                <p className="card-text">325</p>
                <Link to="/managebookings" className="btn btn-primary">Manage Bookings</Link>
              </div>
            </div>
          </div>
          {/* Total Users Card */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text">150</p>
                <Link to="/manageusers" className="btn btn-primary">Manage Users</Link>
              </div>
            </div>
          </div>
          {/* Generate Reports Card */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Generate Reports</h5>
                <p className="card-text">View detailed reports</p>
                <Link to="/reports" className="btn btn-primary">Generate Reports</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
