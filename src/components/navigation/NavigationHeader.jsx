import React from "react";
import myPhoto from "../../images/myPhoto.png";
import { Link } from "react-scroll";
import "./navigationHeader.style.css";

const NavigationHeader = () => {
  return (
    <div id="nav_bar">
      <header>
        <nav className="header__nav-bar">
          <div className="header__logo-img-cont">
            <img
              className="header__logo-img"
              src={myPhoto}
              alt="portfolio_picture"
            ></img>
          </div>

          <div className="header__link-container">
            <ul className="header__links">
              <li>
                <Link to="contact_me">
                  <a href="/">Contact me</a>
                </Link>
              </li>
              <li>
                <a href="/">Download Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavigationHeader;
