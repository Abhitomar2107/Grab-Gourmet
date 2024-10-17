import React from "react";
import "./LoginComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/UserContext";

function LoginComponent() {
  let [data, setData] = useState({
    name: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    password: ""
    
  });
 
  let navigate = useNavigate();
  let result = useContext(userContext)
  let userLogin =result.userLogin
  
  
 
  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
   
  }
  function navigation(){
    navigate("/menu")
    
  };

  
  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username (not empty)
    if (data.name.trim().length <1) {
      newErrors.name = "Username must not be empty";
      isValid = false;
    }

   

    // Validate password (not empty)
    if (data.password.length <1) {
      newErrors.password = "Password must not be empty";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

 
   async function handleClick(event) {
    event.preventDefault();
    if(validateForm())
    {await userLogin(data.name,data.password,navigation);}
   
   

  }
  


  return (
    <div className="back">
      
      <form className="loginbg" onSubmit={handleClick}>
        <h1>Sign In</h1>
        <input
          type="text"
          onChange={handleChange}
          className="email"
          placeholder="Username"
          name="name"
        />
        <div className="hld">
        {errors.name && <p className="error">{errors.name}</p>}
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
        <button type="submit">Sign In</button>
        <br />
        <br />
        <p>
          Not an user,
          <Link className="lnk" to="/signup">
            Sign up
          </Link>
          <br />
          Login as,
          <Link className="lnk" to="/adlogin">
            Admin
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginComponent;
