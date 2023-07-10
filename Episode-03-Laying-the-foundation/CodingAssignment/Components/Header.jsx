import React from "react";
import logo from "../Assets/logo.png";
import icon from "../Assets/user-icon.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input
            type="text"
            name="Search"
            id="Search"
            placeholder="Search Here........."
          />
        </div>
        <div className="icon">
          <img src={icon} alt="user icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
