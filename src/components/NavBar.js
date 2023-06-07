import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/navBarStyles.css";

export default function NavBar() {
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll);

  const [logo, setLogo] = useState(false);
  const [nav, setNav] = useState(false);

  function onResize() {
    if (window.innerWidth <= 992) {
      setLogo(true);
      setNav(true);
    } else {
      setLogo(false);
      setNav(false);
    }
  }

  // Uncaught type error being thrown
  function onScroll() {
    if (window.scrollY === 0) {
      if (!logo && !nav) {
        document.getElementById("logo").style.maxWidth = "150px";
      } 
      if (logo && nav) {
        document.getElementById("logo-sm").style.maxWidth = "100px";
      }
    } else {
      if (!logo && !nav) {
        document.getElementById("logo").style.maxWidth = "80px";
      } 
      if (logo && nav) {
        document.getElementById("logo-sm").style.maxWidth = "80px";
      }
    }
  }

  useEffect(() => {
    onResize();
  }, []);

  return (
    <div className="synch-nav sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="btn navbar-toggler toggler-nav"
              style={{ outline: "none" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {logo && (
              <Link to="/">
                <img
                  className="synch-logo-size-sm"
                  src={require("../images/company-logo.jpg")}
                  alt="logo"
                  id="logo-sm"
                ></img>
              </Link>
            )}

            {nav && (
              <div className="collapse navbar-collapse fs-5" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link">
                      <p>HOME</p>
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link">
                      <p>ABOUT US</p>
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/contact" className="nav-link">
                      <p>CONTACT US</p>
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/services" className="nav-link">
                      <p>SERVICES</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            {!logo && !nav && (
              <div
                className="d-flex collapse navbar-collapse fs-5 justify-content-between"
                id="navbarNav"
              >
                <ul className="navbar-nav box">
                  <li>
                    <Link to="/">
                      <img
                        className="synch-logo-size"
                        src={require("../images/company-logo.jpg")}
                        alt="logo"
                        id="logo"
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav box">
                  <li className="nav-item m-2">
                    <NavLink to="/" className="nav-link">
                      <p>HOME</p>
                    </NavLink>
                  </li>
                  <li className="nav-item m-2">
                    <NavLink to="/about" className="nav-link">
                      <p>ABOUT US</p>
                    </NavLink>
                  </li>
                  <li className="nav-item m-2">
                    <NavLink to="/contact" className="nav-link">
                      <p>CONTACT US</p>
                    </NavLink>
                  </li>
                  <li className="nav-item m-2">
                    <NavLink to="/services" className="nav-link">
                      <p>SERVICES</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
    </div>
  );
}