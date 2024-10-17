import React, { useEffect, useState } from "react";
import "./Cart.css";

import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Cart() {
  
  

  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);
  
  
 
  useEffect(() => {
    axios
      .get("http://localhost:4000/cart-api/cart")
      .then(function(response){
       setCart(response.data.payload);
       
       
        
      })
     .catch(function (error) {
        console.log(error);
      });
  },[]);
  useEffect(()=>{

        let sum=0;
        cart.map((item) => (sum += Number(item.price)))
        setTotal(sum)
       
  },[cart])


  function handleClick(rowId) {
    let url = `http://localhost:4000/cart-api/cart/${rowId}`;
    console.log(url);
    axios.delete(url);
    let updatedCart=cart.filter(cart =>cart._id !==rowId)
    setCart(updatedCart)
  
   
  }

  return (
    <div>
      <Navbar />
      <div className="tbl">
        <table className="table table-bordered table-hover table-striped ">
          <thead className="table-dark">
            <tr>
              <th>Dish</th>
              <th>Price</th>
              <th>Restaurant</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.restaurant}</td>
                <td>
                  <button
                    className="rmove"
                    onClick={() => handleClick(item._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <h2 className="ttl">Subtotal:<span> ₹ {total}</span></h2>
        <hr />
        <label className="adr">Enter your address:&nbsp;&nbsp;&nbsp;</label>
        <input type='text' placeholder='Address' className='adrs' />
        <br />
        <hr />
        <Link to="/checkout">
        <button className="ckout">Checkout</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
