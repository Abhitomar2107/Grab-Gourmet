import React from "react";
import "./Restaurants.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { foodContext } from "../contexts/Context";
import toast, { Toaster } from 'react-hot-toast';

function Restaurants() {
  let [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/restaurant-api/restaurants")
      .then((response) => setRestaurants(response.data.payload))

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let result = useContext(foodContext);
  let rDishes = result.dishes;
  let setRdishes = result.setDishes;
  let axiosWithToken;

  

  const eNotify = (mes) => toast.error(mes);

  const sNotify = (mes) => toast.success(mes);

  async function handleClick(res) {
   
    await setRdishes({ ...rDishes, restaurant: res });
    let data ={...rDishes,restaurant: res};
   
  
    await protectedCart();
    
    if (
      data.name !== "" &&
      data.price !== "" &&
      data.restaurant !== ""
    ) {
      
      axiosWithToken
        .post("http://localhost:4000/cart-api/cart", data)
        .then((res)=>{
          if(res.data.message==="Added to cart"){
            sNotify(res.data.message)
            
          }
          else if(res.data.message==="Please login"){
            eNotify(res.data.message)
            
          }
        }
        )
        
        
    }
  }

  //making adding to cart protected route
  const protectedCart = async () => {
    const token = localStorage.getItem("token");

    //adding item to header of req object
    axiosWithToken = await axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    
  };

  useEffect(() => {}, [rDishes, setRdishes]);

  return (
    <div className="menuB">
       <Toaster />
      <Navbar />

      <div className="menuC container">
        <div className="d-flex justify-content-around flex-wrap">
          {restaurants?.map((restaurant, index) => (
            <div className="card" key={index} style={{ width: "15rem" }}>
              <img className="restImage" src={restaurant.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <hr className="hrule" />
                <p className="card-text">{restaurant.address}</p>
                <button
                  className="ordBtn "
                  onClick={() => handleClick(restaurant.name)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Restaurants;
