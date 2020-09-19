import React from "react";
import Front from "./Images/front.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__header">
        <img src={Front} alt="" className="banner__image" />
      </div>
      <div className="banner__info">
        <h3>Wellness, delivered</h3>
        <p>
          We brings spa-quality massage therapists directly to your home,
          apartment, or even office space. Self-care has never been this safe or
          easy.
        </p>
        <button>Our Services</button>
      </div>
    </div>
  );
}

export default Banner;
