import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/chat">Chat</Link>
        <span> </span>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
