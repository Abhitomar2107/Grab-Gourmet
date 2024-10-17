import React from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function AdminLogin() {
  let [data, setData] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
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

    // Validate username (not empty)
    if (data.name.trim().length < 1) {
      newErrors.name = "Username must not be empty";
      isValid = false;
    }

    // Validate password (not empty)
    if (data.password.length < 1) {
      newErrors.password = "Password must not be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  async function handleClick(event) {
    event.preventDefault();
    if (validateForm()) {
      await axios
        .post("http://localhost:4000/admin-api/admin", { ...data })
        .then((response) => {
          if (response.data.message === "login success") {
            //storing token in local storage
            localStorage.setItem("token", response.data.token);
            navigate("/admenu");
          }
          else{
            eNotify("Invalid Username/Password")
          }
        });
    }
  }

  return (
    <div className="back">
      <Toaster />
      <form className="loginbg" onSubmit={handleClick}>
        <h1>Admin</h1>
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
          Login as,
          <Link className="lnk" to="/login">
            User
          </Link>
        </p>
      </form>
    </div>
  );
}

export default AdminLogin;
