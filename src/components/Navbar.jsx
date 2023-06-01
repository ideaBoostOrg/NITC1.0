import React from "react";
import logo from "../assets/img/logo-crop.png";

/*icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar top-nav-collapse">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          <script data-pagespeed-no-defer="">(function(){/* ... */})();</script>
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className="navbar-collapse collapse show"
          id="navbarCollapse"
          
        >
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="#header-wrap">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#schedules">
                Schedules
              </a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link" href="#team">
                Speakers
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sponsors">
                Sponsors
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#google-map-area">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
