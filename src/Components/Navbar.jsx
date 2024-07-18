import React, { useState } from "react";
import logo from "../images/logo.jpg";
import "../styles/component-styles/navbar.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [theHeight, setTheHeight] = useState(0);
  const [theDisplay, setTheDisplay] = useState("none");

  const click = () => {
    if (isClicked === false) {
      setIsClicked(true);
      setTheHeight(270);
      setTheDisplay("flex");
      console.log("Buton açıldı");
    } else {
      setIsClicked(false);
      setTheHeight(0);
      setTheDisplay("none");
      console.log("Buton Kapandı");
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="brand">
          <img src={logo} alt="" id="logo-img" />
        </div>

        <div className="links">
          <ul className="link-list">
            <li>
              <div>
                <a href="/">HOME</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#aboutus">ABOUT US</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#shop">SHOP</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#contact">CONTACT</a>
              </div>
            </li>
          </ul>
        </div>

        <button onClick={() => click()} id="slider-buton">
          <i class="fa-solid fa-bars"></i>
        </button>

        <div className="spacebox"></div>
      </div>
      <div className="slidermenu" style={{ height: `${theHeight}px` }}>
        <ul className="sliderlist" style={{ display: `${theDisplay}`,  }}>
          <hr />
          <li>
            <div>
              <a href="/">HOME</a>
            </div>
          </li>
          <hr />
          <li>
            <div>
              <a href="#aboutus">ABOUT US</a>
            </div>
          </li>
          <hr />
          <li>
            <div>
              <a href="#shop">SHOP</a>
            </div>
          </li>
          <hr />
          <li>
            <div>
              <a href="#contact">CONTACT</a>
            </div>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;