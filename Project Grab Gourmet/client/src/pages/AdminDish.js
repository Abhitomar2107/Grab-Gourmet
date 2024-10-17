import React from 'react'
import "./AdminDish.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

function AdminDish() {

  let [data, setData] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
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
   const protectedDish = async () => {
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
    if(data.name !== "" && data.description !== "" && data.image !== "" && data.price !== "")
    {
      await protectedDish();
      axiosWithToken.post("http://localhost:4000/dish-api/dishes",{...data})
      .then((res)=>{
        if(res.data.message==="Dish added Successfully"){
          sNotify(res.data.message)
          
        }
        else if(res.data.message==="Dish already exists"){
          eNotify(res.data.message)
        }
        else if(res.data.message==="Please login"){
          eNotify(res.data.message)
        }

      })
    }
   

  }
  async function handleDelete(event) {
    event.preventDefault();
    await protectedDish();
    let url =`http://localhost:4000/dish-api/dishes/${del.name}`;
    
    axiosWithToken.delete(url)
    .then((res)=>{
      if(res.data.message==="Dish Deleted Successfully"){
        sNotify(res.data.message)
        
      }
      else if(res.data.message==="Dish not found"){
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
      <h1>Add dish</h1>
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
        placeholder="Desciption"
        name="description"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Image link"
        name="image"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Price"
        name="price"
      />
      <br />
      <button className='bt' type="submit">Add</button>
     
    </form>
    <form className="addbg" onSubmit={handleDelete}>
      <h1>Remove dish</h1>
      <br /><br /><br />
      <input
        type="text"
        onChange={handleChangeDel}
        className="email"
        placeholder="Name of dish"
        name="name"
      />
      <br />
      <br /><br /><br /><br />
      
      <button className='bt' type="submit">Delete</button>
      
    </form>
    </div>
    <div>
    <Link to="/admenu"><button className='bt1'>Back</button></Link>
    <Link to="/menu"><button className='bt2'>Dishes Menu</button></Link>
    </div>
  </div>
  )
}

export default AdminDish