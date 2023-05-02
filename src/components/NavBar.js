import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/navBarStyles.css";

export default function NavBar() {
  window.addEventListener("resize", onResize);
  //TODO: onscroll for navbar resize
  //window.addEventListener("scroll", onScroll)

  const [logo, setLogo] = useState(true);
  const [nav, setNav] = useState(true);

  function onResize() {
    if (window.innerWidth <= 992) {
      setLogo(true);
      setNav(true);
    } else {
      setLogo(false);
      setNav(false);
    }
  }

  //onscroll for navbar resize
  // function onScroll() {
  //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //     document.getElementById("logo").style.width = "100px";
  //   } else {
  //     document.getElementById("logo").style.width = "150px";
  //   }
  // }

  useEffect(() => {
    onResize();
  }, []);

  return (
    <div className="synch-nav fixed">
      {
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler toggler-nav"
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
                  className="synch-logo-size"
                  src={require("../images/company-logo.jpg")}
                  alt="logo"
                  id="logo"
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
                    <NavLink to="/service" className="nav-link">
                      <p>SERVICES</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            {!logo && !nav && (
              <div
                className="collapse navbar-collapse fs-5 justify-content-between"
                id="navbarNav"
              >
                <ul className="navbar-nav">
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
                </ul>
                <ul className="navbar-nav">
                  <li>
                    <Link to="/">
                      <img
                        className="synch-logo-size"
                        src={require("../images/company-logo.jpg")}
                        alt="logo"
                      ></img>
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item m-2">
                    <NavLink to="/contact" className="nav-link">
                      <p>CONTACT US</p>
                    </NavLink>
                  </li>
                  <li className="nav-item m-2">
                    <NavLink to="/service" className="nav-link">
                      <p>SERVICES</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      }
    </div>
  );
}
