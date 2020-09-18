import React from "react";
import "./Header.css";
import Logo from "./Images/mahinlo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" className="header__logo" />
      <div className="header__search"></div>
    </div>
  );
}

export default Header;
