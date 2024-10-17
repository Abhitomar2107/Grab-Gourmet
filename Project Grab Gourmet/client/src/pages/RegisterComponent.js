import "./RegisterComponent.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function RegisterComponent() {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    agreed: "",
  });
 let navigate = useNavigate();

 
 const eNotify = (mes) => toast.error(mes);

 
 
  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
 

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username (minimum 6 characters)
    if (data.name.trim().length < 6) {
      newErrors.name = "Username must be at least 6 characters long";
      isValid = false;
    }

    // Validate email (using a simple regex for demonstration)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate password (minimum 8 characters)
    if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Validate checkbox (agreement)
    if (!data.agreed) {
      newErrors.agreed = "You must agree to the terms";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  function handleClick(event) {
    event.preventDefault();

    if (validateForm()) {
      axios.post("http://localhost:4000/user-api/user", { ...data })
      .then((res)=>{
          if(res.data.message==="User already exists"){
              eNotify(res.data.message)
          }
          else{
            navigate("/login");
          }
      })
      
    }
  }

  return (
    <div className="back">
      <Toaster />
      <form onSubmit={handleClick} className="loginbg ">
        <h1>Sign Up</h1>
        <input
          type="text"
          onChange={handleChange}
          className="fullName"
          placeholder="Username"
          name="name"
        />
        <div className="hld">
        {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <input
          type="text"
          onChange={handleChange}
          className="email"
          placeholder="Email"
          name="email"
        />
        <div className="hld">
        {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <input
          type="password"
          onChange={handleChange}
          className="password"
          placeholder="Password"
          name="password"
        />
        <div className="hld">
        {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <label for="check">
          <input
            type="checkbox"
            id="check"
            name="agreed"
            onChange={handleChange}
          />{" "}
          I agree to Grab Gourmet's Terms of Service, Privacy Policy and Content
          Policies
        </label>
        <div className="hld">
        {errors.agreed && <p className="error">{errors.agreed}</p>}
        </div>
        <button type="submit">Register</button>
        <br />
        <br />
        <p>
          Already an user,
          <Link className="lnk" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterComponent;
