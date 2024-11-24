// src/components/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/Layout.css"; // Optional: Add layout-specific styles

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
