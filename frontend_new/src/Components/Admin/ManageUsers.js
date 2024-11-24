import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function ManageUsers() {
    return (
      <div className="container my-5">
        <h2 className="mb-4">Manage Users</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>
                <Link to="/edit-user/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>
                <Link to="/edit-user/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>
                <Link to="/edit-user/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>
                <Link to="/edit-user/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>
                <Link to="/edit-user/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>
                <Link to="/edit-user/1" className="btn btn-warning btn-sm mr-2">Edit</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
  export default ManageUsers;