import React from "react";
import "./Header.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from "./Images/mahinlo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" className="header__logo" />

      <div className="header__option">
        <span>Home</span>
        <span className="header__optionLineOne">Hello Guest</span>
        <ShoppingCartIcon />
        <span>0</span>
      </div>
    </div>
  );
}

export default Header;
