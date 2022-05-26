import React from "react";
import Navbar from "../Navigation/Navbar";
import video from "../../../assets/Hero/IMEDIA-2.mp4";
import bannerLeft from "./../../../assets/Hero/banner_t1.png";
import bannerRight from "./../../../assets/Hero/banner_t2.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <div className="video-cover">
        <video
          style={{ width: "100%" }}
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
        ></video>
      </div>
      <div className="hero-tagline">
        <div className="banner-left">
          <img src={bannerLeft} alt="banner" />
        </div>
        <div>
          <h3>To Have An Everlasting</h3>
          <h3> Relationship With Clients</h3>
          <div className="hero-text-area">
            <p>
              We provide the complete range of{" "}
              <a className="here-anchor" href="#">
                graphic design, web design, advertising,
              </a>
            </p>
            <p>
              <a className="here-anchor" href="#">
                media planning
              </a>{" "}
              and buying as well as{" "}
              <a className="here-anchor" href="#">
                public relations services
              </a>{" "}
              to our clients.
            </p>
          </div>
        </div>

        <div className="banner-right">
          <img src={bannerRight} alt="banner" />
        </div>
      </div>
      <div className="banners">
        <div className="banner-left">
          <img src={bannerLeft} alt="banner" />
        </div>
        <div className="banner-right">
          <img src={bannerRight} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Header;
