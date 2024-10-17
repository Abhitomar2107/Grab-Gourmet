import React from "react";
import "./HomePage.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bck">
      <div className="logo">
        <img className="logoImage" src={logo} alt="" />
         <div className="lsbutton">
        <Link to="login"><button className="lbutton">Log In</button></Link>
         <Link to="signup"><button className="sbutton">Sign Up</button></Link>
        </div>
      </div>
      <p className="motto text-center">Want a delicious meal but no time? We will deliver it hot and yummy.</p>
      
      
    </div>
  );
}

export default HomePage;
//
