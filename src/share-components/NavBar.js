import React from "react";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

function NavBar() {
  const isLoginUser = useSelector((state)=> state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout =()=>{
    dispatch(setLogout());
    navigate('/');
  }
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
      { isLoginUser ? 
          <li className="nav-item">
            <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}></i>
          </li>
          : null
        }
          <li className="nav-item">
            <Link className="navbar-brand" to="/myaccount">
            <i className="fa fa-home" aria-hidden="true"></i>
          </Link> 
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
