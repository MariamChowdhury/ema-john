import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/inventory">Inventory</a>
        <a href="/manage">Manage Directory</a>
      </nav>
    </div>
  );
};

export default Header;
