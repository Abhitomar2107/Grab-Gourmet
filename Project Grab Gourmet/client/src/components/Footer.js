import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="ftback">
      <footer className="text-center text-lg-start">
        <div className="container">
         <Link to="/menu" className="hme">
          <p className="hm" >Home</p>
          </Link>
          <p >Pricing</p>
          <p>About</p>
          <p>FAQs</p>
        </div>
            <hr />
        <div className="text-center copy">© 2024 Grab Gourmet,Inc.All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Footer;
