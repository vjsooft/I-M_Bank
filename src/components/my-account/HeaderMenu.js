import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function HeaderMenu() {
  const menuLink = [
    {
      id: 1,
      linkIcon: "fa fa-plane iconRedemption",
      linkName: "Get a Flight",
      link: "/flight",
    },
    {
      id: 2,
      linkIcon: "fa fa-building iconRedemption",
      linkName: "Book a Hotel",
      link: "/hotel",
    },
    {
      id: 3,
      linkIcon: "fa fa-gift iconRedemption",
      linkName: "Buy at Store",
      link: "/deal",
    },
  ];
  return (
    <div className="row m-0">
      <div className="col-sm-12">
        <ul className="redeemList">
          {menuLink.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <span className="icon-circle">
                  <i className={item.linkIcon}></i>
                </span>
                <p>{item.linkName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenu;
