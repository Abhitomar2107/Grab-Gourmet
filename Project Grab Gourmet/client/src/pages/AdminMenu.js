import React from "react";
import "./AdminMenu.css";
import {Link} from "react-router-dom"
function AdminMenu() {

  
  let handleClick=()=>{
    localStorage.clear();
   
};

  return (
    <div className="bckg">
      <div className="redish">
        <div className="udish">
          <h2>Add/Delete Fooditems In Menu</h2>
          <Link to="/addish"><button className="ptod">Proceed</button></Link>
        </div>
        <div className="ures">
          <h2>Add/Delete Restaurants In List</h2>
          <Link to="/adres"><button className="ptor">Proceed</button></Link>
        </div>
      </div>
      <Link to="/adlogin"><button className="adlgo" onClick={handleClick}>Logout</button></Link>
    </div>
  );
}

export default AdminMenu;
