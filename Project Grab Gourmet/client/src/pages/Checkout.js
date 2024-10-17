import React from "react";
import "./Checkout.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Checkout() {
  return (
    <div>
      <Navbar />

      <div className="ckmenu"></div>
      <div className="delv">
        <p className="dmsg">Your order will be delivered shortly.</p>
        <br />
        <p className="dmsg">Please pay the amount to our Delivery Executive.</p>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
