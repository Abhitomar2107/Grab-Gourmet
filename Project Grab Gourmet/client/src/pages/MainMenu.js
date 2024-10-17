import React from "react";
import "./MainMenu.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useContext } from 'react';
import { foodContext } from "../contexts/Context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function MainMenu() {
  let [dishes, setDishes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/dish-api/dishes")
      .then((response) => setDishes(response.data.payload))

      .catch(function (error) {
        console.log(error);
      });
  }, []);

 let result=useContext(foodContext)
 let rDishes=result.dishes
 let setRdishes=result.setDishes
  let navigate = useNavigate();


  function handleClick(dish,money){
    setRdishes({ ...rDishes, name: dish, price: money, restaurant :"" });
    navigate("/restaurants")
    
  }

  return (
    <div className="menuB">
      <Navbar />
      
      <div className="menuC container" >

        <div className=" d-flex justify-content-around flex-wrap">
   
        {dishes?.map((dish, index) => (
          <div className="card" key={index} style={{ width: "15rem" }} >

            <img className="dishImage" src={dish.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{dish.name}</h5>
              <hr className="hrule" />
              <p className="card-text">{dish.description}</p>
              <p className="dPrice">₹{dish.price}</p>
              <button className="ordBtn" onClick={()=>handleClick(dish.name,dish.price)}>Order</button>
            </div>
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainMenu;
