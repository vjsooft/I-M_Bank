import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container main-footer">
      <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privacypolicy">
                  privacy policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tac">
                  terms & conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
    </footer>
  );
}

export default Footer;
