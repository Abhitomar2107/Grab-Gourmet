import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/userIcon.png";
import { Link } from "react-router-dom";

function Navbar() {
  
  

  let handleClick=()=>{
      localStorage.clear();
     
  };

  return (
    <nav className="nvbr">
      <div className="d-flex justify-content-between">
        <div className=" logo-c d-flex"
  >
          <img
            src={logo}
            alt=""
            style={{ width: "60px" }}
            className="logoIcon"
          />
          <span className="navbar-nav display-5">Grab Gourmet</span>
        </div>

        <div className="userInfo d-flex ">
          <Link className="px-2" to="/cart">
            <button className="crt">Cart</button>
          </Link>
          <Link className="px-2" to="/menu">
            <button className="mnu">Menu</button>
          </Link>
          <Link className="px-2" to="/">
            <button className="lgout" onClick={handleClick}>Logout</button>
          </Link>
          <img className="uIcon" src={userIcon} alt="" />
        </div>
      </div>
    </nav>

/* <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src={logo} alt="" class="bi me-2 logoIcon" width="40" height="32"></img>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>

 */
  );
}

export default Navbar;
