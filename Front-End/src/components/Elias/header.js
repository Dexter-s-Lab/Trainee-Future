import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div >
        <NavLink to="/" className="navbar-brand">
         <p>Trainee Future</p> 
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">




          <li className="nav-item dropdown">
            {/* <NavLink to="/login">Login</NavLink> */}
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <NavLink to="/login"><a class="dropdown-item">Login Company</a></NavLink>
        <NavLink to="/loginTrainee"><a class="dropdown-item" >Login Trainee</a></NavLink>
        </div>
          </li>
           <li className="nav-item">
            <NavLink to="/register" role="button"><a class="nav-link" >Register</a></NavLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;
