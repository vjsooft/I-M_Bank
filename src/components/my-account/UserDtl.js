import React from "react";
import { useSelector } from "react-redux";


function UserDtl() {
  const userName = useSelector((state)=> state.auth.loginData.memberid)
  const userMileleoint =useSelector((state)=>state.milelePointStatus.milelePoint)

  function formatIndianNumber(userMileleoint) {
    let str = userMileleoint.toString();
    let firstPart = str.slice(0, str.length % 3);
    let rest = str.slice(str.length % 3);
    let formattedRest = rest.replace(/(\d{3})(?=\d)/g, '$1,');
    return firstPart + (firstPart ? ',' : '') + formattedRest;
  }
  
  
  return (
    <div className="row m-0">
      <div className="col-sm-12 p-0 d-flex align-items-center justify-content-between">
        <h1>Hi, {userName} </h1>
        <div className="points-badge">
          <img src="assets/images/web-portal/coinImg.png" alt="Icon" />
          <span>{formatIndianNumber(userMileleoint)}</span>
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
