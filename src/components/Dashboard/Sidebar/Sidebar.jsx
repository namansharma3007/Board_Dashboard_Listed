import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [activeState, setActiveState] = useState(true);

  const changeMenuState = () => {
    setActiveState(!activeState);
  };

  return (
    // <div className={`sidebar-container ${activeState ? "active" : ""}`}>
    <div className="sidebar-container2">
      <div className="heading-button">
        <h2 className="heading">Board.</h2>
        <button className="toogle-menu2" onClick={changeMenuState}>
          <FiMenu className="toogle-icon2" />
        </button>
      </div>

      {/* <div className="icons-nav"> */}
      <div className={`icons-nav2 ${activeState ? "activestate" : ""}`}>
        <Link to={"/dashboard"} className="links-nav-bar">
          <AiOutlinePieChart className="nav-icon" /> Dashboard
        </Link>
        <Link to={"/dashboard"} className="links-nav-bar">
          <BsTags className="nav-icon" /> Transations
        </Link>
        <Link to={"/dashboard"} className="links-nav-bar">
          <TbCalendarTime className="nav-icon" /> Schedules
        </Link>
        <Link to={"/dashboard"} className="links-nav-bar">
          <BiUserCircle className="nav-icon" />
          Users
        </Link>
        <Link to={"/dashboard"} className="links-nav-bar">
          <FiSettings className="nav-icon" />
          Settings
        </Link>
      </div>

      <footer className="footer-links">
        <a href="#">Help</a>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
};

export default Sidebar;
