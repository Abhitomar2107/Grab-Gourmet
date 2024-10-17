import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notF bg-dark">
      <div>
        <h1 style={{color:"white"}}>Page Not Found</h1>
        <h2 style={{color:"white"}}>Error 404</h2>
      <Link to="/"  >
        <button className="btnf">Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
