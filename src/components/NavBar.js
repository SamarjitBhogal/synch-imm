import React from "react";
import { Link } from "react-router-dom";

import "../styles/navBarStyles.css"

export default function NavBar() {
  return (
    <div className="transparent d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse fs-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
            </ul>
          </div>
          
            <Link to="/">
              <img src={require("../images/company-logo.jpg")} 
              style={{ width: "150px" }} 
              alt="logo">
              </img>
            </Link>

          <div className="collapse navbar-collapse fs-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">SERVICES</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
