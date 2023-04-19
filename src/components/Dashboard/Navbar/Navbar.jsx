import React, { useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

const Navbar = (userDetails) => {
  const [currClass, setcurrClass] = useState("button-logout-outer displayset")
  const user = userDetails.user.user;
  const logout = () => {
    window.open("https://google-auth-board-listed.up.railway.app/auth/logout", "_self");
    // window.open("http://localhost:8080/auth/logout", "_self");
  };

  const showLogoutbutton = ()=>{
    setcurrClass(currClass == "button-logout-outer" ? "button-logout-outer displayset" : "button-logout-outer")
  }

  return (
    <nav className="nav-top-bar">
      <h3>Dashboard</h3>

      <div className="search-image">
        <div className="input-search-button">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="search-bar"
          />
          <button className="search-button">
            <CiSearch />
          </button>
        </div>
        <FaRegBell className="bell-notification" />
        <div className="image-logout-button">
          <img src={user.picture} alt="Profile" className="user-image" onClick={showLogoutbutton}/>
          <div className={currClass}>
            <p className="user-name">{user.name}</p>
            <button onClick={logout} className="logout-button">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
