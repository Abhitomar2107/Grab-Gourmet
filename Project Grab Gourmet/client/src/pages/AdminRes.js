import React from 'react'
import "./AdminRes.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function AdminRes() {
  let [data, setData] = useState({
    name: "",
    address: "",
    image: "",
   
  });

  let [del, setDel] =useState({
    name:""
  });

  let axiosWithToken;
  const eNotify = (mes) => toast.error(mes);

  const sNotify = (mes) => toast.success(mes);

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
   
  }
  function handleChangeDel(event) {
    setDel({ ...del, [event.target.name]: event.target.value });
   
  }

  //making adding to cart protected route
  const protectedRest = async () => {
    const token = localStorage.getItem("token");

    //adding item to header of req object
     axiosWithToken = await axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async function handleAdd(event) {
    event.preventDefault();
    if(data.name !== "" && data.address !== "" && data.image !== "")
    {
      await protectedRest();
      axiosWithToken.post("http://localhost:4000/restaurant-api/restaurants",{...data})
      .then((res)=>{
        if(res.data.message==="Restaurant added Successfully"){
          sNotify(res.data.message)
          console.log(res.data.message)
          
        }
        else if(res.data.message==="Restaurant already exists"){
          eNotify(res.data.message)
          console.log(res.data.message)
        }
        else if(res.data.message==="Please login"){
          eNotify(res.data.message)
        }
      })
      
    }
   

  }
  async function handleDelete(event) {
    event.preventDefault();
    await protectedRest();
    let url =`http://localhost:4000/restaurant-api/restaurants/${del.name}`;
    
    axiosWithToken.delete(url)
    .then((res)=>{
      if(res.data.message==="Restaurant deleted Successfully"){
        sNotify(res.data.message)
        
      }
      else if(res.data.message==="Restaurant not found"){
        eNotify(res.data.message)
      }
      else if(res.data.message==="Please login"){
        eNotify(res.data.message)
      }
  })
   

  }
  
  

  return (
    <div className="backgr">
      <Toaster />
      <div className='fbundle'>
    <form className="addbg" onSubmit={handleAdd}>
      <h1>Add Restaurant</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Name"
        name="name"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Address"
        name="address"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Image link"
        name="image"
      />
      
      <br />
      <button className='bt' type="submit">Add</button>
     
    </form>
    <form className="addbg" onSubmit={handleDelete}>
      <h1>Remove Restaurant</h1>
      <br />
      <input
        type="text"
        onChange={handleChangeDel}
        className="email"
        placeholder="Name Of Restaurant"
        name="name"
      />
      <br />
      <br /><br /><br />
      
      <button className='bt' type="submit">Delete</button>
      
    </form>
    </div>
    <div>
    <Link to="/admenu"><button className='bt1'>Back</button></Link>
    <Link to="/restaurants"><button className='bt2'>Restaurants</button></Link>
    </div>
  </div>
  )
}

export default AdminRes