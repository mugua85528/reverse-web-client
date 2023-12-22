import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Footer from "./footer";

function Layout(props) {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
