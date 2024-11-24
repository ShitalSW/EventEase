import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

import Header, { loadHeader } from "./Components/Header";
import Footer from "./Components/Footer";
import card from "./Components/Card";
import Payment from "./Components/Pay";

import HomePage from "./Components/Homepage";
import CreateEventForm from "./Components/CreateEvent";
import UserProfile from "./Components/UserProfile";
import userData from "./JSON/USerProfile.json";
import EventDetails from "./Components/EventDetails";

import Booking from "./Components/Booking";
import Invoice from "./Components/Invoice";
import About from "./Components/About";
import FAQ from "./Components/F.js";
import ForgotPassword from "./Components/ForgotP.js";
import Layout from "./Components/Layout.js";
import ExploreEvents from "./Components/ExploreEvents.js";
import Dashboard from "./Components/Admin/Dashboard.js";
import Events from "./Components/Admin/ManageEvents.js";
import ManageBookings from "./Components/Admin/ManageBookings.js";
import ManageUsers from "./Components/Admin/ManageUsers.js";
import Admin from "./Components/Admin/AdminMain.js";
import Reports from "./Components/report.js";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/admindashboard" element={<Dashboard/>}/>
          <Route path="/manageevents" element={<Events/>}/>
          <Route path="/managebookings" element={<ManageBookings/>}/>
          <Route path="/manageusers" element={<ManageUsers/>}/>
          <Route path="/reports" elements={<Reports/>} />

          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/footer" element={<Footer />} />
          {/* <Route path="/card" element={<card />} /> */}

          <Route path="/home" element={<HomePage />} />
          <Route path="/events/:id" element={<EventDetails />} />

          <Route path="/createevent" element={<CreateEventForm />} />

          <Route
            path="/userprofile"
            element={<UserProfile user={userData} />}
          />
          <Route path="/exploreevents" element={<ExploreEvents/>}/>
          <Route path="/bookings/:id" element={<Booking />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/About" element={<About />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
