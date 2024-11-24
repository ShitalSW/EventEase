import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function Admin() {
    return (
    
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <Link className="navbar-brand" to="/">Admin Dashboard</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manageevents">Manage Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/managebookings">Manage Bookings</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manageusers">Manage Users</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div><Dashboard/></div>
          </div>
         
    );
  }
  
  export default Admin;