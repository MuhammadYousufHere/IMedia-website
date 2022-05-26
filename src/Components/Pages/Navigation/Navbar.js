import React from "react";
import logo from "./../../../assets/Nav/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* logo */}
        <div className="logo-side">
          <div className="logo-img-side">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Names & Slogan */}
          <div className="media-side">
            <div className="media-side-link">
              <a href="#">Interactive Media </a>
            </div>
            <div className="media-side-link2">
              <a href="#">
                DIGITAL MEDIA ON DEMAND <span>Globally</span>
              </a>
            </div>
          </div>
        </div>
        <nav>
          <div className="menu-btn">
            <div className="bar-lines">
              <div className="bar-line-short"></div>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">E Products</a>
            </li>
            <li>
              <a href="#">E Services</a>
            </li>
            <li>
              <a href="#">E Business</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            {/* <div className="toggle-button">
              <div className="burger-strips"></div>
            </div> */}

            {/* <div className="burger-menu"></div> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
