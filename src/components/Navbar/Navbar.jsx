import React from "react";
import logo from "../../images/weather.png";
import "./Navbar.css";
import {
    CiVault,
  CiGps,
  CiGlobe,
  CiCalendar
} from "react-icons/ci";
const Navbar = () => {
  const nav = [
    { name: "Dashboard", icon: <CiVault /> },
    { name: "Map", icon: <CiGlobe /> },
    { name: "Saved Location", icon: <CiGps /> },
    { name: "Calendar", icon: <CiCalendar /> },
  ];
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="weather-logo" />
        <p className="p-text">HP Nation</p>
      </div>
      <div className="list-items">
        
          {nav.map((item) => (
            <ul className="nav-items">
              <li className="image">{item.icon}</li>
              <li key={item.valueOf()} className="p-text">{item.name}</li>
            </ul>
          ))}
    
      </div>
    </div>
  );
};

export default Navbar;
