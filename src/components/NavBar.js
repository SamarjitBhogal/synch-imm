import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/navBarStyles.css";

export default function NavBar() {
  window.addEventListener("resize", onResize);
  //TODO: onscroll for navbar resize
  //window.addEventListener("scroll", onScroll)

  const [logo, setLogo] = useState(true);
  const [nav, setNav] = useState(true);
  //const [smallNav, setSmallNav] = useState(false);

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
  //   if (window.scrollY > 0) {
  //     setSmallNav(true);
  //   } else {
  //     setSmallNav(false);
  //   }
  // }

  useEffect(() => {
    onResize();
  }, []);

  return (
    <div className="transparent-w fixed">
      {<nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                ></img>
              </Link>
            )}

            {nav && (
              <div className="collapse navbar-collapse fs-5" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                    <a className="nav-link" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link" href="/about">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link" href="/contact">
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link" href="/services">
                      SERVICES
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {!logo && !nav && (
              <div
                className="collapse navbar-collapse fs-5 justify-content-center align-items-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item p-5">
                    <a className="nav-link" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item p-5">
                    <a className="nav-link" href="/about">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <Link to="/">
                      <img
                        className="synch-logo-size"
                        src={require("../images/company-logo.jpg")}
                        alt="logo"
                      ></img>
                    </Link>
                  </li>
                  <li className="nav-item p-5">
                    <a className="nav-link" href="/contact">
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-itemF p-5">
                    <a className="nav-link" href="/services">
                      SERVICES
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>}

      {/*onscroll for navbar resize:
       {<nav className="navbar navbar-expand-lg bg-body-tertiary h-nav-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler toggler-nav"
              type="button"
              style={{ border: "none", outline: "none" }}
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
                ></img>
              </Link>
            )}

            {nav && (
              <div className="collapse navbar-collapse fs-5" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                    <a className="nav-link" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link" href="/about">
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link" href="/contact">
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link" href="/services">
                      SERVICES
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {!logo && !nav && (
              <div
                className="collapse navbar-collapse fs-5 justify-content-center align-items-center"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item p-5">
                    <a className="nav-link" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item p-5">
                    <a className="nav-link" href="/about">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <Link to="/">
                      <img
                        className="synch-logo-size"
                        src={require("../images/company-logo.jpg")}
                        alt="logo"
                      ></img>
                    </Link>
                  </li>
                  <li className="nav-item p-5">
                    <a className="nav-link" href="/contact">
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-itemF p-5">
                    <a className="nav-link" href="/services">
                      SERVICES
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>} */}
    </div>
  );
}
