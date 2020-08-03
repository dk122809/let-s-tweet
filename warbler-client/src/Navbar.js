import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Let's Tweet</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {props.isLogin !== false?<>       
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newmessage">New Message</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li> 
            </>
            :
            <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>  
            </>         
            }
          </ul>
        </div>
        </div>
      </nav>     
      
    </>
  );
};

export default Navbar;
