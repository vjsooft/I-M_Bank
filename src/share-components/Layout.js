import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Banner/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
