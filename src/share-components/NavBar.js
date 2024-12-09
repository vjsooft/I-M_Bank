import React from "react";
// import Logo from 'assets/images/logos/IMBank.png';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/myaccount">
        <img
          src="assets/images/logos/IMBank.png"
          alt="IM Bank Logo"
          className="img-fluid"
        />
      </Link>
      <ul className="custom-navbar-nav">
          <li className="nav-item">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </li>
          <li className="nav-item">
          <i className="fa fa-home" aria-hidden="true"></i>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
