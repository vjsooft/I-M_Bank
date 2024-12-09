import React from "react";

function UserDtl() {
  return (
    <div className="row m-0">
      <div className="col-sm-12 p-0 d-flex align-items-center justify-content-between">
        <h1>Hi, sunny </h1>
        <div className="points-badge">
          <img src="assets/images/web-portal/coinImg.png" alt="Icon" />
          <span>11,696</span>
          <span className="pts">pts</span>
        </div>
      </div>
      <div className="col-sm-12 p-0 d-flex align-items-center justify-content-between">
      <p className="michael">Welcome to Milele Points!</p>
      <p>1Pt = 1 KES</p>
      </div>
    </div>
  );
}

export default UserDtl;
